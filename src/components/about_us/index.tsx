import type { ReactNode } from 'react';

const ABOUT_US_TEXT = await fetch('aboutUsText.txt').then((res) => res.text());

const AboutUs = (): ReactNode => {
  return (
    <div
      className="block xl:hidden
      flex justify-center items-center
      p-16
      bg-white
      text-center text-xl md:text-2xl lg:text-3xl"
    >
      <p className="w-lg md:w-xl lg:w-2xl text-black">
        {ABOUT_US_TEXT}
      </p>
    </div>
  );
};

export default AboutUs;
