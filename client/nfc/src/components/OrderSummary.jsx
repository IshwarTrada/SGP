import React from "react";
import img1 from "../../assets/img1.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function OrderSummaryItem({ title, image, quantity, price }) {
  return (
    <div className="flex items-center border-b border-gray-200 py-4">
      <div className="w-16 h-16 rounded-md overflow-hidden mr-4">
        <img src={img1} alt={title} className="w-16 h-16 object-cover" />
      </div>
      <div>
        <h3 className="text-sm ">{title}</h3>
        <p className="text-gray-600 text-sm ">{`${quantity} x Rs. ${price}`}</p>
        <p></p>
      </div>
    </div>
  );
}

function OrderSummary({handleSubmit}) {
  const navigate = useNavigate();

  const items = [
    {
      title: "LGBBQ+ Nfc card",
      image:
        "C:/Users/sahil/OneDrive/Desktop/project/SGP/client/nfc/assets/img1.png", // Replace with your image URL
      quantity: 1,
      price: 70,
    },
    {
      title: "Neyon Chapri Nfc card",
      image:
        "C:/Users/sahil/OneDrive/Desktop/project/SGP/client/nfc/assets/img1.png", // Replace with your image URL
      quantity: 3,
      price: 250,
    },
  ];

  const handleOrderSubmit = async () => {
    try {
      await handleSubmit();

       // Trigger the API submission
    } catch (error) {
      console.error("Order submission failed", error);
      alert("Failed to submit order.");
    }
  };

  return (
    <>
      <div className="border rounded-md w-1/3 p-4 h-fit mt-16">
        <h2 className="text-lg font-medium mb-4">Order Summary</h2>
        {items.map((item, index) => (
          <OrderSummaryItem key={index} {...item} />
        ))}
        <div className="mt-6">
        <div className="flex justify-between mb-2 text-sm">
          <span className="text-sm text-[#5F6C72]">Sub-total</span>
          <span>Rs.320</span>
        </div>
        <div className="flex justify-between mb-2 text-sm">
            <span className="text-sm text-[#5F6C72]">Shipping</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between mb-2 text-sm">
            <span className="text-sm text-[#5F6C72]">Discount</span>
            <span>Rs.24</span>
          </div>
          <div className="flex justify-between mb-2 text-sm">
            <span className="text-sm text-[#5F6C72]">Tax</span>
            <span>Rs.67</span>
          </div>
          <hr />
          <div className="flex justify-between mt-5  text-base">
            <span>Total</span>
            <span className="font-semibold">Rs.167</span>
          </div>
          <Link >
          <button type="button" onClick={handleOrderSubmit} className="w-full mt-4 py-3 bg-[#080808] text-white rounded-md font-bold">
          PLACE ORDER 
        </button>
        </Link>
        </div>
      </div>
    </>
  );
}

export default OrderSummary;
