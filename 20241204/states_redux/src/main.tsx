import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./css/index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import AuthCheck from "./components/AuthCheck.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <AuthCheck>
        <App />
      </AuthCheck>
    </Provider>
  </StrictMode>
);
