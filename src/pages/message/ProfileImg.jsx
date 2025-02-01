import ErrorMessage from './ErrorMessage';

const ProfileImg = ({ images, profileImg, setProfileImg, loadingError }) => {
  const filteredImgList = images
    .filter((_, index) => index >= 1) // index 0 제외
    .map((src) => (
      <img
        key={src}
        src={src}
        className="w-14 h-14 rounded-full mr-1 cursor-pointer"
        onClick={(e) => setProfileImg(e.target.currentSrc)} // 선택된 예시 이미지를 프로필로 지정
      />
    ));
  return (
    <div className="flex py-2">
      <img
        src={profileImg}
        className="mr-8 w-20 h-20 rounded-full cursor-pointer"
        onClick={(e) => setProfileImg(images[0])} // 클릭 시 프로필 이미지 제거
      />
      <div>
        <p className="text-[#555555] mb-3">프로필 이미지를 선택해주세요!</p>
        {loadingError ? (
          <ErrorMessage text={'이미지를 불러오는데에 실패했습니다'} />
        ) : (
          <div className="flex">{filteredImgList}</div>
        )}
      </div>
    </div>
  );
};
export default ProfileImg;
