import type { ReactNode } from 'react';

const AboutUs = ({ children }: { children: ReactNode }): ReactNode => {
  return (
    <div className="block xl:hidden
        section lg:p-20! flex justify-center items-center bg-white 
        subtitle-text text-center"
    >
      <p className="w-lg md:w-xl lg:w-2xl text-black">{children}</p>
    </div>
  );
};

export default AboutUs;
