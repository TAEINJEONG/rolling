import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from './Card';
import HeaderService from './HeaderService';
import api from '../api/axios';

const Detail = () => {
  const { id } = useParams();
  const [recipient, setRecipient] = useState(null);
  const [recipientMessages, setRecipientMessages] = useState(null);
  const [reactions, setReactions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const backgroundColorSheet = {
    begie: 'bg-beige-200',
    purple: 'bg-purple-200',
    blue: 'bg-blue-200',
    green: 'bg-green-200',
  };

  const fetchRecipientData = async () => {
    try {
      const recipientResponse = await api.getRecipient('13-2', id);
      const recipientMessagesResponse = await api.getRecipientMessages('13-2', id);
      setRecipient(recipientResponse.data);
      setRecipientMessages(recipientMessagesResponse.data.results);
    } catch (e) {
      console.error('API 호출 중 오류 발생:', e);
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  const ffetchRecipientReactionsData = async () => {
    try {
      const recipientReactions = await api.getRecipientReactions('13-2', id);
      setReactions(recipientReactions.data);
    } catch (e) {
      console.error('API 호출 중 오류 발생:', e);
    }
  };

  useEffect(() => {
    if (id) {
      fetchRecipientData();
      ffetchRecipientReactionsData();
    }
  }, [id]);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>오류 발생: {error.message}</p>;

  return (
    <div className={`h-screen ${backgroundColorSheet[recipient.backgroundColor]}`}>
      <HeaderService
        recipient={recipient}
        messages={recipientMessages}
        reactions={reactions}
        id={id}
        onUpdate={ffetchRecipientReactionsData}
      />
      <Card messages={recipientMessages} />
    </div>
  );
};

export default Detail;
