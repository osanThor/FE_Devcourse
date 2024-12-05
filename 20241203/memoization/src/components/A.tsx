import { useCallback, useState } from "react";
import B from "./B";

export default function A() {
  console.log("A rendering");
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const count3 = 1;
  const increment = useCallback(() => {
    setCount((count) => count + 1);
  }, []);
  return (
    <>
      <h1>
        A: {count} / {count2}
      </h1>
      <button onClick={increment}>count 증가</button>
      <button onClick={() => setCount2((prev) => prev + 1)}>count2 증가</button>
      <B count2={count3} setCount={setCount} />
    </>
  );
}
