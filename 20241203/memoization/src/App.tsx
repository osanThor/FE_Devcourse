import { twMerge } from "tailwind-merge";
import A from "./components/A";
import { initialItems } from "./utils/utils";
import { useMemo, useState } from "react";

export default function App() {
  console.log("App rendering");
  const [count, setCount] = useState(0);
  const selectedItems = useMemo(
    () => initialItems.find((item) => item.selected),
    []
  );

  return (
    <>
      <h1 className={twMerge("text-3xl font-bold underline dancing-script")}>
        App: {count} / {selectedItems?.id}
      </h1>
      <button onClick={() => setCount((prev) => prev + 1)}>증가</button>
      <A />
    </>
  );
}
