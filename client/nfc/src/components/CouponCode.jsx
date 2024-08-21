import React from "react";

const CouponCode = () => {
  return (
    <div className="border border-gray-300 rounded-lg mt-8 p-4 ">
      <h2 className="text-lg font-medium mb-4">Coupon Code</h2>
      <input
        type="text"
        placeholder="Enter Coupon Code"
        className="w-full border text-sm border-gray-300 rounded-md p-2 mb-4"
      />
      <button className="w-full py-2 bg-black text-white rounded-md font-bold">
        APPLY COUPON
      </button>
    </div>
  );
};

export default CouponCode;
