import React from "react";

export const LazyAuth = React.lazy(() => import("../components/Auth/Auth"));
export const LazySideBar = React.lazy(() =>
  import("../components/common/SideBarHOC")
);
export const LazyHome = React.lazy(() => import("../components/Home"));
 

export const LazyTable = React.lazy(() =>
  import("../components/Table")
);
