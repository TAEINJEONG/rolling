import React, { useState, useRef, useEffect } from 'react';
import EmojiPicker from 'emoji-picker-react';
import AddEmoji from '../assets/images/add-emoji.svg';

const EmojiMenu = () => {
  const [isActive, setIsActive] = useState(false);
  const menuRef = useRef(null);

  const handleToggle = () => {
    // 이모지 토글
    setIsActive((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="relative" ref={menuRef}>
        <button
          className="flex jusity-center items-center border border-gray-300 rounded-[6px] px-[8px] py-[6px] md:px-[16px] cursor-pointer"
          onClick={handleToggle}
        >
          <img className="md:mr-[4px]" src={AddEmoji} />
          <span className="hidden md:block">추가</span>
        </button>

        {isActive && (
          <div className="absolute -right-20 md:right-0 mt-2 z-1">
            <EmojiPicker open={isActive} />
          </div>
        )}
      </div>
    </div>
  );
};

export default EmojiMenu;
