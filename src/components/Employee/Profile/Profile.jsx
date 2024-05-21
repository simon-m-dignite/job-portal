import React from "react";
import { styles } from "../../../styles/styles";
import { FaConnectdevelop } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Profile = () => {
  return (
    <div
      className={`w-full relative ${styles.paddingHorizontal} py-6 lg:pb-20`}
    >
      <div className="w-full bg-white py-10"></div>
      <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="cover-img"
        className="w-full rounded-xl h-[250px] md:h-40vh lg:h-[50vh]"
        style={{ backgroundPosition: "center", backgroundSize: "cover" }}
      />
      <img
        src="https://images.unsplash.com/photo-1519456264917-42d0aa2e0625?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="w-32 h-32 md:w-36 md:h-36 rounded-full relative top-[-60px] md:top-[-70px] left-8 md:left-10 border-[5px] border-white"
      />
      <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="col-span-5 lg:col-span-3 flex flex-col items-start gap-6">
          <h1 className="text-xl font-medium">Calvin Carlo</h1>
          <p className="text-sm text-gray-400">
            I'M Web Developer. Web Developer with over 3 years of experience.
            Experienced with all stages of the development cycle for dynamic web
            projects. The as opposed to using 'Content here, content here',
            making it look like readable English.
          </p>
          <p className="text-sm text-gray-400">
            Data Structures and Algorithms are the heart of programming.
            Initially most of the developers do not realize its importance but
            when you will start your career in software development, you will
            find your code is either taking too much time or taking too much
            space.
          </p>
          <h1 className="text-xl font-medium">Skills:</h1>
          <div className="w-full grid grid-cols-2 gap-6">
            <div className="col-span-1 flex flex-col gap-1 items-start">
              <div className="w-full flex items-center justify-between">
                <p className="text-base font-medium">React</p>
                <p className="text-base font-medium text-gray-400">90%</p>
              </div>
              <div
                className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden"
                role="progressbar"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="flex flex-col justify-center rounded-full overflow-hidden bg-green-600 text-xs text-white text-center whitespace-nowrap transition duration-500"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
            <div className="col-span-1 flex flex-col gap-1 items-start">
              <div className="w-full flex items-center justify-between">
                <p className="text-base font-medium">React</p>
                <p className="text-base font-medium text-gray-400">90%</p>
              </div>
              <div
                className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden"
                role="progressbar"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="flex flex-col justify-center rounded-full overflow-hidden bg-green-600 text-xs text-white text-center whitespace-nowrap transition duration-500"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="w-full grid grid-cols-2 gap-6">
            <div className="col-span-1 flex flex-col gap-1 items-start">
              <div className="w-full flex items-center justify-between">
                <p className="text-base font-medium">React</p>
                <p className="text-base font-medium text-gray-400">90%</p>
              </div>
              <div
                className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden"
                role="progressbar"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="flex flex-col justify-center rounded-full overflow-hidden bg-green-600 text-xs text-white text-center whitespace-nowrap transition duration-500"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
            <div className="col-span-1 flex flex-col gap-1 items-start">
              <div className="w-full flex items-center justify-between">
                <p className="text-base font-medium">React</p>
                <p className="text-base font-medium text-gray-400">90%</p>
              </div>
              <div
                className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden"
                role="progressbar"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="flex flex-col justify-center rounded-full overflow-hidden bg-green-600 text-xs text-white text-center whitespace-nowrap transition duration-500"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="w-full grid grid-cols-2 gap-6">
            <div className="col-span-1 flex flex-col gap-1 items-start">
              <div className="w-full flex items-center justify-between">
                <p className="text-base font-medium">React</p>
                <p className="text-base font-medium text-gray-400">90%</p>
              </div>
              <div
                className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden"
                role="progressbar"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="flex flex-col justify-center rounded-full overflow-hidden bg-green-600 text-xs text-white text-center whitespace-nowrap transition duration-500"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
            <div className="col-span-1 flex flex-col gap-1 items-start">
              <div className="w-full flex items-center justify-between">
                <p className="text-base font-medium">React</p>
                <p className="text-base font-medium text-gray-400">90%</p>
              </div>
              <div
                className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden"
                role="progressbar"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="flex flex-col justify-center rounded-full overflow-hidden bg-green-600 text-xs text-white text-center whitespace-nowrap transition duration-500"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="w-full grid grid-cols-2 gap-6">
            <div className="col-span-1 flex flex-col gap-1 items-start">
              <div className="w-full flex items-center justify-between">
                <p className="text-base font-medium">React</p>
                <p className="text-base font-medium text-gray-400">90%</p>
              </div>
              <div
                className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden"
                role="progressbar"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="flex flex-col justify-center rounded-full overflow-hidden bg-green-600 text-xs text-white text-center whitespace-nowrap transition duration-500"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
            <div className="col-span-1 flex flex-col gap-1 items-start">
              <div className="w-full flex items-center justify-between">
                <p className="text-base font-medium">React</p>
                <p className="text-base font-medium text-gray-400">90%</p>
              </div>
              <div
                className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden"
                role="progressbar"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="flex flex-col justify-center rounded-full overflow-hidden bg-green-600 text-xs text-white text-center whitespace-nowrap transition duration-500"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
          </div>
          <h1 className="text-xl font-medium">Experience:</h1>
          <div className="w-full flex justify-start">
            <div className="flex flex-col items-start justify-start lg:w-48 gap-2">
              <FaConnectdevelop className="text-6xl" />
              <p className="text-gray-400 text-xs font-medium">2019 - 2022</p>
            </div>
            <div className="flex flex-col gap-3 px-3">
              <p className="text-base">Full Stack Developer</p>
              <p className="text-sm text-gray-400">LaunchBox Pakistan</p>
              <p className="text-sm text-gray-400">
                It seems that only fragments of the original text remain in the
                Lorem Ipsum texts used today. One may speculate that over the
                course of time certain letters were added or deleted at various
                positions within the text.
              </p>
            </div>
          </div>
          <div className="w-full flex justify-start">
            <div className="flex flex-col items-start justify-start lg:w-48 gap-2">
              <FaConnectdevelop className="text-6xl" />
              <p className="text-gray-400 text-xs font-medium">2019 - 2022</p>
            </div>
            <div className="flex flex-col gap-3 px-3">
              <p className="text-base">Full Stack Developer</p>
              <p className="text-sm text-gray-400">LaunchBox Pakistan</p>
              <p className="text-sm text-gray-400">
                It seems that only fragments of the original text remain in the
                Lorem Ipsum texts used today. One may speculate that over the
                course of time certain letters were added or deleted at various
                positions within the text.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-5 lg:col-span-2 lg:px-10">
          <div className="bg-green-50 rounded-xl p-8 flex flex-col items-start gap-y-6">
            <h1 className="text-xl font-medium">Personal Detail:</h1>
            <div className="w-full flex">
              <div className="w-full flex items-center justify-between">
                <div className="text-sm text-gray-400 flex items-center gap-2">
                  <MdOutlineEmail className="text-lg" />
                  Email :
                </div>
                <p className="text-sm">contact@example.com</p>
              </div>
            </div>
            <div className="w-full flex">
              <div className="w-full flex items-center justify-between">
                <div className="text-sm text-gray-400 flex items-center gap-2">
                  <MdOutlineEmail className="text-lg" />
                  D.O.B. :
                </div>
                <p className="text-sm">31st Dec, 1996</p>
              </div>
            </div>
            <div className="w-full flex">
              <div className="w-full flex items-center justify-between">
                <div className="text-sm text-gray-400 flex items-center gap-2">
                  <MdOutlineEmail className="text-lg" />
                  Address :
                </div>
                <p className="text-sm">c15 Razy street</p>
              </div>
            </div>
            <div className="w-full flex">
              <div className="w-full flex items-center justify-between">
                <div className="text-sm text-gray-400 flex items-center gap-2">
                  <MdOutlineEmail className="text-lg" />
                  City :
                </div>
                <p className="text-sm">London</p>
              </div>
            </div>
            <div className="w-full flex">
              <div className="w-full flex items-center justify-between">
                <div className="text-sm text-gray-400 flex items-center gap-2">
                  <MdOutlineEmail className="text-lg" />
                  Country :
                </div>
                <p className="text-sm">UK</p>
              </div>
            </div>
            <div className="w-full flex">
              <div className="w-full flex items-center justify-between">
                <div className="text-sm text-gray-400 flex items-center gap-2">
                  <MdOutlineEmail className="text-lg" />
                  Postal code :
                </div>
                <p className="text-sm">521452</p>
              </div>
            </div>
            <div className="w-full flex">
              <div className="w-full flex items-center justify-between">
                <div className="text-sm text-gray-400 flex items-center gap-2">
                  <MdOutlineEmail className="text-lg" />
                  Mobile :
                </div>
                <p className="text-sm">(+125) 1542-8452</p>
              </div>
            </div>
            <div className="w-full flex">
              <div className="w-full flex items-center justify-between">
                <div className="text-sm text-gray-400 flex items-center gap-2">
                  <MdOutlineEmail className="text-lg" />
                  Social :
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    to="/exmployee/home"
                    className="w-7 h-7 shadow rounded-lg flex items-center justify-center bg-gray-200 group hover:bg-green-600 transition-all duration-300"
                  >
                    <FaFacebookF className="text-gray-500 text-sm group-hover:text-white transition-all duration-300" />
                  </Link>
                  <Link
                    to="/exmployee/home"
                    className="w-7 h-7 shadow rounded-lg flex items-center justify-center bg-gray-200 group hover:bg-green-600 transition-all duration-300"
                  >
                    <FaXTwitter className="text-gray-500 text-sm group-hover:text-white transition-all duration-300" />
                  </Link>
                  <Link
                    to="/exmployee/home"
                    className="w-7 h-7 shadow rounded-lg flex items-center justify-center bg-gray-200 group hover:bg-green-600 transition-all duration-300"
                  >
                    <FaLinkedinIn className="text-gray-500 text-sm group-hover:text-white transition-all duration-300" />
                  </Link>
                  <Link
                    to="/exmployee/home"
                    className="w-7 h-7 shadow rounded-lg flex items-center justify-center bg-gray-200 group hover:bg-green-600 transition-all duration-300"
                  >
                    <FaInstagram className="text-gray-500 text-sm group-hover:text-white transition-all duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
