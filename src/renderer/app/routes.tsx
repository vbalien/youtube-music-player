import { QueuePage, PlaylistPage } from "../pages";
import { Redirect, RouteProps } from "react-router-dom";
import React from "react";

export default [
  {
    path: "/",
    exact: true,
    // eslint-disable-next-line react/display-name
    render: (): JSX.Element => <Redirect to="/queue" />,
  },
  {
    path: "/queue",
    component: QueuePage,
    exact: true,
  },
  {
    path: "/playlist/:id",
    component: PlaylistPage,
    exact: true,
  },
] as RouteProps[];
