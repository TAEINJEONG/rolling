import RollingPaperSkeleton from './RollingPaperSkeleton';
import CarouselTitle from './CarouselTitle';

const RollingPaperCarouselSkeleton = ({ title }) => {
  return (
    <div>
      <CarouselTitle title={title} />
      <div className="flex gap-5 mt-4">
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <RollingPaperSkeleton key={index} />
          ))}
      </div>
    </div>
  );
};

export default RollingPaperCarouselSkeleton;
