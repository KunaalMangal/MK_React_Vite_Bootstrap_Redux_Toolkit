import React from "react";
import { Outlet } from "react-router";
import { Container, Stack } from "react-bootstrap";

import { Header, SideBar } from "../components";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";

export const DashboardLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Stack direction="horizontal">
          <SideBar />
          <Container fluid className="vh-100 py-2">
            <Breadcrumbs />
            <Outlet />
          </Container>
        </Stack>
      </main>
    </>
  );
};
