import ErrorMessage from './ErrorMessage';
import Skeleton from '../../../components/common/skeleton';
import api from '../../../api/axios';
import { useEffect, useRef, useState } from 'react';

const ProfileImg = ({ images, profileImg, setProfileImg, requestError, isLoading }) => {
  const ImageInputRef = useRef(null);
  const [isImgValidSize, setIsImgValidSize] = useState(true);

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
  const handleProfileImgClick = (e) => {
    if (e.target.src === images[0]) {
      // 파일 선택창 열림
      ImageInputRef.current.click();
    } else {
      // 프로필 이미지 삭제
      setProfileImg(images[0]);
    }
  };

  // 원하는 파일을 프로필 이미지로 저장
  const handleProfileImgChange = async (e) => {
    const file = e.target.files[0];

    if (file.size > 5242880) {
      setIsImgValidSize(false); // 파일 크기가 5mb 이상
      return;
    } else {
      setIsImgValidSize(true); // 유효한 크기 업로드 시 에러 상태 초기화
    }

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
        onClick={handleProfileImgClick}
      />
      <input
        type="file"
        ref={ImageInputRef}
        style={{ display: 'none' }}
        onChange={handleProfileImgChange}
      />
      <div>
        {isImgValidSize ? (
          <p className="text-[#555555] mb-3 ">프로필 이미지를 선택해주세요!</p>
        ) : (
          <ErrorMessage text={'이미지는 5MB 이하여야 합니다'} />
        )}
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
