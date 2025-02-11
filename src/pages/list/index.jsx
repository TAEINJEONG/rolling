import React, { useEffect, useMemo, useState } from 'react';
import api from '../../api/axios';
import RollingPaperCarousel from './components/RollingPaperCarousel';
import RollingPaperCarouselSkeleton from './components/RollingPaperCarouselSkeleton';
import Button from '../../components/common/button';
import { useNavigate } from 'react-router-dom';
import ErrorPage from '../error';

const RollingPaperList = () => {
  const [rollingPapers, setRollingPapers] = useState([]);
  const [popularIndex, setPopularIndex] = useState(0);
  const [recentIndex, setRecentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [profileImages, setProfileImages] = useState([]);
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

  const preloadImages = async (images) => {
    const promises = images.map((imageUrl) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = imageUrl;
      });
    });

    try {
      await Promise.all(promises);
    } catch (error) {
      console.error('이미지 프리로딩 중 오류 발생:', error);
    }
  };

  useEffect(() => {
    const fetchListWithProfileImages = async () => {
      try {
        setLoading(true);
        const [recipientsResponse, profileImagesResponse] = await Promise.all([
          api.getRecipientsList('13-2', 0, 9999),
          api.getProfileImages(),
        ]);

        const papers = recipientsResponse.data.results;
        const images = profileImagesResponse.data.imageUrls;

        await preloadImages(images);

        setRollingPapers(papers);
        setProfileImages(images);
      } catch (error) {
        if (error.response?.status === 404) {
          navigate('/404');
        }
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchListWithProfileImages();
  }, [navigate]);

  if (loading) {
    return (
      <div className="mt-[50px] flex flex-col gap-[50px] overflow-hidden px-5 md:px-6">
        <RollingPaperCarouselSkeleton title="인기 롤링 페이퍼 🔥" />
        <RollingPaperCarouselSkeleton title="최근에 만든 롤링 페이퍼 ⭐️️" />
      </div>
    );
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <div className="mt-[50px] flex flex-col gap-[50px] overflow-hidden px-5 md:px-6">
      <RollingPaperCarousel
        title="인기 롤링 페이퍼 🔥"
        papers={popularRollingPapers}
        currentIndex={popularIndex}
        profileImages={profileImages}
        onNext={handlePopularNext}
        onPrev={handlePopularPrev}
        itemsPerView={itemsPerView}
      />
      <RollingPaperCarousel
        title="최근에 만든 롤링 페이퍼 ⭐️️"
        papers={recentRollingPapers}
        currentIndex={recentIndex}
        profileImages={profileImages}
        onNext={handleRecentNext}
        onPrev={handleRecentPrev}
        itemsPerView={itemsPerView}
      />
      <div className="py-6 xl:w-[280px] xl:mx-auto">
        <Button variant="primary" size="lg" onClick={() => navigate('/post')} fullWidth>
          나도 만들어보기
        </Button>
      </div>
    </div>
  );
};

export default RollingPaperList;
