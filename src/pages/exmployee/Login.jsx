import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Login page</h1>
      <button onClick={() => navigate("/employee/home")} className="border px-4 py-2 text-sm bg-green-600">Login</button>
    </div>
  );
};

export default Login;
