import arrowDown from '../../../assets/images/arrow-down.svg';
import arrowUp from '../../../assets/images/arrow-up.svg';
import { useState } from 'react';

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
        className="w-full h-full py-3 px-4 border border-[#CCCCCC] rounded-lg cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selected}
      </div>
      <div className="absolute inset-y-0 flex items-center right-4 pointer-events-none">
        <img src={isOpen ? arrowUp : arrowDown} alt="화살표" />
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
