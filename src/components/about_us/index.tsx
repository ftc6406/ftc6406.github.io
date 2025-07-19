import type { ReactNode } from 'react';
import AboutUsText from './aboutUsText';

const AboutUs = (): ReactNode => {
  return (
    <div
      className="block xl:hidden
      flex justify-center items-center 
      h-100
      bg-white
      text-center text-3xl"
    >
      <p className="w-2xl text-black">
        <AboutUsText />
      </p>
    </div>
  );
};

export default AboutUs;
