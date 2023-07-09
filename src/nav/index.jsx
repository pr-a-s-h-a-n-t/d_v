import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { lazy, Suspense } from "react";

import { LazyAuth, LazySideBar, LazyHome, LazyTable } from "./LazyNav";
import ProtectedRoute from "./ProtectedRouteCheck";

function Nav() {
  const [authState, setAuthState] = useState(true);

  return (
    <div>
      <Routes>
        <Route path="/" element={<LazyAuth />} />

        <Route
          path="/dashboard/home"
          element={
            <ProtectedRoute>
              <LazySideBar>
                <LazyHome />
              </LazySideBar>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/table"
          element={
            <ProtectedRoute>
              <LazySideBar>
                <LazyTable />
              </LazySideBar>
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default Nav;
