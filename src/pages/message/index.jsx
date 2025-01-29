import './styles.css';
import InputBox from './InputBox';
import { useState } from 'react';

const Message = () => {
  const [sender, setSender] = useState('');
  const [isError, setIsError] = useState(false);

  const handleInputChange = (e) => {
    setSender(e.target.value); // 공백 제거 후 상태 업데이트
    console.log(e.target.value);
    setIsError(false);
  };

  const handleOnBlur = () => {
    if (sender === '') {
      console.log('focusout');
      setIsError(true);
    }
  };

  return (
    <form className="container max-w-[720px] mx-auto mt-[112px] flex flex-col ">
      <label htmlFor="from-input" className="text-24-bold mb-3">
        From.
      </label>
      <InputBox
        value={sender}
        onChange={handleInputChange}
        onBlur={handleOnBlur}
        isError={isError}
      />
    </form>
  );
};

export default Message;
