import React, { useState } from 'react';
import { useLocation, useParams, Link, useNavigate } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import Button from '../../../components/common/button/index';
import Card from '../../../components/common/card/components/FromCard';
import AddCard from '../../../components/common/card/components/AddCard';
import MessageContainerSkeleton from './MessageContainerSkeleton';

// 현재 pathName이 /edit인지 확인
const useIsEditPage = () => {
  const location = useLocation();
  return location.pathname.endsWith('/edit');
};

// /edit 이면 뒤로가기 버튼 보임
const BackButton = () => {
  const navigate = useNavigate();
  const isEditPage = useIsEditPage();

  return isEditPage ? (
    <Button size="md" variant="secondary" onClick={() => navigate(-1)}>
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
      <Button size="md" variant="primary">
        수정하기
      </Button>
    </Link>
  );
};

const RecipientMessage = ({ message, onMessageSelect, onDelete }) => {
  const useIsEditPage = () => {
    const location = useLocation();
    return location.pathname.endsWith('/edit');
  };

  const isEditPage = useIsEditPage();

  const handleOnDelete = (e) => {
    e.stopPropagation();
    const deleteData = {
      type: 'message',
      id: message.id,
    };
    onDelete(deleteData);
  };

  return (
    <div onClick={onMessageSelect} className="cursor-pointer">
      <Card
        name={message.sender}
        getBadgeStyle={message.relationship}
        relationship={message.relationship}
        profileImage={message.profileImageURL}
        messageContent={message.content}
        createdAtMessage={message.createdAt}
        isShowDeleteButton={isEditPage}
        onDelete={handleOnDelete}
      />
    </div>
  );
};

const RecipientMessageContainer = ({
  messages,
  onConfirmDelete,
  hasMore,
  loadMoreData,
  selectMessage,
  loading,
}) => {
  const useIsEditPage = () => {
    const location = useLocation();
    return location.pathname.endsWith('/edit');
  };

  const isEditPage = useIsEditPage();

  if (loading) {
    return <MessageContainerSkeleton />;
  }

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
      <InfiniteScroll dataLength={messages.length} next={loadMoreData} hasMore={hasMore}>
        <div
          className="
            w-full grid grid-cols-1 grid-rows-6 gap-y-4
            sm:gap-4 md:w-full md:grid-cols-2 md:grid-rows-3 md:gap-x-4 md:gap-y-4 lg:grid-cols-3 lg:grid-rows-2 lg:gap-x-6 lg:gap-y-7
          "
        >
          {!isEditPage && <AddCard />}
          {messages?.map((message, index) => (
            <RecipientMessage
              key={index}
              message={message}
              onMessageSelect={() => selectMessage(message)}
              onDelete={onConfirmDelete}
            />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default RecipientMessageContainer;
