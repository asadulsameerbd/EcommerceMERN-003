import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { SellerContext } from "../Context/SellerContext";
import RelatedProducts from "../Components/RelatedProducts";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, addToCart } = useContext(SellerContext);
  const [selectedSize, setSelectedSize] = useState("");

  const product = products.find((item) => item._id === id);
  const [mainImg, setMainImg] = useState(product?.image[0]);

  useEffect(() => {
    if (product) {
      setMainImg(product?.image[0]);
      setSelectedSize("");
    }
  }, [product]);

  const handleAddtoCart = () => {
    if (product.sizes?.length > 0 && !selectedSize) {
      Swal.fire({
        title: "Please Select A Size",
        icon: "error",
        draggable: false,
      });
      return;
    }

    addToCart({
      ...product,
      selectedSize: selectedSize || null,
    });
    console.log(selectedSize);

    Swal.fire({
      title: "Your Product Is Added to The Cart",
      icon: "success",
      draggable: true,
    });
  };

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
              {product.sizes?.length > 0 && (
                <div className="flex gap-3">
                  {product.sizes?.map((size, i) => (
                    <button
                      onClick={() => setSelectedSize(size)}
                      className={`${selectedSize === size ? "bg-black text-white rounded-lg" : "bg-white btn-soft text-black"} btn my-2`}
                      key={i}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* add to cart */}
          <div className="flex gap-5 items-center">
            <button
              onClick={handleAddtoCart}
              className="bg-black/90 text-white p-4 btn btn-soft "
            >
              Add to Cart
            </button>
            <Link
              to="/place-order"
              className=" text-black  bg-white p-4 btn btn-soft "
            >
              Buy Now
            </Link>
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
      {/* description and review section */}
      <div className="mt-5">
        <div className="flex">
          <b className="text-xl border border-gray-300 py-2 px-4">
            Description
          </b>
          <p className="text-xl border border-gray-300 py-2 px-4">
            Reviews(122)
          </p>
        </div>
        {/* details */}
        <div className="border border-gray-300">
          <p className="text-sm text-gray-500 p-3">
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer. E-commerce websites
            typically display products or services along with detailed
            descriptions, images, prices, and any available variations (e.g.,
            sizes, colors). Each product usually has its own dedicated page with
            relevant information.
          </p>
        </div>

        {/* related products */}
        <div>
          <RelatedProducts
            category={product.category}
            subcategory={product.subcategory}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
