import type { ReactNode } from 'react';

const YearDivider = ({ year }: { year: number }): ReactNode => (
  <span className="flex justify-between items-center">
    <h2 className="text-xl md:text-3xl lg:text-5xl">{year}</h2>
    <hr className="w-8/10 text-black/20" />
  </span>
);

export default YearDivider;
