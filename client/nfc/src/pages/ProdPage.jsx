import React from "react";
import ActiveFiltersAndResults from "../components/ActiveFilter";
import SearchbarProd from "../components/SearchbarProd";
import ProdDropdown from "../components/SortingDropdown";
import Pagination from "../components/ChangePages";


const cards = [
    { id: 1, name: "Google Review Card", price: "Rs. 4600.00/-", discountPrice: "Rs. 6000.00/-", rating: "4.5", imageUrl: "./src/assets/landing.png" },
    { id: 2, name: "Healthcare Card", price: "Rs. 4600.00/-", discountPrice: "Rs. 6000.00/-", rating: "4.5", imageUrl: "./src/assets/landing.png" },
    { id: 3, name: "Custom Card", price: "Rs. 4600.00/-", discountPrice: "Rs. 6000.00/-", rating: "4.5", imageUrl: "./src/assets/landing.png" },
    { id: 4, name: "Business Card", price: "Rs. 4600.00/-", discountPrice: "Rs. 6000.00/-", rating: "4.5", imageUrl: "./src/assets/landing.png" },
    { id: 5, name: "Social Card", price: "Rs. 4600.00/-", discountPrice: "Rs. 6000.00/-", rating: "4.5", imageUrl: "./src/assets/landing.png" },
    { id: 6, name: "Access Card", price: "Rs. 4600.00/-", discountPrice: "Rs. 6000.00/-", rating: "4.5", imageUrl: "./src/assets/landing.png" },
    { id: 7, name: "Education Card", price: "Rs. 4600.00/-", discountPrice: "Rs. 6000.00/-", rating: "4.5", imageUrl: "./src/assets/landing.png" },
    { id: 8, name: "Marketing Card", price: "Rs. 4600.00/-", discountPrice: "Rs. 6000.00/-", rating: "4.5", imageUrl: "./src/assets/landing.png" },
];

const Products = () => {
    return (
        <>
            <div className="relative justify-between bg-[#FFF] isolate flex flex-row"
                style={{
                    width: '984px',
                    height: '50px',
                    top: '100px',
                 

                }}><SearchbarProd />

                <div className="">

                    <ProdDropdown />
                </div>


            </div>


            <div className="">
            <div className=""><ActiveFiltersAndResults /></div>
            </div>
            <div className=" h-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 ml-4 pt-24 pl-20 mt-8">

                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="relative w-[23rem] h-[275px] mx-2 rounded-lg cursor-pointer overflow-hidden">
                        <img
                            src={card.imageUrl}
                            alt={card.name}
                            className="w-full h-[196px] object-cover rounded-xl border-[2px] border-black"
                        />
                        <div className="absolute top-[9.5rem] left-4 bg-black bg-opacity-80 px-2 py-1 rounded-full text-white">
                            {card.rating} ⭐
                        </div>

                        <div
                            className="absolute top-[9.5rem] right-2 w-9 h-9 rounded-full bg-black bg-opacity-80 flex justify-center items-center cursor-pointer"
                            style={{
                                backgroundImage: "url('./src/assets/cart.svg')",
                                backgroundSize: "20px 20px",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        />

                        <div className="text-center mt-4">
                            <div className="text-xl font-bold">{card.name}</div>
                            <div className="text-lg text-gray-900 mt-2">
                                {card.price}{" "}
                                <span className="line-through text-gray-500 pl-2">
                                    {card.discountPrice}
                                </span>
                            </div>
                        </div>
                    </div>

                ))}
                </div>
                <div className="mb-12"><Pagination/></div>
            </div>
        </>
    );
};

export default Products;
