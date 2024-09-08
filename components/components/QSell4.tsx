"use client";

import React, { useState } from 'react';
import OptionQSell4 from './_components/OptionQSell4';

interface QuestionProps {
  onAnswer: (answer: string) => void;
}

const QSell4: React.FC<QuestionProps> = ({ onAnswer }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [otherDetails, setOtherDetails] = useState<string>('');

  const handleSubmit = () => {
    let answer = selectedOptions.join(', ');
    if (selectedOptions.includes('Autre (veuillez préciser)') && otherDetails) {
      answer += `: ${otherDetails}`;
    }
    onAnswer(answer);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h3 className="text-xl font-semibold mb-4">Votre véhicule a-t-il des dommages ?</h3>
      <OptionQSell4 
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
        otherDetails={otherDetails}
        setOtherDetails={setOtherDetails}
      />
      
      <div className="space-y-2 mt-4">
        <button 
          onClick={handleSubmit} 
          className="bg-blue-500 text-white rounded-full py-2 px-4 w-full hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
        <button 
          onClick={() => onAnswer('aucun dommage')} 
          className="bg-gray-300 text-gray-800 rounded-full py-2 px-4 w-full hover:bg-gray-400 transition-colors"
        >
          Aucun
        </button>
      </div>
    </div>
  );
};

export default QSell4;
