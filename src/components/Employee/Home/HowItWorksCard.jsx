import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../../../styles/styles";

const HowItWorksCard = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-6 hover:shadow-md transition-all duration-300">
      <div></div>
      <p className="text-lg font-medium">Create Account</p>
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
  );
};

export default HowItWorksCard;
