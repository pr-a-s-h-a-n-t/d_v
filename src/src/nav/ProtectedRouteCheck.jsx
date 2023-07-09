import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  const getUser = () => {
    const res = JSON.parse(localStorage.getItem("isLoggedIn"));
    return res;
  };

  if (!getUser()) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;
