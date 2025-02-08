import React from 'react';
import exampleEmojiImg from '../../assets/images/example_emoji.png';
import exampleRollingImg from '../../assets/images/example_rolling.png';
import Button from '../../components/common/button';

const Landing = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-[1200px] pt-15 flex flex-col gap-[30px]">
        <div className="h-[324px] flex justify-between items-center p-15 bg-[#F6F8FF]">
          <div className="flex flex-col gap-4">
            <div className="w-fit bg-purple-600 text-14-bold text-white px-3 py-1.5 rounded-[50px]">
              Point. 01
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <p className="text-24-bold">
                  누구나 손쉽게, 온라인
                  <br />
                  롤링 페이퍼를 만들 수 있어요
                </p>
              </div>
              <p className="w-fit text-18-regular text-gray-500">로그인 없이 자유롭게 만들어요.</p>
            </div>
          </div>

          <div className="w-[720px] h-[204px] px-10 py-5">
            <img src={exampleRollingImg} alt="롤링 페이퍼 예시" />
          </div>
        </div>

        <div className="h-[324px] flex items-center p-15 bg-[#F6F8FF]">
          <div className="w-[720px] h-[204px] px-[125px]">
            <img src={exampleEmojiImg} alt="이모지 예시" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-fit bg-purple-600 text-14-bold text-white px-3 py-1.5 rounded-[50px]">
              Point. 02
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <p className="text-24-bold">
                  서로에게 이모지로 감정을
                  <br />
                  표현해보세요
                </p>
              </div>
              <p className="w-fit text-18-regular text-gray-500">
                롤링 페이퍼에 이모지를 추가할 수 있어요.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-6">
        <Button variant="primary" size="lg">
          구경해보기
        </Button>
      </div>
    </div>
  );
};

export default Landing;
