import { Link } from "react-router-dom";
import React, { useState } from 'react';
import cartIcon from '../assets/cart.svg';
import SearchBar from './Searchbar';
import Dropdown from './Dropdown';

function Navi() {
     const [activeItem, setActiveItem] = useState(null);

     const handleItemClick = (item) => {
          setActiveItem(activeItem === item ? null : item);
     };

     const navItems = [
          { name: "Dashboard", path: "/dashboard" },
          { name: "Products", path: "/products" },
          { name: "Orders", path: "/orders" }
     ];

     return (
          <div className="bg-black h-14 flex items-center justify-between pl-[1rem] pr-[0rem] fixed w-[100%] mb-1 z-50 text-sm">
               <div className="w-20 mr-[15px]">
                    <Link to="/">
                         <img
                              className=""
                              id="logo"
                              alt="logo"
                              src="../src/assets/logo.png"
                         />
                    </Link>
               </div>
               <div className="flex gap-16 mr-[10rem] text-[#cfd1d4]">
                    <ul className="flex gap-8">
                         {navItems.map((item, index) => (
                              <li
                                   key={index}
                                   className={`cursor-pointer flex items-center relative ${activeItem === item.name ? 'text-blue-500' : ''}`}
                                   onClick={() => handleItemClick(item.name)}>
                                   <Link to={item.path}>
                                        {item.name}
                                   </Link>
                                   {item.name === "Analytics" && (
                                        <>
                                             <span className={`ml-1 transform transition-transform ${activeItem === item.name ? 'rotate-180' : ''}`}>
                                                  <svg
                                                       width="25"
                                                       height="20"
                                                       viewBox="0 0 20 20"
                                                       fill="none"
                                                       xmlns="http://www.w3.org/2000/svg">
                                                       <path
                                                            d="M16.6 12.5415L11.1667 7.10817C10.525 6.4665 9.47502 6.4665 8.83336 7.10817L3.40002 12.5415"
                                                            className={`${activeItem === item.name ? 'stroke-blue-500' : 'stroke-white'}`}
                                                            strokeWidth="1.25"
                                                            strokeMiterlimit="10"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round" />
                                                  </svg>
                                             </span>
                                             {activeItem === "Analytics" && (
                                                  <div className="absolute top-[100%] left-0">
                                                       <Dropdown />
                                                  </div>
                                             )}
                                        </>
                                   )}
                              </li>
                         ))}
                    </ul>
               </div>

               <div className="items-center mr-4 relative flex flex-row">
                    <div className="flex flex-row gap-6">
                         <SearchBar />
                         <div className="flex flex-row justify-center items-center gap-6">
                              {/* <span className="relative -top-2 -right-2 text-white rounded-full text-xs w-[1.5rem] h-4 flex items-right mr-1"> */}
                                   <Link to="/cart">
                                        <img src={cartIcon} alt="Cart Icon" className="w-[20px] transition-transform 
                            transform hover:scale-110 hover:filter hover:brightness-0 hover:invert hover:sepia hover:hue-rotate-[180deg] hover:saturate-[200%]" />
                                   </Link>
                                   {/* </span> */}
                              {/* <span> */}
                                  <Link to="/signIn">
                                        <img src="./src/assets/profileimage.png" alt="Cart Icon" className="w-[16px] transition-transform 
                            transform hover:scale-110 hover:filter hover:brightness-0 hover:invert hover:sepia hover:hue-rotate-[180deg] hover:saturate-[200%]" />
                                   </Link>
                              {/* </span> */}

                         </div>
                    </div>
               </div>
          </div>
     );
}

export default Navi;