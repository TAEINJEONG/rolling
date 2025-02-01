const baseStyles = 'inline-block box-border text-center cursor-pointer';

const variants = {
  primary:
    'bg-purple-600 text-white hover:bg-purple-700 active:bg-purple-800 focus:bg-purple-800 focus:outline-2 focus:outline-purple-900 disabled:bg-gray-300 disabled:text-white disabled:cursor-not-allowed',
  secondary:
    'outline outline-1 outline-purple-600 text-purple-700 hover:bg-purple-100 hover:text-purple-600 active:bg-purple-100 active:text-purple-600 focus:text-purple-600 focus:outline-1 focus:outline-purple-800 focus:bg-white disabled:outline-none disabled:bg-gray-300 disabled:text-white disabled:cursor-not-allowed',
  outlined:
    'outline outline-1 outline-gray-300 text-gray-900 hover:bg-gray-100 active:bg-gray-100 focus:bg-white focus:outline-1 focus:outline-gray-500 disabled:bg-gray-300 disabled:text-white disabled:cursor-not-allowed',
  icon: 'h-[36px] px-1.5 rounded-md outline-1 outline-gray-300 bg-white hover:bg-gray-100 active:bg-gray-100 focus:bg-white focus:outline-1 focus:outline-gray-500',
};

const sizes = {
  xs: 'h-[28px] px-4 rounded-md text-14-regular leading-3.5',
  sm: 'h-[36px] px-4 rounded-md text-14-regular leading-3.5',
  md: 'h-[40px] px-4 rounded-md text-16-bold leading-6',
  lg: 'h-[56px] px-6 rounded-xl text-16-regular leading-6.5',
  xl: 'h-[56px] px-6 rounded-xl text-18-bold leading-7',
};

const Button = ({ children, icon, variant, size, disabled = false }) => {
  const buttonStyles = `${baseStyles} ${sizes[size]} ${variants[variant]}`;

  return (
    <button className={`${buttonStyles} flex items-center justify-center`} disabled={disabled}>
      {icon && <img src={icon} alt="emoji icon" className="inline-block mx-1" />}
      {children}
    </button>
  );
};

export default Button;

//사용예시
// <Button size="lg" variant="primary" disabled={true}>Click Me!</Button>

//이모지 있는 버튼
// import addemoji from './assets/images/add-emoji.svg';
// <Button variant="outlined" size="md" disabled={false} icon={addemoji}>추가</Button>

//이모지만 있는 버튼
// <Button variant="icon" disabled={false} icon={trash}></Button>
// <Button variant="icon" disabled={false} icon={share}></Button>
