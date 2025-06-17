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
        <div className="w-full bg-zinc-800 text-xl flex justify-between items-center p-4">
            <div>
                <img src="assets/logo.png" alt="Logo" className="size-10" />
            </div>

            <div className="flex justify-end">
                {TAB_NAMES.map((tabName, index) => (
                    <p
                        key={index}
                        className="tab px-[5%] hover:bg-zinc-700 align-middle text-nowrap"
                        id={`${tabName.toLowerCase().replace(" ", "-")}-tab`}
                        onClick={handleClick}
                    >
                        {tabName}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default Navbar;
