import Skeleton from '../../../components/common/skeleton';

const MessageCotainerSkeleton = () => {
  return (
    <div
      className="
      md:max-w-[1248px] m-auto p-6 pt-6 px-5 pb-9.5
      md:pt-[93px] md:px-6 md:pb-[91px]
      md:pt-[113px]
    "
    >
      <div className="flex justify-end mb-[11px]"></div>
      <div
        className="
          w-full grid grid-cols-1 grid-rows-6 gap-y-4
          sm:gap-4 md:w-full md:grid-cols-2 md:grid-rows-3 md:gap-x-4 md:gap-y-4 lg:grid-cols-3 lg:grid-rows-2 lg:gap-x-6 lg:gap-y-7
        "
      >
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Skeleton key={i} />
        ))}
      </div>
    </div>
  );
};

export default MessageCotainerSkeleton;
