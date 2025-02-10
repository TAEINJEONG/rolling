import Card from '../../../components/common/card';
import { Link } from 'react-router-dom';
const CARD_WIDTH = 295;

const CarouselContent = ({ currentIndex, papers }) => {
  const getTransformStyle = (index) => ({
    transform: `translateX(-${index * CARD_WIDTH}px)`,
  });
  return (
    <div className="flex gap-5 max-w-[1160px] w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div
        className="flex gap-5 xl:transition-transform xl:duration-500 max-md:gap-3"
        style={getTransformStyle(currentIndex)}
      >
        {papers.map((paper) => (
          <Link to={`/post/${paper.id}`} key={paper.id}>
            <Card type="to" bgColor={paper.backgroundColor} bgImage={paper.backgroundImageUrl} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CarouselContent;
