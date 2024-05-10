import React from "react";
import { styles } from "../../../styles/styles";
import { BiSolidShoppingBag } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import JobSearchContainer from "../Global/JobSearchContainer";

const Hero = () => {
  return (
    <div className="w-full h-auto py-24 md:py-0 md:h-screen flex flex-col justify-center items-center gap-y-6 text-center px-4 home-hero">
      <h1 className="text-white text-5xl md:text-6xl lg:text-6xl font-medium">
        Got Talent ? <br />
        Meet Opportunity
      </h1>
      <p className={`text-lg text-gray-200`}>
        Find Jobs, Employment & Career Opportunities. Some of the companies{" "}
        <br />
        we've helped recruit excellent applicants over the years.
      </p>
      <JobSearchContainer/>
      <p className="text-base text-gray-200">Popular searches: <span className="text-gray-400">Designer, Developer, Web, IOS, PHP Senior Engineer</span></p>
    </div>
  );
};

export default Hero;
