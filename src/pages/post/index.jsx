import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/axios';
import Button from '../../components/common/button';
import ColorSelector from './ColorSelector';
import SelectedOption from './SelectedOption';
import clsx from 'clsx';

const Post = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState('');
  const [images, setImages] = useState([]);
  const [selectedTab, setSelectedTab] = useState('color');
  const [selectedColor, setSelectedColor] = useState('beige');
  const [selectedImage, setSelectedImage] = useState(null);
  const [valueError, setValueError] = useState(false);

  const borderButton = {
    selected: 'border-purple-500 text-purple-500 bg-purple-100',
    default: 'border-gray-300 text-gray-500 bg-white hover:bg-gray-100',
  };

  const handleTitleChange = (e) => {
    setPost(e.target.value);
    if (e.target.value.trim() !== '') {
      setValueError(false);
    }
  };

  const handleBlur = () => {
    if (post.trim() === '') {
      setValueError(true);
    }
  };

  const handleFocus = () => {
    setValueError(false);
  };

  const createRolling = async (e) => {
    e.preventDefault();

    const NEW_PAGE = {
      name: post,
      backgroundColor: selectedTab === 'color' ? selectedColor : 'beige',
      backgroundImageURL: selectedTab === 'image' ? selectedImage : null,
    };

    console.log('API 호출 전 데이터:', NEW_PAGE);

    const response = await api.postRecipients('13-2', NEW_PAGE);
    const createdId = response.data.id;
    if (createdId) {
      navigate(`/post/${createdId}`);
    }
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await api.getBackgroundImages();
        setImages(response.data.imageUrls);
        if (response.data.imageUrls.length > 0) {
          setSelectedImage(response.data.imageUrls[0]);
        }
      } catch (error) {
        console.error('이미지 로드 실패:', error);
      }
    };
    fetchImages();
  }, []);

  return (
    <div className="flex-col justify-center space-x-4 mt-6 w-2/3">
      <form onSubmit={createRolling}>
        <h1 className="text-left text-4xl font-bold">To.</h1>
        <input
          type="text"
          value={post}
          onChange={handleTitleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          placeholder="이름을 입력해주세요."
          className={clsx(
            'w-full p-5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500',
            valueError ? 'border-red-500' : 'border-gray-300'
          )}
        />
        {valueError && <p className="text-red-500 text-sm mt-1">이름을 입력해주세요.</p>}

        <div className="mt-4">
          <h2 className="flex flex-wrap font-bold text-3xl">배경화면을 선택해 주세요.</h2>
          <p className="flex flex-wrap text-base">
            컬러를 선택하거나, 이미지를 선택할 수 있습니다.
          </p>
        </div>

        <div className="flex justify-start mt-2">
          {['color', 'image'].map((tab) => (
            <button
              key={tab}
              type="button"
              className={clsx(
                'px-5 py-2 text-sm font-semibold border-2 rounded-md transition-all mt-2 mb-2',
                selectedTab === tab ? borderButton.selected : borderButton.default,
                tab === 'color' ? 'rounded-r-none' : 'rounded-l-none'
              )}
              onClick={() => setSelectedTab(tab)}
            >
              {tab === 'color' ? '컬러' : '이미지'}
            </button>
          ))}
        </div>

        {selectedTab === 'color' ? (
          <ColorSelector selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full mt-2 mb-1 items-stretch">
            {images.map((src) => (
              <div key={src} className="w-full h-full sm:h-full md:h-full lg:h-[15rem] flex">
                <SelectedOption
                  src={src}
                  selected={selectedImage === src}
                  onClick={() => setSelectedImage(src)}
                />
              </div>
            ))}
          </div>
        )}

        <Button
          type="submit"
          disabled={post === ''}
          className="w-full bg-purple-500 text-white py-4 rounded-xl hover:bg-purple-600 transition-colors text-xl mt-4 mb-4"
        >
          생성하기
        </Button>
      </form>
    </div>
  );
};

export default Post;
