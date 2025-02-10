import { getBadgeStyle, getRelationshipText } from '../badgeStyle';
import trash from '../../../../assets/images/trash.svg';
import Button from '../../button';

function FromCard({
  name,
  profileImage,
  relationship,
  messageContent,
  createdAtMessage,
  isShowDeleteButton,
  onDelete,
}) {
  return (
    <>
      <section className="relative box-border w-sm min-h-[280px] bg-white rounded-2xl shadow-[0_2px_12px_0_rgba(0,0,0,0.08)]">
        <article className="px-6 pt-7 pb-6">
          <div className="border-b border-gray-200 flex items-center gap-3.5 pb-4 mb-4">
            <img src={profileImage} alt="profile" className="w-14 h-14 rounded-full" />
            <div className="flex-1">
              <h1 className="text-20-regular block leading-6">
                From. <span className="text-20-bold">{name}</span>
              </h1>
              <p
                className={`w-[41px] h-5 rounded-sm text-14-regular text-center leading-5 tracking-[-0.005em] ${getBadgeStyle(relationship)}`}
              >
                {getRelationshipText(relationship)}
              </p>
            </div>
            {isShowDeleteButton && <Button variant="icon" icon={trash} onClick={onDelete} />}
          </div>
          <span className="text-18-regular mb-4 leading-7 tracking-[-0.01em] text-gray-600 flex-1 overflow-hidden line-clamp-4">
            {messageContent}
          </span>
          <p className="text-12-regular leading-4.5 tracking-[-0.005em] text-gray-400 absolute bottom-6 left-6">
            {createdAtMessage}
          </p>
        </article>
      </section>
    </>
  );
}

export default FromCard;
