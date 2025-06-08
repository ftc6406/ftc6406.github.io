import { useState } from "react";
import type { MouseEvent } from "react";

function Tabs() {
    const [currentTab, setCurrentTab] = useState("home-tab");

    function handleClick(event: MouseEvent<HTMLDivElement>) {
        setCurrentTab(event.currentTarget.id);
        console.log(`Current tab: ${currentTab}`);
    }

    return (
        <>
            <div
                className="bg-gray-800 text-gray-50 w-full h-2/5"
                id="tabs"
                onClick={handleClick}
            >
                <div id="home-tab">Home</div>
                <div id="about-us-tab">About Us</div>
            </div>
        </>
    );
}

export default Tabs;
