import React from "react";
import { styles } from "../../../styles/styles";
import { Link } from "react-router-dom";
import { TiArrowRight } from "react-icons/ti";

const FeaturesSection = () => {
  return (
    <div className={`${styles.paddingHorizontal} py-6 lg:py-12`}>
      <div className="w-full flex flex-col items-center justify-center gap-y-6 text-center">
        <h1 className="text-xl font-medium">Jobstack Features</h1>
        <p className={`${styles.textSm}`}>
          Search all the open positions on the web. Get your own personalized
          salary <br /> estimate. Read reviews on over 30000+ companies
          worldwide.
        </p>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="shadow flex flex-col items-center justify-center gap-4 p-6 group hover:bg-green-50 transition-all duration-300 rounded-2xl">
            <div className="w-14 h-14 bg-green-100 group-hover:bg-green-600 transition-all duration-300 rounded-lg"></div>
            <p className="text-lg font-medium hover:text-green-600 transition-all duration-200">
              24/7 Support
            </p>
            <p className={`${styles.textSm} text-sm`}>
              Many desktop publishing now use and a search for job.
            </p>
            <Link
              to={"/employee/home"}
              className="text-sm text-green-600 hover:underline transition-all duration-300 flex items-center"
            >
              Read More <TiArrowRight className="text-lg" />
            </Link>
          </div>
          <div className="shadow flex flex-col items-center justify-center gap-4 p-6 group hover:bg-green-50 transition-all duration-300 rounded-2xl">
            <div className="w-14 h-14 bg-green-100 group-hover:bg-green-600 transition-all duration-300 rounded-lg"></div>
            <p className="text-lg font-medium hover:text-green-600 transition-all duration-200">
              Tech & Startup Jobs
            </p>
            <p className={`${styles.textSm} text-sm`}>
              Many desktop publishing now use and a search for job.
            </p>
            <Link
              to={"/employee/home"}
              className="text-sm text-green-600 hover:underline transition-all duration-300 flex items-center"
            >
              Read More <TiArrowRight className="text-lg" />
            </Link>
          </div>
          <div className="shadow flex flex-col items-center justify-center gap-4 p-6 group hover:bg-green-50 transition-all duration-300 rounded-2xl">
            <div className="w-14 h-14 bg-green-100 group-hover:bg-green-600 transition-all duration-300 rounded-lg"></div>
            <p className="text-lg font-medium hover:text-green-600 transition-all duration-200">
              Quick & Easy
            </p>
            <p className={`${styles.textSm} text-sm`}>
              Many desktop publishing now use and a search for job.
            </p>
            <Link
              to={"/employee/home"}
              className="text-sm text-green-600 hover:underline transition-all duration-300 flex items-center"
            >
              Read More <TiArrowRight className="text-lg" />
            </Link>
          </div>
          <div className="shadow flex flex-col items-center justify-center gap-4 p-6 group hover:bg-green-50 transition-all duration-300 rounded-2xl">
            <div className="w-14 h-14 bg-green-100 group-hover:bg-green-600 transition-all duration-300 rounded-lg"></div>
            <p className="text-lg font-medium hover:text-green-600 transition-all duration-200">
              Save Time
            </p>
            <p className={`${styles.textSm} text-sm`}>
              Many desktop publishing now use and a search for job.
            </p>
            <Link
              to={"/employee/home"}
              className="text-sm text-green-600 hover:underline transition-all duration-300 flex items-center"
            >
              Read More <TiArrowRight className="text-lg" />
            </Link>
          </div>
          <div className="shadow flex flex-col items-center justify-center gap-4 p-6 group hover:bg-green-50 transition-all duration-300 rounded-2xl">
            <div className="w-14 h-14 bg-green-100 group-hover:bg-green-600 transition-all duration-300 rounded-lg"></div>
            <p className="text-lg font-medium hover:text-green-600 transition-all duration-200">
              Apply with confidence
            </p>
            <p className={`${styles.textSm} text-sm`}>
              Many desktop publishing now use and a search for job.
            </p>
            <Link
              to={"/employee/home"}
              className="text-sm text-green-600 hover:underline transition-all duration-300 flex items-center"
            >
              Read More <TiArrowRight className="text-lg" />
            </Link>
          </div>
          <div className="shadow flex flex-col items-center justify-center gap-4 p-6 group hover:bg-green-50 transition-all duration-300 rounded-2xl">
            <div className="w-14 h-14 bg-green-100 group-hover:bg-green-600 transition-all duration-300 rounded-lg"></div>
            <p className="text-lg font-medium hover:text-green-600 transition-all duration-200">
              Reduce Hiring Bias
            </p>
            <p className={`${styles.textSm} text-sm`}>
              Many desktop publishing now use and a search for job.
            </p>
            <Link
              to={"/employee/home"}
              className="text-sm text-green-600 hover:underline transition-all duration-300 flex items-center"
            >
              Read More <TiArrowRight className="text-lg" />
            </Link>
          </div>
          <div className="shadow flex flex-col items-center justify-center gap-4 p-6 group hover:bg-green-50 transition-all duration-300 rounded-2xl">
            <div className="w-14 h-14 bg-green-100 group-hover:bg-green-600 transition-all duration-300 rounded-lg"></div>
            <p className="text-lg font-medium hover:text-green-600 transition-all duration-200">
              Proactive Employers
            </p>
            <p className={`${styles.textSm} text-sm`}>
              Many desktop publishing now use and a search for job.
            </p>
            <Link
              to={"/employee/home"}
              className="text-sm text-green-600 hover:underline transition-all duration-300 flex items-center"
            >
              Read More <TiArrowRight className="text-lg" />
            </Link>
          </div>
          <div className="shadow flex flex-col items-center justify-center gap-4 p-6 group hover:bg-green-50 transition-all duration-300 rounded-2xl">
            <div className="w-14 h-14 bg-green-100 group-hover:bg-green-600 transition-all duration-300 rounded-lg"></div>
            <p className="text-lg font-medium hover:text-green-600 transition-all duration-200">
              No Missed Opportunities
            </p>
            <p className={`${styles.textSm} text-sm`}>
              Many desktop publishing now use and a search for job.
            </p>
            <Link
              to={"/employee/home"}
              className="text-sm text-green-600 hover:underline transition-all duration-300 flex items-center"
            >
              Read More <TiArrowRight className="text-lg" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
