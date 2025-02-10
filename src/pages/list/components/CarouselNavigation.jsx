import CarouselButton from './CarouselButton';

const CarouselNavigation = ({ currentIndex, papers, itemsPerView, onPrev, onNext }) => {
  const isNavigationVisible = {
    prev: currentIndex > 0,
    next: currentIndex < papers.length - itemsPerView,
  };
  return (
    <div className="carousel-button-wrapper max-w-[1160px] relative">
      {isNavigationVisible.prev && (
        <CarouselButton className="hidden xl:block" direction="prev" onClick={onPrev} />
      )}
      {isNavigationVisible.next && (
        <CarouselButton className="hidden xl:block" direction="next" onClick={onNext} />
      )}
    </div>
  );
};

export default CarouselNavigation;
