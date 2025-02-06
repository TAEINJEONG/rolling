import { getBadgeStyle, getRelationshipText } from './badgeStyle';
import trash from '../../../assets/images/trash.svg';
import Button from '../button';

const CardHeader = ({ profileImg, name, relationship, onDelete, showDeleteButton }) => (
  <div className="border-b border-gray-200 flex items-center gap-3.5 pb-4 mb-4">
    <img src={profileImg} alt="프로필 이미지" className="w-14 h-14" />
    <div className="flex-1">
      <span className="text-20-regular block leading-6">
        From. <span className="text-20-bold">{name}</span>
      </span>
      <p
        className={`w-[41px] h-5 rounded-sm text-14-regular text-center leading-5 tracking-[-0.005em] ${getBadgeStyle(relationship)}`}
      >
        {getRelationshipText(relationship)}
      </p>
    </div>
    {showDeleteButton && <Button variant="icon" icon={trash} onClick={onDelete} />}
  </div>
);

export default CardHeader;
