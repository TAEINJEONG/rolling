import AddCard from './AddCard';
import Card from './index';

const CardList = ({ cards, onDelete }) => {
  return (
    <div className="flex flex-wrap gap-6">
      <AddCard />
      {cards.map((card) => (
        <Card
          key={card.id}
          name={card.name}
          profileImg={card.profileImg}
          relationship={card.relationship}
          messageContent={card.messageContent}
          createdAtMessage={card.createdAtMessage}
          onDelete={() => onDelete(card.id)}
        />
      ))}
    </div>
  );
};

export default CardList;
