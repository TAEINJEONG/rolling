const InputBox = ({ value, onChange, onBlur, isError }) => {
  return (
    <>
      <input
        type="text"
        name="sender"
        id="from-input"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`py-3 px-4 h-[50px] rounded-lg border ${isError ? 'border-[#DC3A3A]' : 'border-[#CCCCCC]'}`}
        maxLength="20"
        placeholder="이름을 입력해주세요"
      />
      {isError && <p className="text-[#DC3A3A]">값을 입력해주세요.</p>}
    </>
  );
};
export default InputBox;
