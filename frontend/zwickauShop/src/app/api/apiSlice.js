

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials } from "../../features/auth/authSlice";
import { url } from "../url";

const baseQuery = fetchBaseQuery({
  baseUrl: url,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.accessToken;
    console.log("object 1", getState().auth.accessToken);
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  

  let result = await baseQuery(args, api, extraOptions);
  console.log("sending before refresh token");
  console.log("result :", args);

  if (result?.error?.originalStatus === 403) {
    console.log("sending refresh token");

    
    const refreshResult = await baseQuery(
      "/auth/refreshToken",
      api,
      extraOptions
    );
    console.log("refreshResult", refreshResult);
    if (refreshResult?.data) {
      // store the new token
      await api.dispatch(setCredentials({ ...refreshResult.data }));

      // retry original query with new access token
      result = await baseQuery(args, api, extraOptions);
      console.log("result", result);
    } else {
      if (refreshResult?.error?.status === 403) {
        refreshResult.error.data.message = "Your login has expired.";
      }
      return refreshResult;
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Product", "Category", "User"],
  endpoints: (builder) => ({}),
});
