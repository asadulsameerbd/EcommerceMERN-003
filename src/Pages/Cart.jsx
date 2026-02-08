import React, { useContext } from "react";
import { SellerContext } from "../Context/SellerContext";
import Title from "../Components/Title";

const Cart = () => {
  const { cartItem, currency, decreaseQty, increaseQTY } =
    useContext(SellerContext);
  console.log(cartItem);

  if (!cartItem || cartItem.length === 0) {
    return (
      <div className="h-100">
        <Title text1={"YOUR"} text2={"CART"} />
        <div className="p-4 text-center text-2xl ">Cart Item is Empty</div>
      </div>
    );
  }
  return (
    <div className="px-3">
      <div className="py-5 ">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      {/* cart item */}
      {cartItem.map((item, i) => (
        <div
          key={i}
          className="flex flex-col md:flex-row justify-between items-center border-y border-gray-300 py-3"
        >
          {/* item */}
          <div className="flex items-center justify-between gap-5">
            <img
              src={Array.isArray(item.image) ? item.image[0] : item.image}
              alt={item.name}
              className="w-16 md:w-24 h-16 md:h-30 object-cover"
            />
            <div>
              <h3 className="font-semibold">{item.name}</h3>

              <p className="font-normal">
                Price :{" "}
                <span className=" font-bold">
                  {currency}
                  {item.price}
                </span>
              </p>
              <p className="font-normal">
                Size: <span className=" font-bold">{item.selectedSize}</span>
              </p>
            </div>
          </div>

          {/* quantity */}
          <div className="flex items-center gap-2 mt-2">
            <button
              onClick={() => decreaseQty(item.id)}
              className="px-3 py-1 border rounded"
            >
              −
            </button>

            <span className="px-2">{item.qty || 1}</span>

            <button
              onClick={() => increaseQTY(item.id)}
              className="px-3 py-1 border rounded"
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
