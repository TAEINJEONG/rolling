import Badge from './Badge';

const ReactionsList = ({ reactions }) => {
  return (
    <div className="flex gap-2 border-t border-black/12 pt-4">
      {reactions.map((reaction, index) => (
        <div key={`reaction-${index}`}>
          <Badge emoji={reaction.emoji} count={reaction.count} />
        </div>
      ))}
    </div>
  );
};

export default ReactionsList;
