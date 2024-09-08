"use client";

import React, { useState } from 'react';

interface OptionQ13Props {
  onChange: (selectedOption: string) => void;
}

const options = [
  'Le plus vite possible',
  '1 à 4 semaines',
  '1 à 3 mois',
  '3 mois et plus'
];

const OptionQ13: React.FC<OptionQ13Props> = ({ onChange }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    onChange(option);
  };

  return (
    <div className="space-y-2 mb-6">
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

export default OptionQ13;
