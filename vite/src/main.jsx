import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Tabs from "./tabs.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
        <Tabs />
    </StrictMode>
);
