import InputWithError from './components/InputWithError';
import ProfileImg from './components/ProfileImg';
import profilePreview from '../../assets/images/profile.svg';
import Select from './components/Select';
import Editor from './components/Editor';
import Button from '../../components/common/button/index';
import { useState, useEffect } from 'react';
import useProfileImages from './utils/useProfileImages';

const Message = () => {
  const [sender, setSender] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [profileImg, setProfileImg] = useState(profilePreview);
  const [selectedRelation, setSelectedRelation] = useState('지인');
  const [editorContent, setEditorContent] = useState('');
  const [selectedFont, setSelectedFont] = useState('Noto Sans');
  const relationOptions = ['친구', '지인', '동료', '가족'];
  const fontOptions = ['Noto Sans', 'Pretendard', '나눔명조', '나눔손글씨 손편지체'];
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (e) => {
    setSender(e.target.value.trim()); // 공백 제거 후 상태 업데이트
    setIsValid(true);
  };

  const { images, loadingError } = useProfileImages();

  useEffect(() => {
    if (sender.trim() !== '' && editorContent.trim() !== '') {
      setIsFormValid(true);
    }
  }, [sender, editorContent]);

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

      {/*폰트 선택*/}
      <label className="text-24-bold mt-[50px] mb-3">폰트 선택</label>
      <Select options={fontOptions} selected={selectedFont} onSelect={setSelectedFont} />

      {/*폼 제출 버튼*/}
      <div className="pt-16 pb-16">
        <Button
          variant="primary"
          size="lg"
          type="submit"
          fullWidth="true"
          disabled={!isFormValid}
          children="생성하기"
        ></Button>
      </div>
    </form>
  );
};

export default Message;
