import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoNotificationsOutline } from "react-icons/io5";
import { HiOutlineLogout } from "react-icons/hi";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaRegRectangleList } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { LiaClipboardListSolid } from "react-icons/lia";

const Sidebar = () => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("Dashboard");
  const location = useLocation();

  const navigateToLink = (link, name) => {
    navigate(link);
    setActiveLink(name);
  };
  return (
    <div className="w-full py-6 px-2 lg:px-4 flex flex-col items-center gap-y-6">
      <div>
        <h1 className="text-lg font-semibold">Jobstack</h1>
      </div>
      <ul className="w-full flex flex-col gap-y-2">
        <li className={`w-full text-black`}>
          <button
            onClick={() => navigateToLink("/employer/dashboard", "Dashboard")}
            className={`text-sm flex items-center gap-3 font-medium w-full py-3 px-6 rounded-lg border ${
              location?.pathname === "/employer/dashboard"
                ? "bg-green-600 text-white"
                : "bg-transparent text-black hover:bg-green-600 hover:text-white transition-all duration-300"
            }`}
          >
            <LuLayoutDashboard className="text-lg" /> Dashboard
          </button>
        </li>
        <li className="w-full">
          <button
            onClick={() => navigateToLink("/employer/my-jobs", "My-Jobs")}
            className={`text-sm flex items-center gap-3 font-medium w-full py-3 px-6 rounded-lg border ${
              location?.pathname === "/employer/my-jobs"
                ? "bg-green-600 text-white"
                : "bg-transparent text-black hover:bg-green-600 hover:text-white transition-all duration-300"
            }`}
          >
            <FaRegRectangleList className="text-lg" /> My Jobs
          </button>
        </li>
        <li className="w-full ">
          <button
            onClick={() =>
              navigateToLink("/employer/applications", "Applications")
            }
            className={`text-sm flex items-center gap-3 font-medium w-full py-3 px-6 rounded-lg border ${
              location?.pathname === "/employer/applications"
                ? "bg-green-600 text-white"
                : "bg-transparent text-black hover:bg-green-600 hover:text-white transition-all duration-300"
            }`}
          >
            <LiaClipboardListSolid className="text-lg" /> Applications
          </button>
        </li>
        <li className=" w-full">
          <button
            onClick={() =>
              navigateToLink("/employer/notifications", "Notifications")
            }
            className={`text-sm flex items-center gap-3 font-medium w-full py-3 px-6 rounded-lg border ${
              location?.pathname === "/employer/notifications"
                ? "bg-green-600 text-white"
                : "bg-transparent text-black hover:bg-green-600 hover:text-white transition-all duration-300"
            }`}
          >
            <IoNotificationsOutline className="text-lg" /> Notifications
          </button>
        </li>
        <li className="w-full ">
          <button
            onClick={() => navigateToLink("/employer/settings", "Settings")}
            className={`text-sm flex items-center gap-3 font-medium w-full py-3 px-6 rounded-lg border ${
              location?.pathname === "/employer/settings"
                ? "bg-green-600 text-white"
                : "bg-transparent text-black hover:bg-green-600 hover:text-white transition-all duration-300"
            }`}
          >
            <IoSettingsOutline className="text-lg" /> Settings
          </button>
        </li>
        <li className={`w-full  text-white`}>
          <button
            onClick={() => navigate("/login")}
            className="text-sm font-medium w-full py-3 px-6 flex items-center gap-3 text-black border rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300"
          >
            <HiOutlineLogout className="text-lg" /> Logout
          </button>
        </li>
      </ul>
      {/* <div className="">
        <button className="text-sm font-medium flex items-center gap-2 text-red-600"><HiOutlineLogout className="text-lg"/> Logout</button>
      </div> */}
    </div>
  );
};

export default Sidebar;
