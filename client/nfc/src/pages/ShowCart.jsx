import React, { useEffect } from "react";
import CartTotal from "../components/CartTotal";
import ShoppingCart from "../components/ShoppingCart";
import Navi from "../components/Navbar";
import Staticfooter from "../components/Staticfooter"

const API = "http://localhost:3000/api/v1/cart/getCart"

function ShowCart() {
  const fetchCarts = async(url)=>{
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(()=>{
    fetchCarts(API);
  },[])

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
