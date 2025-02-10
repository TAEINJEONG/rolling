import React, { useRef, useEffect } from 'react';
import EmojiPicker from 'emoji-picker-react';
import AddEmoji from '../../../../../assets/images/add-emoji.svg';
import api from '../../../../../api/axios';
import Button from '../../../../../components/common/button/index';

const EmojiMenu = ({ id, onUpdate, toggleEmojiPicker, closeEmojiPicker, isEmojiPickerVisible }) => {
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
      closeEmojiPicker();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeEmojiPicker();
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
        <Button
          variant="icon"
          icon={AddEmoji}
          onClick={toggleEmojiPicker}
          className="flex jusity-center items-center border border-gray-300 rounded-[6px] px-2 py-1.5 md:px-4 cursor-pointer"
        >
          <span className="hidden md:block md:ml-1">추가</span>
        </Button>

        {isEmojiPickerVisible && (
          <div className="absolute -right-20 md:right-0 mt-2 z-1">
            <EmojiPicker open={isEmojiPickerVisible} onEmojiClick={emojiClick} />
          </div>
        )}
      </div>
    </div>
  );
};

export default EmojiMenu;
