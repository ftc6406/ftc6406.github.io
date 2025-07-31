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
    <div className={`flex ${background ? 'flex-col' : ''} size-full object-cover`}>
      <img src={imagePath} />

      <div
        className={`${
          background ? 'bg-stone-900' : 'absolute self-end'
        } px-4 py-8`}
      >
        <p className="opacity-80 text-md md:text-lg lg:text-xl font-bold">
          {title}
        </p>
        <p className="text-lg md:text-2xl lg:text-3xl">{body}</p>
      </div>
    </div>
  );
};

export default Card;
