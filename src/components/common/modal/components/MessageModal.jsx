import { getBadgeStyle } from '../../card/badgeStyle';
import parse from 'html-react-parser';
import Modal from '../index';
import trash from '../../../../assets/images/trash.svg';
import Button from '../../button/index';
import '../scrollStyle.css';

function MessageModal({
  name,
  profileImage,
  relationship,
  messageContent,
  createdAtMessage,
  isShowDeleteButton,
  onClose,
  onDelete,
}) {
  const formattedDate = createdAtMessage?.split('T')[0].split('-').slice(0, 3).join('.');
  const badgeStyle = getBadgeStyle(relationship);

  return (
    <Modal onClose={onClose}>
      <div className="border-b border-gray-200 flex items-center gap-3.5 pb-4 mb-4">
        <img src={profileImage} alt={`${name}님의 프로필`} className="w-14 h-14 rounded-full" />
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
        <p className="text-14-regular leading-5 tracking-[-0.005em] text-gray-400">
          {formattedDate}
        </p>
        {isShowDeleteButton && <Button variant="icon" icon={trash} onClick={onDelete} />}
      </div>
      <span className="modal-content w-full max-w-[520px] h-[240px] block text-18-regular leading-7 tracking-[-0.01em] text-gray-600 flex-1 overflow-y-auto">
        {messageContent && parse(messageContent)}
      </span>
    </Modal>
  );
}

export default MessageModal;
