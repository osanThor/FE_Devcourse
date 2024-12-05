import { useReducer } from "react";

type ReducerState = { count: number };
type ReducerAction = { type: string };

function reducer(state: ReducerState, action: ReducerAction) {
  if (action.type === "dec") return { count: state.count - 1 };
  if (action.type === "inc") return { count: state.count + 1 };
  if (action.type === "reset") return { count: 0 };
  else return state;
}

export default function CountWithReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "dec" })}>감소</button>
      <button onClick={() => dispatch({ type: "inc" })}>리셋</button>
      <button onClick={() => dispatch({ type: "reset" })}>증가</button>
    </>
  );
}
