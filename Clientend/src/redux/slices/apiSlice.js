import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URI = import.meta.env.VITE_APP_BASE_URL;

const baseQuery = fetchBaseQuery({ baseUrl: API_URI + "/api" });

export const apiSlice = createApi({
  baseQuery,
  prepareHeaders: (headers, { getState }) => {
    // Retrieve the token from localStorage, state, or any secure storage
    const token = localStorage.getItem('token'); // Example using localStorage
    // const token = getState().auth.token; // Example using Redux state

    if (token) {
      headers.set('token', `${token}`);
    }
    return headers;
  },

  tagTypes: [],
  endpoints: (builder) => ({})
});