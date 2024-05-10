import React from "react";
import { styles } from "../../../styles/styles";
import { ContactUsImg } from "../../../assets/export";

const ContactForm = () => {
  return (
    <div
      className={`${styles.paddingHorizontal} py-6 lg:py-12 h-auto lg:h-screen`}
    >
      <div className="w-full grid h-auto lg:h-screen grid-cols-1 lg:grid-cols-2">
        <div className="col-span-2 lg:col-span-1 h-full flex items-center justify-center">
            <img src={ContactUsImg} alt="" className="scale-110"/>
        </div>
        <div className="col-span-2 lg:col-span-1 h-full flex items-center justify-center">
          <form className="shadow w-full lg:w-[70%] p-6 rounded-xl flex flex-col items-start gap-6">
            <h1 className="text-xl font-medium">Get in touch !</h1>
            <div className="w-full grid grid-cols-2 gap-6">
              <div className="col-span-1 flex flex-col gap-1">
                <label htmlFor="name" className="text-sm font-medium">
                  Your Name:
                </label>
                <input
                  type="text"
                  placeholder="Name:"
                  className="w-full text-sm border outline-none p-3 rounded-lg"
                />
              </div>
              <div className="col-span-1 flex flex-col gap-1">
                <label htmlFor="name" className="text-sm font-medium">
                  Your Email:
                </label>
                <input
                  type="email"
                  placeholder="Email:"
                  className="w-full text-sm border outline-none p-3 rounded-lg"
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="name" className="text-sm font-medium">
                Your Question:
              </label>
              <input
                type="text"
                placeholder="Question:"
                className="w-full text-sm border outline-none p-3 rounded-lg"
              />
            </div>
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="comment" className="text-sm font-medium">
                Your Comment:
              </label>
              <textarea
                name="comment"
                id="comment"
                rows={"5"}
                placeholder="Message:"
                className="w-full text-sm border outline-none p-3 rounded-lg"
              ></textarea>
            </div>
            <div className="w-full">
                <button type="submit" className="px-4 py-2 text-white text-sm font-medium bg-green-600 rounded-lg">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
