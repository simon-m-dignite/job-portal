import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      navigate("/employee/home");
    }
  }, []);
  return <div></div>;
};

export default Auth;
