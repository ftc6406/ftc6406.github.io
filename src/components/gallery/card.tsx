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
    <div className="flex">
      <img src={imagePath} />

      <div
        className={`absolute self-end p-4 ${
          background ? 'bg-stone-900' : ''
        }`}
      >
        <p className="opacity-80 text-xl font-bold">{title}</p>
        <p className="text-3xl">{body}</p>
      </div>
    </div>
  );
};

export default Card;
