import React, { useEffect, useMemo, useState } from 'react';
import api from '../../api/axios';
import RollingPaperCarousel from './components/RollingPaperCarousel';
import RollingPaperCarouselSkeleton from './components/RollingPaperCarouselSkeleton';
import Button from '../../components/common/button';
import { useNavigate } from 'react-router-dom';
const RollingPaperList = () => {
  const [rollingPapers, setRollingPapers] = useState([]);
  const [popularIndex, setPopularIndex] = useState(0);
  const [recentIndex, setRecentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
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
        setLoading(true);
        const response = await api.getRecipientsList('13-2');
        const papers = response.data.results;
        setRollingPapers(papers);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchRollingPaperList();
  }, []);

  if (loading) {
    return (
      <div className="mt-[50px] flex flex-col gap-[50px] overflow-hidden px-5 md:px-6">
        <RollingPaperCarouselSkeleton title="인기 롤링 페이퍼 🔥" />
        <RollingPaperCarouselSkeleton title="최근에 만든 롤링 페이퍼 ⭐️️" />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
      <div className="xl:w-[280px] xl:mx-auto">
        <Button variant="primary" size="lg" onClick={() => navigate('/post')} fullWidth>
          나도 만들어보기
        </Button>
      </div>
    </div>
  );
};

export default RollingPaperList;
