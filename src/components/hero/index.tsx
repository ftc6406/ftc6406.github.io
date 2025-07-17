function Hero() {
  return (
    <div className="bg-[url(assets/man_mountain.jpg)] bg-center" id="hero">
      {/* Backdrop filter */}
      <div
        className="h-[100vh] px-32 py-64 space-y-12
          backdrop-brightness-70"
      >
        {/* Content */}
        <div className="flex flex-row gap-10">
          {/* Logo */}
          <div className="shrink-0">
            <img src="/assets/logo.svg" className="w-44" />
          </div>

          {/* Text */}
          <div className="mt-8 grid grid-cols-2 gap-28">
            {/* Team Name */}
            <div>
              <div className="space-y-4">
                <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold">
                  First Tech Coyotes
                </h1>

                <h2 className="text-5xl">Student engineers</h2>
              </div>
            </div>

            {/* Button */}
            <div className="col-start-1">
              <button
                className="px-28 py-4
                  outline-5 outline-white
                  text-3xl font-bold"
              >
                Join Us
              </button>
            </div>

            {/* Team description */}
            <div>
              <p className="w-2xl text-right text-3xl">
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
          className="place-self-center animate-bounce"
        />
      </div>
    </div>
  );
}

export default Hero;
