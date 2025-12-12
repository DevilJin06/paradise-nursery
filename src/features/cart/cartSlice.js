import { createSlice } from '@reduxjs/toolkit';

// try to load from localStorage
const saved = localStorage.getItem('paradise_cart');
const initialState = saved ? JSON.parse(saved) : {
  items: {} // items keyed by id: { id, plant, qty }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const plant = action.payload;
      const id = plant.id;
      if (state.items[id]) {
        state.items[id].qty += 1;
      } else {
        state.items[id] = { plant, qty: 1 };
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      delete state.items[id];
    },
    incrementQty(state, action) {
      const id = action.payload;
      if (state.items[id]) state.items[id].qty += 1;
    },
    decrementQty(state, action) {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id].qty -= 1;
        if (state.items[id].qty <= 0) delete state.items[id];
      }
    },
    clearCart(state) {
      state.items = {};
    },
    setCart(state, action) {
      state.items = action.payload;
    }
  }
});

export const { addToCart, removeFromCart, incrementQty, decrementQty, clearCart, setCart } = cartSlice.actions;

export default cartSlice.reducer;
