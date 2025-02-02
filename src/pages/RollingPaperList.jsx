import React, { useEffect, useState } from 'react';
import api from '../api/axios';
import RollingPaperCarousel from '../components/RollingPaperCarousel';

const RollingPaperList = () => {
  const [popularRollingPapers, setPopularRollingPapers] = useState([]);
  const [recentRollingPapers, setRecentRollingPapers] = useState([]);
  const [popularIndex, setPopularIndex] = useState(0);
  const [recentIndex, setRecentIndex] = useState(0);

  const itemsPerView = 4; // 한 번에 보여질 카드 개수

  const handlePopularNext = () => {
    setPopularIndex((prev) => Math.min(prev + 1, popularRollingPapers.length - itemsPerView));
  };

  const handlePopularPrev = () => {
    setPopularIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleRecentNext = () => {
    setRecentIndex((prev) => Math.min(prev + 1, recentRollingPapers.length - itemsPerView));
  };

  const handleRecentPrev = () => {
    setRecentIndex((prev) => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    const fetchRollingPaperList = async () => {
      try {
        const response = await api.getRecipients('13-2');
        const papers = response.data.results;

        // 좋아요 수 기준으로 정렬하여 인기 롤링 페이퍼 설정
        const sortedByReactionCount = [...papers].sort((a, b) => b.reactionCount - a.reactionCount);
        setPopularRollingPapers(sortedByReactionCount);

        // 생성일 기준으로 정렬하여 최근 롤링 페이퍼 설정
        const sortedByDate = [...papers].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setRecentRollingPapers(sortedByDate);
      } catch (error) {
        console.error('Error fetching rolling paper list:', error);
      }
    };
    fetchRollingPaperList();
  }, []);

  return (
    <div className="mt-[50px] flex flex-col gap-[50px]">
      <RollingPaperCarousel
        title="인기 롤링 페이퍼 🔥"
        papers={popularRollingPapers}
        currentIndex={popularIndex}
        onNext={handlePopularNext}
        onPrev={handlePopularPrev}
        itemsPerView={itemsPerView}
      />
      <RollingPaperCarousel
        title="최근에 만든 롤링 페이퍼 ⭐️️"
        papers={recentRollingPapers}
        currentIndex={recentIndex}
        onNext={handleRecentNext}
        onPrev={handleRecentPrev}
        itemsPerView={itemsPerView}
      />
    </div>
  );
};

export default RollingPaperList;
