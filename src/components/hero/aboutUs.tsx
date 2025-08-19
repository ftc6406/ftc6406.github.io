import type { ReactNode } from 'react';

const AboutUs = ({ children }: { children: ReactNode }): ReactNode => {
  return (
    <div
      className="block xl:hidden
        section lg:p-20! flex justify-center items-center bg-white 
        subtitle-text text-center"
    >
      <p className="body-text text-black">{children}</p>
    </div>
  );
};

export default AboutUs;
