"use client";

import React, { useState } from 'react';
import OptionQ12 from './_components/OptionQ12';

interface QuestionProps {
  onAnswer: (answer: string) => void;
}

const Question12: React.FC<QuestionProps> = ({ onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h3 className="text-2xl font-semibold mb-4">Combien de temps aimeriez-vous garder ce véhicule?</h3>
      
      <OptionQ12 onChange={setSelectedOption} />

      <div className="flex flex-col space-y-4 mt-6">
        <button
          onClick={() => onAnswer(selectedOption)}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Submit
        </button>

        <button
          onClick={() => onAnswer('client a passé la question')}
          className="bg-gray-200 text-gray-900 py-2 px-4 rounded-lg shadow hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Passer la question
        </button>
      </div>
    </div>
  );
};

export default Question12;
