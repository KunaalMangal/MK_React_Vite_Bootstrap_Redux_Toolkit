import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider as StoreProvider } from "react-redux";

import "./index.css";
import App from "./App.tsx";

import "bootstrap/dist/css/bootstrap.min.css";
import store, { persistor } from "./store/Store.ts";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </StoreProvider>
  </StrictMode>
);
