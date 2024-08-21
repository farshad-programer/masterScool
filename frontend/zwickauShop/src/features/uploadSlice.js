import { apiSlice } from "../app/api/apiSlice";

export const uploadSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    upload: builder.mutation({
      query: (files) => ({
        url: "/admin/upload",
        method: "POST",
        body: files,
      }),

      // invalidatesTags: [{ type: "User", id: "LIST" }],
    }),
  }),
});

export const { useUploadMutation } = uploadSlice;

// returns the query result object
