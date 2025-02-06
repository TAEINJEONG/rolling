import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import RecipientMessageContainer from './components/RecipientMessageContainer';
import HeaderService from './components/HeaderService';
import api from '../../api/axios';
import ConfrimDialog from './components/ConfrimDialog';

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipient, setRecipient] = useState(null);
  const [recipientMessages, setRecipientMessages] = useState(null);
  const [reactions, setReactions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const backgroundColorSheet = {
    beige: 'bg-beige-200',
    purple: 'bg-purple-200',
    blue: 'bg-blue-200',
    green: 'bg-green-200',
  };

  const fetchRecipientData = async () => {
    try {
      const recipientResponse = await api.getRecipients('13-2', id);
      const recipientMessagesResponse = await api.getRecipientsMessages('13-2', id);
      setRecipient(recipientResponse.data);
      setRecipientMessages(recipientMessagesResponse.data.results);
    } catch (e) {
      console.error('API 호출 중 오류 발생:', e);
      setError(e);
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

  useEffect(() => {
    if (id) {
      fetchRecipientData();
      fetchRecipientReactionsData();
    }
  }, [id]);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>오류 발생: {error.message}</p>;

  const openConfrimDialog = (deleteData) => {
    setDeleteTarget(deleteData);
  };

  const closeConfrimDialog = () => {
    setDeleteTarget(null);
  };

  const confirmDeletion = async () => {
    try {
      if (deleteTarget.type == 'message') {
        await api.deleteMessages('13-2', deleteTarget.id);
        setRecipientMessages((prevMessages) =>
          prevMessages.filter((message) => message.id !== deleteTarget.id)
        );
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

  const hasDeleteTarget = !!deleteTarget; // deleteTarget에 값이 있으면 true, 없으면 false

  return (
    <div className={`w-full ${backgroundColorSheet[recipient.backgroundColor]}`}>
      <HeaderService
        id={id}
        recipient={recipient} // 대상 데이터
        messages={recipientMessages} // 대상의 메세지 데이터들
        reactions={reactions} // 대상의 이모지 데이터
        onUpdate={fetchRecipientReactionsData}
        onConfirmDelete={openConfrimDialog} // 삭제 dialog를 여는 기능
      />
      <RecipientMessageContainer
        messages={recipientMessages}
        onConfirmDelete={openConfrimDialog} // 삭제 dialog를 여는 기능
      />
      <ConfrimDialog
        openConfrimDialog={hasDeleteTarget}
        closeConfrimDialog={closeConfrimDialog}
        confirmDeletion={confirmDeletion}
      />
    </div>
  );
};

export default Detail;
