import React from "react";
import { styles } from "../../../styles/styles";
import HowItWorksCard from "./HowItWorksCard";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <div
      className={`${styles.paddingHorizontal} w-full py-6 lg:py-20 flex flex-col items-center justify-start text-center gap-y-6`}
    >
      <h1 className="font-medium text-2xl">How it's Work?</h1>
      <p className={`text-sm ${styles.grayText}`}>
        Search all the open positions on the web. Get your own personalized
        salary <br /> estimate. Read reviews on over 30000+ companies worldwide.
      </p>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
        <div className="flex flex-col items-center justify-center gap-4 p-6 hover:shadow-md transition-all duration-300 rounded-2xl">
          <div className="w-14 h-14 bg-green-100 rounded-lg"></div>
          <p className="text-lg font-medium hover:text-green-600 transition-all duration-200">
            Create Account
          </p>
          <p className={`${styles.grayText} text-sm`}>
            The phrasal sequence of the is now so that many campaign and benefit
          </p>
          <Link
            to={"/employee/home"}
            className="text-sm text-green-600 hover:underline transition-all duration-300"
          >
            Read More
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 p-6 hover:shadow-md transition-all duration-300 rounded-2xl">
          <div className="w-14 h-14 bg-green-100 rounded-lg"></div>
          <p className="text-lg font-medium hover:text-green-600 transition-all duration-200">
            Complete Your Profile
          </p>
          <p className={`${styles.grayText} text-sm`}>
            The phrasal sequence of the is now so that many campaign and benefit
          </p>
          <Link
            to={"/employee/home"}
            className="text-sm text-green-600 hover:underline transition-all duration-300"
          >
            Read More
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 p-6 hover:shadow-md transition-all duration-300 rounded-2xl">
          <div className="w-14 h-14 bg-green-100 rounded-lg"></div>
          <p className="text-lg font-medium hover:text-green-600 transition-all duration-200">
            Apply Job or Hire
          </p>
          <p className={`${styles.grayText} text-sm`}>
            The phrasal sequence of the is now so that many campaign and benefit
          </p>
          <Link
            to={"/employee/home"}
            className="text-sm text-green-600 hover:underline transition-all duration-300"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
