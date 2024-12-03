import { useEffect } from "react";
import { twMerge } from "tailwind-merge";

export default function App() {
  useEffect(() => {}, []);
  return (
    <>
      <h1 className={twMerge("text-3xl font-bold underline dancing-script")}>
        Hello world!
      </h1>
    </>
  );
}
