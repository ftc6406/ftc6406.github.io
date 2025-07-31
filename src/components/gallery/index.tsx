import { type ReactNode } from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Masonry from 'react-masonry-css';
import Card from './card';

// Retrieves all files in `assets/gallery`.
const MODULES = import.meta.glob('/public/assets/gallery/*');
// Extract the filepaths.
const IMAGE_PATHS = Object.keys(MODULES);

const RESPONSIVE = {
  superLargeDesktop: {
    breakpoint: { max: 1536, min: 1280 },
    numCols: 4,
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1280, min: 1024 },
    numCols: 4,
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    numCols: 2,
    items: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    numCols: 2,
    items: 1,
  },
};

const Gallery = (): ReactNode => {
  let deviceType;
  let numCols = RESPONSIVE.mobile.numCols;
  for (const [key, value] of Object.entries(RESPONSIVE)) {
    if (window.innerWidth > value.breakpoint.min) {
      deviceType = key;
      numCols = value.numCols;
      break;
    }
  }

  const cards = IMAGE_PATHS.map((imagePath, index) => {
    return (
      <div
        key={`gallery-masonry-${index}`}
        className="ml-auto mr-auto flex justify-center"
      >
        <Card
          imagePath={imagePath}
          title="Hello world!"
          body="Lorem ipsum dolor sit amet"
          background={false}
        />
      </div>
    );
  });

  for (let i = 0; i < 2; i++) {
    cards.push(...cards);
  }

  return (
    <div
      id="gallery"
      className="section flex flex-col w-full gap-24
        bg-linear-to-b lg:bg-linear-to-br from-accent to-primary"
    >
      <div
        className="section-header
          flex flex-col gap-12
          items-center"
      >
        <hr className="w-2/3 text-white/80" />
        <h1 className="uppercase">GALLERY</h1>
        <hr className="w-2/3 text-white/80" />
      </div>

      <Masonry
        breakpointCols={numCols}
        className="hidden lg:flex w-auto -ml-4"
        columnClassName="pl-4 space-y-4"
      >
        {cards}
      </Masonry>

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
