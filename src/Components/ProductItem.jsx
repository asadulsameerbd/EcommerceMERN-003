import React, { useContext } from "react";
import { SellerContext } from "../Context/SellerContext";
import { Link } from "react-router";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(SellerContext);

  return (
    <Link to={`/product/${id}`} className="text-gray-700 cursor-pointer">
      <div className="mx-4 md:mx-0">
        <div className="overflow-hidden rounded">
          <img
            src={image?.[0] || image?.url}
            className="w-full h-full object-cover hover:scale-110 transition duration-200"
            alt=""
          />
        </div>
        <p className="pt-6 text-[16px]">{name}</p>
        <p className="pt-3 font-semibold text-sm">
          {currency} {price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
