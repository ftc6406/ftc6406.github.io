import type { ReactNode } from 'react';

const JoinUs = (): ReactNode => {
  return (
    <div id="join">
      {/* Background*/}
      <img
        className="absolute z-1 
          left-[calc(50%-40px)] md:left-[calc(50%-60px)] lg:left-[calc(50%-80px)] 
          w-20 md:w-30 lg:w-40"
        src="/assets/triangle_down.svg"
      />

      {/* Content */}
      <div
        className="p-8 pt-12 md:p-16 lg:p-32 space-y-8 lg:space-y-12
          bg-white text-base md:text-lg lg:text-xl text-black"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl">Join Us</h1>

        <div
          className="grid xl:grid-flow-col xl:grid-cols-2 
            gap-8 xl:gap-32"
        >
          <div>
            <p>
              We are aspiring computer scientists and engineers. Our team comes
              from all levels of technical experience, so we{' '}
              <span
                className="relative inline-block 
                  before:absolute before:inset-0 before:bg-pink-500"
              >
                <span className="relative mx-1">
                  encourage anyone to join, STEM or not,
                </span>
              </span>{' '}
              and are willing to lend our expertise to teach newcomers the
              skills necessary to explore their passions in robotics and
              innovation.
            </p>
          </div>

          <div>
            <p className="select-all mb-4">
              The structure of our team is simple. We have three branches, the
              Engineers, the Programmers, and the Documenters:
            </p>
            <ul className="list-disc ml-8">
              <li>Engineers handle robot assembly and CAD</li>
              <li>Programmers maintain robot code and logic</li>
              <li>
                Documenters write team documentation and the engineering
                portfolio
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center xs:justify-start">
          <button
            className="px-6 py-2 outline-4 outline-primary 
              text-primary font-medium cursor-pointer
              transition duration-300
              hover:bg-primary hover:text-white hover:outline-none
              active:bg-primary/20 active:text-primary/80 active:outline-none"
          >
            Interest Form
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
