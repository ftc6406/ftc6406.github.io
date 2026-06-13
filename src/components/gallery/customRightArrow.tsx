import RightArrow from '@assets/right_arrow.svg';

const CustomRightArrow = ({ onClick }: { onClick?: () => void }) => {
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
      <img src={RightArrow} />
    </button>
  );
};

export default CustomRightArrow;
