import React from "react";
import CommonHeader from "../../components/Employee/Global/CommonHeader";
import JobsGrid from "../../components/Employee/Jobs/JobsGrid";
import WhyYouWillLoveSection from "../../components/Employee/Jobs/WhyYouWillLoveSection";
import JobSearchContainer from "../../components/Employee/Global/JobSearchContainer";

const Jobs = () => {
  return (
    <div className="relative">
      <CommonHeader title={"Job Vacancies"} />
      <div className="w-full relative top-[-40px] px-6 lg:px-0">
        <JobSearchContainer />
      </div>
      <JobsGrid />
      <WhyYouWillLoveSection />
    </div>
  );
};

export default Jobs;
