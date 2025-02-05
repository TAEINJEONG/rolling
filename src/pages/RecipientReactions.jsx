import React, { useEffect, useRef } from 'react';
import ArrowDown from '../assets/images/arrow_down.svg';

const RecipientReactions = ({ reactionsVisible, toggleReaction, hideReactions, reactions }) => {
  const emojiRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (emojiRef.current && !emojiRef.current.contains(event.target)) {
        hideReactions();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="relative" ref={emojiRef}>
        <div
          className="flex justify-center items-center gap-x-2 mr-2 cursor-pointer"
          onClick={toggleReaction}
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

        {reactionsVisible && (
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
    </>
  );
};

export default RecipientReactions;
