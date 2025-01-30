const SelectMenu = ({ options, selected, setSelected }) => {
  // console.log(options);
  // console.log(selected);

  const relationList = options.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ));

  return (
    <select
      value={selected}
      onChange={(e) => {
        setSelected(e.target.value);
      }}
    >
      {relationList}
    </select>
  );
};
export default SelectMenu;
