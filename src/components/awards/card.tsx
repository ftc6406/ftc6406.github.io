import type { ReactNode } from 'react';

const Card = ({
  className,
  children,
  src,
  reverse,
}: {
  className?: string;
  children?: ReactNode;
  src?: string; // Card image src
  reverse?: boolean; // Card flow reversed
}): ReactNode => {
  const flow = reverse ? 'flex-col md:flex-col-reverse' : 'flex-col';

  return (
    <div className={className ?? ''}>
      <div className={`flex ${flow} gap-4 lg:gap-8`}>
        {src && (
          <img
            className="w-full h-30 xs:h-50 md:h-60 lg:h-80 
              object-cover"
            src={src}
          />
        )}
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default Card;
