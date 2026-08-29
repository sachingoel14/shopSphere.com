import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),

  tagTypes: ["Products"],

  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",
      providesTags: ["Products"],
    }),

    searchProducts: builder.query({
    query: (searchTerm) => `products/search?q=${searchTerm}`,
    }),

    getProductsByCategory: builder.query({
    query: (category) => `products/category/${category}`,
    }),

    getCategories: builder.query({
    query: () => "products/categories",
    }),

    getProductById: builder.query({
  query: (id) => `products/${id}`,
    }),

  }),
});

export const { useGetProductsQuery , useSearchProductsQuery ,useGetProductsByCategoryQuery , useGetCategoriesQuery , useGetProductByIdQuery} = productApi;