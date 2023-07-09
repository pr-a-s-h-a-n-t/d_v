import React from "react";

export const LazyAuth = React.lazy(() => import("../components/Auth/Auth"));
export const LazySideBar = React.lazy(() =>
  import("../components/common/SideBarHOC")
);
export const LazyHome = React.lazy(() => import("../components/Home"));
// export const LazyTableComponent = React.lazy(() =>
//   import("../components/common/Table/TableComponent")
// );

export const LazyTable = React.lazy(() =>
  import("../components/Table")
);
