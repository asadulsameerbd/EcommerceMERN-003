import React, { useContext } from "react";
import { SellerContext } from "../Context/SellerContext";
import Title from "../Components/Title";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router";

const Cart = () => {
  const {
    cartItem,
    calculateTotals,
    currency,
    removeItem,
    decreaseQty,
    increaseQTY,
  } = useContext(SellerContext);
  const navigate = useNavigate();

  const { totals, subtotal, delivary_fee } = calculateTotals(cartItem);

  if (!cartItem || cartItem.length === 0) {
    return (
      <div className="h-100 px-3 md:px-0">
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
      <div>
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

            {/* quantity & delete */}
            <div className="flex md:flex-col items-end gap-5 justify-center">
              {/* quantity  */}
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

              <button
                onClick={() => removeItem(item.id)}
                className="flex items-center justify-center"
              >
                <MdDeleteForever size={30} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* price calculated */}
      <div className="md:flex md:justify-between md:items-start">
        {/* Cart Items */}
        <div className="md:w-2/3">
          {cartItem.map((item, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row justify-between items-center  py-3"
            >
              {/* item details */}
            </div>
          ))}
        </div>

        {/* Cart Totals */}
        <div className="md:w-1/3 md:ml-5 mt-5 md:mt-0">
          <Title text1={"CART"} text2={"TOTALS"} />
          <div className="mt-5 space-y-2 border border-gray-300 p-4 rounded-lg shadow-md">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>
                {currency}
                {subtotal}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee:</span>
              <span>
                {currency}
                {delivary_fee}
              </span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2">
              <span>Total:</span>
              <span>
                {currency}
                {totals}
              </span>
            </div>
            <div className="flex justify-end pt-5">
              <button
                onClick={() => navigate("/place-order")}
                className="bg-black btn btn-soft text-white "
              >
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
