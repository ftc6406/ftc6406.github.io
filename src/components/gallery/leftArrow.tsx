const LeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <button onClick={() => onClick()}>
      <img src="/assets/leftArrow.svg" />
    </button>
  );
};

export default LeftArrow;
