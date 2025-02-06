import { baseStyles, variants, sizes } from './buttonStyle';

const Button = ({ children, icon, variant, size, disabled = false, onClick, fullWidth }) => {
  const buttonStyles = `${baseStyles} ${sizes[size]} ${variants[variant]}`;

  return (
    <button
      className={`${buttonStyles} flex items-center justify-center gap-[4px] ${fullWidth && 'w-full'}`}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && <img src={icon} alt="emoji icon" />}
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
