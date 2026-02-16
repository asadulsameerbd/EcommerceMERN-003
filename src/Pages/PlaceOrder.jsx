import React, { useContext } from "react";
import Title from "../Components/Title";
import { SellerContext } from "../Context/SellerContext";
import { useNavigate } from "react-router";

const PlaceOrder = () => {
  const { calculateTotals, cartItem, currency } = useContext(SellerContext);
  const { delivary_fee, subtotal, totals } = calculateTotals(cartItem);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row justify-between md:gap-5 px-3 md:px-0">
      {/* left side */}
      <div className="w-full md:w-2/3 pt-3   md:py-10">
        <Title text1={"DELIVERY"} text2={"INFORMATION"} />

        <form action="" className="py-10 space-y-3">
          {/* First & Last Name */}
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              className="w-full p-2 outline-none border border-gray-200 rounded"
              placeholder="First Name"
            />
            <input
              type="text"
              className="w-full p-2 outline-none border border-gray-200 rounded"
              placeholder="Last Name"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            className="w-full p-2 outline-none border border-gray-200 rounded"
            placeholder="Enter Email Address"
          />

          {/* Street */}
          <input
            type="text"
            className="w-full p-2 outline-none border border-gray-200 rounded"
            placeholder="Street"
          />

          {/* City & State */}
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              className="w-full p-2 outline-none border border-gray-200 rounded"
              placeholder="City"
            />
            <input
              type="text"
              className="w-full p-2 outline-none border border-gray-200 rounded"
              placeholder="State"
            />
          </div>

          {/* Zip code & Country */}
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              className="w-full p-2 outline-none border border-gray-200 rounded"
              placeholder="Zip code"
            />
            <input
              type="text"
              className="w-full p-2 outline-none border border-gray-200 rounded"
              placeholder="Country"
            />
          </div>

          {/* Phone */}
          <input
            type="number"
            className="w-full p-2 outline-none border border-gray-200 rounded"
            placeholder="Phone"
          />
        </form>
      </div>

      {/* right side / Cart totals */}
      <div className="w-full md:flex-1 lg:w-[35%] pb-10 md:pb-0 md:py-10">
        <Title text1={"CART"} text2={"TOTALS"} />

        <div className="mt-6 border border-gray-200 rounded-lg p-5 space-y-4 shadow-sm">
          {/* Subtotal */}
          <div className="flex justify-between text-sm text-gray-600">
            <span>Subtotal</span>
            <span>
              {currency}
              {subtotal}
            </span>
          </div>

          {/* Delivery */}
          <div className="flex justify-between text-sm text-green-600">
            <span>Delivery Charge</span>
            <span>
              {currency}
              {delivary_fee}
            </span>
          </div>

          {/* Discount
          <div className="flex justify-between text-sm text-green-600">
            <span>Discount</span>
            <span>{currency} $20.00</span>
          </div> */}

          <hr />

          {/* Total */}
          <div className="flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span>
              {currency}
              {totals}
            </span>
          </div>

          {/* Payment Note */}
          <p className="text-xs text-gray-400">
            Taxes and shipping calculated at checkout
          </p>

          {/* Place Order Button */}
          <button
            onClick={() => navigate("/orders")}
            type="submit"
            className="w-full mt-4 bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
          >
            PLACE ORDER
          </button>

          {/* Secure Checkout */}
          <p className="text-center text-xs text-gray-400 mt-2">
            🔒 Secure Checkout
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
