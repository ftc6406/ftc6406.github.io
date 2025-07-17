function Hero() {
    return (
        <div className="flex justify-center items-center" id="hero">
            <img
                className="-z-10 w-screen h-auto
                brightness-75"
                src="/assets/man_mountain.jpg"
            />

            <div
                className="absolute -ml-10 md:-ml-200 -mt-10 md:-mt-85 
                    flex"
            >
                <img src="/assets/logo.svg" className="w-[60px] md:w-[178px]" />

                <div className="ml-2 md:ml-12 mt-2 md:mt-6">
                    <p className="text-2xl md:text-[80px] font-bold">
                        First Tech Coyotes
                    </p>
                    <p className="text-xl md:text-6xl">Student engineers</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
