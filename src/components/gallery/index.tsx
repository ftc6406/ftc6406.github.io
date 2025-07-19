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
      className="w-screen
        bg-linear-to-br from-[#56AEC8] to-[#345780]"
    >
      <h1 className="text-right text-7xl">Gallery</h1>
      <p>Hello, this is some placeholder text for the Gallery section.</p>

      {/* {imagePaths.map((ele, index) => {
        {
          return (
            <img
              key={`gallery-${index}`}
              src={ele.substring(ele.indexOf('assets/'))}
            />
          );
        }
      })} */}
    </div>
  );
};

export default Gallery;
