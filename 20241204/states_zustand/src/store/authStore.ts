import { create } from "zustand";
import { AuthStoreType } from "../types/zustand";

export const useAuthStore = create<AuthStoreType>((set) => ({
  user: null,
  isLoggedIn: false,
  login: (user) => set({ user, isLoggedIn: true }),
  logout: () => set({ user: null, isLoggedIn: false }),
}));
