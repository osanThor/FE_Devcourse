import { useReducer } from "react";
import Input from "./html/Input";
import Checkbox from "./html/Checkbox";
import Button from "./html/Button";
import ErrorMessage from "./error/ErrorMessage";

interface ReducerState {
  email: string;
  pw: string;
  agree: boolean;
  error?: string;
  isSubmit: boolean;
}
interface ReducerAction {
  type: string;
  field?: string;
  value?: string | boolean;
  error?: string;
}

const INITIALSTATE = {
  email: "",
  pw: "",
  agree: false,
  error: "",
  isSubmit: false,
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
export default function Login() {
  const [form, formDispatch] = useReducer(reducer, INITIALSTATE);

  const handleChangeFields = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    if (name === "agree") {
      formDispatch({ type: "SET_FIELD", field: name, value: checked });
    } else {
      formDispatch({ type: "SET_FIELD", field: name, value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    if (!form.email || !form.pw) {
      formDispatch({
        type: "SET_ERROR",
        error: "입력 값을 모두 입력해주세요.",
      });
      return;
    }
    console.log(form.agree);
    if (!form.agree) {
      formDispatch({
        type: "SET_ERROR",
        error: "약관에 동의해주세요.",
      });
      return;
    }

    if (form.isSubmit) return;
    formDispatch({
      type: "SET_ERROR",
      error: "",
    });
    formDispatch({
      type: "SUBMIT_START",
    });
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      formDispatch({ type: "SUBMIT_SUCCESS" });
    } catch (err) {
      formDispatch({ type: "SET_ERROR", error: "폼 전송 중 에러 발생!" });
    } finally {
      formDispatch({ type: "SUBMIT_END" });
    }
  };

  return (
    <>
      <div className="item-middle bg-black">
        <div className="w-[375px] min-h-[434px] rounded-lg bg-white border border-[#D1D1D1] py-10 px-[25px] text-[#4f4f4f]">
          <h1 className="text-xl font-bold mb-[10px]">Login Into App</h1>
          <p className="text-sm mb-5">Please enter your details to continue.</p>
          <form onSubmit={handleSubmit} action="" className="grid gap-4">
            <Input
              type="text"
              className="input-style1"
              name="email"
              placeholder="someone@example.com"
              value={form.email}
              onChange={handleChangeFields}
            />
            <Input
              type="password"
              className="input-style1"
              name="pw"
              placeholder="Enter Password"
              value={form.pw}
              onChange={handleChangeFields}
            />
            <Checkbox
              name="agree"
              checked={form.agree}
              onChange={handleChangeFields}
            >
              <span className="text-sm color-[#4f4f4f]">
                I agree with <em className="not-italic font-bold">terms</em> and{" "}
                <em className="not-italic font-bold">policies</em>.
              </span>
            </Checkbox>
            {form.error && <ErrorMessage error={form.error} />}
            <div className="mt-4 grid gap-4">
              <Button
                type="submit"
                className="w-full bg-[#4F4F4F] text-[#F5F5F5] rounded-lg"
              >
                Log In
              </Button>
              <Button
                type="button"
                className="w-full border border-[#4f4f4f] text-[#4f4f4f] rounded-lg"
                disabled={form.isSubmit}
              >
                Go To Sing up
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
