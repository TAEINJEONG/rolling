import ErrorMessage from './ErrorMessage';
import Skeleton from '../../../components/common/skeleton';
import api from '../../../api/axios';
import { useEffect, useRef } from 'react';

const ProfileImg = ({ images, profileImg, setProfileImg, requestError, isLoading }) => {
  const ImageInputRef = useRef(null);

  useEffect(() => {
    if (images && images.length > 0) {
      setProfileImg(images[0]);
    }
  }, [images]);

  const filteredImgList = isLoading
    ? Array(9)
        .fill(0)
        .map((_, index) => <Skeleton key={index} className="w-14 h-14 !rounded-full mr-1" />)
    : images
        .filter((_, index) => index >= 1) // index 0 제외
        .map((src) => (
          <img
            key={src}
            src={src}
            className="w-14 h-14 rounded-full mr-1 cursor-pointer"
            onClick={(e) => setProfileImg(e.target.currentSrc)}
          />
        ));

  // 미리보기 이미지 클릭 시 실행
  const handleProfileClick = (e) => {
    if (e.target.src === images[0]) {
      ImageInputRef.current.click(); // 파일 선택창 열기
    } else {
      setProfileImg(images[0]); // 프로필 이미지 초기화
    }
  };

  // 원하는 파일을 프로필 이미지로 저장
  const handleImgChange = async (e) => {
    const file = e.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append('image', file);
      try {
        const response = await api.uploadFile(formData);
        const responseImageUrl = encodeURI(response.data.url); // 응답받은 url 인코딩
        setProfileImg(responseImageUrl);
      } catch (e) {
        console.error(e);
      }
    }
  };

  return (
    <div className="flex py-2">
      <img
        src={profileImg}
        className="mr-8 w-20 h-20 rounded-full cursor-pointer"
        onClick={handleProfileClick}
      />
      <input
        type="file"
        ref={ImageInputRef}
        accept="image/jpeg, image/png, image/jpg"
        style={{ display: 'none' }}
        onChange={handleImgChange}
      />
      <div>
        <p className="text-[#555555] mb-3 ">프로필 이미지를 선택해주세요!</p>
        {requestError ? (
          <ErrorMessage text={'이미지를 불러오는 데에 실패했습니다'} />
        ) : (
          <div className="flex flex-wrap">{filteredImgList}</div>
        )}
      </div>
    </div>
  );
};
export default ProfileImg;
