import React from 'react';
import selectedIcon from '../../assets/images/selected.svg';

const ColorOption = ({ color, selected, onClick, className = '' }) => (
  <div
    className={`relative transition-all cursor-pointer flex items-center justify-center rounded-md ${className}`}
    style={{ backgroundColor: color.code, width: '100%', height: '100%' }}
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
