const RollingPaperCard = ({ paper }) => {
  return (
    <div className="w-[275px] h-[260px] max-md:w-[206px] max-md:h-[232px]" key={paper.id}>
      {paper.name}
    </div>
  );
};

export default RollingPaperCard;
