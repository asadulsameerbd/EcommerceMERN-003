import React, { useContext, useEffect, useState } from "react";
import { SellerContext } from "../Context/SellerContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(SellerContext);
  const [latestProducts, SetLatestProducts] = useState([]);

  useEffect(() => {
    if (products?.length) {
      SetLatestProducts(products.slice(0, 10));
    }
  }, [products]);
  return (
    <div className="my-12">
      <div className="text-center py-8 text-3xl">
        <Title text1={"Latest"} text2={"Collections"} />
        <p className="w-3/4 mx-auto text-sm md:text-[16px] text-gray-500">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the.
        </p>
      </div>

      {/* Rendering Products */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-5 gap-4 gap-y-6">
        {latestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            price={item.price}
            name={item.name}
          ></ProductItem>
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
