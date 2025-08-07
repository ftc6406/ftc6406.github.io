import type { ReactNode } from 'react';

const Card = ({
  imagePath,
  title = '',
  body = '',
  background = false,
}: {
  imagePath: string;
  title?: string;
  body?: string;
  background?: boolean;
}): ReactNode => {
  return (
    <div className={`relative flex ${background ? 'flex-col' : ''}`}>
      <img src={imagePath} className="aspect-3/2 lg:aspect-auto object-cover" />

      <div
        className={`${
          title.trim().length == 0 && body.trim().length == 0
            ? 'hidden'
            : 'inline'
        }
        ${background ? 'bg-stone-900' : 'absolute self-end'} 
        px-4 md:px-8 lg:px-4 py-6 md:py-12 lg:py-4 xl:py-6 2xl:py-8`}
      >
        <p className="opacity-80 text-lg md:text-2xl lg:text-base xl:text-lg 2xl:text-xl font-bold">
          {title}
        </p>
        <p className="text-2xl/8 md:text-4xl/12 lg:text-xl/6 xl:text-2xl/7 2xl:text-3xl/8">
          {body}
        </p>
      </div>
    </div>
  );
};

export default Card;
