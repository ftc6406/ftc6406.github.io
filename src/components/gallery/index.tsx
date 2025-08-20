import { type ReactNode } from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Card from './card';

const GALLERY = await fetch('gallery.json').then((res) => res.json());

const RESPONSIVE = {
  superLargeDesktop: {
    breakpoint: { max: 1536, min: 1280 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1280, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

const Gallery = (): ReactNode => {
  let deviceType;

  // Obtain the device type and number of columns needed based on `RESPONSIVE`.
  for (const [key, value] of Object.entries(RESPONSIVE)) {
    if (window.innerWidth > value.breakpoint.min) {
      deviceType = key;
      break;
    }
  }

  const cards: ReactNode[] = GALLERY.map(
    (
      ele: { image: string; title: string; body: string; background: boolean },
      index: number
    ) => {
      return (
        <div
          key={`gallery-masonry-${index}`}
          className="ml-auto mr-auto flex justify-center"
        >
          <Card
            imagePath={ele.image}
            title={ele.title}
            body={ele.body}
            background={ele.background}
          />
        </div>
      );
    }
  );

  return (
    <div
      id="gallery"
      className="section flex flex-col w-full gap-24
        bg-linear-to-b lg:bg-linear-to-br from-accent to-primary"
    >
      <div
        className="header-text
          flex flex-col gap-12
          items-center"
      >
        <hr className="w-2/3 text-white/80" />
        <h1 className="uppercase">GALLERY</h1>
        <hr className="w-2/3 text-white/80" />
      </div>

      <div
        className={`hidden lg:block
          columns-3 xl:columns-4 *:break-inside-avoid gap-4 space-y-4`}
      >
        {cards}
      </div>

      {/* Gallery carousel */}
      <div
        id="gallery-carousel"
        className="flex lg:hidden size-full object-cover"
      >
        <Carousel
          responsive={RESPONSIVE}
          swipeable={true}
          keyBoardControl={true}
          infinite={true}
          ssr={true} // render carousel on server-side.
          autoPlay={true}
          deviceType={deviceType}
          containerClass="size-full object-cover"
          itemClass="size-full object-cover"
        >
          {cards}
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;
