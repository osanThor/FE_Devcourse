import { useReducer } from "react";

interface ReducerState {
  name: string;
  email: string;
  password: string;
  isSubmit: boolean;
  error?: string;
}
interface ReducerAction {
  type: string;
  field?: string;
  value?: string;
  error?: string;
}

const initialState = {
  name: "",
  email: "",
  password: "",
  isSubmit: true,
  error: "",
};

function reducer(state: ReducerState, action: ReducerAction): ReducerState {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field!]: action.value };
    case "SET_ERROR":
      return { ...state, error: action.error };
    case "SUBMIT_START":
      return { ...state, isSubmit: true };
    case "SUBMIT_SUCCESS":
      return { ...state, isSubmit: false };
    case "SUBMIT_END":
      return { ...state, isSubmit: false };
    default:
      return state;
  }
}
export default function FormWithReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", field: name, value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!state.name || !state.email || !state.password) {
      dispatch({ type: "SET_ERROR", error: "입력 값을 모두 입력해주세요." });
      return;
    }

    if (state.isSubmit) return;
    dispatch({ type: "SET_ERROR", error: "" });
    dispatch({ type: "SUBMIT_START" });

    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      dispatch({ type: "SUBMIT_SUCCESS" });
    } catch (err) {
      dispatch({ type: "SET_ERROR", error: "폼 전송 중 에러 발생!" });
    } finally {
      dispatch({ type: "SUBMIT_END" });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="uname">Name:</label>
          <input
            type="text"
            id="uname"
            name="name"
            value={state.name}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            id="password"
            name="password"
            value={state.password}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        {state.error && <div className="text-rose-500">{state.error}</div>}
        <button type="submit" disabled={state.isSubmit}>
          회원가입
        </button>
      </form>
    </>
  );
}
