import React, { useEffect, useState } from 'react';
import api from '../api/axios';

const RollingPaperList = () => {
  const [popularRollingPapers, setPopularRollingPapers] = useState([]);
  const [recentRollingPapers, setRecentRollingPapers] = useState([]);

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
      <div>
        <div className="flex flex-col gap-[16px">
          <span>인기 롤링 페이퍼 🔥</span>
        </div>
        <div>
          {popularRollingPapers.map((paper) => (
            <div key={paper.id}>{paper.name}</div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-[16px]">
          <span>최근에 만든 롤링 페이퍼 ⭐️️</span>
        </div>
        <div>
          {recentRollingPapers.map((paper) => (
            <div key={paper.id}>{paper.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RollingPaperList;
