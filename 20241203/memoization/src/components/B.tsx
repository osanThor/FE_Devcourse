import React, { useState } from "react";
import C from "./C";

export default React.memo(function B({
  count2,
  setCount: setCurrentCount,
}: {
  count2: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [count, setCount] = useState(0);
  console.log("B rendering");
  return (
    <>
      <h2>
        B {count} / {count2}
      </h2>
      <button onClick={() => setCount((prev) => prev + 1)}>증가</button>
      <C />
    </>
  );
});
