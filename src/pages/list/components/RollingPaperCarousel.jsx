import CarouselTitle from './CarouselTitle';
import CarouselContent from './CarouselContent';
import CarouselNavigation from './CarouselNavigation';

const RollingPaperCarousel = ({
  title,
  papers,
  currentIndex,
  onNext,
  onPrev,
  itemsPerView,
  profileImages,
}) => {
  return (
    <div className="rolling-paper-carousel">
      <CarouselTitle title={title} />
      <CarouselNavigation
        currentIndex={currentIndex}
        papers={papers}
        itemsPerView={itemsPerView}
        onPrev={onPrev}
        onNext={onNext}
      />
      <CarouselContent currentIndex={currentIndex} papers={papers} profileImages={profileImages} />
    </div>
  );
};

export default RollingPaperCarousel;
