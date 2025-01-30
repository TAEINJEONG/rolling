import './styles.css';
import InputBox from './InputBox';
import { useEffect, useState } from 'react';
import ProfileImg from './ProfileImg';
import api from '../../api/axios';
import profilePreview from '../../assets/images/profile.svg';

// 선택된 이미지가 없으면 images[0] 이 profileImg
const Message = () => {
  const [sender, setSender] = useState('');
  const [isError, setIsError] = useState(false);
  const [images, setImages] = useState([]);
  const [profileImg, setProfileImg] = useState(profilePreview);

  const handleInputChange = (e) => {
    setSender(e.target.value); // 공백 제거 후 상태 업데이트
    setIsError(false);
  };

  const handleOnBlur = () => {
    if (sender === '') {
      setIsError(true);
    }
  };

  // 예시 프로필 이미지 요청
  useEffect(() => {
    const getProfileImages = async () => {
      try {
        const response = await api.getProfileImages('13-2', '9738');
        setImages(response.data.imageUrls);
      } catch (e) {
        console.error(e);
      }
    };
    getProfileImages();
  }, []);

  return (
    <form className="container max-w-[720px] mx-auto mt-[112px] flex flex-col ">
      {/*sender 입력창*/}
      <label htmlFor="from-input" className="text-24-bold mb-3">
        From.
      </label>
      <InputBox
        value={sender}
        onChange={handleInputChange}
        onBlur={handleOnBlur}
        isError={isError}
      />

      {/*프로필 이미지*/}
      <label className="text-24-bold mt-[50px] mb-3">프로필 이미지</label>
      <ProfileImg images={images} profileImg={profileImg} setProfileImg={setProfileImg} />
    </form>
  );
};

export default Message;
