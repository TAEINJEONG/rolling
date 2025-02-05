import React from 'react';
import { Dialog } from '@headlessui/react';
import Button from '../components/common/button/index';

const MessageDialog = ({ showDialog, hideDialog, selectedMessage }) => {
  return (
    <>
      <Dialog open={showDialog} onClose={hideDialog} className="relative z-100">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black/60">
          <div className="bg-white rounded-[16px] p-4">
            {showDialog && (
              <div>
                <span className="block">{selectedMessage.profileImageURL}</span>
                <span className="block">{selectedMessage.sender}</span>
                <span className="block">{selectedMessage.relationship}</span>
                <span className="block">{selectedMessage.content}</span>
              </div>
            )}

            <Button size="sm" variant="primary" disabled={false} onClick={hideDialog}>
              확인
            </Button>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default MessageDialog;
