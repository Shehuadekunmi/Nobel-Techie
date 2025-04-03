import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api", // Name of the reducer in the store
  baseQuery: fetchBaseQuery({ baseUrl: "https://nobel-techie-server.onrender.com" }),
  endpoints: (builder) => ({
    publishWinner: builder.mutation({
      query: (data) => ({
        url: "/api/auth/winners",
        method: "POST",
        body: data,
        headers: { "Content-Type": "application/json" }
      })
    })
  })
});

export const { usePublishWinnerMutation } = apiSlice; // Export the mutation hook
