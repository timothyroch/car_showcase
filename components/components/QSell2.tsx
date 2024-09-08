"use client";

import React, { useState } from 'react';

interface QuestionProps {
  onAnswer: (answer: string) => void;
}

const QSell2: React.FC<QuestionProps> = ({ onAnswer }) => {
  const [solde, setSolde] = useState<number | null>(null);

  const handleOuiClick = () => {
    if (solde !== null) {
      onAnswer(`kilomètrage: ${solde}`);
    } else {
      alert("Please enter a valid number for the solde.");
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h3 className="text-xl font-semibold mb-4">
      Quel est le kilométrage actuel de votre véhicule ?
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
          Soumetre
        </button>
      </div>

    </div>
  );
};

export default QSell2;
