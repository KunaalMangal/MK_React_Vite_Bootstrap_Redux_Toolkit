import React from "react";
import { NavBar } from "../navbar/NavBar";
import { Button, Stack } from "react-bootstrap";
import { useAppDispatch } from "../../store/hooks/hooks";
import { onLogin } from "../../store/slices/AuthSlice";

export const SideBar: React.FC = () => {
  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(
      onLogin({
        currentUser: {},
        token: "",
        isLogin: false,
        deviceToken: "",
      })
    );
  };

  return (
    <aside id="side-bar" className="vh-100 border">
      <Stack>
        <NavBar />
        <div>
          <Button variant="primary" size="lg" onClick={onLogout}>
            Logout
          </Button>
        </div>
      </Stack>
    </aside>
  );
};
