import React from "react";
import { styles } from "../../../styles/styles";
import { TiArrowRight } from "react-icons/ti";
import { Link } from "react-router-dom";

const CategoryGrid = () => {
  return (
    <div className={`${styles.paddingHorizontal} w-full py-6 lg:py-12`}>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div className="border p-6 group hover:bg-green-50 transition-all duration-300 rounded-xl flex flex-col items-center justify-center text-center gap-y-4">
          <div className="w-16 h-16 rounded-xl bg-green-100 group-hover:bg-green-600 transition-all duration-300 flex"></div>
          <h1 className="text-base font-medium">Business Development</h1>
          <p className={`${styles.textSm}`}>74 Jobs</p>
        </div>
        <div className="border p-6 group hover:bg-green-50 transition-all duration-300 rounded-xl flex flex-col items-center justify-center text-center gap-y-4">
          <div className="w-16 h-16 rounded-xl bg-green-100 group-hover:bg-green-600 transition-all duration-300 flex"></div>
          <h1 className="text-base font-medium">Marketing & Communication</h1>
          <p className={`${styles.textSm}`}>74 Jobs</p>
        </div>
        <div className="border p-6 group hover:bg-green-50 transition-all duration-300 rounded-xl flex flex-col items-center justify-center text-center gap-y-4">
          <div className="w-16 h-16 rounded-xl bg-green-100 group-hover:bg-green-600 transition-all duration-300 flex"></div>
          <h1 className="text-base font-medium">Project Management</h1>
          <p className={`${styles.textSm}`}>74 Jobs</p>
        </div>
        <div className="border p-6 group hover:bg-green-50 transition-all duration-300 rounded-xl flex flex-col items-center justify-center text-center gap-y-4">
          <div className="w-16 h-16 rounded-xl bg-green-100 group-hover:bg-green-600 transition-all duration-300 flex"></div>
          <h1 className="text-base font-medium">Customer Service</h1>
          <p className={`${styles.textSm}`}>74 Jobs</p>
        </div>
        <div className="border p-6 group hover:bg-green-50 transition-all duration-300 rounded-xl flex flex-col items-center justify-center text-center gap-y-4">
          <div className="w-16 h-16 rounded-xl bg-green-100 group-hover:bg-green-600 transition-all duration-300 flex"></div>
          <h1 className="text-base font-medium">Software Engineering</h1>
          <p className={`${styles.textSm}`}>74 Jobs</p>
        </div>
        <div className="border p-6 group hover:bg-green-50 transition-all duration-300 rounded-xl flex flex-col items-center justify-center text-center gap-y-4">
          <div className="w-16 h-16 rounded-xl bg-green-100 group-hover:bg-green-600 transition-all duration-300 flex"></div>
          <h1 className="text-base font-medium">Human Resource HR</h1>
          <p className={`${styles.textSm}`}>74 Jobs</p>
        </div>
        <div className="border p-6 group hover:bg-green-50 transition-all duration-300 rounded-xl flex flex-col items-center justify-center text-center gap-y-4">
          <div className="w-16 h-16 rounded-xl bg-green-100 group-hover:bg-green-600 transition-all duration-300 flex"></div>
          <h1 className="text-base font-medium">It & Networking</h1>
          <p className={`${styles.textSm}`}>74 Jobs</p>
        </div>
        <div className="border p-6 group hover:bg-green-50 transition-all duration-300 rounded-xl flex flex-col items-center justify-center text-center gap-y-4">
          <div className="w-16 h-16 rounded-xl bg-green-100 group-hover:bg-green-600 transition-all duration-300 flex"></div>
          <h1 className="text-base font-medium">Sales & Marketing</h1>
          <p className={`${styles.textSm}`}>74 Jobs</p>
        </div>
        <div className="border p-6 group hover:bg-green-50 transition-all duration-300 rounded-xl flex flex-col items-center justify-center text-center gap-y-4">
          <div className="w-16 h-16 rounded-xl bg-green-100 group-hover:bg-green-600 transition-all duration-300 flex"></div>
          <h1 className="text-base font-medium">Project Manager</h1>
          <p className={`${styles.textSm}`}>74 Jobs</p>
        </div>
        <div className="border p-6 group hover:bg-green-50 transition-all duration-300 rounded-xl flex flex-col items-center justify-center text-center gap-y-4">
          <div className="w-16 h-16 rounded-xl bg-green-100 group-hover:bg-green-600 transition-all duration-300 flex"></div>
          <h1 className="text-base font-medium">Data Science</h1>
          <p className={`${styles.textSm}`}>74 Jobs</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryGrid;
