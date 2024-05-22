import React from "react";
import { styles } from "../../../styles/styles";
import InputField from "../Global/InputField";

const PersonalDetailsForm = () => {
  return (
    <div
      className={`pb-6 ${styles.paddingHorizontal} w-full flex flex-col gap-8`}
    >
      <div className="w-full flex flex-col gap-6 border rounded-lg p-6">
        <h1 className="text-lg font-semibold">Personal Details</h1>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
          <InputField
            label={"First Name"}
            inputType={"text"}
            placeholder={"First Name"}
          />
          <InputField
            label={"Last Name"}
            inputType={"text"}
            placeholder={"Last Name"}
          />
          <InputField
            label={"Your Email"}
            inputType={"email"}
            placeholder={"Email"}
          />
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="w-full flex flex-col gap-1 items-start">
            <label htmlFor="" className="text-sm font-medium">
              Date of birth:
            </label>
            <input
              type="date"
              placeholder=""
              className="w-full border py-2.5 px-3.5 outline-none rounded-lg text-sm"
            />
          </div>
          <div className="w-full flex flex-col gap-1 items-start">
            <label htmlFor="" className="text-sm font-medium">
              Mobile Number:
            </label>
            <input
              type="text"
              placeholder="123-4567-7890"
              className="w-full border py-2.5 px-3.5 outline-none rounded-lg text-sm"
            />
          </div>
          <InputField
            label={"Occupation"}
            inputType={"text"}
            placeholder={"Web Developer"}
          />
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
          <InputField
            label={"Country"}
            inputType={"text"}
            placeholder={"Country"}
          />
          <InputField
            label={"State"}
            inputType={"text"}
            placeholder={"State"}
          />
          <InputField
            label={"City"}
            inputType={"text"}
            placeholder={"City/Town"}
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="resume" className="text-sm font-medium">
            Upload Resume:
          </label>
          {/* <input type="file" name="resume" id="resume" className="w-full" /> */}
          <div className="flex items-center justify-center w-full">
            <label
              for="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
        </div>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="intro" className="text-sm font-medium">
            Write about yourself:
          </label>
          <textarea
            name="intro"
            id="intro"
            rows={"6"}
            placeholder="Intro"
            className="w-full border py-2.5 px-3.5 outline-none rounded-lg text-sm"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className={`${styles.bgGreen} text-white font-medium rounded-lg px-4 py-2`}
          >
            Save Changes
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-6">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-6 border rounded-lg p-6">
            <h1 className="text-lg font-semibold">Experience:</h1>
            <InputField
              label={"Job Title"}
              inputType={"text"}
              placeholder={"Web Developer"}
            />
            <InputField
              label={"Company Name"}
              inputType={"text"}
              placeholder={"Company"}
            />
            <InputField
              label={"Year"}
              inputType={"text"}
              placeholder={"Year"}
            />
            <div className="w-full">
              <label htmlFor="intro" className="text-sm font-medium">
                Description :
              </label>
              <textarea
                name="intro"
                id="intro"
                rows={"6"}
                placeholder="Description "
                className="w-full border py-2.5 px-3.5 outline-none rounded-lg text-sm"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className={`${styles.bgGreen} text-white font-medium rounded-lg px-4 py-2`}
              >
                Save Changes
              </button>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-6 border rounded-lg p-6">
            <h1 className="text-lg font-semibold">Contact Info:</h1>
            <InputField
              label={"Phone No. "}
              inputType={"text"}
              placeholder={"Phone"}
            />
            <InputField
              label={"Website/Portfolio"}
              inputType={"text"}
              placeholder={"Url"}
            />
            <InputField
              label={"LinkedIn"}
              inputType={"text"}
              placeholder={"Url"}
            />
            <InputField
              label={"Github"}
              inputType={"text"}
              placeholder={"Url"}
            />
            <InputField
              label={"Facebook"}
              inputType={"text"}
              placeholder={"Url"}
            />
            <div>
              <button
                type="submit"
                className={`${styles.bgGreen} text-white font-medium rounded-lg px-4 py-2`}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsForm;
