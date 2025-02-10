import React from 'react';
import selectedIcon from '../../assets/images/selected.svg';

const SelectedOption = ({ src, selected, onClick }) => (
  <div
    className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-lg cursor-pointer transition-all overflow-hidden"
    onClick={() => onClick(src)}
  >
    <img src={src} alt="Selected Option" className="w-full h-full object-cover" />
    {selected && (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-md">
          <img src={selectedIcon} alt="Check" />
        </div>
      </div>
    )}
  </div>
);

export default SelectedOption;
