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
                <div className="grid-cols-subgrid">
                    {/* Logo */}
                    <div className="pl-32">
                        <img src="/assets/logo.svg" className="w-44" />
                    </div>
                    {/* Text */}
                    <div className="pt-8 pl-12">
                        <h1
                            className="text-2xl md:text-4xl lg:text-6xl 
                            font-bold"
                        >
                            First Tech Coyotes
                        </h1>

                        <h2 className="text-5xl">Student engineers</h2>
                        {/* <div className="flex flex-row">
                    <button
                        type="button"
                        className="w-[313px] h-[77px]
                                border-5 text-[32px]"
                    >
                        Join Us
                    </button>

                    <div>
                        <p className="text-[32px] w-[721px]">
                            We are the First Tech Coyotes, a large public school
                            team that participates in the FIRST Tech Challenge.
                            As a diverse body of students pursuing STEM, we seek
                            to inspire and teach like-minded youth in robotics.
                        </p>
                    </div>
                </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
