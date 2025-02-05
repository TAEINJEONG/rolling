const RollingPaperCard = ({ paper }) => {
  return (
    <div
      className="w-[208px] h-[232px] xl:w-[275px] xl:h-[260px] bg-amber-900 rounded-2xl transition-all duration-150"
      key={paper.id}
    >
      {paper.name}
    </div>
  );
};

export default RollingPaperCard;
