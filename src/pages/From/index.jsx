import './styles.css';

const From = () => {
  return (
    <form className="container max-w-[720px] mx-auto mt-[112px] flex flex-col ">
      <label htmlFor="from-input" className="text-24-bold mb-3">
        From.
      </label>
      <input
        id="from-input"
        type="text"
        name="sender"
        className="py-3 px-4 h-[50px] rounded-lg border border-[#CCCCCC] "
        placeholder="이름을 입력해 주세요."
      />
    </form>
  );
};
export default From;
