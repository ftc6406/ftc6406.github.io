import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import AboutUs from "./components/about_us";
import ContactUs from "./components/contact_us";
import Gallery from "./components/gallery";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Navbar />
        <Home />
        <AboutUs />
        <ContactUs />
        <Gallery />
    </StrictMode>
);
