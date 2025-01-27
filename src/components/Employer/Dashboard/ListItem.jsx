import React, { useState } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const ListItem = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleOpenDropdown = () => {
    setOpenDropdown(!openDropdown);
  };
  return (
    <div className="w-full flex flex-col gap-1 border-b py-2 relative">
      <p className="text-xs font-medium text-gray-400">Today</p>
      <div className="w-full flex items-center justify-between gap-1 lg:gap-3">
        <div className="w-10 h-10 lg:h-9 rounded-full">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="flex items-center w-full justify-between gap-1">
          <p className="text-xs lg:text-sm font-medium">Shoaib Muhammad</p>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-medium bg-yellow-50 px-4 py-1.5 lg:py-2 rounded-full text-yellow-500">
              In Review
            </span>
            <button onClick={handleOpenDropdown}>
              <HiOutlineDotsHorizontal className="text-lg" />
            </button>
            {openDropdown && (
              <div className="py-2 bg-white custom-shadow rounded-xl absolute right-2 top-14 flex flex-col z-20">
                <button className="text-xs font-medium w-full px-5 text-start py-1.5 hover:bg-gray-100">
                  View
                </button>
                <button className="text-xs font-medium w-full px-5 text-start py-1.5 hover:bg-gray-100">
                  Accept
                </button>
                <button className="text-xs font-medium w-full px-5 text-start py-1.5 hover:bg-gray-100">
                  Reject
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
