import React from "react";
import { styles } from "../../../styles/styles";
import JobCard from "../Global/JobCard";
import { Link } from "react-router-dom";
import { TiArrowRight } from "react-icons/ti";

const PopularJobsSection = () => {
  return (
    <section
      className={`${styles.paddingHorizontal} w-full flex flex-col items-center text-center gap-y-6 py-6 lg:py-12`}
    >
      <h1 className="text-xl font-medium">Popular Jobs</h1>
      <p className={`${styles.grayText}`}>
        Search all the open positions on the web. Get your own personalized
        salary <br /> estimate. Read reviews on over 30000+ companies worldwide.
      </p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
      </div>
      <div className="text-center">
        <Link to="/" className={`${styles.grayText} text-base flex items-center`}>See More Jobs <TiArrowRight className="text-xl"/></Link>
      </div>
    </section>
  );
};

export default PopularJobsSection;
