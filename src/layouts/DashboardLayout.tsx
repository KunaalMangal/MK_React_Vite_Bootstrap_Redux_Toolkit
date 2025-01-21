import React from "react";
import { Outlet } from "react-router";
import { Stack } from "react-bootstrap";

import { Header, SideBar } from "../components";

export const DashboardLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Stack direction="horizontal">
          <SideBar />
          <Outlet />
        </Stack>
      </main>
    </>
  );
};
