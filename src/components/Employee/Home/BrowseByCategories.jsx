import React from "react";
import { styles } from "../../../styles/styles";
import { Link } from "react-router-dom";
import { TiArrowRight } from "react-icons/ti";
import CategoryCard from "./CategoryCard";

const BrowseByCategories = () => {
  return (
    <div className={`w-full flex flex-col gap-y-6 ${styles.paddingHorizontal}`}>
      <div className="w-full flex flex-col md:flex-row gap-y-6 items-end justify-between">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-xl font-medium">Browse By Categories</h1>
          <p className={`${styles.grayText}`}>
            Search your career opportunity with our categories
          </p>
        </div>
        <Link to="/employee/job-categories" className={`${styles.textSm} flex items-center hover:text-green-600 transition-all duration-200`}>
          All Categories <TiArrowRight className="text-xl"/>
        </Link>
      </div>
      <div className="w-full grid grid-cols-cols-2 lg:grid-cols-4 gap-6 py-6">
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
      </div>
    </div>
  );
};

export default BrowseByCategories;
