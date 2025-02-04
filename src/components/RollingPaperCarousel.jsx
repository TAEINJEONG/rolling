import CarouselButton from './CarouselButton';
import RollingPaperCard from './RollingPaperCard';

const RollingPaperCarousel = ({ title, papers, currentIndex, onNext, onPrev, itemsPerView }) => {
  const isPrevButtonVisible = currentIndex > 0;
  const isNextButtonVisible = currentIndex < papers.length - itemsPerView;

  const getTransformStyle = (index) => ({
    transform: `translateX(-${index * 295}px)`,
  });

  return (
    <div className="rolling-paper-carousel">
      <div className="flex flex-col gap-[16px]">
        <span className="carousel-title">{title}</span>
      </div>
      <div className="flex gap-[20px] max-w-[1160px] overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative">
        {isPrevButtonVisible && (
          <CarouselButton className="hidden xl:block" direction="prev" onClick={onPrev} />
        )}
        <div
          className="flex gap-[20px] xl:transition-transform xl:duration-300 max-md:gap-[12px]"
          style={getTransformStyle(currentIndex)}
        >
          {papers.map((paper) => (
            <RollingPaperCard key={paper.id} paper={paper} />
          ))}
        </div>
        {isNextButtonVisible && (
          <CarouselButton className="hidden xl:block" direction="next" onClick={onNext} />
        )}
      </div>
    </div>
  );
};

export default RollingPaperCarousel;
