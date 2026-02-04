import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Hero = () => {
  return (
    <div className="border border-gray-400 lg:mx-0 mx-4 mb-10 ">
      <div className="flex flex-col md:flex-row items-center justify-between bg-base-200 ">
        {/* left text content */}
        <div className="w-full flex flex-col  items-center">
          <div className="py-12 md:p-10 ">
            <div className="flex justify-start items-center  gap-2">
              <p className="bg-gray-500 h-0.5 w-8 md:w-11"></p>
              <p className="uppercase font-semibold text-gray-700 text-sm md:text-lg">
                OUR BESTSELLERS
              </p>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-primary py-2 md:py-4 text-gray-700">
              Latest Arrivals
            </h1>

            <div className="flex items-center gap-2">
              <p className="uppercase font-semibold text-gray-700 text-sm md:text-lg">
                Shop Now
              </p>
              <p className="bg-gray-500 h-0.5 w-8 md:w-11"></p>
            </div>
          </div>
        </div>

        {/* right img content */}
        <div className="w-full">
          <img src={assets.hero_img} className="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
