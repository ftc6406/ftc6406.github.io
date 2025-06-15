import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.tsx";
import Tabs from "./tabs.tsx";
import Logo from "./logo.tsx";

const LOGO_HEIGHT: number = 16;
createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Logo height={LOGO_HEIGHT} />
        <Tabs height={LOGO_HEIGHT} />
        <App />
    </StrictMode>
);

console.log(document.getElementById("logo"));
