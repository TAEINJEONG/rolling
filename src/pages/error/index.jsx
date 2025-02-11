import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/button';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200 px-6">
      <div className="text-center max-w-lg mx-auto py-16">
        <h1 className="text-[180px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400 leading-none animate-pulse mb-8">
          404
        </h1>
        <h2 className="text-3xl font-bold text-purple-800 mb-8">페이지를 찾을 수 없습니다</h2>
        <p className="text-lg text-purple-700 mb-12">
          요청하신 페이지가 존재하지 않거나 삭제되었을 수 있습니다.
        </p>
        <div className="flex justify-center">
          <Button variant="primary" size="lg" onClick={() => navigate('/')}>
            메인으로 돌아가기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
