"use client";

import React from 'react';

interface OptionQSell4Props {
  selectedOptions: string[];
  setSelectedOptions: (options: string[]) => void;
  otherDetails: string;
  setOtherDetails: (details: string) => void;
}

const options = [
  'Pare-brise fissuré',
  'Égratignures sur la carrosserie',
  'Bosses',
  'Problèmes mécaniques',
  'Autre (veuillez préciser)',
];

const OptionQSell4: React.FC<OptionQSell4Props> = ({ 
  selectedOptions, 
  setSelectedOptions, 
  otherDetails, 
  setOtherDetails 
}) => {
  
  const handleCheckboxChange = (option: string) => {
    const updatedSelection = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];

    setSelectedOptions(updatedSelection);
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
      {selectedOptions.includes('Autre (veuillez préciser)') && (
        <textarea
          value={otherDetails}
          onChange={(e) => setOtherDetails(e.target.value)}
          placeholder="Veuillez préciser..."
          className="mt-2 p-2 border rounded-lg w-full"
        />
      )}
    </div>
  );
};

export default OptionQSell4;
