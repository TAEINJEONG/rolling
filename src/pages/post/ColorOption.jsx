import React from 'react';
import selectedIcon from '../../assets/images/selected.svg';

const ColorOption = ({ color, selected, onClick, className = '' }) => (
  <div
    className={`relative w-full h-full rounded-xl cursor-pointer transition-all overflow-hidden sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-60 lg:h-60 mb-0 ${className}`}
    style={{ backgroundColor: color.code }}
    onClick={() => onClick(color.name)}
  >
    {selected && (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-11 h-11">
          <img src={selectedIcon} alt="Check" />
        </div>
      </div>
    )}
  </div>
);

export default ColorOption;
