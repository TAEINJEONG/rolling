import profile from '../../assets/images/profile.svg';

const ProfileImg = () => {
  return (
    <div className="flex py-2">
      <img src={profile} className="mr-8 cursor-pointer" />
      <div>
        <p className="text-[#555555]">프로필 이미지를 선택해주세요!</p>
      </div>
    </div>
  );
};
export default ProfileImg;
