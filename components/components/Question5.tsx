"use client";

import React, { useState } from 'react';

interface QuestionProps {
  onAnswer: (answer: string) => void;
}

const Question5: React.FC<QuestionProps> = ({ onAnswer }) => {
  const [solde, setSolde] = useState<number | null>(null);

  const handleOuiClick = () => {
    if (solde !== null) {
      onAnswer(`Solde: ${solde}`);
    } else {
      alert("Please enter a valid number for the solde.");
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h3 className="text-xl font-semibold mb-4">
        Est-ce qu'il y a un solde sur le véhicule?
      </h3>
      
      <div className="mb-4">
        <label className="block mb-2 text-gray-700">
          <input 
            type='number' 
            placeholder='Quel est le solde?' 
            value={solde !== null ? solde : ''} 
            onChange={(e) => setSolde(e.target.value ? parseFloat(e.target.value) : null)}
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
        </label>
        <button 
          onClick={handleOuiClick}
          className="bg-primary-blue text-white rounded-full py-2 px-4 mt-2 hover:bg-blue-700 transition-colors"
        >
          Submit Solde
        </button>
      </div>

      <div className="space-y-2">
        <button 
          onClick={() => onAnswer('Non')}
          className="bg-gray-200 text-gray-900 rounded-full py-2 px-4 w-full hover:bg-gray-300 transition-colors"
        >
          Non
        </button>
        <button 
          onClick={() => onAnswer('Je ne sais pas')}
          className="bg-gray-200 text-gray-900 rounded-full py-2 px-4 w-full hover:bg-gray-300 transition-colors"
        >
          Je ne sais pas
        </button>
      </div>
    </div>
  );
};

export default Question5;
