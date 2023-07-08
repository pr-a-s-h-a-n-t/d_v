import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { lazy, Suspense } from "react";

import { LazyAuth, LazySideBar, LazyHome, LazyTable } from "./LazyNav";

function Nav() {
  const [authState, setAuthState] = useState(false);
  const navigate = useNavigate();

  const checkAuth = () => {
    const getUser = JSON.parse(window.localStorage.getItem("userCred"));

    if (getUser) {
      setAuthState(true);
      navigate("/dashboard/home");
    } else {
      alert("Login to access the page...");
      navigate("/");
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<LazyAuth />} />
        {authState ? (
          <Route
            path="/dashboard/home"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LazySideBar />
                <Route index element={<LazyHome />} />
              </Suspense>
            }
          />
        ) : (
          navigate("/", { replace: true })
        )}
        <Route
          path="/dashboard/table"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazySideBar />
              <LazyTable />
            </Suspense>
          }
        />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default Nav;
