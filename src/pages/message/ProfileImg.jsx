const ProfileImg = ({ images, profileImg, setProfileImg }) => {
  const handleImageClick = (e) => {
    setProfileImg(e.target.currentSrc);
  };

  const imageList = images
    .filter((_, index) => index >= 1) // index 0 제외
    .map((src) => (
      <img
        key={src}
        src={src}
        className="w-14 h-14 rounded-full mr-1 cursor-pointer"
        onClick={handleImageClick}
      />
    ));
  return (
    <div className="flex py-2">
      <img src={profileImg} className="mr-8 w-20 h-20 rounded-full cursor-pointer " />
      <div>
        <p className="text-[#555555] mb-3">프로필 이미지를 선택해주세요!</p>
        <div className="flex">{imageList}</div>
      </div>
    </div>
  );
};
export default ProfileImg;
