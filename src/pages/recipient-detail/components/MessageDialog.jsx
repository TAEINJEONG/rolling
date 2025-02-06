import React from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import Button from '../../../components/common/button/index';

const MessageDialog = ({ dialogVisible, dialogInVisible, selectedMessage }) => {
  return (
    <div>
      <Dialog
        open={dialogVisible}
        onClose={dialogInVisible}
        className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black/60 z-100"
      >
        <DialogPanel>
          <div className="bg-white rounded-[16px] p-4">
            {dialogVisible && (
              <div>
                <span className="block">{selectedMessage.profileImageURL}</span>
                <span className="block">{selectedMessage.sender}</span>
                <span className="block">{selectedMessage.relationship}</span>
                <span className="block">{selectedMessage.content}</span>
              </div>
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
