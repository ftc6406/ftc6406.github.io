import { useState } from "react";
import type { MouseEvent } from "react";

import "./tabs.css";

function Tabs() {
    const [currentTab, setCurrentTab] = useState("home-tab");

    function handleClick(event: MouseEvent<HTMLDivElement>) {
        setCurrentTab(event.currentTarget.id);
        console.log(`Current tab: ${currentTab}`);
    }

    return (
        <>
            <div
                className="w-full h-1/5 bg-gray-800 text-gray-50 text-3xl justify-items-center flex"
                id="tabs"
                onClick={handleClick}
            >
                <div className="tab mx-100" id="home-tab">Home</div>
                <div className="tab mx-100" id="about-us-tab">About Us</div>
            </div>
        </>
    );
}

export default Tabs;
