import React from "react";
import { styles } from "../../../styles/styles";
import { FaFacebook } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { TiArrowRight } from "react-icons/ti";
import { IoPersonOutline } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";
import { CgScreen } from "react-icons/cg";
import { FaShoppingBag } from "react-icons/fa";
import { TbDualScreen } from "react-icons/tb";
import { FiDollarSign } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlinePersonAddAlt1 } from "react-icons/md";
import { Link } from "react-router-dom";

const DetailsGrid = () => {
  return (
    <div className={`${styles.paddingHorizontal} w-full`}>
      <div className="py-16"></div>
      <div className="w-full pt-4 pb-12 grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-3 lg:col-span-2 flex flex-col gap-y-6">
          <div className="w-full bg-gray-100 flex items-center gap-4 md:gap-12 p-4 md:p-8 rounded-lg">
            <div className="w-12 h-12 p-1 md:w-20 md:h-20 flex items-center justify-center border md:p-2 rounded-full">
              <FaFacebook className="w-full h-full text-blue-600" />
            </div>
            <div className="h-full flex flex-col gap-2 md:gap-4">
              <h1 className="text-xl font-medium">Back-End Developer</h1>
              <div className="flex items-center gap-6">
                <p className="flex items-center gap-2 text-gray-400 text-sm">
                  <HiOutlineBuildingOffice2 className="text-lg text-green-600" />{" "}
                  Lenovo pvt. ltd.
                </p>
                <p className="flex items-center gap-2 text-gray-400 text-sm">
                  <IoLocationOutline className="text-lg text-green-600" />{" "}
                  Beijing, China
                </p>
              </div>
            </div>
          </div>
          <h1 className="text-lg font-medium">Job Description:</h1>
          <p className="text-sm text-gray-400">
            One disadvantage of Lorum Ipsum is that in Latin certain letters
            appear more frequently than others - which creates a distinct visual
            impression. Moreover, in Latin only words at the beginning of
            sentences are capitalized.
            <br />
            <br />
            This means that Lorem Ipsum cannot accurately represent, for
            example, German, in which all nouns are capitalized. Thus, Lorem
            Ipsum has only limited suitability as a visual filler for German
            texts. If the fill text is intended to illustrate the
            characteristics of different typefaces.
            <br />
            <br />
            It sometimes makes sense to select texts containing the various
            letters and symbols specific to the output language.
          </p>
          <h1 className="text-lg font-medium">Responsibilities and Duties:</h1>
          <p className="text-sm text-gray-400">
            It sometimes makes sense to select texts containing the various
            letters and symbols specific to the output language.
          </p>
          <p className="text-sm text-gray-400 flex items-center gap-2">
            <TiArrowRight className="text-lg text-green-600" /> Participate in
            requirements analysis
          </p>
          <p className="text-sm text-gray-400 flex items-center gap-2">
            <TiArrowRight className="text-lg text-green-600" /> Write clean,
            scalable code using C# and .NET frameworks
          </p>
          <p className="text-sm text-gray-400 flex items-center gap-2">
            <TiArrowRight className="text-lg text-green-600" /> Test and deploy
            applications and systems
          </p>
          <p className="text-sm text-gray-400 flex items-center gap-2">
            <TiArrowRight className="text-lg text-green-600" /> Revise, update,
            refactor and debug code
          </p>
          <p className="text-sm text-gray-400 flex items-center gap-2">
            <TiArrowRight className="text-lg text-green-600" /> Improve existing
            software
          </p>
          <p className="text-sm text-gray-400 flex items-center gap-2">
            <TiArrowRight className="text-lg text-green-600" /> Develop
            documentation throughout the software development life cycle (SDLC)
          </p>
          <p className="text-sm text-gray-400 flex items-center gap-2">
            <TiArrowRight className="text-lg text-green-600" /> Serve as an
            expert on applications and provide technical support
          </p>
          <h1 className="text-lg font-medium">Responsibilities and Duties:</h1>
          <p className="text-sm text-gray-400">
            It sometimes makes sense to select texts containing the various
            letters and symbols specific to the output language.
          </p>
          <p className="text-sm text-gray-400 flex items-center gap-2">
            <TiArrowRight className="text-lg text-green-600" /> Proven
            experience as a .NET Developer or Application Developer
          </p>
          <p className="text-sm text-gray-400 flex items-center gap-2">
            <TiArrowRight className="text-lg text-green-600" /> good
            understanding of SQL and Relational Databases, specifically
            Microsoft SQL Server.
          </p>
          <p className="text-sm text-gray-400 flex items-center gap-2">
            <TiArrowRight className="text-lg text-green-600" /> Experience
            designing, developing and creating RESTful web services and APIs
          </p>
          <p className="text-sm text-gray-400 flex items-center gap-2">
            <TiArrowRight className="text-lg text-green-600" /> Basic know how
            of Agile process and practices
          </p>
          <p className="text-sm text-gray-400 flex items-center gap-2">
            <TiArrowRight className="text-lg text-green-600" /> Good
            understanding of object-oriented programming.
          </p>
          <p className="text-sm text-gray-400 flex items-center gap-2">
            <TiArrowRight className="text-lg text-green-600" /> Good
            understanding of concurrent programming.
          </p>
          <p className="text-sm text-gray-400 flex items-center gap-2">
            <TiArrowRight className="text-lg text-green-600" /> Sound knowledge
            of application architecture and design.
          </p>
          <p className="text-sm text-gray-400 flex items-center gap-2">
            <TiArrowRight className="text-lg text-green-600" /> Excellent
            problem solving and analytical skills
          </p>
          <div>
            <Link to="/employee/jobs/job-details/23345567" className="font-medium text-base text-white bg-green-600 rounded-lg px-4 py-2">
              Apply Now
            </Link>
          </div>
        </div>
        <div className="col-span-3 lg:col-span-1 px-6">
          <div className="w-full bg-gray-100 rounded-lg shadow">
            <div className="w-full border-b p-6">
              <h1 className="text-base font-medium">Job Information</h1>
            </div>
            <div className="w-full flex items-center gap-4 px-6 py-4">
              <MdOutlinePersonAddAlt1 className="text-xl" />
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium">Employee Type:</p>
                <p className="text-sm font-normal text-green-600">Full Time</p>
              </div>
            </div>
            <div className="w-full flex items-center gap-4 px-6 py-4">
              <GrLocation className="text-xl" />
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium">Location:</p>
                <p className="text-sm font-normal text-green-600">Beijing, China</p>
              </div>
            </div>
            <div className="w-full flex items-center gap-4 px-6 py-4">
              <CgScreen className="text-xl" />
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium">Job Type:</p>
                <p className="text-sm font-normal text-green-600">Back-end Developer</p>
              </div>
            </div>
            <div className="w-full flex items-center gap-4 px-6 py-4">
              <FiShoppingBag className="text-xl" />
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium">Experience:</p>
                <p className="text-sm font-normal text-green-600">2+ years</p>
              </div>
            </div>
            <div className="w-full flex items-center gap-4 px-6 py-4">
              <TbDualScreen className="text-xl" />
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium">Qualifications:</p>
                <p className="text-sm font-normal text-green-600">MCA</p>
              </div>
            </div>
            <div className="w-full flex items-center gap-4 px-6 py-4">
              <FiDollarSign className="text-xl" />
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium">Salary:</p>
                <p className="text-sm font-normal text-green-600">$4000 - $4500</p>
              </div>
            </div>
            <div className="w-full flex items-center gap-4 px-6 py-4">
              <FaRegClock className="text-xl" />
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium">Date posted:</p>
                <p className="text-sm font-normal text-green-600">28th Feb, 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsGrid;
