import React, { useState, useEffect, useRef } from 'react';
import Share from './Share';
import EmojiMenu from './EmojiMenu';
import ArrowDown from '../assets/images/arrow_down.svg';

const HeaderService = ({ recipient, messages, reactions, id, onUpdate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const emojiRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (emojiRef.current && !emojiRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white">
      <div
        className="
        flex flex-col md:flex-row justify-between md:items-center
        md:max-w-[1248px] m-auto 
        md:px-[24px] md:py-[13px]
      "
      >
        <p className="text-28-bold px-[20px] py-[12px] md:px-[0px] md:py-[0px] border-b md:border-[0px] border-gray-200">
          To. {recipient.name}
        </p>
        <div className="flex text-center items-center justify-end px-[20px] py-[12px] md:px-[0px] md:py-[0px]">
          <div className="items-center hidden lg:flex">
            <div className="relative flex w-[76px] h-[28px] mr-[11px] block">
              {messages.slice(0, 3).map((profileImage, index) => (
                <img
                  className="absolute w-[28px] h-[28px] rounded-full border-white border"
                  key={index}
                  src={profileImage.profileImageURL}
                  style={{
                    zIndex: index,
                    left: `${index * 16}px`,
                  }}
                />
              ))}
              {messages.length > 3 && (
                <div
                  className="
                  absolute flex items-center justify-center
                  w-[28px] h-[28px]
                  border-gray-200 border rounded-full
                  text-12-regular text-gray-600 bg-white"
                  style={{
                    zIndex: 3,
                    left: `${3 * 16}px`,
                  }}
                >
                  +{recipient.messageCount}
                </div>
              )}
            </div>
            <div className="flex">
              <p className="text-18-regular text-gray-900">
                <span className="text-18-bold">{recipient.messageCount}</span>
                명이 작성했어요!
              </p>
              <div className="mx-[13px] bg-gray-100 w-[1px] h-[28px]"></div>
            </div>
          </div>
          <div className="relative" ref={emojiRef}>
            <div
              className="flex justify-center items-center gap-x-2 mr-2 cursor-pointer"
              onClick={toggleDropdown}
            >
              {reactions.results.slice(0, 3).map((emoji, index) => (
                <div
                  key={index}
                  className="flex items-center rounded-[32px] px-3 py-2 bg-black/54 text-white"
                >
                  <div className="mr-1">{emoji.emoji}</div>
                  <div className="text-14-regular">{emoji.count}</div>
                </div>
              ))}
              <img src={ArrowDown} className="w-6 h-6" />
            </div>

            {isOpen && (
              <div
                className="
                    absolute -right-20
                    flex flex-wrap justify-center items-center gap-x-2 gap-y-3
                    mt-2 p-6 w-78
                    bg-white border text-left border-gray-300 
                    rounded-lg shadow-lg z-1 overflow-hidden
                  "
              >
                {reactions.results.slice(0, 8).map((emoji, index) => (
                  <div
                    key={index}
                    className="flex items-center rounded-[32px] px-3 py-2 bg-black/54 text-white"
                  >
                    <div className="mr-1">{emoji.emoji}</div>
                    <div className="text-14-regular">{emoji.count}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex text-center items-center">
            <EmojiMenu id={id} onUpdate={onUpdate} />
            <div className="mx-[13px] bg-gray-100 w-[1px] h-[28px]"></div>
            <Share />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderService;
