import React from "react";
import { styles } from "../../../styles/styles";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";

const JobCard = () => {
  return (
    <div className="flex flex-col items-start gap-y-4 text-start border rounded-xl p-6 group hover:bg-green-50 transition-all duration-200">
      <div className="w-full flex items-center justify-between">
        <div className="w-12 h-12 border rounded-full flex items-center justify-center"><FaFacebook className="w-[75%] h-[75%] text-blue-600"/></div>
        <div className="flex items-center gap-2">
            <button className="w-10 h-10 border rounded-full flex items-center justify-center"><IoMdHeartEmpty className="text-lg text-green-600"/></button>
            <Link to="/employee/jobs/1444" className="w-10 h-10 flex items-center justify-center border rounded-full bg-green-100 group-hover:bg-green-600 transition-all duration-200"><FiArrowUpRight className="text-lg text-green-600 group-hover:text-white transition-all duration-200"/></Link>
        </div>
      </div>
      <h2 className="font-medium text-base">Facebook</h2>
      <h1 className="text-lg font-medium">Web Designer / Developer</h1>
      <p className={`${styles.textSm}`}>Looking for an experienced Web Designer for an our company.</p>
      <div className="w-full flex items-center justify-evenly">
        <div className="flex items-center gap-1 text-orange-600 bg-orange-100 text-sm px-4 py-1 rounded-full">Full Time</div>
        <div className="flex items-center gap-1 text-purple-600 bg-purple-100 text-sm px-4 py-1 rounded-full">$4,000-$6,000</div>
        <div className="flex items-center gap-1 text-green-600 bg-green-100 text-sm px-4 py-1 rounded-full">Autralia</div>
      </div>
    </div>
  );
};

export default JobCard;
