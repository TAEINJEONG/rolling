import Skeleton from '../../../components/common/skeleton';

const RollingPaperSkeleton = () => {
  return (
    <div className="relative w-[275px] h-[260px]">
      <Skeleton className="w-full h-full rounded-2xl" />
      <div className="absolute top-7.5 left-6">
        <Skeleton className="w-[100px] h-6 mb-3" />
        <div className="flex gap-1 mb-[52px]">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="w-7 h-7 rounded-full" />
          ))}
        </div>
        <Skeleton className="w-[120px] h-6 mb-9" />
        <div className="flex gap-2">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="w-[44px] h-[36px] rounded-[32px]" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RollingPaperSkeleton;
