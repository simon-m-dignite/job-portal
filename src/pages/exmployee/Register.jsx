import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
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
        <h1 className="text-lg font-medium">Create Account</h1>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="name" className="font-medium text-sm">
            Full Name:
          </label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            className="border outline-none py-2.5 px-3.5 rounded-lg text-sm"
            placeholder="Jane Smith"
          />
        </div>
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
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="password" className="font-medium text-sm">
            Password:
          </label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            className="border outline-none py-2.5 px-3.5 rounded-lg text-sm"
            placeholder="Password"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg"
        >
          Sign Up
        </button>
        <p className="text-sm font-medium text-center text-gray-500">
          Already have an account?{" "}
          <Link to="/login" className="ml-1 text-black">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
