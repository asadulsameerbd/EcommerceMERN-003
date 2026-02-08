import { useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { SellerContext } from "../Context/SellerContext";

const SellerProvider = (props) => {
  const currency = "$";
  const delivery_fee = 60;
  const [cartItem, setCartItem] = useState([]);

  // add to cart
  const addToCart = (product) => {
    const exists = cartItem.find((item) => item.id === product.id);

    if (exists) {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        ),
      );
    } else {
      setCartItem([
        ...cartItem,
        {
          ...product,
          qty: 1,
          image: Array.isArray(product.image)
            ? product.image[0]
            : product.image,
        },
      ]);
    }
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

  const value = {
    currency,
    delivery_fee,
    products,
    cartItem,
    addToCart,
    increaseQTY,
    decreaseQty,
  };

  return (
    <SellerContext.Provider value={value}>
      {props.children}
    </SellerContext.Provider>
  );
};

export default SellerProvider;
