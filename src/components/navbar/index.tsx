import { useState } from "react";
import type { MouseEvent } from "react";

function Navbar() {
    const [currentTab, setCurrentTab] = useState("home-tab");

    function handleClick(event: MouseEvent<HTMLDivElement>) {
        setCurrentTab(event.currentTarget.id);
    }

    const TAB_NAMES = ["Home", "About Us", "Gallery", "Contact Us"];

    return (
        <div className="fixed w-full z-100 px-4 flex justify-between bg-zinc-800">
            <div className="flex p-2 justify-self-start items-center">
                <img src="assets/logo.png" alt="Logo" className="w-10" />
                <div className="ml-4 text-2xl text-[#24b1cb]">
                    First Tech Coyotes
                </div>
            </div>

            <div className="flex justify-end">
                {TAB_NAMES.map((tabName, index) => {
                    const ID = `${tabName.toLowerCase().replace(" ", "-")}-tab`;

                    return (
                        <a
                            key={`navbar-link-${index}`}
                            href={`#${ID.replace("-tab", "")}`}
                            className="flex justify-end"
                        >
                            <div
                                key={`navbar-div-${index}`}
                                className={`flex px-4 hover:bg-zinc-700 ${
                                    currentTab == ID ? "bg-zinc-700" : ""
                                } text-nowrap text-xl text-[#24b1cb] items-center`}
                                id={ID}
                                onClick={handleClick}
                            >
                                <span key={`navbar-span-${index}`}>
                                    {tabName}
                                </span>
                            </div>
                        </a>
                    );
                })}
            </div>
        </div>
    );
}

export default Navbar;
