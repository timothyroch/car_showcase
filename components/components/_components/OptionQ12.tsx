"use client";

import React, { useState } from 'react';

interface OptionQ12Props {
  onChange: (selectedOption: string) => void;
}

const options = [
  '0-2 ans',
  '3-5 ans',
  '5-10 ans',
  'Plus de 10 ans'
];

const OptionQ12: React.FC<OptionQ12Props> = ({ onChange }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    onChange(option);
  };

  return (
    <div className="space-y-2">
      {options.map((option) => (
        <div key={option} className="flex items-center space-x-2">
          <input 
            type="radio" 
            value={option}
            checked={selectedOption === option}
            onChange={() => handleOptionChange(option)}
            className="form-radio h-5 w-5 text-blue-500"
          />
          <label className="text-gray-900">{option}</label>
        </div>
      ))}
    </div>
  );
};

export default OptionQ12;
