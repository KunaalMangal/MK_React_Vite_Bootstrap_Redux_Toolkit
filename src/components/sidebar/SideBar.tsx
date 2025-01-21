import React from "react";
import { NavBar } from "../navbar/NavBar";
import { Button, Stack } from "react-bootstrap";

export const SideBar: React.FC = () => {
  return (
    <aside id="side-bar" className="vh-100 border">
      <Stack>
        <NavBar />
        <div>
          <Button variant="primary" size="lg">
            Logout
          </Button>
        </div>
      </Stack>
    </aside>
  );
};
