"use client";

import React, { useState } from 'react';

interface OptionQ7Props {
  onChange: (selectedOptions: string[]) => void;
}

const options = [
  'La sécurité',
  'La conduite',
  'Les performances',
  'L\'espace',
  'L\'économie d\'essence',
  'La fiabilité',
  'Les faibles coûts d\'utilisation',
  'Le luxe',
  'L\'apparence du véhicule'
];

const OptionQ7: React.FC<OptionQ7Props> = ({ onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleCheckboxChange = (option: string) => {
    const updatedSelection = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];

    setSelectedOptions(updatedSelection);
    onChange(updatedSelection);
  };

  return (
    <div className="space-y-2">
      {options.map((option) => (
        <div key={option} className="flex items-center">
          <input 
            type="checkbox" 
            value={option}
            checked={selectedOptions.includes(option)}
            onChange={() => handleCheckboxChange(option)}
            className="mr-2"
          />
          <label className="text-gray-800">{option}</label>
        </div>
      ))}
    </div>
  );
};

export default OptionQ7;
