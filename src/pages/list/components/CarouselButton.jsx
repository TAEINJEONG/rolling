import prevButton from '../../../assets/images/arrow_left.svg';
import nextButton from '../../../assets/images/arrow_right.svg';

const BUTTON_STYLES = {
  prev: 'left-0 -translate-x-1/2',
  next: 'right-0 translate-x-1/2',
};

const BUTTON_ATTRIBUTES = {
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
      <img {...BUTTON_ATTRIBUTES[direction]} />
    </button>
  );
};

export default CarouselButton;
