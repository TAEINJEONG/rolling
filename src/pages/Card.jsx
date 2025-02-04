import React from 'react';

const Card = ({ message }) => (
  <div className="w-full h-[230px] sm:w-full sm:h-[230px] lg:h-[284px] xl:w-[384px] xl:h-[284px] 2xl:h-[284px] bg-white rounded-[16px] drop-shadow-xs">
    <h3>{message}</h3>
  </div>
);

const CardsContainer = ({ messages }) => {
  return (
    <div
      className="
      md:max-w-[1248px] m-auto p-[24px]
      pt-[24px] px-[20px] pb-[38px]
      md:pt-[93px] md:px-[24px] md:pb-[91px]
      md:pt-[113px]
      w-full grid grid-cols-1 grid-rows-6 gap-y-4
      sm:gap-[16px] md:w-full md:grid-cols-2 md:grid-cols:3 md:gap-x-4 md:gap-y-4 lg:grid-cols-3 lg:grid-rows-2 lg:gap-x-[24px] lg:gap-y-[28px]"
    >
      {messages.map((message, index) => (
        <Card key={index} message={message.content} />
      ))}
    </div>
  );
};

export default CardsContainer;
