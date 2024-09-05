import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

// const API = "http://localhost:3000/api/v1/cart/getCart";
const changeQuantityAPI = "http://localhost:3000/api/v1/cart/addCart";
const ShoppingCart = ({
  cartItems,
  setCartItems,
  fetchCarts,
  setQuantityChanged,
}) => {
  const updateQuantity = async (id, newQuantity) => {
    try {
      console.log("ID", id);
      console.log(`UPDATE apI:-- ${changeQuantityAPI}/${id}`);
      const response = await fetch(`${changeQuantityAPI}/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          quantity: newQuantity,
        }),
      });

      if (response.ok) {
        console.log("Cart item updated successfully");
        fetchCarts();
      } else {
        console.error("Failed to update cart item:", response.statusText);
      }
    } catch (e) {
      console.error("Error Updating cart items:", e);
    }
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;

    const updatedCartItems = { ...cartItems };

    updatedCartItems.items = updatedCartItems.items.map((item) => {
      item.productId._id === id ? { ...item, quantity: newQuantity } : item;
    });

    setCartItems(updatedCartItems);
    // updateQuantity(id, newQuantity);
  };

  const incrementQuantity = (id) => {
    console.log("id", id);
    
    const updatedItem = cartItems.items?.find(
      (item) => item.productId._id === id
    );
    console.log("UPDATE_ITEM", updatedItem);
    if (updatedItem) {
      const newQuantity = updatedItem.quantity + 1;
      const updatedCartItems = { ...cartItems };
      
      // Update the items array immutably
      updatedCartItems.items = updatedCartItems.items.map((item) =>
        item.productId._id === id
      ? { ...item, quantity: item.quantity + 1 }
      : item
    );
    
    setCartItems(updatedCartItems);
    // updateQuantity(id, newQuantity);
    }
  };

  const decrementQuantity = (id) => {
    console.log("id", id);

    const updatedItem = cartItems.items?.find(
      (item) => item.productId._id === id
    );
    console.log("UPDATE_ITEM", updatedItem);
    if (updatedItem) {
      const newQuantity = updatedItem.quantity - 1;
      console.log("NEW QUANTITY", newQuantity);

      const updatedCartItems = { ...cartItems };
      updatedCartItems.items = cartItems.items?.map((item) =>
        item.productId._id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      );

      setCartItems(updatedCartItems);

      // updateQuantity(id, newQuantity);
    }
  };

 
  useEffect(() => {
    fetchCarts();
  }, []);
  return (
    <>
      <div className="border border-gray-300 rounded-lg bg-white w-3/4">
        <div>
          <h2 className="p-4 text-lg font-medium ">Shoppinhg Cart</h2>
        </div>
        <div className="border border-[#E4E7E9] h-9 grid grid-cols-[40%_11.25%_16%_auto] items-center bg-[#F2F4F5] text-xs text-[#475156]">
          <span className="ml-[6%]">PRODUCT</span>
          <span className="ml-[-1%]">PRICE</span>
          <span className="ml-[15%]">QUANTITY</span>
          <span className="ml-[15%]">SUB-TOTAL</span>
        </div>
        <hr />

        <div>
          {cartItems?.items?.map((item) => (
            <div className="py-4" key={item.productId?._id}>
              <div className="grid grid-cols-[38%_9.25%_14.25%_17.87%_auto] gap-4 items-center">
                <div className="flex gap-1 pl-3 items-center">
                  <span className="mr-1">1</span>
                  <img
                    src={item.productId?.photos}
                    alt="Product"
                    className="w-[72px] h-[72px] rounded-lg mr-4"
                  />
                  <span>{item.productId?.productName}</span>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-sm text-[#080808] font-bold">
                    Rs. {item.productId?.discountPrice}{" "}
                  </span>
                  <span className="line-through text-[#807E7D] text-sm">
                    Rs. {item.productId?.shownPrice}
                  </span>
                </div>
                <div className="flex justify-around items-center border rounded py-2">
                  <button
                    className="px-2"
                    onClick={() => decrementQuantity(item?.productId?._id) }
                  >
                    −
                  </button>
                  <input
                    type="text"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(
                        item.productId._id,
                        parseInt(e.target.value)
                      )
                    }
                    className="w-12 text-center mx-2"
                  />
                  <button
                    className="px-2"
                    onClick={() => incrementQuantity(item.productId?._id)}
                  >
                    +
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  <span className="py-4 font-medium text-[#191C1F] text-sm">
                    Rs. {item.productId.discountPrice * item.quantity}
                  </span>
                </div>
                <div className="flex gap-4 items-center">
                  <button className="border border-[#807E7D] rounded text-[#807E7D] px-4 py-2 text-sm font-semibold"
                  onClick={()=>{
                    updateQuantity(item.productId._id, item.quantity)
                  }} >
                    UPDATE
                  </button>
                  <button className="text-gray-400">✖</button>
                </div>
              </div>
            </div>
          ))}
          <hr className="mx-5" />

          <hr />
          <div className="my-6 align-middle ">
            <button className="flex mx-auto px-4 py-2 border-[2px] border-[#807E7D] rounded-md text-sm font-bold text-[#807E7D]">
              <span className="mr-2">←</span> RETURN TO SHOP
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
