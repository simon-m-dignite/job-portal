import React, { useState } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const RecentJobApplications = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="col-span-2 lg:col-span-1 p-4 lg:p-6 border rounded-xl mt-6 w-full bg-white flex flex-col gap-3">
        <h1 className="text-xl font-semibold">Recent Applications</h1>
        <div className="w-full flex flex-col">
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
        <Link
          to="/employer/applications"
          className="text-sm font-semibold text-blue-600 underline flex items-center"
        >
          View All Applications{" "}
          <MdOutlineKeyboardArrowRight className="text-xl" />
        </Link>
      </div>
      <div className="col-span-2 lg:col-span-1 p-4 lg:p-6 border rounded-xl mt-6 w-full bg-white flex flex-col gap-3">
        <h1 className="text-xl font-semibold">Recent Posted Jobs</h1>
        <div className="w-full flex flex-col">
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
        <Link
          to="/employer/my-jobs"
          className="text-sm font-semibold text-blue-600 underline flex items-center"
        >
          View All Posted Jobs{" "}
          <MdOutlineKeyboardArrowRight className="text-xl" />
        </Link>
      </div>
    </div>
  );
};

export default RecentJobApplications;
