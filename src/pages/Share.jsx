import React, { useState, useRef, useEffect } from 'react';
import ShareIcon from '../assets/images/share.svg';
import Kakao from './Kakao';

const Share = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleDropdown = () => {
    // 공유하기 토글
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="relative cursor-pointer" ref={menuRef}>
        <button
          onClick={toggleDropdown}
          className="px-[8px] py-[6px] md:px-[16px] border border-gray-300 rounded-[6px] cursor-pointer"
        >
          <img src={ShareIcon} />
        </button>

        {/* 드롭다운 메뉴 */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white border text-left border-gray-300 rounded-lg shadow-lg z-1 overflow-hidden">
            <Kakao />
            <button className="px-4 py-[12px] w-full text-left hover:bg-gray-100 cursor-pointer text-16-regular">
              URL 공유
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Share;
