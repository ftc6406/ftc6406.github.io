function Hero() {
    return (
        <div className="bg-[url(assets/man_mountain.jpg)] bg-center" id="hero">
            {/* Backdrop filter */}
            <div
                className="h-[100vh] px-32 py-64 space-y-44
                    backdrop-brightness-70"
            >
                {/* Content */}
                <div className="flex flex-row">
                    {/* Logo */}
                    <div className="shrink-0">
                        <img src="/assets/logo.svg" className="w-44" />
                    </div>

                    {/* Text */}
                    <div className="grid grid-cols-2 gap-8">
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
                            <p className="text-right text-3xl">
                                We are the First Tech Coyotes, a large public
                                school team that participates in the FIRST Tech
                                Challenge. As a diverse body of students
                                pursuing STEM, we seek to inspire and teach
                                like-minded youth in robotics.
                            </p>
                        </div>
                    </div>
                </div>

                <img src="assets/chevron.svg" className="place-self-center" />
            </div>
        </div>
    );
}

export default Hero;
