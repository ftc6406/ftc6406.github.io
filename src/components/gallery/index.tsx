import type { ReactNode } from 'react';

// Retrieves all files in `assets/gallery`.
const modules = import.meta.glob('/public/assets/gallery/*');

const Gallery = (): ReactNode => {
  // Extract the filepaths.
  const imagePaths = Object.keys(modules);

  // Separte the images into 3 columns.
  const cols: string[][] = [];
  for (let i = 0; i < 3; i++) {
    cols.push(imagePaths.filter((_, index) => index % 3 === i));
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
      <div id="gallery-images" className="grid grid-cols-3 gap-4">
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
