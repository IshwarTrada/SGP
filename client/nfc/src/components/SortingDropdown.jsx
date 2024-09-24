import React, { useState, useRef } from 'react';

const ProdDropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const selectRef = useRef(null);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    setIsDropdownOpen(false); // Close dropdown when an option is selected
  };

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleBlur = (event) => {
    // Check if the clicked element is inside the select dropdown
    if (!selectRef.current.contains(event.relatedTarget)) {
      setIsDropdownOpen(false);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <label htmlFor="dropdown" className="text-gray-700">
        Sort By: 
      </label>
      <div className="relative w-[150px]">
        <select
          id="dropdown"
          ref={selectRef}
          value={selectedOption}
          onChange={handleChange}
          onClick={handleDropdownClick}  // Toggle dropdown open/close on click
          onBlur={handleBlur}            // Close dropdown if focus is lost
          className="appearance-none border pl-2 pr-8 h-[50px] w-full rounded-lg shadow-sm focus:outline-none focus:ring-blue-800 focus:border-blue-100"
        >
          <option value="" disabled>
            Choose
          </option>
          <option value="option1">Most Popular</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        {/* Custom Arrow */}
        <div
          className={`absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none transition-transform duration-200 ${
            isDropdownOpen ? 'rotate-0' : 'rotate-180'
          }`}
        >
          <svg
            className="w-5 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProdDropdown;
