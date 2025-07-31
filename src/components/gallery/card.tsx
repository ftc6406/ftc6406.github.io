import type { ReactNode } from 'react';

const Card = ({
  imagePath,
  title,
  body,
  background,
}: {
  imagePath: string;
  title?: string;
  body?: string;
  background?: boolean;
}): ReactNode => {
  return (
    <div className={`relative flex ${background ? 'flex-col' : ''}`}>
      <img src={imagePath} className="aspect-3/2 object-cover" />

      <div
        className={`${
          background ? 'bg-stone-900' : 'absolute self-end'
        } px-4 py-8`}
      >
        <p className="body-text opacity-80 font-bold">{title}</p>
        <p className="text-xl md:text-2xl lg:text-3xl">{body}</p>
      </div>
    </div>
  );
};

export default Card;
