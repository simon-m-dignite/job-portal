import React from "react";
import { styles } from "../../../styles/styles";
import { Link } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";

const OtherContacts = () => {
  return (
    <div className={`${styles.paddingHorizontal} w-full py-6 lg:py-12`}>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-3 md:col-span-1 flex flex-col items-center justify-center text-center p-6 gap-4">
          <div className="w-12 h-12 bg-green-50 rounded-lg shadow flex items-center justify-center">
            <IoCallOutline className="text-2xl text-green-600" />
          </div>
          <p className="text-lg font-medium">Phone</p>
          <p className={`${styles.textSm} ${styles.grayText}}`}>
            The phrasal sequence of the is now so that many campaign and benefit
          </p>
          <Link
            to="tel:+152 534-468-854"
            className="text-sm text-green-600 font-medium"
          >
            +152 534-468-854
          </Link>
        </div>
        <div className="col-span-3 md:col-span-1 flex flex-col items-center justify-center text-center p-6 gap-4">
          <div className="w-12 h-12 bg-green-50 rounded-lg shadow flex items-center justify-center">
            <MdOutlineEmail className="text-2xl text-green-600" />
          </div>
          <p className="text-lg font-medium">Email</p>
          <p className={`${styles.textSm} ${styles.grayText}}`}>
            The phrasal sequence of the is now so that many campaign and benefit
          </p>
          <Link
            to="tel:+152 534-468-854"
            className="text-sm text-green-600 font-medium"
          >
            contact@example.com
          </Link>
        </div>
        <div className="col-span-3 md:col-span-1 flex flex-col items-center justify-center text-center p-6 gap-4">
          <div className="w-12 h-12 bg-green-50 rounded-lg shadow flex items-center justify-center">
            <MdOutlineLocationOn className="text-2xl text-green-600" />
          </div>
          <p className="text-lg font-medium">Location</p>
          <p className={`${styles.textSm} ${styles.grayText}}`}>
            C/54 Northwest Freeway, Suite 558, Houston, USA 485
          </p>
          <Link
            to="tel:+152 534-468-854"
            className="text-sm text-green-600 font-medium"
          >
            View on Google map
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OtherContacts;
