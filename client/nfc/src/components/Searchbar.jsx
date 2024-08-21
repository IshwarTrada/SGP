import React from "react";

const SearchBar = () => {
  return (
    <div className="flex justify-center items-center mt-[0rem]">
      <div className="relative w-full max-w-xs">
        <input
          type="text"
          className="bg-[#212121] text-[#cfd1d4] rounded-full pl-4 pr-[4.5rem] py-2  focus:ring-blue-500"
          placeholder="Search here..."
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search text-[#cfd1d4]"
            viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
