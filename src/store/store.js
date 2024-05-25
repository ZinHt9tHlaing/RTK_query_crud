import { configureStore } from "@reduxjs/toolkit";
import { UserAPi } from "./api/userApi";

export const store = configureStore({
  reducer: {
    [UserAPi.reducerPath]: UserAPi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(UserAPi.middleware),
});
