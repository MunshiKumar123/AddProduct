import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./reducers/ProductSlice";

const store = configureStore({
  reducer: {
    products: ProductSlice,
  },
});

export default store;
