import React from "react";
import { styles } from "../../../styles/styles";
import { IoIosCheckmark } from "react-icons/io";

const VideoSection = () => {
  return (
    <div
      className={`${styles.paddingHorizontal} w-full py-6 lg:py-12 h-screen`}
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 h-full">
        <div className="col-span-2 lg:col-span-1 h-full bg-gray-100 lg:rounded-l-lg">
            {/* <img src="" alt="" className="w-full"/> */}
        </div>
        <div className="col-span-2 flex flex-col justify-center items-start px-12 gap-6 lg:col-span-1 bg-green-600 h-full lg:rounded-r-xl text-white">
          <h1 className="text-4xl font-semibold">Get the job of your dreams quickly.</h1>
          <p className="text-base">
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 30000+ companies worldwide.
          </p>
          <div className="flex flex-col gap-3">
            <div className={`flex items-center gap-2 text-gray-300`}>
              <span className="w-4 h-4 rounded-full border border-white-100 flex items-center justify-center">
                <IoIosCheckmark className="text-xl text-white" />
              </span>
              Digital Marketing Solutions for Tomorrow
            </div>
            <div className={`flex items-center gap-2 text-gray-300`}>
              <span className="w-4 h-4 rounded-full border border-white-100 flex items-center justify-center">
                <IoIosCheckmark className="text-xl text-white" />
              </span>
              Our Talented & Experienced Marketing Agency
            </div>
            <div className={`flex items-center gap-2 text-gray-300`}>
              <span className="w-4 h-4 rounded-full border border-white-100 flex items-center justify-center">
                <IoIosCheckmark className="text-xl text-white" />
              </span>
              Create your own skin to match your brand
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
