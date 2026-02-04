import React, { useState } from "react";
import { NavLink } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";
import { assets } from "../assets/frontend_assets/assets";

const linkClass = ({ isActive }) =>
  `relative px-3 py-2 block
   after:content-['']
   after:absolute
   after:left-0
   after:-bottom-1
   after:h-0.5
   after:bg-amber-500
   after:transition-all
   after:duration-300
   ${isActive ? "after:w-full text-amber-500" : "after:w-0 hover:after:w-full"}`;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between items-center h-20 px-6 md:px-6 lg:px-0  relative">
      {/* logo */}
      <img src={assets.logo} className="w-36" alt="logo" />

      {/* desktop menu */}
      <div className="hidden md:flex items-center gap-5">
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/collection" className={linkClass}>
          Collection
        </NavLink>
        <NavLink to="/about" className={linkClass}>
          About
        </NavLink>
        <NavLink to="/contact" className={linkClass}>
          Contact
        </NavLink>
      </div>

      {/* right icons */}
      <div className="flex items-center gap-5">
        {/* search */}
        <img src={assets.search_icon} className="w-5 cursor-pointer" alt="" />

        {/* profile avatar */}
        <img
          src={assets.profile_icon}
          className="w-5 cursor-pointer hidden md:block"
          alt=""
        />

        {/* cart */}
        <div className="relative cursor-pointer">
          <img src={assets.cart_icon} className="w-5" alt="cart" />
          <span className="absolute -right-2 -bottom-2 h-4 w-4 flex items-center justify-center rounded-full bg-black text-white text-[10px]">
            10
          </span>
        </div>

        {/* hamburger */}
        <button className="md:hidden text-xl" onClick={() => setOpen(true)}>
          <FaBars />
        </button>
      </div>

      {/* mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* mobile drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-white z-50 p-6
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end mb-6">
          <FaTimes
            className="text-xl cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>

        <nav className="flex flex-col gap-4">
          <NavLink onClick={() => setOpen(false)} to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            to="/collection"
            className={linkClass}
          >
            Collection
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            to="/about"
            className={linkClass}
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            to="/contact"
            className={linkClass}
          >
            Contact
          </NavLink>
        </nav>
        <div className="border-t pt-4 mt-6">
          <p className="text-sm text-gray-400 mb-2">Account</p>

          <div className="flex flex-col gap-3">
            <NavLink
              to="/profile"
              onClick={() => setOpen(false)}
              className="px-3 py-2 rounded hover:bg-gray-100"
            >
              My Profile
            </NavLink>

            <NavLink
              to="/orders"
              onClick={() => setOpen(false)}
              className="px-3 py-2 rounded hover:bg-gray-100"
            >
              Orders
            </NavLink>

            <button className="text-left px-3 py-2 rounded hover:bg-gray-100 text-red-500">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
