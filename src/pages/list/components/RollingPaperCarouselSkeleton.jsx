import RollingPaperSkeleton from './RollingPaperSkeleton';
import CarouselTitle from './CarouselTitle';

const RollingPaperCarouselSkeleton = ({ title }) => {
  return (
    <div className="rolling-paper-carousel">
      <CarouselTitle title={title} />
      <div className="flex gap-5 max-w-[1160px] w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex gap-5 max-md:gap-3">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <RollingPaperSkeleton key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default RollingPaperCarouselSkeleton;
