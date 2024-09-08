"use client";

import React, { useState } from 'react';

interface OptionQ8Props {
  onChange: (selectedOption: string) => void;
}

const options = [
  '0-2 ans',
  '3-5 ans',
  '5-10 ans',
  'Plus de 10 ans'
];

const OptionQ8: React.FC<OptionQ8Props> = ({ onChange }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    onChange(option);
  };

  return (
    <div className="space-y-2">
      {options.map((option) => (
        <div key={option} className="flex items-center">
          <input 
            type="radio" 
            value={option}
            checked={selectedOption === option}
            onChange={() => handleOptionChange(option)}
            className="mr-2"
          />
          <label className="text-gray-800">{option}</label>
        </div>
      ))}
    </div>
  );
};

export default OptionQ8;
