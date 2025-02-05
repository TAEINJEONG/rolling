import React, { useEffect, useMemo, useState } from 'react';
import api from '../../api/axios';
import RollingPaperCarousel from './components/RollingPaperCarousel';

const RollingPaperList = () => {
  const [rollingPapers, setRollingPapers] = useState([]);
  const [popularIndex, setPopularIndex] = useState(0);
  const [recentIndex, setRecentIndex] = useState(0);

  const itemsPerView = 4;

  const popularRollingPapers = useMemo(() => {
    return rollingPapers.toSorted((a, b) => b.reactionCount - a.reactionCount);
  }, [rollingPapers]);

  const recentRollingPapers = useMemo(() => {
    return rollingPapers.toSorted((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }, [rollingPapers]);

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
        setRollingPapers(papers);
      } catch (error) {
        console.error('Error fetching rolling paper list:', error);
      }
    };
    fetchRollingPaperList();
  }, []);

  return (
    <div className="mt-[50px] flex flex-col gap-[50px] overflow-hidden px-5 md:px-6">
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
