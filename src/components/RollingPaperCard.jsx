const RollingPaperCard = ({ paper }) => {
  return (
    <div className="min-w-[275px] h-[260px]" key={paper.id}>
      {paper.name}
    </div>
  );
};

export default RollingPaperCard;
