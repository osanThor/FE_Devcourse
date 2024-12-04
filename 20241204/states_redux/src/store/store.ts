import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/counterSlice";
import authSlice from "./slice/authSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice,
  },
});

// 상태를 위한 타입
export type RootState = ReturnType<typeof store.getState>;
// 액션 타입
export type AppDispatch = typeof store.dispatch;
