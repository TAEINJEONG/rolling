import CarouselButton from './CarouselButton';
import RollingPaperCard from './RollingPaperCard';

const RollingPaperCarousel = ({ title, papers, currentIndex, onNext, onPrev, itemsPerView }) => {
  return (
    <div>
      <div className="flex flex-col gap-[16px]">
        <span>{title}</span>
      </div>
      <div className="flex gap-[20px] max-w-[1160px] overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative">
        {currentIndex > 0 && (
          <CarouselButton className="hidden xl:block" direction="prev" onClick={onPrev} />
        )}
        <div
          className="flex gap-[20px] xl:transition-transform xl:duration-300 max-md:gap-[12px]"
          style={{
            transform: `translateX(-${currentIndex * 295}px)`,
          }}
        >
          {papers.map((paper) => (
            <RollingPaperCard key={paper.id} paper={paper} />
          ))}
        </div>
        {currentIndex < papers.length - itemsPerView && (
          <CarouselButton className="hidden xl:block" direction="next" onClick={onNext} />
        )}
      </div>
    </div>
  );
};

export default RollingPaperCarousel;
