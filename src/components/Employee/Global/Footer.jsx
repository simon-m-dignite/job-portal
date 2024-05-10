import React from "react";
import { styles } from "../../../styles/styles";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className={`w-full py-6 lg:pt-12 lg:pb-10 bg-slate-950`}
    >
      <div className={`w-full flex flex-col md:flex-row justify-start items-start lg:justify-between lg:items-center gap-y-6 lg:gap-y-0 ${styles.paddingHorizontal}`}>
        <h1 className="text-white text-2xl font-medium">Jobstack</h1>
        <div className="flex items-center flex-wrap gap-6">
          <Link to="/home" className="text-white text-sm font-normal">
            Home
          </Link>
          <Link to="/home" className="text-white text-sm font-normal">
            How it works
          </Link>
          <Link to="/home" className="text-white text-sm font-normal">
            Create a job
          </Link>
          <Link to="/home" className="text-white text-sm font-normal">
            About Us
          </Link>
          <Link to="/home" className="text-white text-sm font-normal">
            Contact Us
          </Link>
        </div>
      </div>
      <div className="w-full border border-gray-800 my-6"/>
      <div className={`w-full flex flex-col md:flex-row justify-between items-center ${styles.paddingHorizontal}`}>
        <p className={`${styles.textSm}`}>© 2024 Jobstack. Designed  by Shoaib Muhammad.</p>
      </div>
    </footer>
  );
};

export default Footer;
