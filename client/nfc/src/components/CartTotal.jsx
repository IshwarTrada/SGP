import React from "react";
import PriceTotal from "./priceTotal";
import CouponCode from "./CouponCode";
function CartTotal() {
  return (
    <>
      <div
        className="px-1 w-1/4"
      >
        <PriceTotal />
        <CouponCode />
      </div>
    </>
  );
}

export default CartTotal;
