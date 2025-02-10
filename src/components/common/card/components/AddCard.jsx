import { Link } from 'react-router-dom';
import plus from '../../../../assets/images/plus.svg';

const AddCard = () => (
  <article className="h-[280px] bg-white rounded-2xl shadow-[0_2px_12px_0_rgba(0,0,0,0.08)] flex items-center justify-center">
    <Link to="/post/:id/message" className="flex items-center justify-center">
      <img src={plus} alt="추가 버튼" />
    </Link>
  </article>
);

export default AddCard;
