import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Collection from "../Pages/Collection";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import ProductDetails from "../Pages/ProductDetails";
import Cart from "../Pages/Cart";
import PlaceOrder from "../Pages/PlaceOrder";

export const router = createBrowserRouter([
  {
    path: "",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "collection",
        Component: Collection,
      },
      {
        path: "product/:id",
        Component: ProductDetails,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "cart",
        Component: Cart,
      },
      {
        path: "place-order",
        Component: PlaceOrder,
      },
    ],
  },
]);
