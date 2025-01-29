const InputBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      name="sender"
      id="from-input"
      value={value}
      onChange={onChange}
      className="py-3 px-4 h-[50px] rounded-lg border border-[#CCCCCC] "
      placeholder="이름을 입력해 주세요."
      maxLength="10"
    />
  );
};
export default InputBox;
