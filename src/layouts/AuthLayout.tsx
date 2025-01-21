import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router";

export const AuthLayout: React.FC = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};
