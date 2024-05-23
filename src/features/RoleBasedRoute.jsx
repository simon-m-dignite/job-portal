import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./UserContext";
// import { UserContext } from '../contexts/UserContext';

const RoleBasedRoute = ({ allowedRoles, element }) => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/not-found" />;
  }

  return element;
};

export default RoleBasedRoute;
