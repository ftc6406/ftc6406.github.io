import { useState } from "react";
import type { MouseEvent } from "react";

function Navbar() {
    const [currentTab, setCurrentTab] = useState("home-tab");

    function handleClick(event: MouseEvent<HTMLDivElement>) {
        setCurrentTab(event.currentTarget.id);
        console.log(`Current tab: ${currentTab}`);
    }

    const TAB_NAMES: string[] = ["Home", "About Us"];

    return (
        <div className="w-full px-4 bg-zinc-800 flex justify-between">
            <div className="justify-self-start p-2">
                <img src="assets/logo.png" alt="Logo" className="w-10" />
            </div>

            <div className="flex justify-end">
                {TAB_NAMES.map((tabName, index) => (
                    <div
                        key={`tab-link-${index}`}
                        className="flex px-4 text-nowrap text-xl hover:bg-zinc-400 items-center"
                        id={`${tabName.toLowerCase().replace(" ", "-")}-tab`}
                        onClick={handleClick}
                    >
                        <span>{tabName}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Navbar;
