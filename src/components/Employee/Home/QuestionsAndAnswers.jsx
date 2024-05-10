import React from "react";
import { styles } from "../../../styles/styles";
import { questionandanswers } from "../../../constants/questionandanswers";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";

const QuestionsAndAnswers = () => {
  return (
    <div
      className={`${styles.paddingHorizontal} py-6 lg:py-12 flex flex-col items-center gap-y-6 text-center`}
    >
      <h1 className="text-xl font-medium">Questions & Answers</h1>
      <p className={`${styles.grayText}`}>
        Search all the open positions on the web. Get your own personalized
        salary <br /> estimate. Read reviews on over 30000+ companies worldwide.
      </p>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 pt-6">
        {questionandanswers.map((q, index) => {
          return (
            <div
              className="flex gap-2 items-start text-start md:px-4"
              key={index}
            >
              <div className=""><HiOutlineQuestionMarkCircle className="text-green-600 text-2xl"/></div>
              <div className="flex flex-col gap-2">
                <p className="text-base font-medium">{q.question}</p>
                <p className={`${styles.textSm}`}>{q.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionsAndAnswers;
