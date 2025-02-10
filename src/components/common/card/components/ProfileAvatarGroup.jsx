import { MAX_VISIBLE_PROFILES, PROFILE_OFFSET } from '../constants';

const ProfileAvatarGroup = ({ images = [], totalCount }) => {
  const getVisibleImages = (images, totalCount) => {
    if (totalCount >= MAX_VISIBLE_PROFILES) {
      return images.slice(0, MAX_VISIBLE_PROFILES);
    }
    return images.slice(0, totalCount);
  };

  const visibleImages = getVisibleImages(images, totalCount);

  return (
    <div className="mb-3 relative">
      {visibleImages.map((image, index) => {
        return (
          <>
            <img
              key={`profile-${index}`}
              src={image}
              alt={`Profile ${index + 1}`}
              className="absolute w-7 h-7 rounded-full border-2 border-white"
              style={{ zIndex: index + 1, transform: `translateX(${index * PROFILE_OFFSET}px)` }}
            />
          </>
        );
      })}
      {totalCount > MAX_VISIBLE_PROFILES && (
        <div
          className={`absolute h-7 translate-x-12 z-5 bg-white rounded-[30px] px-1.5 flex items-center justify-center`}
        >
          {`+${totalCount - MAX_VISIBLE_PROFILES}`}
        </div>
      )}
    </div>
  );
};

export default ProfileAvatarGroup;
