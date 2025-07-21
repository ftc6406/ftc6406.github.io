import type { ReactNode } from 'react';

const ABOUT_US_TEXT = await fetch('aboutUsText.txt').then((res) => res.text());

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
        {ABOUT_US_TEXT}
      </p>
    </div>
  );
};

export default AboutUs;
