"use client";

import React, { useState } from 'react';

interface OptionQ11Props {
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
  'L\'apparence du véhicule',
  'Un véhicule qui saura seulement me mener du point A au point B',
];

const OptionQ11: React.FC<OptionQ11Props> = ({ onChange }) => {
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
        <div key={option} className="flex items-center space-x-2">
          <input 
            type="checkbox" 
            value={option}
            checked={selectedOptions.includes(option)}
            onChange={() => handleCheckboxChange(option)}
            className="form-checkbox h-5 w-5 text-blue-500"
          />
          <label className="text-gray-900">{option}</label>
        </div>
      ))}
    </div>
  );
};

export default OptionQ11;
