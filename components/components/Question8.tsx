"use client";

import React, { useState } from 'react';
import OptionQ8 from './_components/OptionQ8';

interface QuestionProps {
  onAnswer: (answer: string) => void;
}

const Question8: React.FC<QuestionProps> = ({ onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h3 className="text-xl font-semibold mb-4">Depuis combien de temps êtes-vous propriétaire de ce véhicule?</h3>
      
      <OptionQ8 onChange={setSelectedOption} />

      <div className="space-y-2 mt-4">
        <button 
          onClick={() => onAnswer(selectedOption)} 
          className="bg-blue-500 text-white rounded-full py-2 px-4 w-full hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
        <button 
          onClick={() => onAnswer('client a passé la question')} 
          className="bg-gray-300 text-gray-800 rounded-full py-2 px-4 w-full hover:bg-gray-400 transition-colors"
        >
          Passer la question
        </button>
      </div>
    </div>
  );
};

export default Question8;
