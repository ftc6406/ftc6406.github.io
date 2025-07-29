const RightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <button onClick={() => onClick()}>
      <img src="/assets/rightArrow.svg" />
    </button>
  );
};

export default RightArrow;
