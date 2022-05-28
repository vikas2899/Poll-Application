import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import userLoginReducer from "../features/user/userLoginSlice";
import userRegisterReducer from "../features/user/userRegisterSlice";
import pollCreateReducer from "../features/poll/pollSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, userLoginReducer);

export const store = configureStore({
  reducer: {
    userLogin: persistedReducer,
    userRegister: userRegisterReducer,
    pollCreate: pollCreateReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
