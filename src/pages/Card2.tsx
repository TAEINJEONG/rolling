import React from 'react';

const Card = ({ title }) => (
  <div className="w-full h-[230px] sm:w-full sm:h-[230px] lg:h-[284px] xl:w-[384px] xl:h-[284px] 2xl:h-[284px] bg-white rounded-[16px] drop-shadow-xs">
    <h3>{title}</h3>
  </div>
);

const CardsContainer = () => {
  const cards = ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5', 'Card 6'];

  return (
    <div
      className="
      md:max-w-[1248px] m-auto p-[24px]
      pt-[24px] pr-[20px] pl-[20px] pb-[38px]
      md:pt-[93px] md:pr-[24px] md:pl-[24px] md:pb-[91px]
      md:pt-[113px]
      w-full grid grid-cols-1 grid-rows-6 gap-y-4
      sm:gap[16px] md:w-full md:grid-cols-2 md:grid-cols:3 md:gap-x-4 md:gap-y-4 lg:grid-cols-3 lg:grid-rows-2 lg:gap-x-[24px] lg:gap-y-[28px]"
    >
      {cards.map((title, index) => (
        <Card key={index} title={title} />
      ))}
    </div>
  );
};

export default CardsContainer;
