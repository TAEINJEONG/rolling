import React from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { useLocation } from 'react-router-dom';
import Button from '../../../components/common/button/index';
import Card from '../../../components/common/card/components/FromCard';

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
      <Dialog
        open={dialogVisible}
        onClose={dialogInVisible}
        className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black/60 z-100"
      >
        <DialogPanel>
          <div>
            {dialogVisible && (
              <Card
                name={selectedMessage.sender}
                getBadgeStyle={selectedMessage.relationship}
                relationship={selectedMessage.relationship}
                profileImage={selectedMessage.profileImageURL}
                messageContent={selectedMessage.content}
                createdAtMessage={selectedMessage.createdAt}
                isShowDeleteButton={isEditPage}
                onDelete={onConfirmDeleteData}
              />
            )}

            <Button size="sm" variant="primary" disabled={false} onClick={dialogInVisible}>
              확인
            </Button>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  );
};

export default MessageDialog;
