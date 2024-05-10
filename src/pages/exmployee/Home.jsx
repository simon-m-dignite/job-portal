import React from "react";
import Hero from "../../components/Employee/Home/Hero";
import Navbar from "../../components/Employee/Global/Navbar";
import HowItWorks from "../../components/Employee/Home/HowItWorks";
import BrowseByCategories from "../../components/Employee/Home/BrowseByCategories";
import PopularJobsSection from "../../components/Employee/Home/PopularJobsSection";
import MillionsOfJobsSection from "../../components/Employee/Home/MillionsOfJobsSection";
import QuestionsAndAnswers from "../../components/Employee/Home/QuestionsAndAnswers";

const Home = () => {
  return (
    <div className={`w-full`}>
      <Hero />
      <HowItWorks />
      <BrowseByCategories />
      <PopularJobsSection />
      <MillionsOfJobsSection />
      <QuestionsAndAnswers />
    </div>
  );
};

export default Home;
