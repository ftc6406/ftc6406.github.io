function Hero() {
  return (
    <div
      className="relative bg-[url(assets/man_mountain.jpg)] bg-center"
      id="hero"
    >
      {/* Backdrop filter */}
      <div
        className="h-[100vh] 
          px-8 md:px-16 lg:px-24 xl:px-28 2xl:px-32 
          py-56 md:py-52 lg:py-48 2xl:py-44 space-y-12
          place-items-center xl:place-items-start
          backdrop-brightness-70"
      >
        {/* Content */}
        <div
          className="flex flex-col xl:flex-row gap-0 md:gap-10
            place-items-center xl:place-items-start"
        >
          {/* Logo */}
          <div className="shrink-0">
            <img
              src="/assets/logo.svg"
              className="w-28 md:w-32 lg:w-36 xl:w-40 2xl:w-44"
            />
          </div>

          {/* Text */}
          <div
            className="mt-4 md:mt-5 lg:mt-6 
              grid xl:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 2xl:gap-24
              place-items-center xl:place-items-start"
          >
            {/* Team Name */}
            <div>
              <div
                className="space-y-4 
                  text-center xl:text-left"
              >
                <h1 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold">
                  First Tech Coyotes
                </h1>

                <h2 className="text-3xl lg:text-4xl 2xl:text-5xl">Student engineers</h2>
              </div>
            </div>

            {/* Button */}
            <div className="col-start-1">
              <button
                className="hidden xl:block 
                  px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-28 py-4
                  outline-5 outline-white
                  xl:text-2xl 2xl:text-3xl font-bold
                  cursor-pointer
                  transition duration-300
                  hover:bg-white hover:text-primary hover:outline-none
                  active:bg-white/20 active:text-white/80 active:outline-none"
              >
                Join Us
              </button>
            </div>

            {/* Team description */}
            <div>
              <p
                className="hidden xl:block 
                  text-right xl:text-2xl 2xl:text-3xl"
              >
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
          className="absolute place-self-center 
            bottom-24 
            w-28
            animate-bounce"
        />
      </div>
    </div>
  );
}

export default Hero;
