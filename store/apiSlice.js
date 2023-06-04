import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  tagTypes: ["Pincode", "Products"],
  endpoints: (builder) => ({
    checkPinCode: builder.query({
      query: () => "/pincode",
      providesTags: () => ["Pincode"],
    }),
    getProdects: builder.query({
      query: () => "/hello",
      providesTags: () => ["Products"],
      options: {
        forceRefetch: true, // Add this option to always refetch the data
      },
    }),
  }),
});

export const { useCheckPinCodeQuery, useGetProdectsQuery } = apiSlice;
