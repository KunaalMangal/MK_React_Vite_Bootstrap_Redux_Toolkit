import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/AuthSlice";

const rootReducers = {
  auth: authReducer,
};

const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
