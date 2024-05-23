import React from "react";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { PiUsersThreeFill } from "react-icons/pi";
import { PiHandCoinsFill } from "react-icons/pi";
import { AiOutlineStock } from "react-icons/ai";

const Analytics = () => {
  return (
    <div className="w-full mt-6">
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="rounded-xl flex flex-col items-center justify-center gap-3 py-8 px-4 bg-yellow-50">
          <HiClipboardDocumentList className="text-6xl text-yellow-200" />
          <h1 className="text-3xl font-semibold">254</h1>
          <p className="text-sm font-medium text-gray-500">Jobs Posted</p>
        </div>
        <div className="rounded-xl flex flex-col items-center justify-center gap-3 py-8 px-4 bg-blue-50">
          <PiUsersThreeFill className="text-6xl text-blue-200" />
          <h1 className="text-3xl font-semibold">144</h1>
          <p className="text-sm font-medium text-gray-500">Applicants</p>
        </div>
        <div className="rounded-xl flex flex-col items-center justify-center gap-3 py-8 px-4 bg-orange-50">
          <PiHandCoinsFill className="text-6xl text-orange-200" />
          <h1 className="text-3xl font-semibold">244</h1>
          <p className="text-sm font-medium text-gray-500">Jobs Closed</p>
        </div>
        <div className="rounded-xl flex flex-col items-center justify-center gap-3 py-8 px-4 bg-green-50">
          <AiOutlineStock className="text-6xl text-green-300" />
          <h1 className="text-3xl font-semibold">60%</h1>
          <p className="text-sm font-medium text-gray-500">Hire Rate</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
