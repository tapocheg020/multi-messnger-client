import { configureStore } from "@reduxjs/toolkit";
import meSlice from "./slice/me.slice";
import modalSlice from "./slice/modal.slice";
const store = configureStore({
  reducer: {
    me: meSlice,
    modal: modalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
