import CarouselTitle from './CarouselTitle';
import CarouselContent from './CarouselContent';
import CarouselNavigation from './CarouselNavigation';

const RollingPaperCarousel = ({ title, papers, currentIndex, onNext, onPrev, itemsPerView }) => {
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
      <CarouselContent currentIndex={currentIndex} papers={papers} />
    </div>
  );
};

export default RollingPaperCarousel;
