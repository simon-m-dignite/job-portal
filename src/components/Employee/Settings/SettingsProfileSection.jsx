import React, { useState } from "react";
import { styles } from "../../../styles/styles";

const SettingsProfileSection = () => {
  const [profileImage, setProfileImage] = useState(
    "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ); // Default profile image

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result); // Update the profile image
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className={`pt-28 pb-6 lg:pt-28 lg:pb-8 ${styles.paddingHorizontal} w-full`}
    >
      <div className="flex w-full flex-col items-start lg:flex-row lg:items-center gap-6 border p-6 rounded-lg">
        <div className="h-[150px] w-[150px] relative group">
          <img
            src={profileImage}
            alt=""
            className="block h-[150px] w-[150px] rounded-full cursor-pointer hover:opacity-[0.4] transition-all duration-300"
            onClick={() => document.getElementById("fileInput").click()}
          />
          <span className="text-xs font-semibold absolute top-[50%] left-[25%] text-black invisible group-hover:visible transition-all duration-300">
            Upload Image
          </span>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-semibold">Muhammad Shoaib</h1>
          <h2 className="text-sm font-medium text-gray-400">Web Developer</h2>
        </div>
      </div>
    </div>
  );
};

export default SettingsProfileSection;
