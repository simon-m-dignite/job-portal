import React, { createContext, useState, useEffect } from "react";
// import { getUserFromToken } from '../utils/auth'; // function to get user info from token

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Shoaib",
    email: "shoaib@gmail.com",
    role: "employee",
  });

  //   useEffect(() => {
  //     // const user = getUserFromToken(); // Retrieve user from token
  //     const user =
  //     setUser(user);
  //   }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
