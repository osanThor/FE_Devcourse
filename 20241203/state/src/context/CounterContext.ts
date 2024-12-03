import { createContext } from "react";
interface CounterContextType {
  count: number;
}
interface CounterActionContextType {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export const CounterContext = createContext<CounterContextType | null>(null);
export const CounterActionContext =
  createContext<CounterActionContextType | null>(null);
