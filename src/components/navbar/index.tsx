function Navbar() {
    const TAB_NAMES = ["Gallery", "About Us", "Contact Us"];

    return (
        <div className="fixed w-full z-100 px-8 flex justify-between">
            <div className="flex p-4 justify-self-start items-center">
                <img src="assets/logo.svg" alt="Logo" className="w-14" />
                <div className="ml-10 text-4xl font-bold">
                    First Tech Coyotes
                </div>
            </div>

            <div className="flex justify-end space-x-16 mr-16">
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
                                } text-nowrap text-4xl items-center`}
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
