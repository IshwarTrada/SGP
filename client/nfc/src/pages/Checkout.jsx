import React,{useState, useEffect} from "react";
import CheckoutAddress from "../components/CheckoutAddress";
import OrderSummary from "../components/OrderSummary";
import axios from "axios";

function Checkout() {
  const [billingData, setBillingData] = useState(null);
  const [productdata, setProductdata] = useState("");

  const productDetail = async () => {
    const API = "http://localhost:3000/api/v1/cart/getCart";

    const response = await axios.get(API, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    if (response.status == 200) {
      const data = response.data;
      setProductdata(data?.data);
      console.log("DATA>>>", data.data);
    } else {
      console.log("CART API NOT WORK");
    }
  };

  useEffect(() => {
    // Retrieve form data from local storage
      const savedData = localStorage.getItem('billingData');
      if (savedData) {
        setBillingData(JSON.parse(savedData));
        productDetail();
        
      }
      
  }, []);

  return (

    
    <>
      <div className="container mx-auto mt-8 mb-2">
        <div className="flex gap-3">
          <CheckoutAddress billingData={billingData}/>
          <OrderSummary productdata={productdata}/>
        </div>
      </div>
    </>
  );
}

export default Checkout;
