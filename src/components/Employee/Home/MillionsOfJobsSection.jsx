import React from "react";
import { styles } from "../../../styles/styles";
import { IoIosCheckmark } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";

const MillionsOfJobsSection = () => {
  return (
    <div className={`w-full ${styles.paddingHorizontal} py-6 lg:py-12`}>
      <div className="w-full grid grid-cols-2">
        <div className="col-span-2 lg:col-span-1"></div>
        <div className="col-span-2 lg:col-span-1 flex flex-col gap-y-6">
          <h1 className="text-2xl font-semibold">
            Millions of jobs. <br />
            Find the one that's right for you.
          </h1>
          <p className={`${styles.textSm}`}>
            Search all the open positions on the web. Get your own personalized
            salary <br /> estimate. Read reviews on over 30000+ companies
            worldwide.
          </p>
          <div className="flex flex-col gap-3">
            <div className={`flex items-center gap-2 ${styles.textSm}`}>
              <span className="w-4 h-4 rounded-full border border-green-600 flex items-center justify-center">
                <IoIosCheckmark className="text-xl text-green-600" />
              </span>
              Digital Marketing Solutions for Tomorrow
            </div>
            <div className={`flex items-center gap-2 ${styles.textSm}`}>
              <span className="w-4 h-4 rounded-full border border-green-600 flex items-center justify-center">
                <IoIosCheckmark className="text-xl text-green-600" />
              </span>
              Our Talented & Experienced Marketing Agency
            </div>
            <div className={`flex items-center gap-2 ${styles.textSm}`}>
              <span className="w-4 h-4 rounded-full border border-green-600 flex items-center justify-center">
                <IoIosCheckmark className="text-xl text-green-600" />
              </span>
              Create your own skin to match your brand
            </div>
          </div>
          <div>
          <button className="bg-green-600 text-white text-base font-medium px-4 py-2 rounded-lg flex items-center gap-2"><MdOutlineEmail/>Contact us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MillionsOfJobsSection;
