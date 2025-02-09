import ProfileAvatarGroup from './ProfileAvatarGroup';
import ReactionsList from './ReactionsList';
import beigeShape from '../../../../assets/images/beige.svg';
import blueShape from '../../../../assets/images/blue.svg';
import purpleShape from '../../../../assets/images/purple.svg';
import greenShape from '../../../../assets/images/green.svg';

const ToCard = ({ name, profileImages = [], count = 0, reactions = [], bgColor, bgImage }) => {
  const bgImageStyle = bgImage ? { backgroundImage: `url(${bgImage})` } : {};

  const BACKGROUND_COLOR_SHAPE = [
    { color: 'beige', image: beigeShape },
    { color: 'blue', image: blueShape },
    { color: 'purple', image: purpleShape },
    { color: 'green', image: greenShape },
  ];

  const bgShape = BACKGROUND_COLOR_SHAPE.find((item) => item.color === bgColor);
  const selectedBgShape = bgShape || BACKGROUND_COLOR_SHAPE.find((item) => item.color === 'beige');

  return (
    <section
      className={`${bgColor || 'bg-beige-200'} relative z-[-2] overflow-hidden w-[275px] h-[260px] rounded-2xl mb-3 border-1 border-black/10 shadow-[0_2px_12px_0_rgba(0,0,0,0.08)]`}
      style={bgImageStyle}
    >
      <img
        src={selectedBgShape.image}
        alt="배경색상 별 배경에 있는 도형"
        className="absolute bottom-0 right-0 z-[-1]"
      />
      <article className="px-6 pb-5 pt-7.5 z-10">
        <h1 className="text-20-bold text-gray-900 mb-3">To. {name}</h1>
        <ProfileAvatarGroup images={profileImages} totalCount={count} />
        <span className="inline-block text-16-regular mt-[52px] mb-9">
          <strong className="text-16-bold">{count}</strong>명이 작성했어요!
        </span>
        <ReactionsList reactions={reactions} />
      </article>
    </section>
  );
};

export default ToCard;
