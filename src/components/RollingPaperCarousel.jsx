import CarouselButton from './CarouselButton';
import RollingPaperCard from './RollingPaperCard';

const RollingPaperCarousel = ({ title, papers, currentIndex, onNext, onPrev, itemsPerView }) => {
  return (
    <div>
      <div className="flex flex-col gap-[16px]">
        <span>{title}</span>
      </div>
      <div className="flex gap-[20px] max-w-[1160px] overflow-hidden relative md:overflow-x-auto md:[&::-webkit-scrollbar]:hidden md:[&::-webkit-scrollbar-track]:hidden md:[&::-webkit-scrollbar-thumb]:hidden md:[-ms-overflow-style:none] md:[scrollbar-width:none]">
        {currentIndex > 0 && <CarouselButton direction="prev" onClick={onPrev} />}
        <div
          className="flex gap-[20px] transition-transform duration-300 md:transform-none"
          style={{
            transform: `translateX(-${currentIndex * 295}px)`,
          }}
        >
          {papers.map((paper) => (
            <RollingPaperCard key={paper.id} paper={paper} />
          ))}
        </div>
        {currentIndex < papers.length - itemsPerView && (
          <CarouselButton direction="next" onClick={onNext} />
        )}
      </div>
    </div>
  );
};

export default RollingPaperCarousel;
