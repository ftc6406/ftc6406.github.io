import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import Navbar from "./components/navbar";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Navbar />
    </StrictMode>
);

console.log(document.getElementById("logo"));
