const SenderAvatarList = ({ messages, recipient }) => {
  return (
    <>
      <div className="items-center hidden lg:flex">
        <div className="relative flex w-19 h-7 mr-[11px] block">
          {messages.slice(0, 3).map((profileImage, index) => (
            <img
              className="absolute w-7 h-7 rounded-full border-white border"
              key={profileImage?.id}
              src={profileImage?.profileImageURL}
              style={{
                zIndex: index,
                left: `${index * 16}px`,
              }}
            />
          ))}
          {messages.length > 3 && (
            <div
              className="
                  absolute flex items-center justify-center
                  w-7 h-7
                  border-gray-200 border rounded-full
                  text-12-regular text-gray-600 bg-white"
              style={{
                zIndex: 3,
                left: `${3 * 16}px`,
              }}
            >
              +{recipient?.messageCount}
            </div>
          )}
        </div>
        <div className="flex">
          <p className="text-18-regular text-gray-900">
            <span className="text-18-bold">{recipient?.messageCount}</span>
            명이 작성했어요!
          </p>
          <div className="mx-[13px] bg-gray-100 w-[1px] h-7"></div>
        </div>
      </div>
    </>
  );
};

export default SenderAvatarList;
