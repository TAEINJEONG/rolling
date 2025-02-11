import InputWithError from './components/InputWithError';
import ProfileImg from './components/ProfileImg';
import profilePreview from '../../assets/images/profile.svg';
import Select from './components/Select';
import Editor from './components/Editor';
import Button from '../../components/common/button/index';
import useProfileImages from './utils/useProfileImages';
import api from '../../api/axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ErrorPage from '../error';

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
  const { id } = useParams();
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);

  const handleInputChange = (e) => {
    setSender(e.target.value);
    e.target.value.trim() ? setIsValid(true) : setIsValid(false);
  };

  const { images, requestError, isLoading } = useProfileImages();

  useEffect(() => {
    if (sender.trim() && editorContent.trim()) {
      setIsFormValid(true);
    }
  }, [sender, editorContent]);

  // 버튼 클릭 시 폼 제출
  const handleSubmitForm = (e) => {
    e.preventDefault(); // 폼 제출 시 새로고침 방지
    const team = '13-2';
    const recipientId = parseInt(id, 10);

    const data = {
      team: '13-2',
      recipientId: recipientId,
      sender: sender,
      profileImageURL: profileImg,
      relationship: selectedRelation,
      content: editorContent,
      font: selectedFont,
    };

    const postMessage = async () => {
      try {
        await api.postRecipientsMessages(team, recipientId, data);
        navigate(`/post/${id}`);
      } catch (e) {
        console.error(e);
        if (e.response?.status === 404) {
          setIsError(true);
        }
      }
    };
    postMessage();
  };

  if (isError) {
    return <ErrorPage />;
  }

  return (
    <form className="container mx-auto mt-[47px] flex flex-col px-5 sm:px-6 max-w-[720px]">
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
        requestError={requestError}
        isLoading={isLoading}
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
          onClick={handleSubmitForm}
        >
          생성하기
        </Button>
      </div>
    </form>
  );
};

export default Message;
