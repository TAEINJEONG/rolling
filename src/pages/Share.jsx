import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ShareIcon from '../assets/images/share.svg';
import Kakao from './Kakao';

const Share = ({ toastVisible }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null);
  const location = useLocation();
  const currentUrl = window.location.origin + location.pathname;

  const handleCopy = async () => {
    // URL 복사 기능
    try {
      await navigator.clipboard.writeText(currentUrl);
      toastVisible();
    } catch (e) {
      console.log('URL 복사 실패', e);
    } finally {
      setIsOpen(false);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // 공유 메뉴 바깥 영역 클릭시 닫히는 기능
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

        {isOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white border text-left border-gray-300 rounded-lg shadow-lg z-1 overflow-hidden">
            <Kakao />
            <button
              className="px-4 py-[12px] w-full text-left hover:bg-gray-100 cursor-pointer text-16-regular"
              onClick={handleCopy}
            >
              URL 공유
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Share;
