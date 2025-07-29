import type { ReactNode } from 'react';

const Card = ({ imagePath }: { imagePath: string }): ReactNode => {
  return (
    <div className="size-full object-cover bg-white">
      <img src={imagePath} />
    </div>
  );
};

export default Card;
