import React, { useState } from 'react';

const Pagination = () => {
  const [activePage, setActivePage] = useState(1);

  const handlePageClick = (pageNumber) => {
    setActivePage(pageNumber);
  };

  return (
    <div className="flex items-center justify-center space-x-4 mt-10">
      {/* Previous Button with SVG */}
      <button
        className="p-2 w-[40px] h-[40px] rounded-full bg-gray-900 text-white hover:bg-gray-700 focus:outline-none flex items-center justify-center"
        aria-label="Previous Page"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Pagination Numbers */}
      {[1, 2, 3, 4, 5, 6].map((number) => (
        <button
          key={number}
          onClick={() => handlePageClick(number)}
          className={`w-[40px] h-[40px] rounded-full flex items-center justify-center ${
            number === activePage
              ? 'bg-gray-700 text-white'
              : 'bg-white text-gray-900'
          } hover:bg-gray-300 focus:outline-none`}
        >
          {number < 10 ? `0${number}` : number}
        </button>
      ))}

      {/* Next Button with SVG */}
      <button
        className="p-2 w-[40px] h-[40px] rounded-full bg-gray-900 text-white hover:bg-gray-700 focus:outline-none flex items-center justify-center"
        aria-label="Next Page"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
