import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UserAPi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://65e99b29c9bf92ae3d399a52.mockapi.io",
  }),
  endpoints: (builder) => ({}),
  tagTypes: ["User"],
});
