import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../app/api/apiSlice";

const categorysAdapter = createEntityAdapter();

const initialState = categorysAdapter.getInitialState();

export const categorysApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategorys: builder.query({
      query: () => "/auth/category",
      transformResponse: (responseData) => {
        const loadedCategorys = responseData.map((category) => {
          category.id = category._id;
          return category;
        });
        return categorysAdapter.setAll(initialState, loadedCategorys);
      },
      providesTags: (result, error, arg) => [
        { type: "Category", id: "LIST" },
        ...result.ids.map((id) => ({ type: "Category", id })),
      ],
    }),
  }),
});

export const { useGetCategorysQuery } = categorysApiSlice;

// returns the query result object
export const selectCategorysResult =
  categorysApiSlice.endpoints.getCategorys.select();

// Creates memoized selector
const selectCategorysData = createSelector(
  selectCategorysResult,
  (categorysResult) => categorysResult.data // normalized state object with ids & entities
);

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllCategorys,
  selectById: selectCategoryById,
  selectIds: selectCategoryIds,
  // Pass in a selector that returns the posts slice of state
} = categorysAdapter.getSelectors(
  (state) => selectCategorysData(state) ?? initialState
);
