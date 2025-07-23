import type { ReactNode } from 'react';
import '../../index.css';

import AboutUs from './aboutUs';

const ABOUT_US_TEXT = `We are the First Tech Coyotes, a large public school team that participates in the FIRST Tech Challenge.
  As a diverse body of students pursuing STEM, we seek to inspire and teach like-minded youth in robotics.`;

const Hero = (): ReactNode => {
  return (
    <>
      <div
        className={`relative
        min-h-dvh
        bg-[url(/assets/hero_placeholder.jpg)] bg-center bg-cover`}
        id="hero"
      >
        {/* Backdrop filter */}
        <div
          className="min-h-dvh
          place-items-center xl:place-items-start
          backdrop-brightness-70"
        >
          {/* Content */}
          <div className="flex flex-col">
            <div
              className="flex flex-col xl:flex-row gap-8 md:gap-12
              place-items-center xl:place-items-start
              px-8 md:px-16 lg:px-24 xl:px-28 2xl:px-32
              py-36 md:py-40 lg:py-44"
            >
              {/* Logo */}
              <div className="shrink-0">
                <img
                  src="/assets/logo.svg"
                  className="w-28 md:w-32 lg:w-36 xl:w-40 2xl:w-44"
                />
              </div>

              {/* Team name and description */}
              <div
                className="grid xl:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 2xl:gap-24
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

                    <h2 className="text-3xl lg:text-4xl 2xl:text-5xl">
                      Student engineers
                    </h2>
                  </div>
                </div>

                {/* "Join Us" button */}
                <div className="col-start-1">
                  <a href="#join">
                    <button
                      className="hidden xl:block
                  px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-28 py-4
                  outline-5 outline-white
                  xl:text-2xl 2xl:text-3xl font-bold
                  cursor-pointer
                  transition duration-300
                  hover:bg-white hover:text-primary
                  active:bg-white/20 active:text-white/80 active:outline-white/20"
                    >
                      Join Us
                    </button>
                  </a>
                </div>

                {/* "About Us" text */}
                <div>
                  <p
                    className="hidden xl:block
                  text-right xl:text-2xl 2xl:text-3xl"
                  >
                    {ABOUT_US_TEXT}
                  </p>
                </div>
              </div>
            </div>

            {/* Chevron */}
            <img
              src="assets/chevron.svg"
              className="place-self-center
              mb-8 md:mb-16
              w-24 md:w-28
              animate-bounce"
            />
          </div>
        </div>
      </div>
      
      <AboutUs aboutUsText={ABOUT_US_TEXT}/>
    </>
  );
};

export default Hero;
