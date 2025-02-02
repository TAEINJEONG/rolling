import React from 'react';

const Card = ({ title }) => (
  <div className="bg-gray-200 h-[200px] sm:w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33333333%-16px)] xl:w-[calc(384px - 1px)] w-full">
    <h3>{title}</h3>
  </div>
);

const CardsContainer = () => {
  const cards = ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5', 'Card 6'];

  return (
    <div className="flex flex-wrap gap-[24px] justify-center">
      {cards.map((title, index) => (
        <Card key={index} title={title} />
      ))}
    </div>
  );
};

export default CardsContainer;
