import { combineReducers, configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/AuthSlice";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import localStorage from "redux-persist/lib/storage";

const rootReducers = combineReducers({
  auth: authReducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage: localStorage,
  whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, rootReducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production' ? true : false
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

export default store;
