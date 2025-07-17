function Hero() {
    return (
        <div className="bg-[url(assets/man_mountain.jpg)] bg-center" id="hero">
            {/* Backdrop filter */}
            <div
                className="h-[100vh] pt-64
                    flex flex-row
                    backdrop-brightness-70"
            >
                {/* Content */}
                <div className="flex flex-row">
                    {/* Logo */}
                    <div
                        className="pl-32
                            shrink-0"
                    >
                        <img src="/assets/logo.svg" className="w-44" />
                    </div>

                    {/* Text */}
                    <div className="grid grid-cols-2">
                        {/* Team Name */}
                        <div>
                            <div>
                                <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
                                    First Tech Coyotes
                                </h1>

                                <h2 className="text-5xl">Student engineers</h2>
                            </div>
                        </div>

                        {/* Button */}
                        <div className="col-start-1">
                            <button
                                className="px-25 py-4
                                    border-5 border-white
                                    text-3xl font-bold"
                            >
                                Join Us
                            </button>
                        </div>

                        {/* Team description */}
                        <div>
                            <p className="text-3xl">
                                We are the First Tech Coyotes, a large public
                                school team that participates in the FIRST Tech
                                Challenge. As a diverse body of students
                                pursuing STEM, we seek to inspire and teach
                                like-minded youth in robotics.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
