import React from 'react';

const repeatMaxCount = 9;
const repeathalfCount = 5;
const longItems = Array.from({ length: repeatMaxCount }, (_, index) => index + 1);
const shortItems = Array.from({ length: repeathalfCount }, (_, index) => index + 1);

const colorCategories = [
  { name: 'purple', items: longItems },
  { name: 'beige', items: shortItems },
  { name: 'blue', items: shortItems },
  { name: 'green', items: shortItems },
  { name: 'gray', items: longItems },
];

const ColorBox = ({ color, item }) => {
  const boxClass = `bg-${color}-${item * 100} w-[180px] h-[80px] border`;
  const textClass = `text-center font-semibold`;

  return (
    <div className="flex flex-col items-center m-2">
      <p className={textClass}>{`bg-${color}-${item}00`}</p>
      <div className={boxClass} />
    </div>
  );
};

const ColorCategory = ({ name, items }) => (
  <div className="flex flex-wrap gap-4">
    {items.map((item) => (
      <ColorBox key={item} color={name} item={item} />
    ))}
  </div>
);

const Colors = () => {
  return (
    <div className="flex flex-wrap gap-6 p-4">
      {colorCategories.map(({ name, items }) => (
        <ColorCategory key={name} name={name} items={items} />
      ))}

      <div className="flex flex-col items-center m-2">
        <p>bg-white</p>
        <div className="bg-white border w-[180px] h-[80px]"></div>
      </div>

      <div className="flex flex-col items-center m-2">
        <p>bg-black</p>
        <div className="bg-black w-[180px] h-[80px]"></div>
      </div>

      <div className="flex flex-col items-center m-2">
        <p>bg-error</p>
        <div className="bg-red-500 w-[180px] h-[80px]"></div>
      </div>

      <div className="flex flex-col items-center m-2">
        <p>bg-surface</p>
        <div className="bg-gray-200 w-[180px] h-[80px]"></div>
      </div>
    </div>
  );
};

export default Colors;
