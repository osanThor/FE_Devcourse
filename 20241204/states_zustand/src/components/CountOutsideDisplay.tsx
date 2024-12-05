import { useCounterStore } from "../store/counterStore";

export default function CountOutsideDisplay() {
  const count = useCounterStore((state) => state.count);
  return (
    <div>
      <h1>outside count: {count}</h1>
    </div>
  );
}
