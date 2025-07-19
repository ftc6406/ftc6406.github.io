import type { ReactNode } from 'react';
import AboutUsText from './aboutUsText';

const AboutUs = (): ReactNode => {
  return (
    <div
      className="block xl:hidden bg-white
      text-center"
    >
      <p className="text-black">
        <AboutUsText />
      </p>
    </div>
  );
};

export default AboutUs;
