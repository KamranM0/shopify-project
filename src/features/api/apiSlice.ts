import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  Category,
  CategoryFormTypes,
  CategoryUpdateTypes,
} from "../../types/category";
import { APIResponse, OnlyMessageResponse } from "../../types/response";
import { Product, ProductFormTypes } from "../../types/product";
import {
  authCheckResponse,
  LoginFormTypes,
  RegistrationFormTypes,
  User,
} from "../../types/user";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1/",
    credentials: "include",
  }),
  tagTypes: ["Category", "Product"],
  endpoints: (builder) => ({
    getCategories: builder.query<APIResponse<Category[]>, void>({
      query: () => "categories",
      providesTags: ["Category"],
    }),
    getOneCategory: builder.query<APIResponse<Category>, string | undefined>({
      query: (id) => `categories/${id}`,
    }),
    createCategory: builder.mutation<
      APIResponse<Category>,
      CategoryFormTypes["formData"]
    >({
      query: (formData) => ({
        url: "categories",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Category"],
    }),
    updateCategory: builder.mutation<
      APIResponse<Category>,
      CategoryUpdateTypes
    >({
      query: ({ id, formData }) => ({
        url: `categories/${id}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["Category"],
    }),
    getProducts: builder.query<APIResponse<Product[]>, void>({
      query: () => "products",
      providesTags: ["Product"],
    }),
    getOneProduct: builder.query<APIResponse<Product>, string | undefined>({
      query: (id) => `products/${id}`,
    }),
    createProduct: builder.mutation<
      APIResponse<Product>,
      ProductFormTypes["formData"]
    >({
      query: (formData) => ({
        url: "products",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Product"],
    }),
    updateProduct: builder.mutation<APIResponse<Product>, ProductFormTypes>({
      query: ({ id, formData }) => ({
        url: `products/${id}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["Product"],
    }),
    deleteProduct: builder.mutation<APIResponse<Product>, string>({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
    login: builder.mutation<User, LoginFormTypes>({
      query: ({ email, password }) => ({
        url: "auth/login",
        method: "POST",
        body: { email, password },
      }),
    }),
    signup: builder.mutation<User, RegistrationFormTypes>({
      query: ({ email, username, password }) => ({
        url: "auth/signup",
        method: "POST",
        body: { email, username, password },
      }),
    }),
    checkAuthorization: builder.query<authCheckResponse, void>({
      query: () => {
        return "auth/check-admin";
      },
    }),
    logout: builder.mutation<OnlyMessageResponse, void>({
      query: () => ({
        url: "auth/logout",
        method: "GET",
      }),
    }),
    checkLoggedIn: builder.query<User, void>({
      query: () => "auth/check-logged-in",
    }),
  }),
});

export const {
  useCheckLoggedInQuery,
  useGetCategoriesQuery,
  useGetOneCategoryQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useGetOneProductQuery,
  useLogoutMutation,
  useGetProductsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useLoginMutation,
  useCheckAuthorizationQuery,
  useSignupMutation,
} = apiSlice;
