import arrowDown from '../../../assets/images/arrow-down.svg';
import { useState } from 'react';
import clsx from 'clsx';

const Select = ({ options, selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false); // Select Menu 열림 상태

  // 옵션 선택 시 실행
  const handleOptionSelect = (option) => {
    onSelect(option);
    setIsOpen(false); // Select Menu 닫기
  };

  const relationList = options.map((option) => (
    <li
      key={option}
      className="py-3 px-4 hover:bg-[#EEEEEE]"
      onClick={() => handleOptionSelect(option)}
    >
      {option}
    </li>
  ));

  return (
    <div className="relative w-[320px] h-[50px]">
      {/*Select Box*/}
      <div
        className={clsx(
          'w-full h-full py-3 px-4 border border-[#CCCCCC] rounded-lg cursor-pointer hover:border-[var(--color-black)] hover:border-2',
          {
            'border-[var(--color-black)] border-2': isOpen,
            'border-[#CCCCCC]': !isOpen,
          }
        )}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selected}
      </div>
      <div className="absolute inset-y-0 flex items-center right-4 pointer-events-none duration-300 ease-in">
        <img
          src={arrowDown}
          alt="화살표"
          className={clsx('transition-transform duration-300', {
            'rotate-180': isOpen,
            'rotate-0': !isOpen,
          })}
        />
      </div>

      {/*Select Menu*/}
      {isOpen && (
        <ul className="absolute left-0 mt-1.5 w-full py-1.5 border border-[#CCCCCC] bg-white rounded-lg cursor-pointer shadow-md z-10">
          {relationList}
        </ul>
      )}
    </div>
  );
};
export default Select;
