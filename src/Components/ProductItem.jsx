import React, { useContext } from "react";
import { SellerContext } from "../Context/SellerContext";
import { Link } from "react-router";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(SellerContext);
  return (
    <Link className="text-gray-700 cursor-pointer " to={`/product/${id}`}>
      <div className="mx-4 md:mx-0">
        <div className="overflow-hidden rounded ">
          <img
            src={image[0]}
            className="w-full h-full object-cover hover:scale-110 transition duration-200 ease-in-out"
            alt=""
          />
        </div>
        <p className="pt-6 font-normal text-[16px] pb-1">{name}</p>
        <p className="pt-3 font-semibold text-sm pb-1">
          {" "}
          {currency} {price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
