import React from "react";
import CheckoutAddress from "../components/CheckoutAddress";
import OrderSummary from "../components/OrderSummary";

function Checkout() {
  return (
    <>
      <div className="container mx-auto mt-8 mb-2">
        <div className="flex gap-3">
          <CheckoutAddress />
          <OrderSummary />
        </div>
      </div>
    </>
  );
}

export default Checkout;
