import { BrowserRouter, Route, Routes } from "react-router";
import { ThemeProvider } from "react-bootstrap";

import "./App.css";
import { PublicRoutes } from "./routes/PublicRoutes";
import { PrivateRoutes } from "./routes/PrivateRoutes";
import { AuthLayout, DashboardLayout } from "./layouts";

function App() {
  const isLogin = true;

  const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
          {!isLogin ? (
            <Route element={<AuthLayout />}>
              {PublicRoutes.map((route) => (
                <Route
                  index={route.index ? true : false}
                  path={route.path}
                  element={<route.element />}
                />
              ))}
            </Route>
          ) : (
            <Route element={<DashboardLayout />}>
              {PrivateRoutes.map((route) => (
                <Route
                  index={route.index ? true : false}
                  path={route.path}
                  element={<route.element />}
                />
              ))}
            </Route>
          )}
        </Routes>
      </BrowserRouter>
    );
  };

  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

export default App;
