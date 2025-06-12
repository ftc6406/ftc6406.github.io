import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Tabs from "./tabs.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Tabs />
        <App />
    </StrictMode>
);
