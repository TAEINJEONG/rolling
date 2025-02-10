import { useEffect } from 'react';
import Button from '../button';

function Modal({ children, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <div
      className="fixed bg-black/50 inset-0 flex justify-center items-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <section
        className="box-border w-[600px] bg-white rounded-2xl shadow-[0_2px_12px_0_rgba(0,0,0,0.08)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-10">
          {children}
          <div className="flex justify-center mt-6">
            <Button variant="primary" size="lg" onClick={onClose}>
              확인
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Modal;
