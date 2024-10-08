import React from "react";
import { Link } from "react-router-dom";

function PriceTotal({data}) {
  console.log("ARGS", data)
  const subtotal = 320;
  const shipping = "Free";
  const discount = 24;
  const tax = 61.99;
  // const total = data.totalCost - discount + tax;
  return (
    <>
    <div className="p-4  border border-gray-300 rounded-lg bg-white">
    <h2 className="text-lg font-medium mb-4">Cart Totals</h2>
      <div className=" bg-white">
        <div className="flex justify-between mb-2 text-sm">
          <span className="text-sm text-[#5F6C72]">Sub-total</span>
          <span>Rs.{data.totalCost}</span>
        </div>
        <div className="flex justify-between mb-2 text-sm">
          <span className="text-sm text-[#5F6C72]">Shipping</span>
          <span>{shipping}</span>
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
          <span className="font-semibold">Rs.{(data.totalCost - discount + tax).toFixed(2)}</span>
        </div>
      </div>
      <Link to={"/checkoutPage"}>
      <button className="w-full mt-4 py-3 bg-[#080808] text-white rounded-md font-bold">
        PROCEED TO CHECKOUT 
      </button>
      </Link>
    </div>
  </>
  );
}

export default PriceTotal;
