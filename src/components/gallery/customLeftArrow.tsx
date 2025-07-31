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
      <img src="/assets/leftArrow.svg" />
    </button>
  );
};

export default CustomLeftArrow;
