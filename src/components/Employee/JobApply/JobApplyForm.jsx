import React, { useState } from "react";
import { styles } from "../../../styles/styles";

const JobApplyForm = () => {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    number: "",
    current_designation: "",
    current_salary: "",
    expected_salary: "",
    current_company: "",
    cover_letter: "",
  });
  const [resume, setResume] = useState();

  const handleChange = (e) => {
    setData((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("data >> ", data);
    console.log("resume >> ", resume);
    setData({
      fullname: "",
      email: "",
      number: "",
      current_designation: "",
      current_salary: "",
      expected_salary: "",
      current_company: "",
      cover_letter: "",
    });
  };

  return (
    <div
      className={`w-full ${styles.paddingHorizontal} bg-gray-50 py-6 lg:py-20 flex justify-center`}
    >
      <div className="bg-white p-6 w-full lg:w-[60%] rounded-lg">
        <form
          className="w-full flex flex-col gap-6 rounded-lg lg:p-8"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl font-medium">Web Developer</h1>
          <div className="w-full flex flex-col gap-y-5">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-2 md:col-span-1">
                <label htmlFor="fullname" className="text-base font-normal">
                  Full Name:
                </label>
                <input
                  type="text"
                  name="fullname"
                  value={data.fullname}
                  onChange={handleChange}
                  className="w-full rounded-lg border outline-none py-3 px-3 text-base mt-1"
                  placeholder="Full Name"
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label htmlFor="fullname" className="text-base font-normal">
                  Email Address:
                </label>
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border outline-none py-3 px-3 text-base mt-1"
                  placeholder="Email Address"
                />
              </div>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-2 md:col-span-1">
                <label htmlFor="number" className="text-base font-normal">
                  Phone Number:
                </label>
                <input
                  type="text"
                  name="number"
                  value={data.number}
                  onChange={handleChange}
                  className="w-full rounded-lg border outline-none py-3 px-3 text-base mt-1"
                  placeholder="Full Name"
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label
                  htmlFor="current_designation"
                  className="text-base font-normal"
                >
                  Current Designation:
                </label>
                <input
                  type="text"
                  name="current_designation"
                  value={data.current_designation}
                  onChange={handleChange}
                  className="w-full rounded-lg border outline-none py-3 px-3 text-base mt-1"
                  placeholder="Email Address"
                />
              </div>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-2 md:col-span-1">
                <label
                  htmlFor="current-salary"
                  className="text-base font-normal"
                >
                  Current Salary:
                </label>
                <input
                  type="text"
                  name="current_salary"
                  value={data.current_salary}
                  onChange={handleChange}
                  className="w-full rounded-lg border outline-none py-3 px-3 text-base mt-1"
                  placeholder="Current Salary"
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label
                  htmlFor="expected-salary"
                  className="text-base font-normal"
                >
                  Expected Salary:
                </label>
                <input
                  type="text"
                  name="expected_salary"
                  value={data.expected_salary}
                  onChange={handleChange}
                  className="w-full rounded-lg border outline-none py-3 px-3 text-base mt-1"
                  placeholder="Expected Salary"
                />
              </div>
            </div>
            <div className="w-full">
              <label
                htmlFor="current-company"
                className="text-base font-normal"
              >
                Current Company:
              </label>
              <input
                type="text"
                name="current_company"
                value={data.current_company}
                onChange={handleChange}
                className="w-full rounded-lg border outline-none py-3 px-3 text-base mt-1"
                placeholder="Current Company"
              />
            </div>
            <div className="w-full">
              <label htmlFor="resume" className="text-base font-normal">
                Add Resume:
              </label>
              <input
                type="file"
                name="resume"
                onChange={(e) => setResume(e.target.files[0])}
                className="w-full rounded-lg border outline-none py-3 px-3 text-base mt-1"
                placeholder="Add Resume"
              />
            </div>
            <div className="w-full">
              <label htmlFor="cover_letter" className="text-base font-normal">
                Cover Letter:
              </label>
              <textarea
                name="cover_letter"
                value={data.cover_letter}
                onChange={handleChange}
                id="cover_letter"
                rows="5"
                className="w-full rounded-lg border outline-none py-3 px-3 text-base mt-1"
                placeholder="Cover letter..."
              ></textarea>
            </div>
            <div className="w-full">
              <button
                type="submit"
                className="bg-green-600 text-white py-2 px-5 text-base rounded-lg font-medium"
              >
                Apply Now
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApplyForm;
