import type { ReactNode } from 'react';

const Card = ({
  imagePath,
  title,
  body,
}: {
  imagePath: string;
  title?: string;
  body?: string;
}): ReactNode => {
  return (
    <div className="flex">
      <img src={imagePath} />
      <div className="absolute">{title}</div>
      <div className="absolute">{body}</div>
    </div>
  );
};

export default Card;
