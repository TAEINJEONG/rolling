const CarouselButton = ({ direction, onClick, className }) => {
  return (
    <button
      className={`cursor-pointer absolute ${direction === 'prev' ? 'left-0' : 'right-0'} top-[110px] z-10 ${className}`}
      onClick={onClick}
    >
      {direction === 'prev' ? '<' : '>'}
    </button>
  );
};

export default CarouselButton;
