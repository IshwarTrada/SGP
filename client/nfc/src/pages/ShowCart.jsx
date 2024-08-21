import React from "react";
import CartTotal from "../components/CartTotal";
import ShoppingCart from "../components/ShoppingCart";
import Navi from "../components/Navbar";
import Staticfooter from "../components/Staticfooter"
function ShowCart() {
  return (
    <>
      <Navi/>

      <div className="pt-24 p-14  flex gap-1">

        <ShoppingCart/>
        <CartTotal/>
      </div>
      <Staticfooter/>
    </>
  );
}

export default ShowCart;
