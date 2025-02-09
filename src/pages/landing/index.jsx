import React from 'react';
import exampleEmojiImg from '../../assets/images/example_emoji.png';
import exampleRollingImg from '../../assets/images/example_rolling.png';
import Button from '../../components/common/button';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full gap-6 px-5 pt-[42px] md:pt-[49px] md:px-6 md:gap-[30px] xl:pt-15 xl:px-0 xl:items-center duration-300">
      <div className="flex flex-col px-6 pt-6 pb-[62px] gap-[50px] bg-[#F6F8FF] rounded-[20px] overflow-hidden duration-300 md:pt-10 md:pb-10 md:px-10 md:gap-9 xl:w-[1200px] xl:flex-row xl:px-15 xl:py-15 xl:justify-between">
        <div className="flex flex-col gap-4">
          <div className="bg-purple-600 text-14-bold text-white rounded-[50px] px-3 py-1 w-fit">
            Point. 01
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-18-bold text-[#181818] md:text-24-bold xl:whitespace-pre-line">
              {'누구나 손쉽게, 온라인\n롤링 페이퍼를 만들 수 있어요'}
            </p>
            <p className="text-15-regular text-[#555555] md:text-18-regular">
              로그인 없이 자유롭게 만들어요.
            </p>
          </div>
        </div>
        <img
          src={exampleRollingImg}
          alt="example_rolling"
          className="min-w-[354px] max-[361px]:-ml-[45px] duration-300 xl:w-[720px]"
        />
      </div>
      <div className="flex flex-col px-6 pt-6 pb-[51px] gap-[48px] bg-[#F6F8FF] rounded-[20px] duration-300 overflow-hidden md:px-10 md:pt-10 md:pb-10 md:gap-9 xl:w-[1200px] xl:flex-row xl:px-15 xl:py-15 xl:gap-0">
        <div className="flex flex-col gap-4 xl:order-2">
          <div className="bg-purple-600 text-14-bold text-white rounded-[50px] px-3 py-1 w-fit">
            Point. 02
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-18-bold text-[#181818] md:text-24-bold xl:whitespace-pre-line">
              {'서로에게 이모지로 감정을\n표현해보세요'}
            </p>
            <p className="text-15-regular text-[#555555] md:text-18-regular">
              로그인없이 자유롭게 만들어요.
            </p>
          </div>
        </div>
        <img
          src={exampleEmojiImg}
          alt="example_emoji"
          className="duration-300 xl:order-1 max-w-[320px] md:max-w-[470px] mx-auto xl:mx-[125px]"
        />
      </div>
      <div className="py-6 sticky bottom-0 xl:static">
        <Button variant="primary" size="lg" fullWidth>
          구경해보기
        </Button>
      </div>
    </div>
  );
};

export default Landing;
