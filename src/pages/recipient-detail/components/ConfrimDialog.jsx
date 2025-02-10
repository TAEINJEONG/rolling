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
          <div className="bg-white rounded-[16px] p-6">
            <div className="pb-6">
              <p className="text-center text-20-bold mb-2">삭제하시겠습니까?</p>
              <p className="text-18-regular text-center">
                한 번 삭제하시면 복구가 불가능합니다, <br />
                정말 삭제하시겠습니까?
              </p>
            </div>
            <div className="flex w-full justify-around">
              <Button size="md" variant="primary" onClick={confirmDeletion}>
                확인
              </Button>
              <Button size="md" variant="secondary" onClick={closeConfrimDialog}>
                취소
              </Button>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  );
};

export default ConfrimDialog;
