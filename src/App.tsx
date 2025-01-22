import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { ThemeProvider } from "react-bootstrap";

import "./App.css";
import { PublicRoutes } from "./routes/PublicRoutes";
import { PrivateRoutes } from "./routes/PrivateRoutes";
import { AuthLayout, DashboardLayout } from "./layouts";

function App() {
  const isLogin = true;

  const renderNestedRoutes = (routes) => {
    return routes.map((route, index) => {
      const { path, element: Element, children, index: isIndex } = route;

      return (
        <Route
          key={index}
          path={path}
          index={isIndex || false}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Element />
            </Suspense>
          }
        >
          {children && renderNestedRoutes(children)}
        </Route>
      );
    });
  };

  const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
          {!isLogin ? (
            <Route element={<AuthLayout />}>
              {PublicRoutes.map((route, index) => (
                <Route
                  key={`#-${index}-${route.path}`}
                  index={route.index ? true : false}
                  path={route.path}
                  element={
                    <Suspense fallback={<div>Loading...</div>}>
                      <route.element />
                    </Suspense>
                  }
                />
              ))}
            </Route>
          ) : (
            <Route element={<DashboardLayout />}>
              {renderNestedRoutes(PrivateRoutes)}
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
