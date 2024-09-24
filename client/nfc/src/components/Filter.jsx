import React, { useState } from 'react';

const Filter = () => {
    const [selectedCategory, setSelectedCategory] = useState('Business & Professional');
    const [selectedPrice, setSelectedPrice] = useState('All Price');

    const handleCategoryChange = (e) => {
        console.log("Category changed:", e.target.value); // Debugging line

        setSelectedCategory(e.target.value);
    };

    const handlePriceChange = (e) => {
        console.log("price changed:", e.target.value); // Debugging line

        setSelectedPrice(e.target.value);
    };

    const categories = [
        'Business & Professional',
        'Personal & Social',
        'Security & Access',
        'Healthcare & Emergency',
        'Education & Events',
        'Marketing & Promotions',
        'Custom & Specialty Uses',
    ];

    const prices = ['All Price', 'Under ₹500'];


    return (
        <>
        <div className="">
            <div className="">
                <div>
                    <h2 className="text-lg font-bold text-gray-700 mb-4">CATEGORY</h2>
                    <div className="space-y-2">
                    {categories.map((category) => (
                        <div key={category} className="flex items-center">
                            <input
                                type='radio'
                                name="category"
                                value={category}
                                className="form-radio text-blue-600"
                                checked={selectedCategory === category}
                                onChange={handleCategoryChange}
                            />
                            <label htmlFor={`category-${category}`} className="ml-2 text-gray-700 cursor-pointer">
                                {category}
                            </label>
                        </div>
                    ))}
                </div>
                </div>
                <div className="my-4 border-b border-gray-300"></div>
                <div>
                    <h2 className="text-lg font-bold text-gray-700 mb-4">PRICE RANGE</h2>
                    <div className="space-y-2">
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="price-all"
                                name="price"
                                value="All Price"
                                className="form-radio text-blue-600"
                                checked={selectedPrice === 'All Price'}
                                onChange={handlePriceChange}
                            />
                            <label htmlFor="price-all" className="ml-2 text-gray-700 cursor-pointer">
                                All Price
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="price-under-500"
                                name="price"
                                value="Under ₹500"
                                className="form-radio text-blue-600"
                                checked={selectedPrice === 'Under ₹500'}
                                onChange={handlePriceChange}
                            />
                            <label htmlFor="price-under-500" className="ml-2 text-gray-700 cursor-pointer">
                                Under ₹500
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Filter;
