import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styles } from "../../../styles/styles";
import { IoSearchOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { SlSettings } from "react-icons/sl";
import { IoIosLogOut } from "react-icons/io";
import { TbMenuDeep } from "react-icons/tb";
import { LuMenu } from "react-icons/lu";

const Navbar2 = () => {
  const [scrolling, setScrolling] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const navigate = useNavigate();


  return (
    <div
      className={`w-full ${styles.paddingHorizontal} fixed top-0 border-b py-6 flex items-center justify-between z-30 bg-white`}
    >
      <h1 className={`text-2xl font-semibold`}>Jobstack</h1>
      <div className="hidden lg:flex items-center gap-x-8 relative">
        <Link
          to="/employee/home"
          className={`text-base hover:text-green-600 transition-all duration-200`}
        >
          Home
        </Link>
        <Link
          to="/employee/jobs"
          className={`text-base hover:text-green-600 transition-all duration-200`}
        >
          Jobs
        </Link>
        <Link
          to="/employee/about-us"
          className={`text-base hover:text-green-600 transition-all duration-200`}
        >
          About Us
        </Link>
        <Link
          to="/employee/contact-us"
          className={`text-base hover:text-green-600 transition-all duration-200`}
        >
          Contact Us
        </Link>
        <div className="flex items-center w-80 gap-x-2 relative">
          <div className="border bg-white flex items-center w-full justify-between rounded-full px-2">
            <input
              type="text"
              placeholder="Search"
              className="bg-white w-full h-10 rounded-full pl-1 text-sm outline-none"
            />
            <IoSearchOutline className="text-2xl text-gray-400" />
          </div>
          <button
            className="w-12 h-10 rounded-full bg-green-600"
            onClick={() => setShowNav(!showNav)}
          >
            <img
              src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full rounded-full"
              alt=""
            />
          </button>
          {showNav && (
            <div className="w-40 h-auto bg-white absolute right-0 top-12 rounded-lg py-2 flex flex-col">
              <Link
                to="/employee/user-profile"
                className="text-base w-full px-4 py-2 hover:bg-gray-100 flex items-center justify-start gap-2 text-gray-600 hover:text-green-600 transition-all duration-300"
              >
                <FiUser className="text-base" /> Profile
              </Link>
              <Link
                to="/settings"
                className="text-base w-full px-4 py-2 hover:bg-gray-100 flex items-center justify-start gap-2 text-gray-600 hover:text-green-600 transition-all duration-300"
              >
                <SlSettings className="text-base" /> Settings
              </Link>
              <button onClick={()=> navigate("/login")} className="text-base w-full px-4 py-2 hover:bg-gray-100 flex items-center justify-start gap-2 text-gray-600 hover:text-red-600 transition-all duration-300">
                <IoIosLogOut className="text-lg" /> Logout
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="flex lg:hidden items-center gap-4">
        <div className=" flex items-center">
          <button
            className="w-8 h-8 rounded-full bg-green-600"
            onClick={() => setShowNav(!showNav)}
          >
            <img
              src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full rounded-full"
              alt=""
            />
          </button>
          {showNav && (
            <div className="w-40 h-auto bg-white absolute right-14 top-16 rounded-lg py-2 flex flex-col shadow-xl">
              <Link
                to="/employee/user-profile"
                className="text-base w-full px-4 py-2 hover:bg-gray-100 flex items-center justify-start gap-2 text-gray-600 hover:text-green-600 transition-all duration-300"
              >
                <FiUser className="text-base" /> Profile
              </Link>
              <Link
                to="/settings"
                className="text-base w-full px-4 py-2 hover:bg-gray-100 flex items-center justify-start gap-2 text-gray-600 hover:text-green-600 transition-all duration-300"
              >
                <SlSettings className="text-base" /> Settings
              </Link>
              <button className="text-base w-full px-4 py-2 hover:bg-gray-100 flex items-center justify-start gap-2 text-gray-600 hover:text-red-600 transition-all duration-300">
                <IoIosLogOut className="text-lg" /> Logout
              </button>
            </div>
          )}
        </div>
        <button className="block lg:hidden">
          <LuMenu className="text-2xl text-black" />
        </button>
      </div>
    </div>
  );
};

export default Navbar2;
