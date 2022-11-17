import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: true,
  products: [],
  carts: [],
};

/// Fetch Data-----
export const fetchAllProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const resp = await axios.get("https://fakestoreapi.com/products");
    return resp.data;
  }
);
//------------------
const ProductSlice = createSlice({
  name: "products/allproducts",
  initialState: initialState,
  reducers: {
    AddToCart: (state, acttion) => {
      const cartItem = state.products.find((item) => {
        return item.id === acttion.payload;
      });

      state.carts = [...state.carts, cartItem];
    },
    RemoveCartItem: (state, acttion) => {
      const remailItems = state.carts.filter((item) => {
        return item.id !== acttion.payload;
      });
      state.carts = remailItems;
    },
  },
  // ----api data store
  extraReducers: {
    [fetchAllProducts.fulfilled]: (state, acttion) => {
      state.loading = false;
      state.products = acttion.payload;
    },
  },
  // ------
});

export const { AddToCart, RemoveCartItem } = ProductSlice.actions;
export default ProductSlice.reducer;
