import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Pages from "./components/non_main_pages";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Navbar />
        <Home />
        <Pages />
    </StrictMode>
);
