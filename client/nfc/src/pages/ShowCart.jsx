import React, { useEffect, useState } from "react";
import CartTotal from "../components/CartTotal";
import ShoppingCart from "../components/ShoppingCart";
import Navi from "../components/Navbar";
import Staticfooter from "../components/Staticfooter";


const ShowCart=()=> {
  const [cartItems, setCartItems] = useState([]);
  const [quantityChanged, setQuantityChanged] = useState(false);

  
  // Fetch the cart items
  const fetchCarts = async () => {
    const API = "http://localhost:3000/api/v1/cart/getCart";
    try {
      const response = await fetch(API, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Include cookies if necessary
      });

      if (response.ok) {
        const data = await response.json();
        setCartItems(data.data);  // Update the cart items in state
      } else {
        console.error("Failed to fetch cart items:", response.statusText);
      }
    } catch (e) {
      console.error("Error fetching cart items:", e);
    }
  };


  useEffect(() => {
    if (quantityChanged) {
      fetchCarts();
      setQuantityChanged(false); // Reset the flag
    }  // Fetch the cart items when the component mounts
  }, [ ]);


  return (
    <>
      <Navi />

      <div className="pt-24 p-14  flex gap-1">
        <ShoppingCart cartItems={cartItems} setCartItems={setCartItems} fetchCarts={fetchCarts} setQuantityChanged={setQuantityChanged} />
        <CartTotal cartItems={cartItems} />
      </div>
      <Staticfooter />
    </>
  );
}

export default ShowCart;
