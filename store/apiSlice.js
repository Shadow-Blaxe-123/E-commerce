import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    checkPinCode: builder.query({
      query: () => "/pincode",
    }),
  }),
});

export const { useCheckPinCodeQuery } = apiSlice;
