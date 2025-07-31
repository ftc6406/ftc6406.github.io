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
      <img src="/assets/rightArrow.svg" />
    </button>
  );
};

export default CustomRightArrow;
