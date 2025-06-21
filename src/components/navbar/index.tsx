import { useState } from "react";
import type { MouseEvent } from "react";

function Navbar() {
    const [currentTab, setCurrentTab] = useState("home-tab");

    function handleClick(event: MouseEvent<HTMLDivElement>) {
        console.log(`Current tab: ${currentTab}`);
        setCurrentTab(event.currentTarget.id);
    }

    const TAB_NAMES: string[] = ["Home", "About Us", "Gallery", "Contact Us"];

    return (
        <div className="fixed w-full z-100 px-4 flex justify-between bg-zinc-800">
            <div className="flex p-2 justify-self-start items-center">
                <img src="assets/logo.png" alt="Logo" className="w-10" />
                <div className="text-2xl text-[#24b1cb]">
                    First Tech Coyotes
                </div>
            </div>

            <div className="flex justify-end">
                {TAB_NAMES.map((tabName, index) => {
                    const ID: string = `${tabName
                        .toLowerCase()
                        .replace(" ", "-")}-tab`;

                    return (
                        <a
                            href={`#${ID.replace("-tab", "")}`}
                            className="flex justify-end"
                        >
                            <div
                                key={`tab-link-${index}`}
                                className={`flex px-4 hover:bg-zinc-700 ${
                                    currentTab == ID ? "bg-zinc-700" : ""
                                } text-nowrap text-xl text-[#24b1cb] items-center`}
                                id={ID}
                                onClick={handleClick}
                            >
                                <span>{tabName}</span>
                            </div>
                        </a>
                    );
                })}
            </div>
        </div>
    );
}

export default Navbar;
