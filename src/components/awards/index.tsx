import type { ReactNode } from 'react';

const Awards = (): ReactNode => {
  return (
    <section
      id="awards"
      className="p-8 pt-12 md:p-16 lg:p-32 space-y-16 lg:space-y-20
        bg-[#f5f5f5] text-black"
    >
      {/* Awards introduction */}
      <div className="space-y-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center">
          Awards and Recognition
        </h1>

        <p className="text-base md:text-lg lg:text-xl text-center text-balance">
          We would like to recognize our team's tireless efforts in robotic
          innovation by commemorating the successes and accomplishments we made
          along on our journey. We would also like to thank Leidos for their
          gracious donations for allowing us travel so far.
        </p>
      </div>

      {/* Awards timeline */}
      <div>
        <span className="flex justify-between items-center">
          <h2 className="text-4xl">2024</h2>
          <hr className="w-7/10 text-xl text-black/40" />
        </span>
      </div>

      
    </section>
  );
};

export default Awards;
