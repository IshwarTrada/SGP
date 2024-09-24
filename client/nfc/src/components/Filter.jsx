import React, { useState } from 'react';

const Filter = () => {
    const [selectedCategory, setSelectedCategory] = useState('Business & Professional');
    const [selectedPrice, setSelectedPrice] = useState('All Price');

    // Handle category selection
    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    // Handle price selection
    const handlePriceChange = (e) => {
        setSelectedPrice(e.target.value);
    };

    // Categories and price ranges for the filters
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
        <div className="">
            <div className="">
                <h2 className="text-lg font-bold text-gray-700 mb-4">CATEGORY</h2>
                <div className="space-y-2">

                    {categories.map((category) => (
                        <div key={category} className="flex items-center">
                            <input
                                type="radio"
                                name="category"
                                value={category}
                                className="form-radio text-blue-600"
                                checked={selectedCategory === category}
                                onChange={handleCategoryChange}
                            />
                            <label className="ml-2 text-gray-700 cursor-pointer">
                                {category}
                            </label>
                        </div>
                    ))}
                </div>

                <div className="my-4 border-b border-gray-300"></div>

                <h2 className="text-lg font-bold text-gray-700 mb-4">PRICE RANGE</h2>
                <div className="space-y-2">
                    {prices.map((price) => (
                        <div key={price} className="flex items-center">
                            <input
                                type="radio"
                                name="price"
                                value={price}
                                className="form-radio text-blue-600"
                                checked={selectedPrice === price}
                                onChange={handlePriceChange}
                            />
                            <label className="ml-2 text-gray-700 cursor-pointer">
                                {price}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Filter;
