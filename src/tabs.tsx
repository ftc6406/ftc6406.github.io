import { useState } from "react";
import type { MouseEvent } from "react";

function Tabs() {
    const [currentTab, setCurrentTab] = useState("home-tab");

    function handleClick(event: MouseEvent<HTMLDivElement>) {
        setCurrentTab(event.currentTarget.id);
        console.log(`Current tab: ${currentTab}`);
    }

    const TAB_NAMES: string[] = ["Home", "About Us"];

    return (
        <>
            <div
                className="w-full h-1/3 bg-gray-700 text-gray-50 text-xl justify-end flex"
                id="tabs"
                onClick={handleClick}
            >
                {TAB_NAMES.map((tabName, index) => (
                    <div
                        key={index}
                        className="tab px-25 py-4 hover:bg-gray-600"
                        id={`${tabName.toLowerCase().replace(" ", "-")}-tab`}
                    >
                        {tabName}
                    </div>
                ))}
            </div>
        </>
    );
}

export default Tabs;
