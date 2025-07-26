import type { ReactNode } from 'react';

const GALLERY_PATH = 'assets/gallery';

const AWARDS = await fetch('awards.json').then((res) => res.json());
interface AwardSeason {
  year: number;
  awards: string[];
  images: string[];
}

const Awards = (): ReactNode => {
  return (
    <div id="awards" className="relative">
      {/* Background*/}

      {/* Content */}
      <div
        className="p-8 pt-12 md:p-16 lg:p-32 space-y-8 lg:space-y-12
          bg-secondary text-base md:text-lg lg:text-xl text-white"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center">
          Awards and Recognition
        </h1>

        <p className="text-center text-balance">
          We would like to recognize our team's tireless efforts in robotic
          innovation by commemorating the successes and accomplishments we made
          along on our journey. We would also like to thank Leidos for their
          gracious donations for allowing us travel so far.
        </p>
      </div>
    </div>
  );
};

export default Awards;
export { GALLERY_PATH };
export type { AwardSeason };
