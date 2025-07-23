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
      <h1
        className="pb-16
        text-right text-4xl md:text-6xl lg:text-7xl"
      >
        Gallery
      </h1>

      <div
        id="gallery-images"
        className="grid gap-4 [grid-template-columns:repeat(auto-fill, minmax(120px, 1fr))] [grid-template-rows:masonry]"
      >
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
