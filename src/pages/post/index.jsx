import React from 'react';
import { useState, useEffect } from 'react';
import api from '../../api/axios';
import clsx from 'clsx';
import selectedIcon from '../../assets/images/selected.svg';

const colors = [
  { hex: '#FFE2AD', name: 'beige' },
  { hex: '#ECD9FF', name: 'purple' },
  { hex: '#B1E4FF', name: 'blue' },
  { hex: '#D0F5C3', name: 'green' },
];
const borderStyle = {
  error: 'border-red-500 bg-red-50 focus:ring-2 focus:ring-red-500',
  default: 'border-gray-300 focus:ring-2 focus:ring-purple-500',
};
const borderButton = {
  selected: 'bg-purple-500 text-white border-purple-500',
  default: 'border-purple-500 text-purple-500 hover:bg-purple-100',
};
function ToPost() {
  const [post, setPost] = useState('');
  const [images, setImages] = useState([]);
  const [selectedTab, setSelectedTab] = useState('color');
  const [selectedColor, setSelectedColor] = useState(colors[0].hex);
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]);

  /*컬러 선택스타일*/

  const ColorOption = ({ color, selected, onClick }) => {
    return (
      <div
        className="relative w-32 h-32 rounded-lg shadow-md cursor-pointer transition-all flex items-center justify-center"
        style={{ backgroundColor: color }}
        onClick={() => onClick(color)}
      >
        {/* 선택된 경우 체크 아이콘 표시 */}
        {selected && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-11 h-11 rounded-full flex items-center justify-center">
              <img src={selectedIcon} alt="Check" />
            </div>
          </div>
        )}
      </div>
    );
  };
  {
    /*컬러 선택*/
  }
  const ColorSelector = ({ selectedColor, setSelectedColor }) => {
    return (
      <div className="flex gap-4 mt-4">
        {colors.map((color) => (
          <ColorOption
            key={color.hex}
            color={color.hex}
            selected={selectedColor === color.hex}
            onClick={() => setSelectedColor(color.hex)}
          />
        ))}
      </div>
    );
  };
  {
    /*이미지 추가 옵션*/
  }
  const handleImageUpload = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const newImages = Array.from(files).map((file) => URL.createObjectURL(file));
      setUploadedImages((prevImages) => [...prevImages, ...newImages]);
    }
  };
  {
    /*이미지 선택시 체크표시*/
  }
  const SelectedOption = ({ src, selected, onClick }) => {
    return (
      <div
        className="relative w-[168px] h-[168px] rounded-lg cursor-pointer transition-all overflow-hidden"
        onClick={() => onClick(src)}
      >
        <img src={src} alt="Selected Option" className="w-full h-full object-cover" />
        {selected && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-11 h-11 rounded-full flex items-center justify-center">
              <img src={selectedIcon} alt="Check" />
            </div>
          </div>
        )}
      </div>
    );
  };

  const handleTitleChange = (e) => {
    setPost(e.target.value);
  };
  /*입력 유효성검사*/
  const handleBlur = () => {
    if (post.trim() === '') {
      setError(true);
    }
  };

  /*페이지 생성*/
  const createRolling = async (event) => {
    event.preventDefault();

    const NEW_PAGE = {
      name: post,
      backgroundColor: selectedTab === 'color' ? selectedColor : 'beige',
      backgroundImageURL: selectedTab === 'image' ? selectedImage : null,
    };

    try {
      const response = await api.postRecipient('13-2', NEW_PAGE);
    } catch (error) {
      console.error('페이지 생성 실패:', error);
    }
  };
  {
    /*API를 통해 이미지 받아오기*/
  }
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await api.getBackgroundImages();
        setImages(response.data.imageUrls);
      } catch (error) {
        console.error('이미지 로드 실패:', error);
      }
    };
    fetchImages();
  }, []);
  return (
    <div className="flex flex-col items-start bg-white min-h-screen p-10">
      <form
        onSubmit={createRolling}
        className="w-full px-10 py-10 bg-white rounded-lg shadow-md text-left"
      >
        <div className="text-2xl font-bold text-gray-900">To.</div>
        <input
          type="text"
          value={post}
          onChange={handleTitleChange}
          onBlur={handleBlur}
          placeholder="받는 사람의 이름을 입력해 주세요."
          className={`w-full p-3 text-lg border rounded-lg text-left shadow-md transition-all focus:outline-none ${
            error ? borderStyle.error : borderStyle.default
          }`}
        />
        {error && <p className="text-red-500 text-sm mt-2">이름을 입력해 주세요</p>}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-900">배경화면을 선택해 주세요</h2>
          <p className="text-gray-600 text-sm">컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
        </div>
        <div className="flex justify-start mt-4 space-x-0">
          <button
            type="button"
            className={clsx(
              'px-6 py-2 text-sm font-bold border-2 rounded-lg transition-all',
              selectedTab === 'color' ? borderButton.selected : borderButton.default
            )}
            onClick={() => setSelectedTab('color')}
          >
            컬러
          </button>
          <button
            type="button"
            className={clsx(
              'px-6 py-2 text-sm font-bold border-2 rounded-lg transition-all',
              selectedTab === 'image' ? borderButton.selected : borderButton.default
            )}
            onClick={() => setSelectedTab('image')}
          >
            이미지
          </button>
        </div>
        {selectedTab === 'color' && (
          <ColorSelector selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
        )}
        {selectedTab === 'image' && (
          <div className="flex items-start gap-4 mt-4">
            <label
              htmlFor="file-upload"
              className="flex items-center justify-center w-[150px] h-[150px] border border-gray-300 rounded-lg cursor-pointer shadow-sm hover:bg-gray-100 transition-all"
            >
              <span className="text-gray-500 text-sm">이미지 추가하기</span>
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              className="hidden"
            />
            <div className="grid grid-cols-4 gap-4 w-full max-w-[700px] ">
              {images.length > 0 &&
                images.map((src) => (
                  <SelectedOption
                    key={src}
                    src={src}
                    selected={selectedImage === src}
                    onClick={() => setSelectedImage(src)}
                  />
                ))}
              {uploadedImages.length > 0 &&
                uploadedImages.map((src) => (
                  <SelectedOption
                    key={src}
                    src={src}
                    selected={selectedImage === src}
                    onClick={() => setSelectedImage(src)}
                  />
                ))}
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
export default ToPost;
