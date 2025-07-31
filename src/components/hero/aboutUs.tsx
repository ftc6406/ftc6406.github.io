import type { ReactNode } from 'react';

const AboutUs = ({ children }: { children: ReactNode }): ReactNode => {
  return (
    <div className="section
        block xl:hidden
        flex justify-center items-center bg-white
        text-center text-xl md:text-2xl lg:text-3xl"
    >
      <p className="section-header text-black">{children}</p>
    </div>
  );
};

export default AboutUs;
