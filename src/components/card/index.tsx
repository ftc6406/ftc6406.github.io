import type React from 'react';
import type { ReactNode } from 'react';

const Card = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}): ReactNode => {
  return <div className={className ?? ''}>
    <div>
        {children}
    </div>
  </div>;
};

export default Card;
