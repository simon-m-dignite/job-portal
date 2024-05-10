import React from "react";
import { styles } from "../../../styles/styles";
import JobCard from "../Global/JobCard";

const JobsGrid = () => {
  return (
    <div className={`${styles.paddingHorizontal} py-6 lg:pb-8 lg:pt-12`}>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </div>
  );
};

export default JobsGrid;
