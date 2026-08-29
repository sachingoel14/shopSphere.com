import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice.js";
import { authApi } from "../features/api/authApi.js";
import { productApi } from "../features/api/productApi";

import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware , productApi.middleware),
});