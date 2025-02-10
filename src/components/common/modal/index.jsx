import { useEffect } from 'react';
import { getBadgeStyle } from '../card/badgeStyle';
import Button from '../button';
import './scrollStyle.css';

function Modal({ name, profileImage, relationship, messageContent, createdAtMessage, onClose }) {
  const formattedDate = createdAtMessage?.split('T')[0].split('-').slice(0, 3).join('.');
  const badgeStyle = getBadgeStyle(relationship);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      <div className="fixed bg-black/50 inset-0 flex justify-center items-center" onClick={onClose}>
        <section
          className="box-border w-[600px] h-[476px] bg-white rounded-2xl shadow-[0_2px_12px_0_rgba(0,0,0,0.08)]"
          onClick={(e) => e.stopPropagation()} //모달 내부 클릭 닫힘 방지
        >
          <article className="p-10">
            <div className="border-b border-gray-200 flex items-center gap-3.5 pb-4 mb-4">
              <img src={profileImage} alt="profile" className="w-14 h-14 rounded-full" />
              <div className="flex-1">
                <h1 className="text-20-regular block leading-6">
                  From. <span className="text-20-bold">{name}</span>
                </h1>
                <p
                  className={`w-[41px] h-5 rounded-sm text-14-regular text-center leading-5 tracking-[-0.005em] ${badgeStyle}`}
                >
                  {relationship}
                </p>
              </div>
              <p className="text-14-regular leading-5 tracking-[-0.005em] text-gray-400 ">
                {formattedDate}
              </p>
            </div>
            <span className="modal-content w-[520px] max-h-[240px] block text-18-regular mb-6 leading-7 tracking-[-0.01em] text-gray-600 flex-1 overflow-y-auto">
              {messageContent}
            </span>
            <div className="flex justify-center">
              <Button variant="primary" size="lg" onClick={onClose}>
                확인
              </Button>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}

export default Modal;
