import { useState } from "react";
import type { MouseEvent } from "react";

function Navbar() {
    const [currentTab, setCurrentTab] = useState("home-tab");

    function handleClick(event: MouseEvent<HTMLDivElement>) {
        console.log(`Current tab: ${currentTab}`);
        setCurrentTab(event.currentTarget.id);
    }

    const TAB_NAMES: string[] = ["Home", "About Us", "Contact Us"];

    return (
        <div className="w-full px-4 bg-zinc-800 flex justify-between">
            <div className="flex p-2 justify-self-start items-center">
                <img src="assets/logo.png" alt="Logo" className="w-10" />
                <div className="pl-2 text-2xl text-[#24b1cb]">
                    First Tech Coyotes
                </div>
            </div>

            <div className="flex justify-end">
                {TAB_NAMES.map((tabName, index) => {
                    const ID: string = `${tabName.toLowerCase().replace(" ", "-")}-tab`;

                    return <div
                        key={`tab-link-${index}`}
                        className={`flex px-4 text-nowrap text-xl hover:bg-zinc-400 ${
                            currentTab == ID ? "bg-zinc-400" : ""
                        } items-center`}
                        id={ID}
                        onClick={handleClick}
                    >
                        <span>{tabName}</span>
                    </div>
                })}
            </div>
        </div>
    );
}

export default Navbar;
