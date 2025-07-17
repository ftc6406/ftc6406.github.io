function Hero() {
  return (
    <div className="bg-[url(assets/man_mountain.jpg)] bg-center" id="hero">
      {/* Backdrop filter */}
      <div
        className="h-[100vh] px-8 md:px-16 lg:px-32 py-24 md:py-36 lg:py-44 space-y-12
          place-items-center lg:place-items-start
          backdrop-brightness-70"
      >
        {/* Content */}
        <div
          className="flex flex-col lg:flex-row gap-0 md:gap-10
            place-items-center lg:place-items-start"
        >
          {/* Logo */}
          <div className="shrink-0">
            <img
              src="/assets/logo.svg"
              className="w-24 md:w-32 lg:40 xl:w-44"
            />
          </div>

          {/* Text */}
          <div
            className="mt-8 grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-18 xl:gap-24
              place-items-center lg:place-items-start"
          >
            {/* Team Name */}
            <div>
              <div className="space-y-2 md:space-y-4 text-center lg:text-left">
                <h1
                  className=" 
                    text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold"
                >
                  First Tech Coyotes
                </h1>

                <h2
                  className="
                    text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl"
                >
                  Student engineers
                </h2>
              </div>
            </div>

            {/* Button */}
            <div className="col-start-1">
              <button
                className="px-6 md:px-8 lg:px-12 xl:px-28 py-4
                  outline-5 outline-white
                  text-xl md:text-2xl lg:text-3xl font-bold"
              >
                Join Us
              </button>
            </div>

            {/* Team description */}
            <div>
              <p className="hidden lg:block text-right lg:text-2xl 2xl:text-3xl">
                We are the First Tech Coyotes, a large public school team that
                participates in the FIRST Tech Challenge. As a diverse body of
                students pursuing STEM, we seek to inspire and teach like-minded
                youth in robotics.
              </p>
            </div>
          </div>
        </div>

        <img
          src="assets/chevron.svg"
          className="absolute place-self-center w-12 md:w-20 lg:w-28 animate-bounce"
        />
      </div>
    </div>
  );
}

export default Hero;
