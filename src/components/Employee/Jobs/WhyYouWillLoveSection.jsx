import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../../../styles/styles";
import { TiArrowRight } from "react-icons/ti";

const WhyYouWillLoveSection = () => {
  return (
    <div
      className={`${styles.paddingHorizontal} py-6 lg:py-12 flex flex-col gap-y-6 items-center text-center`}
    >
      <h1 className="text-xl font-medium">
        Here's why you'll love it Jobstack
      </h1>
      <p className={`${styles.grayText}`}>
        Search all the open positions on the web. Get your own personalized
        salary <br /> estimate. Read reviews on over 30000+ companies worldwide.
      </p>
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        <div className="flex flex-col items-center justify-center gap-4 p-6 group hover:bg-green-100 transition-all duration-500 rounded-2xl border">
          <div className="w-14 h-14 bg-green-100 rounded-lg group-hover:bg-green-600 transition-all duration-500"></div>
          <p className="text-lg font-medium">
            24/7 Support
          </p>
          <p className={`${styles.grayText} text-sm`}>
            Many desktop publishing now use and a search for job.
          </p>
          <Link
            to={"/employee/home"}
            className="text-sm text-green-600 hover:underline transition-all duration-300 flex items-center"
          >
            Read More <TiArrowRight className="text-xl" />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 p-6 group hover:bg-green-100 transition-all duration-500 rounded-2xl border">
          <div className="w-14 h-14 bg-green-100 rounded-lg group-hover:bg-green-600 transition-all duration-500"></div>
          <p className="text-lg font-medium">
            Tech & Startup Jobs
          </p>
          <p className={`${styles.grayText} text-sm`}>
            Many desktop publishing now use and a search for job.
          </p>
          <Link
            to={"/employee/home"}
            className="text-sm text-green-600 hover:underline transition-all duration-300 flex items-center"
          >
            Read More <TiArrowRight className="text-xl" />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 p-6 group hover:bg-green-100 transition-all duration-500 rounded-2xl border">
          <div className="w-14 h-14 bg-green-100 rounded-lg group-hover:bg-green-600 transition-all duration-500"></div>
          <p className="text-lg font-medium">
            Quick & Easy
          </p>
          <p className={`${styles.grayText} text-sm`}>
            Many desktop publishing now use and a search for job.
          </p>
          <Link
            to={"/employee/home"}
            className="text-sm text-green-600 hover:underline transition-all duration-300 flex items-center"
          >
            Read More <TiArrowRight className="text-xl" />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 p-6 group hover:bg-green-100 transition-all duration-500 rounded-2xl border">
          <div className="w-14 h-14 bg-green-100 rounded-lg group-hover:bg-green-600 transition-all duration-500"></div>
          <p className="text-lg font-medium">
            Apply Job or Hire
          </p>
          <p className={`${styles.grayText} text-sm`}>
            Many desktop publishing now use and a search for job.
          </p>
          <Link
            to={"/employee/home"}
            className="text-sm text-green-600 hover:underline transition-all duration-300 flex items-center"
          >
            Read More <TiArrowRight className="text-xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhyYouWillLoveSection;
