import React from 'react';
import selectedIcon from '../../assets/images/selected.svg';

const SelectedOption = ({ src, selected, onClick }) => (
  <div
    className="relative w-full aspect-square rounded-xl cursor-pointer overflow-hidden"
    onClick={() => onClick(src)}
  >
    <img src={src} alt="Selected Option" className="w-60 h-60 object-cover" />
    {selected && (
      <div className="absolute inset-0 flex items-center justify-center bg-opacity-40">
        <img src={selectedIcon} alt="Check" className="w-11 h-11" />
      </div>
    )}
  </div>
);

export default SelectedOption;
