import { useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { SellerContext } from "../Context/SellerContext";

const SellerProvider = (props) => {
  const currency = "$";
  const delivery_fee = 60;
  const [cartItem, setCartItem] = useState([]);

  // add to cart
  const addToCart = (product) => {
    setCartItem((prev) => {
      const exists = prev.find(
        (item) =>
          item.id === product._id && item.selectedSize === product.selectedSize,
      );

      if (exists) {
        return prev.map((item) =>
          item.id === product._id && item.selectedSize === product.selectedSize
            ? { ...item, qty: item.qty + 1 }
            : item,
        );
      }

      return [
        ...prev,
        {
          ...product,
          id: product._id,
          qty: 1,
          image: Array.isArray(product.image)
            ? product.image[0]
            : product.image,
        },
      ];
    });
  };

  // increase quantity
  const increaseQTY = (id) => {
    setCartItem((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item,
      ),
    );
  };

  // decrease quantity
  const decreaseQty = (id) => {
    setCartItem((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0),
    );
  };

  // delete cart

  const removeItem = (id) => {
    setCartItem((prev) => prev.filter((item) => item.id !== id));
    return;
  };

  // calculated price

  const calculateTotals = (cartItem) => {
    const subtotal = cartItem.reduce(
      (sum, item) => sum + item.price * item.qty,
      0,
    );
    const totals = subtotal + delivery_fee;
    return {
      totals,
      delivary_fee: delivery_fee,
      subtotal,
    };
  };

  const value = {
    currency,
    delivery_fee,
    products,
    cartItem,
    addToCart,
    increaseQTY,
    decreaseQty,
    removeItem,
    calculateTotals,
  };

  return (
    <SellerContext.Provider value={value}>
      {props.children}
    </SellerContext.Provider>
  );
};

export default SellerProvider;
