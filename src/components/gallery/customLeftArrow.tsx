const CustomLeftArrow = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button onClick={() => onClick()}>
      <img src="/assets/leftArrow.svg" />
    </button>
  );
};

export default CustomLeftArrow;
