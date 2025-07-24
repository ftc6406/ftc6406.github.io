import type { ReactNode } from 'react';

// Retrieves all files in `assets/gallery`.
const modules = import.meta.glob('/public/assets/gallery/*');

const Gallery = (): ReactNode => {
  // Extract the filepaths.
  const imagePaths = Object.keys(modules);

  console.log(window.innerWidth);

  let num_cols;
  if (window.innerWidth > 1024) {
    num_cols = 6;
  } else if (window.innerWidth > 768) {
    num_cols = 4;
  } else {
    num_cols = 2;
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
        bg-linear-to-r from-accent to-primary"
    >
      <h1
        className="pb-32
          text-right text-4xl md:text-6xl lg:text-7xl"
      >
        Gallery
      </h1>

      {/* Gallery columns */}
      <div
        id="gallery-images"
        className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-end`}
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
    </div>
  );
};

export default Gallery;
