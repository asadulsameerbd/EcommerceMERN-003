import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="md:container md:mx-auto md:px-10">
      <Navbar />
      {/* main component */}
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
