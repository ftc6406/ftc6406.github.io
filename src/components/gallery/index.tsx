import type { ReactNode } from 'react';

// Retrieves all files in `assets/gallery`.
const modules = import.meta.glob('/public/assets/gallery/*');

const Gallery = (): ReactNode => {
  // Extract the filepaths.
  const imagePaths = Object.keys(modules);

  console.log(window.innerWidth);

  let num_cols;
  if (window.innerWidth > 1024) {
    num_cols = 3;
  } else if (window.innerWidth > 768) {
    num_cols = 2;
  } else {
    num_cols = 1;
  }

  // Separte the images into 3 columns.
  const cols: string[][] = [];
  for (let i = 0; i < num_cols; i++) {
    cols.push(imagePaths.filter((_, index) => index % num_cols === i));
  }

  return (
    <div
      id="gallery"
      className="w-full
        px-20 md:px-24 lg:px-28 py-28 md:py-32 lg:py-36
        bg-linear-to-r from-accent to-primary"
    >
      <h1
        className="pb-16
          text-right text-4xl md:text-6xl lg:text-7xl"
      >
        Gallery
      </h1>

      {/* Gallery columns */}
      <div id="gallery-images" className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-end`}>
        {/* Create each column */}
        {cols.map((col, colIndex) => {
          return (
            // Place images in each column.
            <div key={`gallery-col-${colIndex}`} className="grid gap-4">
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
