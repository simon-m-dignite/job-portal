import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Navbar2 from "./Navbar2";

const Layout = ({ pages }) => {
  return (
    <div>
      <div className="w-full hidden lg:block">
        <Navbar />
      </div>
      <div className="w-full block lg:hidden">
        <Navbar2 />
      </div>
      {pages}
      <Footer />
    </div>
  );
};

export default Layout;
