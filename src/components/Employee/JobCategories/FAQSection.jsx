import React from "react";
import { styles } from "../../../styles/styles";
import FAQAccordion from "./FAQAccordion";

const FAQSection = () => {
  return (
    <section className={`${styles.paddingHorizontal} w-full py-6 lg:pt-12 lg:pb-20`}>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2">
        <div className="col-span-2 lg:col-span-1"></div>
        <div className="col-span-2 lg:col-span-1 flex flex-col items-start lg:px-4 gap-y-6">
          <h1 className="text-xl font-medium">Frequently Asked Questions</h1>
          <p className={`${styles.grayText}`}>
            Search all the open positions on the web. Get your own personalized
            salary <br /> estimate. Read reviews on over 30000+ companies
            worldwide.
          </p>
          <div className="w-full flex flex-col gap-4">
            <FAQAccordion ques={"How does it work?"} ans={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."}/>
            <FAQAccordion ques={"Do I need a designer to use Jobstack"} ans={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."}/>
            <FAQAccordion ques={"What do i need to do to start selling?"} ans={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
