import type { ReactNode } from 'react';

const AboutUs = ({ children }: { children: ReactNode }): ReactNode => {
  return (
    <div className="block xl:hidden
        p-16 flex justify-center items-center bg-white 
        text-center text-xl md:text-2xl lg:text-3xl"
    >
      <p className="w-lg md:w-xl lg:w-2xl text-black">{children}</p>
    </div>
  );
};

export default AboutUs;
