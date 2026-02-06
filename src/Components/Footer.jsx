import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-white text-base-content border-b border-gray-300 px-3 md:px-0 py-10 mb-5">
        <aside>
          <img src={assets.logo} className="w-35" alt="" />
          <p>
            FOREVER LTD
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>

        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Delivary</a>
          <a className="link link-hover">Privacy policy</a>
        </nav>
        <nav>
          <h6 className="footer-title">Get in Touch</h6>
          <a className="link link-hover">Ashulia,Savar-Dhaka</a>

          <a className="link link-hover">help@footwear.com</a>
        </nav>
      </footer>
      <p className="text-xs md:text-sm text-center text-gray-700 mb-4">
        Copyright 2024@ asadulsameer.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
