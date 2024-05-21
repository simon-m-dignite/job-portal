import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="login-page flex items-center lg:pl-48 justify-center lg:justify-start">
      <form
        onSubmit={handleSubmit}
        className="w-[90%] lg:w-[30%] bg-white rounded-lg p-8 flex flex-col gap-6"
      >
        <h1 className="text-lg font-medium">Reset Your Password</h1>
        <p className="text-sm font-medium text-gray-500">
          Please enter your email address. You will receive a link to create a
          new password via email.
        </p>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="email" className="font-medium text-sm">
            Email Address:
          </label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            className="border outline-none py-2.5 px-3.5 rounded-lg text-sm"
            placeholder="name@example.com"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg"
        >
          Send
        </button>
        <p className="text-sm font-medium text-center text-gray-500">
          Remember your password?{" "}
          <Link to="/login" className="ml-1 text-black">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default ForgotPassword;
