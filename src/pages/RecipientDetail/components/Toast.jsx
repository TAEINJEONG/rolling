import ToastCheck from '../../../assets/images/toast_check.svg';
import ToastClose from '../../../assets/images/toast_close.svg';

const Toast = ({ HideToast }) => {
  return (
    <>
      <div className="w-full px-5 fixed bottom-[70px] flex justify-center">
        <div className="flex justify-between w-131 bg-black/80 px-[30px] py-5 rounded-[8px]">
          <div className="flex">
            <img src={ToastCheck} className="w-6 h-6 mr-3" />
            <span className="text-16-regular text-white">URL이 복사 되었습니다.</span>
          </div>
          <img src={ToastClose} className="w-6 h-6 cursor-pointer" onClick={HideToast} />
        </div>
      </div>
    </>
  );
};

export default Toast;
