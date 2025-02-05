import ErrorMessage from './ErrorMessage';

const InputWithError = ({ value, onChange, onBlur, isValid }) => {
  return (
    <>
      <input
        type="text"
        name="sender"
        id="sender-input"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`py-3 px-4 h-[50px] rounded-lg border ${isValid ? 'border-[#CCCCCC]' : 'border-[#DC3A3A]'}`}
        maxLength="20"
        placeholder="이름을 입력해주세요"
      />

      {isValid || <ErrorMessage text={'값을 입력해 주세요.'} />}
    </>
  );
};
export default InputWithError;
