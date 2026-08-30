import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlistItems: JSON.parse(localStorage.getItem("wishlist")) || [],
};

const wishlistSlice = createSlice({
  name: "wishlist",

  initialState,

  reducers: {
    toggleWishlist: (state, action) => {
      const product = action.payload;

      const exists = state.wishlistItems.find(
        (item) => item.id === product.id
      );

      if (exists) {
        state.wishlistItems = state.wishlistItems.filter(
          (item) => item.id !== product.id
        );
      } else {
        state.wishlistItems.push(product);
      }

        localStorage.setItem(
        "wishlist",
        JSON.stringify(state.wishlistItems)
      );
    },

    clearWishlist: (state) => {
      state.wishlistItems = [];
      localStorage.setItem(
        "wishlist",
        JSON.stringify(state.wishlistItems));
    },
  },
});

export const {
  toggleWishlist,
  clearWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;