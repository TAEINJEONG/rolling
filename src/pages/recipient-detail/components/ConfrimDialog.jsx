import React from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import Button from '../../../components/common/button/index';

const ConfrimDialog = ({ openConfrimDialog, closeConfrimDialog, confirmDeletion }) => {
  return (
    <div>
      <Dialog
        open={openConfrimDialog}
        onClose={closeConfrimDialog}
        className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black/60 z-100"
      >
        <DialogPanel>
          <div className="bg-white rounded-[16px] p-4">
            <div className="pb-6">
              <p className="text-center text-18-bold">삭제하시겠습니까?</p>
              <p className="text-16-regular">
                한 번 삭제하시면 복구가 불가능합니다, 정말 삭제하시겠습니까?
              </p>
            </div>
            <div className="flex w-full justify-around">
              <Button size="md" variant="primary" onClick={confirmDeletion}>
                확인
              </Button>
              <Button size="md" variant="secondary" onClick={closeConfrimDialog}>
                에반데..
              </Button>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  );
};

export default ConfrimDialog;
