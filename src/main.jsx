import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Router/Routes.jsx";
import SellerProvider from "./Provider/SellerProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SellerProvider>
      <RouterProvider router={router} />
    </SellerProvider>
  </StrictMode>,
);
