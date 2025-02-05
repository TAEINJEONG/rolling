import InputWithError from './components/InputWithError';
import ProfileImg from './components/ProfileImg';
import api from '../../api/axios';
import profilePreview from '../../assets/images/profile.svg';
import Select from './components/Select';
import Editor from './components/Editor';
import { useEffect, useState } from 'react';

const Message = () => {
  const [sender, setSender] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [images, setImages] = useState([]);
  const [loadingError, setLoadingError] = useState(false);
  const [profileImg, setProfileImg] = useState(profilePreview);
  const [selectedRelation, setSelectedRelation] = useState('지인');
  const [editorContent, setEditorContent] = useState('');
  const [selectedFont, setSelectedFont] = useState('Noto Sans');

  const relationOptions = ['친구', '지인', '동료', '가족'];
  const fontOptions = ['Noto Sans', 'Pretendard', '나눔명조', '나눔손글씨 손편지체'];

  const handleInputChange = (e) => {
    setSender(e.target.value); // 공백 제거 후 상태 업데이트
    setIsValid(true);
  };

  // 예시 프로필 이미지 요청
  useEffect(() => {
    const getProfileImages = async () => {
      try {
        const response = await api.getProfileImages();
        setImages(response.data.imageUrls);
        setLoadingError(false);
      } catch (e) {
        setLoadingError(true);
        console.error(e);
      }
    };
    getProfileImages();
  }, []);

  return (
    <form className="container max-w-[720px] mx-auto mt-[47px] flex flex-col ">
      {/*sender 입력창*/}
      <label htmlFor="sender-input" className="text-24-bold mb-3">
        From.
      </label>
      <InputWithError
        value={sender}
        onChange={handleInputChange}
        onBlur={() => sender === '' && setIsValid(false)}
        isValid={isValid}
      />

      {/*프로필 이미지*/}
      <label className="text-24-bold mt-[50px] mb-3">프로필 이미지</label>
      <ProfileImg
        images={images}
        profileImg={profileImg}
        setProfileImg={setProfileImg}
        loadingError={loadingError}
      />

      {/*관계 선택*/}
      <label className="text-24-bold mt-[50px] mb-3">상대와의 관계</label>
      <Select
        options={relationOptions}
        selected={selectedRelation}
        onSelect={setSelectedRelation}
      />

      {/*내용 입력 에디터*/}
      <label className="text-24-bold mt-[50px] mb-3">내용을 입력해 주세요</label>
      <Editor
        editorContent={editorContent}
        setEditorContent={setEditorContent}
        selectedFont={selectedFont}
      />

      <label className="text-24-bold mt-[50px] mb-3">폰트 선택</label>
      <Select options={fontOptions} selected={selectedFont} onSelect={setSelectedFont} />
    </form>
  );
};

export default Message;
