import React from 'react';
import { useLocation } from 'react-router-dom';
import Modal from '../../../components/common/modal/components/MessageModal';

const MessageDialog = ({ dialogVisible, dialogInVisible, selectedMessage, onDelete }) => {
  const useIsEditPage = () => {
    const location = useLocation();
    return location.pathname.endsWith('/edit');
  };

  const onConfirmDeleteData = (e) => {
    e.stopPropagation();
    const deleteData = {
      type: 'message',
      id: selectedMessage.id,
    };
    onDelete(deleteData);
  };

  const isEditPage = useIsEditPage();

  return (
    <div>
      {dialogVisible && (
        <Modal
          name={selectedMessage.sender}
          profileImage={selectedMessage.profileImageURL}
          relationship={selectedMessage.relationship}
          messageContent={selectedMessage.content}
          createdAtMessage={selectedMessage.createdAt}
          onClose={dialogInVisible}
          isShowDeleteButton={isEditPage}
          onDelete={onConfirmDeleteData}
        />
      )}
    </div>
  );
};

export default MessageDialog;
