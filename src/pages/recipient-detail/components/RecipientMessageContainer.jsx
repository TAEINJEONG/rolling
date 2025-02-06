import React, { useState } from 'react';
import { useLocation, useParams, Link, useNavigate } from 'react-router-dom';
import Button from '../../../components/common/button/index';
import trash from '../../../assets/images/trash.svg';
import MessageDialog from './MessageDialog';

// 현재 pathName이 /edit인지 확인
const useIsEditPage = () => {
  const location = useLocation();
  return location.pathname.endsWith('/edit');
};

// /edit 이면 쓰래기통 버튼 보임
const TrashButton = ({ message, onDelete }) => {
  const isEditPage = useIsEditPage();
  // 이벤트 버블링을 막고 deleteData를 props에 담음
  const onConfirmDelete = (e) => {
    e.stopPropagation();
    const deleteData = {
      type: 'message',
      id: message.id,
    };
    onDelete(deleteData);
  };
  return isEditPage ? <Button variant="icon" icon={trash} onClick={onConfirmDelete} /> : null;
};

// /edit 이면 뒤로가기 버튼 보임
const BackButton = () => {
  const navigate = useNavigate();
  const isEditPage = useIsEditPage();

  return isEditPage ? (
    <Button size="sm" variant="secondary" onClick={() => navigate(-1)}>
      뒤로가기
    </Button>
  ) : null;
};

// /edit 이면 수정하기 버튼 숨김
const EditButton = () => {
  const { id } = useParams();
  const isEditPage = useIsEditPage();

  return isEditPage ? null : (
    <Link to={`/post/${id}/edit`}>
      <Button size="sm" variant="primary" className="text-16-regular">
        수정하기
      </Button>
    </Link>
  );
};

const RecipientMessage = ({ message, onMessageSelect, onDelete }) => (
  <div
    className="
      w-full h-57.5 sm:w-full sm:h-57.5 lg:h-71 xl:w-96 xl:h-71 2xl:h-71
      bg-white rounded-[16px] drop-shadow-xs cursor-pointer
    "
    onClick={onMessageSelect}
  >
    <TrashButton message={message} onDelete={onDelete} />
    <h3>{message.content}</h3>
  </div>
);

const RecipientMessageContainer = ({ messages, onConfirmDelete }) => {
  const [currentMessage, setCurrentMessage] = useState(null);

  const selectMessage = (message) => {
    setCurrentMessage(message);
  };

  const deselectMessage = () => {
    setCurrentMessage(null);
  };

  const hasSelectedMessage = !!currentMessage; // selectedMessage에 값이 있으면 true, 없으면 false

  return (
    <div
      className="
        md:max-w-[1248px] m-auto p-6 pt-6 px-5 pb-9.5
        md:pt-[93px] md:px-6 md:pb-[91px]
        md:pt-[113px]
      "
    >
      <div className="flex justify-end mb-[11px]">
        <EditButton />
        <BackButton />
      </div>
      <div
        className="
            w-full grid grid-cols-1 grid-rows-6 gap-y-4
            sm:gap-4 md:w-full md:grid-cols-2 md:grid-cols:3 md:gap-x-4 md:gap-y-4 lg:grid-cols-3 lg:grid-rows-2 lg:gap-x-6 lg:gap-y-7
          "
      >
        {messages?.map((message) => (
          <RecipientMessage
            key={message.id}
            message={message}
            onMessageSelect={() => selectMessage(message)}
            onDelete={onConfirmDelete}
          />
        ))}
      </div>
      <MessageDialog
        dialogVisible={hasSelectedMessage} // 데이터를 기반으로 dialog을 보여줄지 결정
        dialogInVisible={deselectMessage} // 메세지 dialog를 닫을때 함수 실행
        selectedMessage={currentMessage} // 메세지 dialog에 선택된 데이터 전달
      />
    </div>
  );
};

export default RecipientMessageContainer;
