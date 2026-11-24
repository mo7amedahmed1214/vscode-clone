import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import treeReducer from "./feature/TreeSlice";
const store = configureStore({
  reducer: {
    tree: treeReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
