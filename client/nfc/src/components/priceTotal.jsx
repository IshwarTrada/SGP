import React from "react";

function PriceTotal() {
  const subtotal = 320;
  const shipping = "Free";
  const discount = 24;
  const tax = 61.99;
  const total = subtotal - discount + tax;
  return (
    <>
    <div className="p-4  border border-gray-300 rounded-lg bg-white">
    <h2 className="text-lg font-medium mb-4">Cart Totals</h2>
      <div className=" bg-white">
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
          <span>Rs.{tax.toFixed(2)}</span>
        </div>
        <hr />
        <div className="flex justify-between mt-4  text-base">
          <span>Total</span>
          <span className="font-semibold">Rs.{total.toFixed(2)}</span>
        </div>
      </div>
      <button className="w-full mt-4 py-3 bg-[#080808] text-white rounded-md font-bold">
        PROCEED TO CHECKOUT 
      </button>
    </div>
  </>
  );
}

export default PriceTotal;
