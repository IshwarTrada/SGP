import React from "react";
import axios from "axios";

function PaymentComponent() {
  const [responseId, setResponseId] = React.useState("");
  const [responseState, setResponseState] = React.useState([]);

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

  // Function to create an order and handle the Razorpay checkout
  const createRazorpayOrder = async (amount) => {
    try {
      console.log("AMOUNT", amount)
      const response = await axios.post("http://localhost:3000/api/v1/razorpay/createOrder", {
        amount: amount * 100, // Amount in paise
        currency: "INR",
      });
      console.log(response);
      

      const { order_id, config } = response.data.data;
      handleRazorpayScreen(order_id, config, response.data.data.amount);
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

  // Function to fetch payment details
  const paymentFetch = (e) => {
    e.preventDefault();
    const paymentId = e.target.paymentId.value;

    axios
      .get(`http://localhost:3000/api/v1/razorpay/fetchPaymentDetails/${paymentId}`)
      .then((response) => {
        console.log(response);
        setResponseState(response.data);
      })
      .catch((error) => {
        console.error("Error at frontend occurs:", error);
      });
  };

  return (
    <div className="App">
      <button className="bg-slate-400" onClick={() => createRazorpayOrder(2100)}>Payment of 350</button>
      {responseId && <p>{responseId}</p>}
      <h1>This is payment verification form</h1>
      <form onSubmit={paymentFetch}>
        <input type="text" name="paymentId" />
        <button type="submit">Fetch Payment Details</button>
        {responseState.length !== 0 && (
          <div>
            <ul>
              <li>Payment Method: {responseState.method}</li>
              <li>Payment Status: {responseState.status}</li>
              <li>Paid amount: {responseState.amount / 100} Rs.</li>
              <li>Payment Currency: {responseState.currency}</li>
            </ul>
          </div>
        )}
      </form>
    </div>
  );
}

export default PaymentComponent;