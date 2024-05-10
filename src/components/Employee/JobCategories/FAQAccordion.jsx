import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { styles } from "../../../styles/styles";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

const FAQAccordion = ({ ques, ans }) => {
  const [showAccordion, setShowAccordion] = useState(false);
  const handleShowAccordion = () => {
    setShowAccordion(!showAccordion);
  };
  return (
    <div className="w-full flex flex-col gap-y-1 border rounded-xl shadow-sm">
      <div
        className={`w-full flex justify-between items-center rounded-xl p-4 cursor-pointer transition-all duration-500 ${
          showAccordion ? "bg-gray-100" : "bg-white"
        }`}
        onClick={handleShowAccordion}
      >
        <div className={`w-full gap-y-2`}>
          <h3
            className={`text-base font-medium ${
              showAccordion ? "text-green-600" : "text-black"
            }`}
          >
            {ques}
          </h3>
        </div>
        <button onClick={handleShowAccordion}>
          {showAccordion ? (
            <MdKeyboardArrowUp
              className={`text-base ${
                showAccordion ? "text-green-600" : "text-black"
              }`}
            />
          ) : (
            <MdOutlineKeyboardArrowDown
              className={`text-base ${
                showAccordion ? "text-green-600" : "text-black"
              }`}
            />
          )}
        </button>
      </div>
      {showAccordion && (
        <div
          className={`transition-all duration-300 p-4 text-lg font-normal ${styles.textSm}`}
        >
          {ans}
        </div>
      )}
    </div>
  );
};

export default FAQAccordion;
