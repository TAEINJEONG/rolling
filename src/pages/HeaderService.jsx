import React, { useState } from 'react';
import SenderAvatarList from './SenderAvatarList';
import RecipientReactions from './RecipientReactions';
import EmojiMenu from './EmojiMenu';
import Share from './Share';

const HeaderService = ({ recipient, messages, reactions, id, onUpdate, toastVisible }) => {
  const [reactionsVisible, setReactionsVisible] = useState(false);
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);
  const [shareMenuVisible, setShareMenuVisible] = useState(false);

  const toggleReaction = () => {
    setReactionsVisible(!reactionsVisible);
  };

  const hideReactions = () => {
    setReactionsVisible(false);
  };

  const toggleEmojiPicker = () => {
    setEmojiPickerVisible(!emojiPickerVisible);
  };

  const hideEmojiPicker = () => {
    setEmojiPickerVisible(false);
  };

  const toggleShareMenu = () => {
    setShareMenuVisible(!shareMenuVisible);
  };

  const hideShareMenu = () => {
    setShareMenuVisible(false);
  };

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
          <SenderAvatarList messages={messages} recipient={recipient} />

          <RecipientReactions
            reactionsVisible={reactionsVisible}
            toggleReaction={toggleReaction}
            hideReactions={hideReactions}
            reactions={reactions}
          />

          <div className="flex text-center items-center">
            <EmojiMenu
              id={id}
              onUpdate={onUpdate}
              emojiPickerVisible={emojiPickerVisible}
              toggleEmojiPicker={toggleEmojiPicker}
              hideEmojiPicker={hideEmojiPicker}
            />
            <div className="mx-[13px] bg-gray-100 w-[1px] h-[28px]"></div>
            <Share
              shareMenuVisible={shareMenuVisible}
              toggleShareMenu={toggleShareMenu}
              hideShareMenu={hideShareMenu}
              toastVisible={toastVisible}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderService;
