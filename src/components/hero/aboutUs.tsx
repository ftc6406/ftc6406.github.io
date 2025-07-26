import type { ReactNode } from 'react';

const AboutUs = ({ aboutUsText }: { aboutUsText: string }): ReactNode => {
  return (
    <div
      className="block xl:hidden
        flex justify-center items-center
        p-16
        bg-white
        text-center text-xl md:text-2xl lg:text-3xl"
    >
      <p className="w-lg md:w-xl lg:w-2xl text-black">{aboutUsText}</p>
    </div>
  );
};

export default AboutUs;
