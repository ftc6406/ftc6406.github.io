import type { ReactNode } from 'react';
import type { AwardSeason } from '.';

// Rendered for desktops to better view all awards
const StickyTimeline = ({
  awardTimeline,
}: {
  awardTimeline: AwardSeason[];
}): ReactNode => {
  return (
    <div className="hidden md:block px-8 lg:px-16 space-y-8 lg:space-y-16">
      {awardTimeline.map(({ year, awards, images }: AwardSeason) => (
        <div key={`award-year-${year}`} className="flex gap-8">
          {/* Award year and description */}
          <div className="w-1/2 h-full sticky top-32">
            <div
              className="p-8 border-t-8 border-white/10 text-white"
            >
              <h2
                className="mb-2 lg:mb-4 xl:mb-8 relative 
                  text-3xl lg:text-4xl xl:text-6xl 
                  font-bold tracking-wide"
              >
                {year}
              </h2>

              <ul
                className="ml-8 space-y-2 lg:space-y-4 xl:space-y-8 
                  list-disc text-lg lg:text-xl"
              >
                {awards.map((award, index) => (
                  <li key={`award-li-${index}`}>{award}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Award images */}
          <ul className="w-1/2 space-y-8 lg:space-y-16">
            {images.map((image, index) => (
              <img
                key={`award-image-${index}`}
                className="aspect-3/2 -skew-2 object-cover"
                src={image}
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default StickyTimeline;
