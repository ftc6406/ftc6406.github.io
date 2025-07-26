import type { ReactNode } from 'react';
import StickyTimeline from './stickyTimeline';

const AWARD_TIMELINE = await fetch('awards.json').then((res) => res.json());
interface AwardSeason {
  year: number;
  awards: string[];
  images: string[];
}

const Awards = (): ReactNode => {
  return (
    <section id="awards" className="relative 
        py-12 md:py-16 lg:py-32 space-y-16 lg:space-y-32 bg-secondary"
    >
      {/* Background*/}

      {/* Content */}
      <div className="px-8 md:px-16 lg:px-32 space-y-8 lg:space-y-12 
          text-white"
      >
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

      <StickyTimeline
        awardTimeline={AWARD_TIMELINE}
      />

      
    </section>
  );
};

export default Awards;
export type { AwardSeason };
