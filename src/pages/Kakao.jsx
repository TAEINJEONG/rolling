import React, { useEffect } from 'react';

const KakaoShareButton = () => {
  useEffect(() => {
    if (!window.Kakao) return;
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init('e3928292dc600ede01ed404c2e77ba43'); // JavaScript 키 입력
    }
  }, []);

  const shareKakao = () => {
    if (window.Kakao) {
      window.Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: '공유할 제목',
          description: '공유할 설명',
          imageUrl: 'https://example.com/image.png', // 대표 이미지 URL
          link: {
            mobileWebUrl: 'https://example.com',
            webUrl: 'https://example.com',
          },
        },
        buttons: [
          {
            title: '웹으로 보기',
            link: {
              mobileWebUrl: 'https://example.com',
              webUrl: 'https://example.com',
            },
          },
        ],
      });
    } else {
      console.error('Kakao SDK 로드 실패');
    }
  };

  return (
    <button
      onClick={shareKakao}
      className="px-4 py-[12px] w-full text-left hover:bg-gray-100 cursor-pointer text-16-regular"
    >
      카카오톡 공유
    </button>
  );
};

export default KakaoShareButton;
