function Navbar() {
    const TAB_NAMES = ["Gallery", "Awards", "Join Us"];

    return (
        <div
            className="fixed w-full px-4 md:px-8 py-4
                z-100 flex justify-between"
        >
            <a href="#hero">
                <div className="flex space-x-4 items-center">
                    <img
                        src="assets/logo.svg"
                        alt="logo"
                        className="w-10 md:w-12 lg:w-14"
                    />

                    <h2 className="text-xl md:text-3xl lg:text-4xl font-bold">
                        First Tech Coyotes
                    </h2>
                </div>
            </a>

            {/* < md navbar */}
            <div className="md:hidden"></div>

            {/* >=md navbar */}
            <div className="hidden md:flex space-x-16">
                {TAB_NAMES.map((tabName, index) => {
                    const ID = `${tabName.toLowerCase().replace(" ", "-")}-tab`;

                    return (
                        <a
                            key={`navbar-link-${index}`}
                            href={`#${ID.replace("-tab", "")}`}
                            id={ID}
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
}

export default Navbar;
