function Hero() {
    return (
        <div className="flex justify-center items-center" id="hero">
            <img className="brightness-75" src="/assets/man_mountain.jpg" />

            <div className="absolute flex">
                <img src="/assets/logo.svg" className=""/>

                <div className="">
                    <p className="text-[80px] font-bold">First Tech Coyotes</p>
                    <p className="text-6xl">Student engineers</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
