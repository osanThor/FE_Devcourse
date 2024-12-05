import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { decrement, increment, reset } from "../store/slice/counterSlice";

export default React.memo(function CountButtons() {
  console.log("CountButtons rendering");
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <button onClick={() => dispatch(decrement())}>감소</button>
      <button onClick={() => dispatch(reset())}>리셋</button>
      <button onClick={() => dispatch(increment())}>증가</button>
      <button
        onClick={() =>
          dispatch({ type: "counterSlice/incrementByAmount", payload: 10 })
        }
      >
        10씩 증가
      </button>
    </>
  );
});
