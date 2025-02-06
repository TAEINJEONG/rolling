import prevButton from '../../../assets/images/arrow_left.svg';
import nextButton from '../../../assets/images/arrow_right.svg';

const BUTTON_STYLES = {
  prev: 'left-0 translate-x-[-50%]',
  next: 'right-0 translate-x-[50%]',
};

const BUTTON_PROPS = {
  prev: {
    src: prevButton,
    alt: '이전 버튼',
  },
  next: {
    src: nextButton,
    alt: '다음 버튼',
  },
};

const CarouselButton = ({ direction = 'next', onClick, className, position = 'top-[110px]' }) => {
  const baseStyles = `
    cursor-pointer 
    absolute 
    ${BUTTON_STYLES[direction]} 
    ${position} 
    z-10 
    bg-white 
    rounded-full 
    p-3 
    border 
    border-gray-300
  `;

  return (
    <button className={`${baseStyles} ${className}`} onClick={onClick}>
      <img src={BUTTON_PROPS[direction].src} alt={BUTTON_PROPS[direction].alt} />
    </button>
  );
};

export default CarouselButton;
