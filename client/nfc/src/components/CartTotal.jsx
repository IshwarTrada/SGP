import React, { useState, useEffect } from "react";
import PriceTotal from "./priceTotal";
import CouponCode from "./CouponCode";
function CartTotal({cartItems}) {

  return (
    <>
      <div className="px-1 w-1/4">
        <PriceTotal data = {cartItems} />
        <CouponCode />
      </div>
    </>
  );
}

export default CartTotal;
