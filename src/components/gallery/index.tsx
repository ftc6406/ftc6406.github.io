import type { ReactNode } from 'react';

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
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1280, min: 1024 },
    numCols: 4,
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    numCols: 2,
    items: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 640 },
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

  return (
    <div
      id="gallery"
      className="flex flex-col w-full
        px-24 md:px-28 lg:px-32 py-28 md:py-32 lg:py-36
        bg-linear-to-br from-accent to-primary"
    >
      <h1
        className="pb-32
          text-center lg:text-right text-6xl md:text-7xl lg:text-8xl"
      >
        Gallery
      </h1>

      <Masonry
        breakpointCols={numCols}
        className="hidden lg:flex"
        columnClassName=""
      >
        {IMAGE_PATHS.map((imagePath, index) => {
          return (
            <div key={`gallery-masonry-${index}`}>
              <Card imagePath={imagePath} />
            </div>
          );
        })}
      </Masonry>

      {/* Gallery carousel */}
      <div id="gallery-carousel" className="block lg:hidden">
        <Carousel
          responsive={RESPONSIVE}
          ssr={true} // means to render carousel on server-side.
          autoPlay={true}
          deviceType={deviceType}
        >
          {IMAGE_PATHS.map((image) => {
            return (
              <img src={image} className="m-auto size-full object-cover" />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;
