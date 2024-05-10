import React from "react";
import CommonHeader from "../../components/Employee/Global/CommonHeader";
import ContactForm from "../../components/Employee/ContactUs/ContactForm";
import OtherContacts from "../../components/Employee/ContactUs/OtherContacts";

const ContactUs = () => {
  return (
    <div>
      <CommonHeader title="Contact Us" />
      <ContactForm />
      <OtherContacts />
    </div>
  );
};

export default ContactUs;
