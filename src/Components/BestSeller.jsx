import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { SellerContext } from "../Context/SellerContext";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(SellerContext);
  const [bestSeller, setbestSeller] = useState([]);

  useEffect(() => {
    const BestSeller = products.filter((item) => item.bestseller);
    setbestSeller(BestSeller.slice(0, 5));
  }, [products]);
  return (
    <div className="my-12 ">
      <div className="text-center py-5">
        <Title text1={"Best"} text2={"Seller"} />
        <p className="w-3/4 mx-auto text-sm md:text-[16px] text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the.
        </p>
      </div>

      {/* Rendaring Best seller Products */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-5 gap-4 gap-y-6">
        {bestSeller.map((seller, index) => (
          <ProductItem
            key={index}
            id={seller._id}
            image={seller.image}
            name={seller.name}
            price={seller.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
