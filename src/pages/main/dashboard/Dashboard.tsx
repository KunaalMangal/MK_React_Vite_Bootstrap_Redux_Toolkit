import React from "react";
import { Container } from "react-bootstrap";
import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs";

export const Dashboard: React.FC = () => {
  return (
    <Container fluid className="vh-100 py-2">
      <Breadcrumbs />
      <Container>
        <h1>Welcome to Opensource.</h1>
        <h4>This is Dashboard...</h4>
      </Container>
    </Container>
  );
};
