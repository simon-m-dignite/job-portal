import React, { useState } from "react";
import { styles } from "../../../styles/styles";
import { skills } from "../../../constants/skills";
import { TfiEmail } from "react-icons/tfi";
import { HiDownload } from "react-icons/hi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

const Profile = () => {
  const [showEducation, setShowEducation] = useState(false);
  const [showAccomplishments, setShowAccomplishments] = useState(false);
  const [showCertificates, setShowCertificates] = useState(false);
  return (
    <div className={`w-full pt-28 lg:pt-32 pb-12 ${styles.paddingHorizontal}`}>
      <div className="w-full grid grid-cols-3 gap-6">
        <div className="col-span-3 lg:col-span-1 py-8 px-4 lg:px-8 flex flex-col items-center justify-start gap-5 bg-gray-100">
          <img
            src="https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww"
            alt=""
            className="block w-[130px] h-[130px] bg-center bg-cover rounded-full"
          />
          <div className="text-center">
            <h1 className="font-semibold text-lg">Muhammad Shoaib</h1>
            <h2 className="text-sm font-medium text-gray-500 mt-2">
              Web Developer
            </h2>
          </div>
          <p className="text-sm text-gray-500 text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At iste,
            eos corporis eveniet qui repellat eius neque ea necessitatibus esse.
            Omnis eveniet officiis vitae earum nobis enim quasi doloribus nam,
            natus amet nulla aperiam at commodi ducimus, harum quos fuga!
          </p>
          <div className="">
            <h2 className="text-lg font-semibold">Skills</h2>
            <div className="w-full flex gap-3 flex-wrap pt-2">
              {skills.map((skill, index) => {
                return (
                  <span
                    key={index}
                    className="text-xs text-gray-500 border border-gray-300 px-4 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-span-3 lg:col-span-2 flex flex-col gap-6">
          <div className="w-full flex flex-col gap-y-6 py-8 px-4 lg:px-8 bg-gray-100">
            <div className="w-full flex items-center justify-between">
              <h1 className="text-lg font-semibold">Basic Information</h1>
              <Link to="/edit-profile" className="text-sm font-medium">Edit Profile</Link>
            </div>
            <div className="w-full flex items-center justify-start flex-wrap gap-6">
              <div className="w-[23%] lg:w-[30%]">
                <h3 className="text-sm font-medium text-gray-500 mb-1">Age</h3>
                <p className="text-sm font-medium">28 years</p>
              </div>
              <div className="w-[23%] lg:w-[30%]">
                <h3 className="text-sm font-medium text-gray-500 mb-1">
                  Experience
                </h3>
                <p className="text-sm font-medium">2 years</p>
              </div>
              <div className="w-[23%] lg:w-[30%]">
                <h3 className="text-sm font-medium text-gray-500 mb-1">
                  Phone
                </h3>
                <p className="text-sm font-medium">+923413549032</p>
              </div>
            </div>
            <div className="w-full flex items-center justify-start flex-wrap gap-y-6">
              <div className="w-[30%] lg:w-[30%]">
                <h3 className="text-sm font-medium text-gray-500 mb-1">SPA</h3>
                <p className="text-sm font-medium">12 Lac</p>
              </div>
              <div className="w-[30%] lg:w-[30%]">
                <h3 className="text-sm font-medium text-gray-500 mb-1">
                  Location
                </h3>
                <p className="text-sm font-medium">Karachi, Pakistan</p>
              </div>
              <div className="w-[100%] lg:w-[30%]">
                <h3 className="text-sm font-medium text-gray-500 mb-1">
                  Email
                </h3>
                <p className="text-sm font-medium">smshoaib20012gmail.com</p>
              </div>
            </div>
            <div className="flex gap-6">
              <button
                className={`${styles.bgGreen} text-white px-4 py-2 text-sm font-medium flex gap-2    items-center`}
              >
                <HiDownload className="text-base" />
                Download CV
              </button>
              <button
                className={`border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300 px-4 py-2 text-sm font-medium flex items-center gap-2`}
              >
                <TfiEmail className="text-base" /> Contact
              </button>
            </div>
          </div>
          <div className="px-4 pt-8 lg:p-8 pb-6 w-full bg-gray-100 flex flex-col">
            <h1 className="text-lg font-semibold">Experience</h1>
            <div className="w-full flex items-center justify-start gap-4 border-b py-4">
              <div className="w-[80px] h-[80px] border-2 border-green-600 rounded-full flex items-center justify-center">
                <span className="text-xl font-medium text-green-600">LP</span>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="font-medium text-base">LaunchBox Pakistan</h2>
                <p className="font-sm text-sm">Web Developer</p>
                <p className="font-normal text-xs">
                  April 01, 2024 - Present | Karachi, Sindh
                </p>
              </div>
            </div>
            <div className="w-full flex items-center justify-start gap-4 py-4">
              <div className="w-[80px] h-[80px] border-2 border-green-600 rounded-full flex items-center justify-center">
                <span className="text-xl font-medium text-green-600">LP</span>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="font-medium text-base">LaunchBox Pakistan</h2>
                <p className="font-sm text-sm">Web Developer</p>
                <p className="font-normal text-xs">
                  April 01, 2024 - Present | Karachi, Sindh
                </p>
              </div>
            </div>
          </div>
          <div className="px-4 pt-8 lg:p-8 pb-6 w-full bg-gray-100 flex flex-col">
            <div className="w-full flex items-center justify-between">
              <h1 className="text-lg font-semibold">Education</h1>
              <button onClick={() => setShowEducation(!showEducation)}>
                {showEducation ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
            </div>
            {showEducation && (
              <div className="w-full flex flex-col">
                <div className="w-full flex items-center justify-start gap-4 py-4 border-b">
                  <div className="w-[80px] h-[80px] border rounded-full border-green-600 flex items-center justify-center">
                    <span className="text-sm font-semibold text-green-600">
                      BBSUL
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h1 className="font-medium text-base">
                      Bachelor of Computer Science
                    </h1>
                    <p className="font-sm text-sm">
                      Benazir Bhutto Shaheed University Lyari Karachi
                    </p>
                    <p className="font-xs text-sm">Jan 2020 - Dec 2024</p>
                  </div>
                </div>
                <div className="w-full flex items-center justify-start gap-4 py-4">
                  <div className="w-[80px] h-[80px] border rounded-full border-green-600 flex items-center justify-center">
                    <span className="text-sm font-semibold text-green-600">
                      GDGL
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h1 className="font-medium text-base">Inermediate</h1>
                    <p className="font-sm text-sm">
                      Government Boys Degree College Larkana
                    </p>
                    <p className="font-xs text-sm">Jan 2017 - Nov 2019</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="px-4 pt-8 lg:p-8 pb-6 w-full bg-gray-100 flex flex-col">
            <div className="w-full flex items-center justify-between">
              <h1 className="text-lg font-semibold">Accomplishments</h1>
              <button
                onClick={() => setShowAccomplishments(!showAccomplishments)}
              >
                {showAccomplishments ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
            </div>
            {showAccomplishments && (
              <div className="w-full flex flex-col">
                <div className="w-full flex items-center justify-start gap-4 py-4 border-b">
                  <div className="w-[80px] h-[80px] border rounded-full border-green-600 flex items-center justify-center">
                    <span className="text-sm font-semibold text-green-600">
                      BBSUL
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h1 className="font-medium text-base">
                      Bachelor of Computer Science
                    </h1>
                    <p className="font-sm text-sm">
                      Benazir Bhutto Shaheed University Lyari Karachi
                    </p>
                    <p className="font-xs text-sm">Jan 2020 - Dec 2024</p>
                  </div>
                </div>
                <div className="w-full flex items-center justify-start gap-4 py-4">
                  <div className="w-[80px] h-[80px] border rounded-full border-green-600 flex items-center justify-center">
                    <span className="text-sm font-semibold text-green-600">
                      GDGL
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h1 className="font-medium text-base">Inermediate</h1>
                    <p className="font-sm text-sm">
                      Government Boys Degree College Larkana
                    </p>
                    <p className="font-xs text-sm">Jan 2017 - Nov 2019</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="px-4 pt-8 lg:p-8 pb-6 w-full bg-gray-100 flex flex-col">
            <div className="w-full flex items-center justify-between">
              <h1 className="text-lg font-semibold">Certificates</h1>
              <button onClick={() => setShowCertificates(!showCertificates)}>
                {showCertificates ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
            </div>
            {showCertificates && (
              <div className="w-full flex flex-col">
                <div className="w-full flex items-center justify-start gap-4 py-4 border-b">
                  <div className="w-[80px] h-[80px] border rounded-full border-green-600 flex items-center justify-center">
                    <span className="text-sm font-semibold text-green-600">
                      BBSUL
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h1 className="font-medium text-base">
                      Bachelor of Computer Science
                    </h1>
                    <p className="font-sm text-sm">
                      Benazir Bhutto Shaheed University Lyari Karachi
                    </p>
                    <p className="font-xs text-sm">Jan 2020 - Dec 2024</p>
                  </div>
                </div>
                <div className="w-full flex items-center justify-start gap-4 py-4">
                  <div className="w-[80px] h-[80px] border rounded-full border-green-600 flex items-center justify-center">
                    <span className="text-sm font-semibold text-green-600">
                      GDGL
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h1 className="font-medium text-base">Inermediate</h1>
                    <p className="font-sm text-sm">
                      Government Boys Degree College Larkana
                    </p>
                    <p className="font-xs text-sm">Jan 2017 - Nov 2019</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
