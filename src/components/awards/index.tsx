import type { ReactNode } from 'react';

const Awards = (): ReactNode => {
  return (
    <div id="awards">
      {/* Background*/}

      {/* Content */}
      <div
        className="p-8 pt-12 md:p-16 lg:p-32 space-y-8 lg:space-y-12
          bg-secondary text-base md:text-lg lg:text-xl text-white"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center">
          Awards and Recognition
        </h1>

        <div
          className="grid xl:grid-flow-col xl:grid-cols-2 
            gap-8 xl:gap-32"
        >
          <div>
            <p>
              We are aspiring computer scientists and engineers and . Our team
              comes from all levels of technical experience, so we encourage
              anyone to join, STEM or not, and are willing to lend our expertise
              to teach newcomers the skills necessary to explore their passions
              in robotics and innovation.
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
            className="px-6 py-2 outline-4 outline-coyote-navy 
              text-coyote-navy font-medium cursor-pointer
              transition duration-300
              hover:bg-coyote-navy hover:text-white hover:outline-none
              active:bg-coyote-navy/20 active:text-coyote-navy/80 active:outline-none"
          >
            Interest Form
          </button>
        </div>
      </div>
    </div>
  );
};

export default Awards;
