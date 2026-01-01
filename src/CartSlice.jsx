// CartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  CartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;

      const existing = state.CartItems.find((i) => i.name === name);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.CartItems.push({ name, image, cost, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
      const nameToRemove = action.payload;
      state.CartItems = state.CartItems.filter((i) => i.name !== nameToRemove);
    },

    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.CartItems.find((i) => i.name === name);
      if (item) item.quantity = quantity;
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
