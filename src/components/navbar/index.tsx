import React, { useState, type ReactNode } from "react";

const Navbar = (): ReactNode => {
    const [isOpen, setIsOpen] = useState(false);
    const menuButtonImg = isOpen
        ? "assets/close_x.svg"
        : "assets/hamburger_menu.svg";

    const TAB_NAMES = ["Gallery", "Awards", "Join Us"];
    return (
        <div
            className={`fixed w-full px-4 md:px-8 py-4
                z-100 flex justify-between
                ${isOpen ? "bg-stone-900" : "bg-transparent"}
                transition duration-1000
                starting:translate-y-[-100%] translate-y-0
                starting:opacity-0 opacity-100`}
        >
            {/* Logo and team name */}
            <a href="#hero" className="flex space-x-4 items-center">
                <img
                    src="assets/logo.svg"
                    alt="logo"
                    className="w-10 md:w-12 lg:w-14"
                />

                <h2 className="text-xl md:text-3xl lg:text-4xl font-bold">
                    First Tech Coyotes
                </h2>
            </a>

            {/* Mobile nav menu toggle */}
            <div className="flex md:hidden items-center">
                <button
                    className="size-7 text-3xl"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="toggle mobile menu"
                >
                    <img
                        src={menuButtonImg}
                        alt={isOpen ? "open menu" : "close menu"}
                    />
                </button>
            </div>

            {/* Mobile nav menu */}
            <div
                className={`absolute md:hidden
                        top-full left-0 w-full py-4 space-y-4

                        transition-all duration-1000 transition-discrete
                        starting:bg-transparent 
                        ${isOpen ? "bg-stone-900" : "hidden bg-transparent"}
                `}
            >
                {TAB_NAMES.map((tabName, index) => {
                    const anchorLink = tabName.toLowerCase().replace(" ", "-");

                    return (
                        <a
                            key={`navbar-link-${index}`}
                            href={`#${anchorLink}`}
                            id={`${anchorLink}-tab`}
                            className={`flex px-4
                                text-2xl lg:text-3xl 
                                text-nowrap items-center

                                transition-all duration-1000 transition-discrete
                                starting:opacity-0
                                ${isOpen ? "opacity-100" : "opacity-0"}
                            `}
                        >
                            {tabName}
                        </a>
                    );
                })}
            </div>

            {/* Desktop navbar anchors */}
            <div className="hidden md:flex space-x-16">
                {TAB_NAMES.map((tabName, index) => {
                    const anchorLink = tabName.toLowerCase().replace(" ", "-");

                    return (
                        <a
                            key={`navbar-link-${index}`}
                            href={`#${anchorLink}`}
                            id={`${anchorLink}-tab`}
                            className="flex text-2xl lg:text-3xl 
                                text-nowrap items-center"
                        >
                            {tabName}
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default Navbar;
