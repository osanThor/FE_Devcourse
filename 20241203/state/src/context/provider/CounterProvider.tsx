import { useMemo, useState } from "react";
import { CounterActionContext, CounterContext } from "../CounterContext";

export default function CounterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((count) => count + 1);
  };
  const decrement = () => {
    setCount((count) => count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  const memo = useMemo(
    () => ({
      increment,
      decrement,
      reset,
    }),
    []
  );

  return (
    <>
      <CounterActionContext.Provider value={memo}>
        <CounterContext.Provider value={{ count }}>
          {children}
        </CounterContext.Provider>
      </CounterActionContext.Provider>
    </>
  );
}
