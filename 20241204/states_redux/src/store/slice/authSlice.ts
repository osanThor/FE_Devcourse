import { createSlice } from "@reduxjs/toolkit";

type User = {
  name: string;
  age: number;
};

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    user: null as User | null,
    isLoggedIn: false,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
