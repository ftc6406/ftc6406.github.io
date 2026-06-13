import LeftArrow from '@assets/left_arrow.svg';

const CustomLeftArrow = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button
      onClick={() => {
        if (onClick != null) {
          onClick();
        } else {
          console.log(`${onClick} is null`);
        }
      }}
    >
      <img src={LeftArrow} />
    </button>
  );
};

export default CustomLeftArrow;
