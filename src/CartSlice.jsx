import { createSlice } from "@reduxjs/toolkit";

export const selectTotalQuantity = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);


export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Initialize items as an empty array,

  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;

      const existing = state.items.find((i) => i.name === item.name);
      if (existing) {
        existing.quantity += item.quantity;
      } else {
        state.items.push(item);
      }
    },
    removeItem: (state, action) => {
      const item = action.payload;
      const existing = state.items.find((i) => i.name === item.name);
      if (existing && existing.quantity == item.quantity)
        state.items = state.items.filter((i) => i.name != item.name);
      else if (existing) {
        existing.quantity -= item.quantity;
        if (existing && existing.quantity == 0)
          state.items = state.items.filter((i) => i.name != item.name);
      }
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.items.find((i) => i.name === name);
      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
