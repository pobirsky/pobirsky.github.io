import FormikLogin from "../containers/MyContainers/LoginFormik";
import Main from "../containers/MyContainers/MainCent";
import BlockPage from "../pages/Blockpage";
import PostContainer from "../ui/posts/PostContainer";
import FriendsContainer from "../ui/friends/FriendsContainer";
import React from "react";

export const routes = [
  { path: "/login", element: <FormikLogin /> },
  { path: "/main", element: <Main /> },
  { path: "/news", element: <BlockPage /> },
  { path: "/reduxToolkit", element: <PostContainer /> },
  { path: "/reduxToolkit2", element: <FriendsContainer /> },
  { path: "*", element: <Main /> },
];
