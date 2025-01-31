import arrow from '../../assets/images/arrow.svg';

const SelectMenu = ({ options, selected, setSelected }) => {
  const relationList = options.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ));

  return (
    <>
      <div className="relative w-[320px] h-[50px]">
        <select
          value={selected}
          onChange={(e) => {
            setSelected(e.target.value);
          }}
          className="w-full h-full py-3 px-4 border border-[#CCCCCC] rounded-lg cursor-pointer appearance-none"
        >
          {relationList}
        </select>
        <div className="absolute inset-y-0 flex items-center right-4 pointer-events-none">
          <img src={arrow} alt="화살표" />
        </div>
      </div>
    </>
  );
};
export default SelectMenu;
