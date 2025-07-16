import Logo from "./logo";

function Navbar() {
    const TAB_NAMES = ["Gallery", "Awards", "Join Us"];

    return (
        <div className="fixed w-full z-100 px-8 flex justify-between">
            <Logo></Logo>

            <div className="flex justify-end space-x-2 md:space-x-16">
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
                                } text-nowrap text-3xl items-center`}
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
