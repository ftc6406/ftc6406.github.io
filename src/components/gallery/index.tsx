import type { ReactNode } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Retrieves all files in `assets/gallery`.
const modules = import.meta.glob('/public/assets/gallery/*');

const Gallery = (): ReactNode => {
  // Extract the filepaths.
  const imagePaths = Object.keys(modules);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 1280, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  let num_cols;
  if (window.innerWidth > 1024) {
    num_cols = 6;
  } else {
    num_cols = 4;
  }

  // Separte the images into columns.
  const cols: string[][] = [];
  for (let i = 0; i < num_cols; i++) {
    cols.push(imagePaths.filter((_, index) => index % num_cols === i));
  }

  return (
    <div
      id="gallery"
      className="w-full
        px-24 md:px-28 lg:px-32 py-28 md:py-32 lg:py-36
        bg-linear-to-br from-accent to-primary"
    >
      <h1
        className="pb-32
          text-right text-4xl md:text-6xl lg:text-7xl"
      >
        Gallery
      </h1>

      {/* Gallery masonry */}
      <div
        id="gallery-masonry"
        className="hidden md:grid md:grid-cols-4 lg:grid-cols-6 gap-4"
      >
        {/* Create each column */}
        {cols.map((col, colIndex) => {
          return (
            // Place images in each column.
            <div
              key={`gallery-col-${colIndex}`}
              className={`mt-${colIndex * 10}
                grid gap-4`}
            >
              {col.map((imagePath, imageIndex) => {
                {
                  return (
                    <img
                      key={`gallery-${imageIndex}`}
                      src={imagePath.substring(imagePath.indexOf('assets/'))}
                      className="size-full object-cover"
                    />
                  );
                }
              })}
            </div>
          );
        })}
      </div>

      {/* Gallery carousel */}
      <div id="gallery-carousel" className="block md:hidden">
        <Carousel responsive={responsive}>
          {imagePaths.map((image) => {
            return <img src={image} />;
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;
