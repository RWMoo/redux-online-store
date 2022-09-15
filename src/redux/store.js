import { configureStore } from "@reduxjs/toolkit";
import authReducers from "./authSlice";

export default configureStore({
  reducer: {
    auth: authReducers,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});
