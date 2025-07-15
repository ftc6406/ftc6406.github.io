function Navbar() {
    const TAB_NAMES = ["Gallery", "About Us", "Join Us"];

    return (
        <div className="fixed w-full z-100 px-8 flex justify-between">
            <a href="#hero">
                <div className="flex md:p-4 sm:p-4 justify-self-start items-center">
                    <img
                        src="assets/logo.svg"
                        alt="Logo"
                        className="md:w-14 sm:w-4"
                    />
                    <div className="md:ml-8 sm:ml-4 md:text-4xl sm:text-2xl font-bold">
                        First Tech Coyotes
                    </div>
                </div>
            </a>

            <div className="flex justify-end md:space-x-16 sm:space-x-2 md:mr-16 sm:mr-2">
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
                                className={`flex
                                } text-nowrap md:text-4xl sm:text-2xl items-center`}
                                id={ID}
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
