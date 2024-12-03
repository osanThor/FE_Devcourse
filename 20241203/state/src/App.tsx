import { twMerge } from "tailwind-merge";
import CountButtons from "./components/CountButtons";
import CountDisplay from "./components/CountDisplay";
import Test from "./components/Test";

export default function App() {
  return (
    <>
      <h1 className={twMerge("text-3xl font-bold underline dancing-script")}>
        Hello world!
      </h1>
      <Test />
      <CountDisplay />
      <CountButtons />
    </>
  );
}
