import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const OurPolicy = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12">
      {/* 1 */}
      <div className="card bg-base-100  ">
        <figure className="p-5">
          <img
            className="w-15 hover:scale-105"
            src={assets.exchange_icon}
            alt="Shoes"
          />
        </figure>
        <h3 className="text-center text-xl font-semibold py-2">
          {" "}
          Easy Exchange Policy
        </h3>
        <p className="text-normal text-gray-700 text-center py-2">
          We offer hassle free exchange policy
        </p>
      </div>

      {/* 2 */}
      <div className="card bg-base-100  ">
        <figure className="p-5">
          <img
            className="w-15 hover:scale-105"
            src={assets.quality_icon}
            alt="Shoes"
          />
        </figure>
        <h3 className="text-center text-xl font-semibold py-2">
          {" "}
          7 Days Return Policy
        </h3>
        <p className="text-normal text-gray-700 text-center py-2">
          We provide 7 days free return policy
        </p>
      </div>

      {/* 3 */}
      <div className="card bg-base-100  ">
        <figure className="p-5">
          <img
            className="w-15 hover:scale-105"
            src={assets.support_img}
            alt="Shoes"
          />
        </figure>
        <h3 className="text-center text-xl font-semibold py-2">
          {" "}
          Best customer support
        </h3>
        <p className="text-normal text-gray-700 text-center py-2">
          we provide 24/7 customer support
        </p>
      </div>
    </div>
  );
};

export default OurPolicy;
