import React from "react";
import Navbar2 from "../../components/Employee/Global/Navbar2";
import Footer from "../../components/Employee/Global/Footer";
import SettingsProfileSection from "../../components/Employee/Settings/SettingsProfileSection";
import PersonalDetailsForm from "../../components/Employee/Settings/PersonalDetailsForm";
import AccountDeletion from "../../components/Employee/Settings/AccountDeletion";

const Settings = () => {
  return (
    <div>
      <Navbar2 />
      <SettingsProfileSection />
      <PersonalDetailsForm />
      <AccountDeletion />
      <Footer />
    </div>
  );
};

export default Settings;
