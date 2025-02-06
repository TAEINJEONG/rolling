import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import SenderAvatarList from './components/SenderAvatarList';
import RecipientReactions from './components/RecipientReactions';
import EmojiMenu from './components/EmojiMenu';
import Share from './components/Share';
import Button from '../../../../components/common/button/index';
import trash from '../../../../assets/images/trash.svg';

const HeaderService = ({ id, recipient, messages, reactions, onUpdate, onConfirmDelete }) => {
  const [isReactionsMenuVisible, setIsReactionsMenuVisible] = useState(false);
  const [isEmojiPickerVisible, setIsEmojiPickerVisible] = useState(false);
  const [isShareMenuVisible, setIsShareMenuVisible] = useState(false);

  const toggleReactionsMenu = () => {
    setIsReactionsMenuVisible(!isReactionsMenuVisible);
  };

  const closeReactionsMenu = () => {
    setIsReactionsMenuVisible(false);
  };

  const toggleEmojiPicker = () => {
    setIsEmojiPickerVisible(!isEmojiPickerVisible);
  };

  const closeEmojiPicker = () => {
    setIsEmojiPickerVisible(false);
  };

  const toggleShareMenu = () => {
    setIsShareMenuVisible(!isShareMenuVisible);
  };

  const closeShareMenu = () => {
    setIsShareMenuVisible(false);
  };

  const TrashButton = () => {
    const location = useLocation();
    const isEditPage = location.pathname.endsWith('/edit');
    const deleteData = {
      type: 'recipient',
      id,
    };
    return isEditPage ? (
      <div className="flex items-center" onClick={() => onConfirmDelete(deleteData)}>
        <div className="mx-[13px] bg-gray-100 w-[1px] h-[28px]"></div>
        <Button variant="icon" icon={trash} className="ml-[13px]" />
      </div>
    ) : null;
  };

  return (
    <div className="bg-white">
      <div
        className="
          flex flex-col md:flex-row justify-between md:items-center
          md:max-w-[1248px] m-auto 
          md:px-6 md:py-[13px]
        "
      >
        <p className="text-28-bold px-5 py-3 md:px-[0px] md:py-[0px] border-b md:border-[0px] border-gray-200">
          To. {recipient.name}
        </p>
        <div className="flex text-center items-center justify-end px-5 py-3 md:px-[0px] md:py-[0px]">
          <SenderAvatarList messages={messages} recipient={recipient} />

          <RecipientReactions
            isReactionsMenuVisible={isReactionsMenuVisible}
            toggleReaction={toggleReactionsMenu}
            closeReactions={closeReactionsMenu}
            reactions={reactions}
          />

          <div className="flex text-center items-center">
            <EmojiMenu
              id={id}
              onUpdate={onUpdate}
              isEmojiPickerVisible={isEmojiPickerVisible}
              toggleEmojiPicker={toggleEmojiPicker}
              closeEmojiPicker={closeEmojiPicker}
            />
            <div className="mx-[13px] bg-gray-100 w-[1px] h-7"></div>
            <Share
              isShareMenuVisible={isShareMenuVisible}
              toggleShareMenu={toggleShareMenu}
              closeShareMenu={closeShareMenu}
            />
            <TrashButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderService;
