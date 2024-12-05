import AuthCheck from "./components/AuthCheck";
import Count from "./components/Count";
import CountOutsideDisplay from "./components/CountOutsideDisplay";

export default function App() {
  return (
    <AuthCheck>
      <Count />
      <CountOutsideDisplay />
    </AuthCheck>
  );
}
