import React from 'react';
import ColorOption from './ColorOption';

const colors = [
  { name: 'beige', code: '#FFE2AD' },
  { name: 'purple', code: '#ECD9FF' },
  { name: 'blue', code: '#B1E4FF' },
  { name: 'green', code: '#D0F5C3' },
];

const ColorSelector = ({ selectedColor, setSelectedColor }) => (
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full">
    {colors.map((color) => (
      <div key={color.name} className="w-full aspect-square">
        {' '}
        <ColorOption
          color={color}
          selected={selectedColor === color.name}
          onClick={setSelectedColor}
          className="w-full h-full rounded-3xl shadow-xl"
        />
      </div>
    ))}
  </div>
);

export default ColorSelector;
