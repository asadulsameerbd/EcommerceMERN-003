import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { SellerContext } from "../Context/SellerContext";
import { Link } from "react-router";

const RelatedProducts = ({ category, subcategory }) => {
  const { products } = useContext(SellerContext);
  const [Related, SetRelated] = useState([]);
  useEffect(() => {
    if (products.length > 0) {
      let productCopy = products.slice();
      productCopy = productCopy.filter((item) => item.category === category);
      productCopy = productCopy.filter(
        (item) => item.subcategory === subcategory,
      );
      SetRelated(productCopy.slice(0, 5));
    }
  }, [products]);
  return (
    <div className="py-10">
      <div className="text-center py-10">
        <Title text1={"Related"} text2={"Products"} />
      </div>

      {/* item */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {Related?.map((item, i) => (
          <ProductItem
            key={i}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
