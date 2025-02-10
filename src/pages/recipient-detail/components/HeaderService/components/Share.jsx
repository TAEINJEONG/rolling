import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ShareIcon from '../../../../../assets/images/share.svg';
import ToastCheck from '../../../../../assets/images/toast_check.svg';
import ToastClose from '../../../../../assets/images/toast_close.svg';
import Kakao from '../Kakao';

const Toast = ({ closeToast }) => {
  return (
    <div className="w-full px-5 fixed bottom-[70px] left-1/2 -translate-x-1/2 flex justify-center z-999">
      <div className="flex justify-between w-131 bg-black/80 px-[30px] py-5 rounded-[8px]">
        <div className="flex">
          <img src={ToastCheck} className="w-6 h-6 mr-3" />
          <span className="text-16-regular text-white">URL이 복사 되었습니다.</span>
        </div>
        <img src={ToastClose} className="w-6 h-6 cursor-pointer" onClick={closeToast} />
      </div>
    </div>
  );
};

const Share = ({ toggleShareMenu, isShareMenuVisible, closeShareMenu }) => {
  const menuRef = useRef(null);
  const location = useLocation();
  const currentPageUrl = window.location.origin + location.pathname;
  const [isToastVisible, setIsToastVisible] = useState(false);

  const copyUrlToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentPageUrl);
      setIsToastVisible(true);
      setTimeout(() => setIsToastVisible(false), 5000);
    } catch (e) {
      console.log('URL 복사 실패', e);
    } finally {
      closeShareMenu();
    }
  };

  useEffect(() => {
    // 공유 메뉴 바깥 영역 클릭시 닫히는 기능
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeShareMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeShareMenu]);

  return (
    <div>
      <div className="relative cursor-pointer" ref={menuRef}>
        <button
          onClick={toggleShareMenu}
          className="px-2 py-1.5 md:px-4 border border-gray-300 rounded-[6px] cursor-pointer"
        >
          <img src={ShareIcon} />
        </button>

        {isShareMenuVisible && (
          <div className="absolute right-0 mt-2 w-40 bg-white border text-left border-gray-300 rounded-lg shadow-lg z-1 overflow-hidden">
            <div onClick={closeShareMenu}>
              <Kakao />
            </div>
            <button
              className="px-4 py-3 w-full text-left hover:bg-gray-100 cursor-pointer text-16-regular"
              onClick={copyUrlToClipboard}
            >
              URL 공유
            </button>
          </div>
        )}
      </div>

      {isToastVisible && (
        <div className="relative">
          <Toast closeToast={() => setIsToastVisible(false)} />
        </div>
      )}
    </div>
  );
};

export default Share;
