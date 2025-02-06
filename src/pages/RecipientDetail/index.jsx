import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MessageCotainer from './components/RecipientMessage';
import HeaderService from './components/HeaderService/components';
import api from '../../api/axios';
import Toast from './components/Toast';
import MessageDialog from './components/MessageDialog';

const Detail = () => {
  const { id } = useParams();
  const [recipient, setRecipient] = useState(null);
  const [recipientMessages, setRecipientMessages] = useState(null);
  const [reactions, setReactions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [toastVisible, setToastVisible] = useState(false);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const backgroundColorSheet = {
    begie: 'bg-beige-200',
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

  const handleShowToast = () => {
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 5000);
  };

  const handleHideToast = () => {
    setToastVisible(false);
  };

  const handleShowDialog = () => {
    setDialogVisible(true);
  };

  const handleHideDialog = () => {
    setDialogVisible(false);
  };

  const handleOpenMessage = (message) => {
    setSelectedMessage(message);
    handleShowDialog();
  };

  return (
    <div className={`w-full h-screen ${backgroundColorSheet[recipient.backgroundColor]}`}>
      <HeaderService
        recipient={recipient}
        messages={recipientMessages}
        reactions={reactions}
        id={id}
        toastVisible={handleShowToast}
        onUpdate={fetchRecipientReactionsData}
      />
      <MessageCotainer messages={recipientMessages} openMessage={handleOpenMessage} />
      {toastVisible && <Toast HideToast={handleHideToast} />}
      <MessageDialog
        showDialog={dialogVisible}
        hideDialog={handleHideDialog}
        selectedMessage={selectedMessage}
      />
    </div>
  );
};

export default Detail;
