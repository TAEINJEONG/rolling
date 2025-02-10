import React from 'react';
import selectedIcon from '../../assets/images/selected.svg';

const SelectedOption = ({ src, selected, onClick }) => (
  <div
    className="relative w-full h-full rounded-xl cursor-pointer transition-all overflow-hidden sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-60 lg:h-60 mb-0"
    onClick={() => onClick(src)}
  >
    <img src={src} alt="Selected Option" className="w-full h-100 object-cover" />
    {selected && (
      <div className="absolute inset-0 flex items-center justify-center ">
        <img src={selectedIcon} alt="Check" className="w-11 h-11" />
      </div>
    )}
  </div>
);

export default SelectedOption;
