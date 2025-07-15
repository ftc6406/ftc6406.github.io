function Hero() {
    return (
        <div className="flex justify-center items-center" id="hero">
            <img
                className="bg-black opacity-75"
                src="/assets/man_mountain.jpg"
            />

            <img
                src="/assets/logo.svg"
                className="absolute -ml-280 -mt-80"
            ></img>

            <p className="absolute -ml-50 -mt-100 text-[80px] font-bold">
                First Tech Coyotes
            </p>
            <p className="absolute -ml-[406.61px] -mt-55 text-6xl">Student engineers</p>
        </div>
    );
}

export default Hero;
