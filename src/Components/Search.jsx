import React, { useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { IoCloseSharp } from "react-icons/io5";

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <img
        src={assets.search_icon}
        alt="Search"
        className="w-6 cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      />

      {isOpen && (
        <div className="absolute top-10 md:top-8 -right-16 md:right-0 bg-white border border-gray-300 px-4 py-2 rounded-md shadow-md">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search your products..."
              className="outline-none flex-1 text-gray-700 placeholder-gray-400 bg-transparent"
            />
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-800 ml-2"
            >
              <IoCloseSharp />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
