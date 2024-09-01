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
          { name: "Analytics", path: "/analytics" },
          { name: "Orders", path: "/settings" }
     ];

     return (
          <div className="bg-black h-16 flex items-center justify-between px-4 fixed w-[100%] mb-1 z-50">
               <div>
                    <Link to="/landingpage">
                         <img
                              className="w-18 h-16"
                              id="logo"
                              alt="logo"
                              src="./src/assets/logo.png"
                         />
                    </Link>
               </div>
               <div className="flex gap-16 mr-[15rem] text-[#cfd1d4]">
                    <ul className="flex gap-8">
                         {navItems.map((item, index) => (
                              <li
                                   key={index}
                                   className={`cursor-pointer flex items-center relative ${activeItem === item.name ? 'text-blue-500' : ''}`}
                                   onClick={() => handleItemClick(item.name)}>
                                   <Link to={item.path}>
                                        {item.name}
                                   </Link>
                                   {item.name === "Products" && (
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
                                                  <div className="absolute top-[100%]">
                                                       <Dropdown />
                                                  </div>
                                             )}
                                        </>
                                   )}
                              </li>
                         ))}
                    </ul>
               </div>
               <div className="flex items-center gap-4">
                    <div className="relative mr-[1.30rem]">
                         <SearchBar />
                    </div>
                    <div className="relative mr-1">
                         <span className="absolute -top-2 -right-2 text-white rounded-full text-xs w-[1.5rem] h-4 flex items-center mr-1">
                              <Link to="/showCart">
                                   <img src={cartIcon} alt="Cart Icon" width="30" height="30" className="transition-transform 
                                   transform hover:scale-110 hover:filter hover:brightness-0 hover:invert hover:sepia hover:hue-rotate-[180deg] hover:saturate-[200%]" />
                              </Link>
                         </span>
                    </div>
               </div>
          </div>
     );
}

export default Navi;
