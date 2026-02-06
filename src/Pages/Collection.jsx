import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../Components/Title";
import { SellerContext } from "../Context/SellerContext";
import ProductItem from "../Components/ProductItem";

const Collection = () => {
  const { products } = useContext(SellerContext);
  const [showFilter, setshowFilter] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubCategory] = useState([]);

  // sorting
  const handleSorting = (e) => {
    const value = e.target.value;

    switch (value) {
      case "low-high":
        setAllProducts([...allProducts].sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setAllProducts([...allProducts].sort((a, b) => b.price - a.price));
        break;
      case "relevent":
        setAllProducts(products);
        break;
      default:
        setAllProducts(products);
    }

    // if (value === "low-high") {
    //   setAllProducts([...allProducts].sort((a, b) => a.price - b.price));
    // } else if (value === "high-low") {
    //   setAllProducts([...allProducts].sort((a, b) => b.price - a.price));
    // } else if (value === "relevent") {
    //   setAllProducts(products);
    // }
  };

  // for category
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  // for subcategory

  const toggleSubCategory = (e) => {
    if (subcategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  // category onujayi  filter kora hoyeche
  useEffect(() => {
    if (!products) return;

    let filtered = [...products];

    // Category filter
    if (category.length > 0) {
      filtered = filtered.filter((product) =>
        category.includes(product.category),
      );
    }

    // Subcategory filter
    if (subcategory.length > 0) {
      filtered = filtered.filter((product) =>
        subcategory.includes(product.subCategory),
      );
    }

    setAllProducts(filtered);
  }, [category, subcategory, products]);

  return (
    <div className="pt-10 md:flex justify-between gap-5">
      {/* filter  */}
      <div className="w-full md:w-1/3 lg:w-1/5 ">
        <p className="flex items-center gap-2 uppercase text-xl mx-3 md:mx-0">
          Filters
          <img
            onClick={() => setshowFilter(!showFilter)}
            src={assets.dropdown_icon}
            className={`w-3 h-3 md:hidden 
               ${showFilter ? "rotate-90" : ""}`}
            alt=""
          />
        </p>

        {/* category filter */}
        <div
          className={`p-5 border ${showFilter ? "" : "hidden md:block"} flex flex-col my-5 mx-3 md:mx-0 gap-3 border-gray-300`}
        >
          <h1 className="text-xl uppercase pb-2">Categories</h1>
          <div className="space-y-2">
            <p>
              <input type="checkbox" value={"Men"} onChange={toggleCategory} />{" "}
              Men
            </p>
            <p>
              <input
                type="checkbox"
                value={"Women"}
                onChange={toggleCategory}
              />{" "}
              Women
            </p>
            <p>
              <input type="checkbox" value={"Kids"} onChange={toggleCategory} />{" "}
              Kids
            </p>
          </div>
        </div>

        {/* Sub Category  */}
        <div
          className={`p-5 border ${showFilter ? "" : "hidden md:block "} flex flex-col mx-3 md:mx-0 gap-3 border-gray-300`}
        >
          <h1 className="text-xl uppercase pb-3">Type</h1>
          <div className="space-y-2">
            <p>
              <input
                type="checkbox"
                value={"Topwear"}
                onChange={toggleSubCategory}
              />{" "}
              Topwear
            </p>
            <p>
              <input
                type="checkbox"
                value={"Bottomwear"}
                onChange={toggleSubCategory}
              />{" "}
              Bottomwear
            </p>
            <p>
              <input
                type="checkbox"
                value={"Winterwear"}
                onChange={toggleSubCategory}
              />{" "}
              Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="flex-1 py-5 md:py-0">
        {/* Product sort */}
        <div className="flex justify-between">
          <Title text1={"All"} text2={"Collection"} />
          {/* sort */}
          <select
            onChange={handleSorting}
            className="border border-gray-700 md:p-2"
          >
            <option value={"relevent"}>Sort By : Relevent</option>
            <option value={"low-high"}>Sort By : Low to High</option>
            <option value={"high-low"}>Sort By : High to Low</option>
          </select>
        </div>

        {/* Map Content */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 gap-y-6 pt-5">
          {allProducts.map((product, i) => (
            <ProductItem
              key={i}
              id={product._id}
              name={product.name}
              image={product.image}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
