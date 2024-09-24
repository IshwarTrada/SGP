import React, { useState } from 'react';

const Filter = () => {
    const [selectedCategory, setSelectedCategory] = useState('Business & Professional');
    const [selectedPrice, setSelectedPrice] = useState('All Price');

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handlePriceChange = (e) => {
        setSelectedPrice(e.target.value);
    };

    return (
        <>
        <div className="">
            <div className="">
                <div>
                    <h2 className="text-lg font-bold text-gray-700 mb-4">CATEGORY</h2>
                    <div className="space-y-2">
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="category-business"
                                name="category"
                                value="Business & Professional"
                                className="form-radio text-blue-600"
                                checked={selectedCategory === 'Business & Professional'}
                                onChange={handleCategoryChange}
                            />
                            <label htmlFor="category-business" className="ml-2 text-gray-700 cursor-pointer">
                                Business & Professional
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="category-personal"
                                name="category"
                                value="Personal & Social"
                                className="form-radio text-blue-600"
                                checked={selectedCategory === 'Personal & Social'}
                                onChange={handleCategoryChange}
                            />
                            <label htmlFor="category-personal" className="ml-2 text-gray-700 cursor-pointer">
                                Personal & Social
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="category-security"
                                name="category"
                                value="Security & Access"
                                className="form-radio text-blue-600"
                                checked={selectedCategory === 'Security & Access'}
                                onChange={handleCategoryChange}
                            />
                            <label htmlFor="category-security" className="ml-2 text-gray-700 cursor-pointer">
                                Security & Access
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="category-healthcare"
                                name="category"
                                value="Healthcare & Emergency"
                                className="form-radio text-blue-600"
                                checked={selectedCategory === 'Healthcare & Emergency'}
                                onChange={handleCategoryChange}
                            />
                            <label htmlFor="category-healthcare" className="ml-2 text-gray-700 cursor-pointer">
                                Healthcare & Emergency
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="category-education"
                                name="category"
                                value="Education & Events"
                                className="form-radio text-blue-600"
                                checked={selectedCategory === 'Education & Events'}
                                onChange={handleCategoryChange}
                            />
                            <label htmlFor="category-education" className="ml-2 text-gray-700 cursor-pointer">
                                Education & Events
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="category-marketing"
                                name="category"
                                value="Marketing & Promotions"
                                className="form-radio text-blue-600"
                                checked={selectedCategory === 'Marketing & Promotions'}
                                onChange={handleCategoryChange}
                            />
                            <label htmlFor="category-marketing" className="ml-2 text-gray-700 cursor-pointer">
                                Marketing & Promotions
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="category-custom"
                                name="category"
                                value="Custom & Specialty Uses"
                                className="form-radio text-blue-600"
                                checked={selectedCategory === 'Custom & Specialty Uses'}
                                onChange={handleCategoryChange}
                            />
                            <label htmlFor="category-custom" className="ml-2 text-gray-700 cursor-pointer">
                                Custom & Specialty Uses
                            </label>
                        </div>
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
