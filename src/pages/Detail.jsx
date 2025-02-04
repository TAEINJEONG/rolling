import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from './Card';
import HeaderService from './HeaderService';
import api from '../api/axios';
import ToastCheck from '../assets/images/toast_check.svg';
import ToastClose from '../assets/images/toast_close.svg';

const Detail = () => {
  const { id } = useParams();
  const [recipient, setRecipient] = useState(null);
  const [recipientMessages, setRecipientMessages] = useState(null);
  const [reactions, setReactions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [toastIsOpen, setToastIsOpen] = useState(false);

  const backgroundColorSheet = {
    begie: 'bg-beige-200',
    purple: 'bg-purple-200',
    blue: 'bg-blue-200',
    green: 'bg-green-200',
  };

  const toastVisible = () => {
    setToastIsOpen(true);
    setTimeout(() => setToastIsOpen(false), 5000);
  };

  const toastInvisible = () => {
    setToastIsOpen(false);
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

  return (
    <div className={`w-full h-screen ${backgroundColorSheet[recipient.backgroundColor]}`}>
      <HeaderService
        recipient={recipient}
        messages={recipientMessages}
        reactions={reactions}
        id={id}
        toastVisible={toastVisible}
        onUpdate={fetchRecipientReactionsData}
      />
      <Card messages={recipientMessages} />
      {toastIsOpen && (
        <div
          className="
            fixed bottom-[70px] w-full
            flex justify-center p-5 md:p-0
            z-99
          "
        >
          <div
            className="
              flex items-center justify-between
              bg-black/80 py-5 px-[30px] rounded-[8px] w-131
            "
          >
            <div className="flex flex items-center">
              <img src={ToastCheck} className="w-6 h-6 mr-3" />
              <span className="text-16-regular, text-white">URL이 복사 되었습니다.</span>
            </div>
            <button onClick={toastInvisible} className="cursor-pointer">
              <img src={ToastClose} className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
