import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import cartReducer from "@/features/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
