import { useState } from "react";
import type { MouseEvent } from "react";

function Tabs({height}: {height: number}) {
    const [currentTab, setCurrentTab] = useState("home-tab");

    function handleClick(event: MouseEvent<HTMLDivElement>) {
        setCurrentTab(event.currentTarget.id);
        console.log(`Current tab: ${currentTab}`);
    }

    const TAB_NAMES: string[] = ["Home", "About Us"];
    return (
        <>
            <div
                className={`w-full h-${height} bg-zinc-800 text-xl justify-end flex`}
                id="tabs"
                onClick={handleClick}
            >
                {TAB_NAMES.map((tabName, index) => (
                    <div
                        key={index}
                        className="tab px-[5%] py-4 hover:bg-zinc-700 align-middle"
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
