import React, { useState, useRef, useEffect } from 'react';
import EmojiPicker from 'emoji-picker-react';
import AddEmoji from '../assets/images/add-emoji.svg';
import api from '../api/axios';

const EmojiMenu = ({ id, onUpdate }) => {
  const [isActive, setIsActive] = useState(false);
  const menuRef = useRef(null);

  const handleToggle = () => {
    setIsActive((prev) => !prev);
  };

  const emojiClick = async (emojiObject) => {
    const reactionData = {
      emoji: emojiObject.emoji,
      type: 'increase',
    };

    try {
      await api.postRecipientsReactions('13-2', id, reactionData);
      onUpdate();
    } catch (e) {
      console.error('API 호출 중 오류 발생:', e);
    } finally {
      setIsActive(false);
    }
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
            <EmojiPicker open={isActive} onEmojiClick={emojiClick} />
          </div>
        )}
      </div>
    </div>
  );
};

export default EmojiMenu;
