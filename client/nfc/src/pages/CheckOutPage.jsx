import React, { useState } from "react";
// import CheckoutInformation from "../components/CheckoutInformation";
import OrderSummary from "../components/OrderSummary";
import BillingInformation from "../components/BillingInformation";
import AdditionalInformation from "../components/AdditionalInformation";
import { Await, useNavigate } from "react-router-dom";
import axios from "axios";

function CheckOutPage() {
  const [responseId, setResponseId] = useState("");
  const [responseState, setResponseState] =useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    address: "",
    zipCode: "",
    city: "",
    state: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({});

  // Function to update form data
  const updateFormData = (name, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Function to validate the form
  const validateForm = () => {
    let validationErrors = {};
    if (!formData.firstName)
      validationErrors.firstName = "First name is required";
    if (!formData.lastName) validationErrors.lastName = "Last name is required";
    if (!formData.address) validationErrors.address = "Address is required";
    if (!formData.zipCode) validationErrors.zipCode = "Zip Code is required";
    if (!formData.city) validationErrors.city = "City is required";
    if (!formData.state) validationErrors.state = "State is required";
    if (!formData.phoneNumber)
      validationErrors.phoneNumber = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      validationErrors.phoneNumber = "Phone number must be 10 digits";
    }

    return validationErrors;
  };

  // Function to dynamically load the Razorpay script
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const createRazorpayOrder = async (amount) => {
    try {
      const response = await axios.post("http://localhost:3000/api/v1/razorpay/createOrder", {
        amount: amount * 100, // Amount in paise
        currency: "INR",
      },{
        headers:{
          "Content-Type":"application/json",
          
        },
        withCredentials: true,
      }
    
    );
      console.log(response);
      

      const { order_id, config } = response.data;
      handleRazorpayScreen(order_id, config, amount);
    } catch (error) {
      console.error("Error at frontend:", error);
    }
  };

  // Function to handle the Razorpay checkout screen
  const handleRazorpayScreen = async (order_id, config, amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_1clRgPGaZIKJPN",
      amount: amount, // Amount in paise
      currency: "INR",
      name: "Card Wave",
      description: "Card Wave Payment Gateway...",
      order_id: order_id,
      handler: function (response) {
        setResponseId(response.razorpay_payment_id);
      },
      prefill: {
        name: "Ishwar Trada",
        email: "ishwar@gmail.com",
      },
      config: config,
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open(); // Opens the Razorpay payment window as a pop-up
  };

  const paymentFetch = (e) => {
    e.preventDefault();
    const paymentId = e.target.paymentId.value;

    axios
      .get(`http://localhost:3000/api/v1/razorpay/fetchPaymentDetails/${paymentId}`)
      .then((response) => {
        console.log(response.data);
        setResponseState(response.data);
      })
      .catch((error) => {
        console.error("Error at frontend occurs:", error);
      });
  };

  // Function to handle form submission
  const handleSubmit = async () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
      //   const orderAPI = "http://localhost:3000/api/v1/razorpay/createOrder";

      //   const response = await fetch(orderAPI, {
      //     method: "POST",
      //     headers: {
      //       "content-Type": "application/json",
      //     },
      //     credentials: "include",
      //     body: JSON.stringify({
      //       fname: formData.firstName,
      //       lname: formData.lastName,
      //       companyName: formData.companyName,
      //       shippingAddress: formData.address,
      //       zip: formData.zipCode,
      //       city: formData.city,
      //       state: formData.state,
      //       phone: formData.phoneNumber,
      //       extraNotes: "this is best product",
      //       amount: 5000,
      //     }),
      //   });

      //   if (!response.ok) {
      //     throw new Error("Network response was not ok");
      //   }

      //   const result = await response.json();
      //   console.log("ORDER CREATED SUCCESFULLY", result);


      createRazorpayOrder(500);
      paymentFetch(responseId);
      console.log("TEST");
      
      //   // window.location.href = "/placeorder";
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="flex gap-3 px-14 py-9">
        {/* <CheckoutInformation  /> */}
        <div className="w-2/3 pt-20">
          <BillingInformation
            formData={formData}
            updateFormData={updateFormData}
            errors={errors}
          />
          <AdditionalInformation />
        </div>
        <OrderSummary handleSubmit={handleSubmit} />
      </div>

    </>
  );
}

export default CheckOutPage;
