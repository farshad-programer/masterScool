import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../app/api/apiSlice";

const productsAdapter = createEntityAdapter();

const initialState = productsAdapter.getInitialState();

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/auth/product",
      transformResponse: (responseData) => {
        const loadedProducts = responseData.map((product) => {
          product.id = product._id;
          return product;
        });
        return productsAdapter.setAll(initialState, loadedProducts);
      },
      providesTags: (result, error, arg) => [
        { type: "Product", id: "LIST" },
        ...result.ids.map((id) => ({ type: "Product", id })),
      ],
    }),
    getProductsByCategoryId: builder.query({
      query: (id) => `/auth/category/${id}`,
      transformResponse: (responseData) => {
        const loadedProducts = responseData.data.data.map((product) => {
          product.id = product._id;
          return product;
        });
        return productsAdapter.setAll(initialState, loadedProducts);
      },
      providesTags: (result, error, arg) => [
        { type: "Product", id: "LIST" },
        ...result.ids.map((id) => ({ type: "Product", id })),
      ],
    }),
    addNewProduct: builder.mutation({
      query: initialProduct => ({
          url: '/admin/product',
          method: 'POST',
          body: {
              ...initialProduct,
          }
      }),
      invalidatesTags: [
          { type: 'Product', id: "LIST" }
      ]
  }),
  }),
});

export const { useGetProductsQuery, useGetProductsByCategoryIdQuery, useAddNewProductMutation } =
  productsApiSlice;

// returns the query result object
export const selectProductsResult =
  productsApiSlice.endpoints.getProducts.select();

// Creates memoized selector
const selectProductsData = createSelector(
  selectProductsResult,
  (productsResult) => productsResult.data // normalized state object with ids & entities
);

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllProducts,
  selectById: selectProductById,
  selectIds: selectProductIds,
  // Pass in a selector that returns the products slice of state
} = productsAdapter.getSelectors(
  (state) => selectProductsData(state) ?? initialState
);
