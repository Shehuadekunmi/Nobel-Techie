import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice"; // Import the API slice

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer // Add RTK Query reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware) // Add middleware
});
