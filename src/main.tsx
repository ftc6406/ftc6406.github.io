import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import Navbar from "./components/navbar";
import Image from "./components/image";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Navbar />
        <Image />
    </StrictMode>
);
