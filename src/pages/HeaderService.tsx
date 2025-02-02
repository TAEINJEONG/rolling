import React from 'react';

const HeaderService = () => {
  return (
    <div className="bg-white">
      <div
        className="
        flex flex-col md:flex-row justify-between md:items-center
        md:max-w-[1248px] m-auto
        pt-[12px] pl-[20px] pr-[20px] pb-[12px]
        md:pt-[13px] md:pl-[24px] md:pr-[24px] md:pb-[13px]
      "
      >
        <p className="text-28-bold">To.Ashley Kim</p>
        <div className="text-center">
          <p className="hidden md:block">9명이 작성했어요!</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderService;
