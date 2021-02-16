import { lazy } from "react";
// eslint-disable-next-line
export default [
  {
    path: "/",
    label: "MainPage",
    exact: true,
    component: lazy(() => import("../pages/MainPage/MainPage")),
  },

  {
    path: "/users/:userId",
    label: "UserPage",
    exact: true,
    component: lazy(() => import("../pages/UserPage/UserPage")),
  },
  {
    path: "/users",
    label: "UsersListPage",
    exact: true,
    component: lazy(() => import("../pages/UsersListPage/UserListPage")),
  },
];
