import React, { useState } from 'react';
import Share from './Share';
import EmojiMenu from './EmojiMenu';

const HeaderService = () => {
  return (
    <div className="bg-white">
      <div
        className="
        flex flex-col md:flex-row justify-between md:items-center
        md:max-w-[1248px] m-auto 
        md:px-[24px] md:py-[13px]
      "
      >
        <p className="text-28-bold px-[20px] py-[12px] md:px-[0px] md:py-[0px] border-b md:border-[0px] border-gray-200">
          To.Ashley Kim
        </p>
        <div className="flex text-center items-center justify-end px-[20px] py-[12px] md:px-[0px] md:py-[0px]">
          <p className="hidden md:block">9명이 작성했어요!</p>
          <div className="flex text-center items-center">
            <EmojiMenu />
            <div className="mx-[13px] bg-gray-100 w-[1px] h-[28px]"></div>
            <Share />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderService;
