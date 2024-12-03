import { useContext } from "react";
import { CounterActionContext } from "../context/CounterContext";

export default function CountButtons() {
  console.log("CountButtons Render");
  const { decrement, reset, increment } = useContext(CounterActionContext)!;
  return (
    <>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>리셋</button>
      <button onClick={increment}>증가</button>
    </>
  );
}
