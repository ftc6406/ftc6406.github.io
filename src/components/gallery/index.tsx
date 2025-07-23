import type { ReactNode } from 'react';

const Gallery = (): ReactNode => {
  const imagePaths = [];

  const modules = import.meta.glob('/public/assets/gallery/*');
  for (const PATH in modules) {
    imagePaths.push(PATH);
  }

  return (
    <div
      id="gallery"
      className="w-full
        px-20 md:px-24 lg:px-28 py-28 md:py-32 lg:py-36
        bg-linear-to-r from-accent to-primary"
    >
      <h1 className="text-right text-4xl md:text-6xl lg:text-7xl">Gallery</h1>

      <div id="gallery-images" className="grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
        {imagePaths.map((ele, index) => {
          {
            return (
              <img
                key={`gallery-${index}`}
                src={ele.substring(ele.indexOf('assets/'))}
                className="max-h-32 md:max-h-48 lg:max-h-64"
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Gallery;
