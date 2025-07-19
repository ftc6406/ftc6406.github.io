import { GALLERY_PATH } from '.';

import type { ReactNode } from 'react';
import type { AwardSeason } from '.';

const AwardCard = (props: AwardSeason): ReactNode => {
  // eslint-disable-next-line prefer-const
  let { year, awards, images } = props;
  if (images.length > 2) images = images.slice(0, 2);

  return (
    <div
      className="p-4 grid xl:grid-flow-col xl:grid-cols-2 gap-8 xl:gap-32
        text-base md:text-lg lg:text-xl"
    >
      <div className="space-y-12">
        <h2 className="text-5xl font-bold tracking-wide">{year}</h2>
        <ul className="ml-8 space-y-4">
          {awards.map((award) => (
            <li>{award}</li>
          ))}
        </ul>
      </div>

      <div className="flex justify-end space-x-4 overflow-x-auto">
        {images.map((image) => (
          <img
            className="w-80 object-cover"
            src={`${GALLERY_PATH}/${image}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AwardCard;
