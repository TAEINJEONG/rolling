import React from 'react';
import exampleEmojiImg from '../../assets/images/example_emoji.png';
import exampleRollingImg from '../../assets/images/example_rolling.png';
import Button from '../../components/common/button';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full gap-6 px-5 pt-[42px]">
      <div className="flex flex-col px-6 pt-6 pb-[62px] gap-[50px] bg-[#F6F8FF] rounded-[20px] overflow-hidden">
        <div className="flex flex-col gap-4">
          <div className="bg-purple-600 text-14-bold text-white rounded-[50px] px-3 py-1 w-fit">
            Point. 01
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-18-bold text-[#181818]">
              누구나 손쉽게, 온라인 롤링 페이퍼를 만들 수 있어요
            </p>
            <p className="text-15-regular text-[#555555]">로그인 없이 자유롭게 만들어요.</p>
          </div>
        </div>
        <img
          src={exampleRollingImg}
          alt="example_rolling"
          className="min-w-[354px] max-[361px]:-ml-[45px] duration-300"
        />
      </div>
      <div className="flex flex-col px-6 pt-6 pb-[51px] gap-[48px] bg-[#F6F8FF] rounded-[20px] overflow-hidden">
        <div className="flex flex-col gap-4">
          <div className="bg-purple-600 text-14-bold text-white rounded-[50px] px-3 py-1 w-fit">
            Point. 02
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-18-bold text-[#181818]">서로에게 이모지로 감정을 표현해보세요</p>
            <p className="text-15-regular text-[#555555]">로그인없이 자유롭게 만들어요.</p>
          </div>
        </div>
        <img src={exampleEmojiImg} alt="example_emoji" />
      </div>
      <div className="py-6 sticky bottom-0">
        <Button variant="primary" size="lg" fullWidth>
          구경해보기
        </Button>
      </div>
    </div>
  );
};

export default Landing;
