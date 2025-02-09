import { MAX_VISIBLE_PROFILES, PROFILE_OFFSET } from '../constants';

const ProfileAvatarGroup = ({ images = [], totalCount }) => {
  const visibleImages = images.slice(0, MAX_VISIBLE_PROFILES);

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
      <div className="absolute h-7 translate-x-12 z-5 bg-white rounded-[30px] px-1.5 flex items-center justify-center">
        {totalCount > MAX_VISIBLE_PROFILES ? `+${totalCount - MAX_VISIBLE_PROFILES}` : totalCount}
      </div>
    </div>
  );
};

export default ProfileAvatarGroup;
