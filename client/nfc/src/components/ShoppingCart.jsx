import React from "react";
import { useState, useEffect } from "react";
import axios from "axios"

const API = "http://localhost:3000/api/v1/cart/getCart";

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);



const fetchCarts = async()=>{
  try {
    console.log("START")
    const response = await axios.get(API);
    console.log("END")

    console.log(response)
    const data = await response.json();
    console.log(data);
    
  } catch (e) {
    console.error(e);
  }
}

useEffect(()=>{
  fetchCarts();
},[])



  const [items, setItems] = useState([
    {
      id: 1,
      name: "LGBBQ+ Nfc card",
      price: 70,
      originalPrice: 60,
      quantity: 1,
      image: "../../assets/img1.png"
    },
    {
      id: 2,
      name: "LGBBQ+ Nfc card",
      price: 70,
      originalPrice: 60,
      quantity: 1,
      image: "../../assets/img1.png"
    }
  ]);   // Add state for product quantity


  const handleQuantityChange = (id, newQuantity) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const incrementQuantity = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decrementQuantity = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
    ));
  };
  return (

    <>
      <div className="border border-gray-300 rounded-lg bg-white w-3/4">
        <div>
          <h2 className="p-4 text-lg font-medium ">Shopping Cart</h2>
        </div>
        <div className="border border-[#E4E7E9] h-9 grid grid-cols-[40%_11.25%_16%_auto] items-center bg-[#F2F4F5] text-xs text-[#475156]">
          <span className="ml-[6%]">PRODUCT</span>
          <span className="ml-[-1%]">PRICE</span>
          <span className="ml-[15%]">QUANTITY</span>
          <span className="ml-[15%]">SUB-TOTAL</span>
        </div>
        <hr />
        <div>
          {items.map(item=>(

          <div className="py-4" key={item.id}>
            <div className="grid grid-cols-[38%_9.25%_14.25%_17.87%_auto] gap-4 items-center">
              <div className="flex gap-1 pl-3 items-center">
                <span className="mr-1">1</span>
                <img
                  src="../../assets/img1.png"
                  alt="Product"
                  className="w-[72px] h-[72px] rounded-lg mr-4"
                />
                <span>LGBBQ+ Nfc card</span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-sm text-[#080808] font-bold">Rs. {item.price} </span>
                <span className="line-through text-[#807E7D] text-sm">
                  Rs. {item.originalPrice}
                </span>
              </div>
              <div className="flex justify-around items-center border rounded py-2">
                <button className="px-2" onClick={() => decrementQuantity(item.id)}>−</button>
                <input
                  type="text"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                  className="w-12 text-center mx-2"
                />
                <button className="px-2" onClick={() => incrementQuantity(item.id)}>+</button>
              </div>
              <div className="flex justify-center items-center">
                <span className="py-4 font-medium text-[#191C1F] text-sm">
                  Rs. {item.price * item.quantity}
                </span>
              </div>
              <div className="flex gap-4 items-center">
                <button className="border border-[#807E7D] rounded text-[#807E7D] px-4 py-2 text-sm font-semibold">
                  UPDATE
                </button>
                <button className="text-gray-400">✖</button>
              </div>
            </div>
          </div>
          ))}
          <hr className="mx-5" />
          {/* <div className="py-4">
            <div className="grid grid-cols-[38%_9.25%_14.25%_17.87%_auto] gap-4 items-center">
              <div className="flex gap-1 pl-3 items-center">
                <span className="mr-1">1</span>
                <img
                  src="../../assets/img1.png"
                  alt="Product"
                  className="w-[72px] h-[72px] rounded-lg mr-4"
                />
                <span>LGBBQ+ Nfc card</span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-sm text-[#080808] font-bold">Rs. 70</span>
                <span className="line-through text-[#807E7D] text-sm">
                  Rs. 60
                </span>
              </div>
              <div className="flex justify-around items-center border rounded py-2">
                <button className="px-2" onClick={decrementQuantity}>−</button>
                <input
                  type="text"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-12 text-center mx-2"
                />
                <button className="px-2" onClick={incrementQuantity}>+</button>
              </div>
              <div className="flex justify-center items-center">
                <span className="py-4 font-medium text-[#191C1F] text-sm">
                  Rs. {70 * quantity}
                </span>
              </div>
              <div className="flex gap-4 items-center">
                <button className="border border-[#807E7D] rounded text-[#807E7D] px-4 py-2 text-sm font-semibold">
                  UPDATE
                </button>
                <button className="text-gray-400">✖</button>
              </div>
            </div>
          </div> */}
          <hr />
          <div className="my-6 align-middle ">
            <button className="flex mx-auto px-4 py-2 border-[2px] border-[#807E7D] rounded-md text-sm font-bold text-[#807E7D]">
              <span className="mr-2">←</span> RETURN TO SHOP
            </button>
          </div>
        </div>
      </div>
    </>  );
}

export default ShoppingCart;
