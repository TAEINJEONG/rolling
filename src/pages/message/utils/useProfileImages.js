import api from '../../../api/axios';
import { useState, useEffect } from 'react';

export const useProfileImages = () => {
  const [images, setImages] = useState([]);
  const [requestError, setRequestError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // 예시 프로필 이미지 요청
  useEffect(() => {
    const getProfileImages = async () => {
      try {
        const response = await api.getProfileImages();
        setImages(response.data.imageUrls);
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
        setRequestError(false);
      } catch (e) {
        setRequestError(true);
        console.error(e);
        setIsLoading(false);
      }
    };
    getProfileImages();
  }, []);

  return { images, requestError, isLoading };
};

export default useProfileImages;
