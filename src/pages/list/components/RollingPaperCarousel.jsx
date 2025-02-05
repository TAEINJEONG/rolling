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
      <div className="flex flex-col gap-4">
        <span className="carousel-title">{title}</span>
      </div>
      <div className="flex gap-5 max-w-[1160px] w-full overflow-hidden relative">
        {isPrevButtonVisible && (
          <CarouselButton className="hidden xl:block" direction="prev" onClick={onPrev} />
        )}
        <div
          className="flex gap-5 xl:transition-transform xl:duration-300 max-md:gap-3"
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
