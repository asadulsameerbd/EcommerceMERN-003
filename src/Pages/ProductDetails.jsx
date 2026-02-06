import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import { SellerContext } from "../Context/SellerContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(SellerContext);

  const product = products.find((item) => item._id === id);
  const [mainImg, setMainImg] = useState(product?.image[0]);

  if (!product) {
    return <div>Product Not Found</div>;
  }

  return (
    <div className="md:container border-t border-gray-300 pt-10 px-4 lg:px-20">
      <div className="flex flex-col md:flex-row gap-8 inset-0">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse  md:flex-row gap-4">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto">
            {product.image.map((item, i) => (
              <img
                src={item}
                key={i}
                onClick={() => setMainImg(item)}
                className="w-20 h-20 md:w-16 md:h-16 lg:w-24 lg:h-24  object-cover cursor-pointer  rounded"
                alt=""
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1">
            <img src={mainImg} className="w-full  h-auto rounded-md " alt="" />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1 mt-6 md:mt-0 space-y-4">
          <h1 className="text-3xl font-normal ">{product.name}</h1>
          <p className="text-black font-bold text-3xl ">${product.price}</p>
          <p className="text-gray-600">{product.description}</p>

          {/* select size */}
          <div>
            <h1 className="text-gray-500">Select Size</h1>
            <div className="flex gap-2">
              {product.sizes.map((size, i) => (
                <button className="btn my-2" key={i}>
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* add to cart */}
          <div className="flex gap-5 items-center">
            <button className="bg-black/90 text-white p-4 btn btn-soft ">
              Add to Cart
            </button>
            <button className=" text-black  bg-white p-4 btn btn-soft ">
              Buy Now
            </button>
          </div>

          {/* divider */}
          <p className="h-px bg-gray-300 my-10"></p>
          <p className="text-gray-400 inset-0 font-normal text-sm">
            100% Original product.
          </p>
          <p className="text-gray-400 inset-0 font-normal text-sm">
            Cash on delivery is available on this product.
          </p>
          <p className="text-gray-400 inset-0 font-normal text-sm">
            Easy return and exchange policy within 7 days.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
