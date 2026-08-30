import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: JSON.parse(localStorage.getItem("orders")) || [],
};

const orderSlice = createSlice({
  name: "orders",
  initialState,

  reducers: {
    placeOrder: (state, action) => {
      state.orders.unshift(action.payload);

      localStorage.setItem(
        "orders",
        JSON.stringify(state.orders)
      );
    },

    clearOrders: (state) => {
      state.orders = [];
      localStorage.setItem("orders", JSON.stringify([]));
    },
  },
});

export const { placeOrder, clearOrders } = orderSlice.actions;
export default orderSlice.reducer;