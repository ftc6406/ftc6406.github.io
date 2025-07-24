import type { ReactNode } from 'react';
import type { AwardSeason } from '.';

// Rendered for desktops to better view all awards
const StickyTimeline = ({
  awardTimeline,
}: {
  awardTimeline: AwardSeason[];
}): ReactNode => {
  return (
    <div className="hidden lg:block">
      {awardTimeline.map(({ year, awards, images }: AwardSeason) => (
        <div
          key={`award-year-${year}`}
          className="flex justify-between 
            divide-x-4 divide-dashed divide-white"
        >
          {/* Award year and description */}
          <div
            className="w-2/5 h-dvh sticky top-0 
              flex flex-col justify-center items-center gap-4
              bg-secondary text-white"
          >
            <h2
              className="mb-4 relative 
                text-6xl font-bold tracking-wide
                before:absolute before:-inset-2 before:block 
                before:-skew-y-3 before:bg-accent"
            >
              <span className="relative">{year}</span>
            </h2>

            <ul className="space-y-4 text-center">
              {awards.map((award, index) => (
                <li key={`award-li-${index}`}>{award}</li>
              ))}
            </ul>
          </div>

          {/* Award images */}
          <div className="block grow bg-secondary p-32">
            <ul className="space-y-16">
              {images.map((image, index) => (
                <img
                  key={`award-image-${index}`}
                  className="w-200 h-100 -skew-2 object-cover"
                  src={image}
                />
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StickyTimeline;
