import { create } from "zustand";
import { CounterStoreType } from "../types/zustand";

export const useCounterStore = create<CounterStoreType>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));
