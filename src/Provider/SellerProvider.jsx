import { products } from "../assets/frontend_assets/assets";
import { SellerContext } from "../Context/SellerContext";

const SellerProvider = (props) => {
  const currency = "$";
  const delivery_fee = 60;

  const value = {
    currency,
    delivery_fee,
    products,
  };

  return (
    <SellerContext.Provider value={value}>
      {props.children}
    </SellerContext.Provider>
  );
};

export default SellerProvider;
