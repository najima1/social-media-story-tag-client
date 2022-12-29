import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header_nav from "../Header_nav/Header_nav";

const Layout = () => {
  return (
    <div>
      <Header_nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
