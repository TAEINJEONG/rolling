import Skeleton from '../../../components/common/skeleton';

const RollingPaperSkeleton = () => {
  return (
    <div className="relative w-[208px] h-[232px] md:w-[275px] md:h-[260px]">
      <Skeleton className="w-full h-full rounded-2xl" />
      <div className="absolute top-7.5 left-6">
        <Skeleton className="w-[80px] md:w-[100px] h-5 md:h-6 mb-3" />
        <div className="flex gap-1 mb-[40px] md:mb-[52px]">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="w-6 h-6 md:w-7 md:h-7 rounded-full" />
          ))}
        </div>
        <Skeleton className="w-[100px] md:w-[120px] h-5 md:h-6 mb-7 md:mb-9" />
        <div className="flex gap-2">
          {[1, 2, 3].map((i) => (
            <Skeleton
              key={i}
              className="w-[36px] md:w-[44px] h-[30px] md:h-[36px] rounded-[32px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RollingPaperSkeleton;
