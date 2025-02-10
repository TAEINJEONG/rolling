import React, { useState, useEffect } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import RecipientMessageContainer from './components/RecipientMessageContainer';
import HeaderService from './components/HeaderService';
import api from '../../api/axios';
import MessageDialog from './components/MessageDialog';
import ConfrimDialog from './components/ConfrimDialog';

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [recipient, setRecipient] = useState(null);
  const [recipientMessages, setRecipientMessages] = useState([]);
  const [reactions, setReactions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(1);
  const [currentSelectedData, setCurrentSelectedData] = useState(null);

  const backgroundColorSheet = {
    beige: 'bg-beige-200',
    purple: 'bg-purple-200',
    blue: 'bg-blue-200',
    green: 'bg-green-200',
  };

  const fetchRecipientData = async () => {
    try {
      setLoading(true);
      const recipientResponse = await api.getRecipientById('13-2', id);
      const recipientMessagesResponse = await api.getRecipientsMessages('13-2', id, 0, 5);
      setRecipient(recipientResponse.data);
      setRecipientMessages(recipientMessagesResponse.data.results);
      setHasMore(recipientMessagesResponse.data.results.length === 5);
      setOffset(5);
    } catch (e) {
      console.error('API 호출 중 오류 발생:', e);
      setError(e);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  const fetchRecipientReactionsData = async () => {
    try {
      const recipientReactions = await api.getRecipientsReactions('13-2', id);
      setReactions(recipientReactions.data);
    } catch (e) {
      console.error('API 호출 중 오류 발생:', e);
    }
  };

  const loadMoreData = async () => {
    try {
      const recipientMessagesResponse = await api.getRecipientsMessages('13-2', id, offset, 5);
      if (recipientMessagesResponse.data.results.length > 0) {
        setRecipientMessages((prevData) => [
          ...prevData,
          ...recipientMessagesResponse.data.results,
        ]);
        setOffset((prevOffset) => prevOffset + 5);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('추가 데이터 로드 중 오류:', error);
      setHasMore(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchRecipientData();
      fetchRecipientReactionsData();
    }
  }, [id, location.pathname]);

  if (error) return <p>오류 발생: {error.message}</p>;

  const openConfrimDialog = (deleteData) => {
    setDeleteTarget(deleteData);
  };

  const closeConfrimDialog = () => {
    setDeleteTarget(null);
  };

  const confirmDeletion = async () => {
    try {
      if (deleteTarget.type === 'message') {
        await api.deleteMessages('13-2', deleteTarget.id);

        setRecipientMessages((prevMessages) => {
          return prevMessages.filter((message) => message.id !== deleteTarget.id);
        });
        setCurrentSelectedData(null);

        // 페이징이 된 상태에서 삭제시 페이징 된 부분부터 데이터 로드
        const recipientMessagesResponse = await api.getRecipientsMessages(
          '13-2',
          id,
          0, // offset
          recipientMessages.length // limit
        );

        setRecipientMessages(recipientMessagesResponse.data.results);
      } else {
        await api.deleteRecipients('13-2', deleteTarget.id);
        navigate('/list');
      }
    } catch (e) {
      console.log(e);
    } finally {
      setDeleteTarget(null);
    }
  };

  const selectMessage = (message) => {
    setCurrentSelectedData(message);
  };

  const deselectMessage = () => {
    setCurrentSelectedData(null);
  };

  const hasCurrentSelectedData = !!currentSelectedData;

  const hasDeleteTarget = !!deleteTarget; // deleteTarget에 값이 있으면 true, 없으면 false

  return (
    <div
      className={`w-full min-h-screen bg-cover bg-center${recipient?.backgroundColor ? backgroundColorSheet[recipient.backgroundColor] : ''}`}
      style={{
        backgroundImage: recipient?.backgroundImageURL
          ? `url(${recipient.backgroundImageURL})`
          : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <HeaderService
        id={id}
        recipient={recipient} // 대상 데이터
        messages={recipientMessages} // 대상의 메세지 데이터들
        reactions={reactions} // 대상의 이모지 데이터
        onUpdate={fetchRecipientReactionsData}
        onConfirmDelete={openConfrimDialog} // 삭제 dialog를 여는 기능
      />
      {loading ? (
        <p className="text-center mt-10">로딩 중...</p>
      ) : error ? (
        <p className="text-center text-red-500 mt-10">오류 발생: {error.message}</p>
      ) : (
        <>
          <RecipientMessageContainer
            messages={recipientMessages}
            onConfirmDelete={openConfrimDialog}
            hasMore={hasMore}
            loadMoreData={loadMoreData}
            selectMessage={selectMessage}
          />
          <MessageDialog
            dialogVisible={hasCurrentSelectedData} // 데이터를 기반으로 dialog을 보여줄지 결정
            dialogInVisible={deselectMessage} // 메세지 dialog를 닫을때 함수 실행
            selectedMessage={currentSelectedData} // 메세지 dialog에 선택된 데이터 전달
            onDelete={openConfrimDialog}
          />
          <ConfrimDialog
            openConfrimDialog={hasDeleteTarget}
            closeConfrimDialog={closeConfrimDialog}
            confirmDeletion={confirmDeletion}
          />
        </>
      )}
    </div>
  );
};

export default Detail;
