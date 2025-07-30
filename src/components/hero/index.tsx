import type { ReactNode } from 'react';
import '../../index.css';

import AboutUs from './aboutUs';
import { Typewriter } from 'react-simple-typewriter';

const ABOUT_US_TEXT = (
  <span>
    We are the First Tech Coyotes, a large public school team that participates
    in the <em>FIRST®</em> Tech Challenge. As a diverse body of students
    pursuing STEM, we seek to inspire and teach like-minded youth in robotics.
  </span>
);

const Hero = (): ReactNode => {
  return (
    <>
      <div
        className="relative min-h-dvh 
          bg-[url(/assets/hero_placeholder.jpg)] bg-center bg-cover"
        id="hero"
      >
        {/* Backdrop filter */}
        <div
          className="min-h-dvh flex flex-col
            place-items-center xl:place-items-start
            backdrop-brightness-70"
        >
          {/* Content */}
          <div
            className="px-8 md:px-16 lg:px-24 xl:px-28 2xl:px-32
              py-36 md:py-40 lg:py-44
            
              flex flex-col xl:flex-row gap-8 md:gap-12
              place-items-center xl:place-items-start
              
              transition duration-1000
              starting:opacity-0 opacity-100
              starting:-translate-y-20 translate-y-0"
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
              className="grid xl:grid-cols-2
                gap-12 lg:gap-16 xl:gap-20 2xl:gap-24
                place-items-center xl:place-items-start"
            >
              {/* Team Name */}
              <div className="space-y-4 text-center xl:text-left">
                <h1
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                    font-bold"
                >
                  First Tech Coyotes
                </h1>

                <h2
                  className="text-3xl md:text-4xl 
                    lg:text-5xl xl:text-6xl"
                >
                  Student <br className="xs:hidden" />
                  <Typewriter
                    words={['engineers', 'programmers', 'innovators']}
                    loop={0} // Infinite loop
                    cursor
                  />
                </h2>
              </div>

              {/* "Join Us" button */}
              <a className="col-start-1" href="#join">
                <button
                  className="hidden xl:block
                    px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-28 py-4
                    outline-5 outline-white
                    xl:text-2xl 2xl:text-3xl font-bold cursor-pointer
                    
                    transition duration-300
                    hover:bg-white hover:text-primary
                    active:bg-white/20 active:text-white/80 
                    active:outline-white/20"
                >
                  Join Us
                </button>
              </a>

              {/* "About Us" text */}
              <p className="hidden xl:block text-right xl:text-2xl 2xl:text-3xl">
                {ABOUT_US_TEXT}
              </p>
            </div>
          </div>

          {/* Chevron */}
          <img
            src="assets/chevron.svg"
            className="w-24 md:w-28 mt-auto mb-8 md:mb-16 
              place-self-center 
              
              transition duration-1000 animate-bounce
              starting:opacity-0 opacity-100
              starting:translate-y-20 translate-y-0"
          />
        </div>
      </div>

      {/* The About Us text for mobile users */}
      <AboutUs aboutUsText={ABOUT_US_TEXT} />
    </>
  );
};

export default Hero;
