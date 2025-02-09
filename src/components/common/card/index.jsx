import { CARD_TYPES } from './constants';
import ToCard from './components/ToCard';
import FromCard from './components/FromCard';

const Card = ({
  type = CARD_TYPES.TO,
  name,
  profileImage,
  profileImages = [],
  messageContent,
  relationship,
  isShowDeleteButton,
  createdAtMessage,
  reactions = [],
  count,
  bgColor,
  bgImage,
  ...props
}) => {
  return (
    <div>
      {type === CARD_TYPES.TO ? (
        <ToCard
          name={name}
          profileImages={profileImages}
          count={count}
          reactions={reactions}
          bgColor={bgColor}
          bgImage={bgImage}
        />
      ) : (
        <FromCard
          name={name}
          profileImage={profileImage}
          relationship={relationship}
          messageContent={messageContent}
          createdAtMessage={createdAtMessage}
          isShowDeleteButton={isShowDeleteButton}
        />
      )}
    </div>
  );
};

export default Card;
