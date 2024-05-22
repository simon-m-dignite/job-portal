import React from "react";

const InputField = ({inputType, label, placeholder}) => {
  return (
    <div className="w-full flex flex-col gap-1 items-start">
      <label htmlFor="" className="text-sm font-medium">
        {label}:
      </label>
      <input
        type={inputType}
        placeholder={placeholder}
        className="w-full border py-2.5 px-3.5 outline-none rounded-lg text-sm"
      />
    </div>
  );
};

export default InputField;
