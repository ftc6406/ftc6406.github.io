const CustomRightArrow = ({ onClick }: {onClick?: () => void}) => {
  return (
    <button onClick={() => onClick()}>
      <img src="/assets/rightArrow.svg" />
    </button>
  );
};

export default CustomRightArrow;
