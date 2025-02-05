import React, { useRef, useEffect } from 'react';
import EmojiPicker from 'emoji-picker-react';
import AddEmoji from '../assets/images/add-emoji.svg';
import api from '../api/axios';

const EmojiMenu = ({ id, onUpdate, toggleEmojiPicker, hideEmojiPicker, emojiPickerVisible }) => {
  const menuRef = useRef(null);

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
      hideEmojiPicker();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        hideEmojiPicker();
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
          onClick={toggleEmojiPicker}
        >
          <img className="md:mr-[4px]" src={AddEmoji} />
          <span className="hidden md:block">추가</span>
        </button>

        {emojiPickerVisible && (
          <div className="absolute -right-20 md:right-0 mt-2 z-1">
            <EmojiPicker open={emojiPickerVisible} onEmojiClick={emojiClick} />
          </div>
        )}
      </div>
    </div>
  );
};

export default EmojiMenu;
