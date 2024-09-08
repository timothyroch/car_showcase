"use client";

import React, { useState } from 'react';

interface QuestionProps {
  onAnswer: (answer: string) => void;
}

const Question9: React.FC<QuestionProps> = ({ onAnswer }) => {
  const [minPrice, setMinPrice] = useState<number | ''>('');
  const [maxPrice, setMaxPrice] = useState<number | ''>('');

  const handleSubmit = () => {
    if (minPrice !== '' && maxPrice !== '' && minPrice <= maxPrice) {
      onAnswer(`Budget: ${minPrice} - ${maxPrice}`);
    } else {
      alert("Please enter valid minimum and maximum amounts, and ensure that the minimum is less than or equal to the maximum.");
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h3 className="text-xl font-semibold mb-4">Quel est votre budget pour votre prochain véhicule?</h3>
      
      <div className="flex flex-col space-y-4">
        <div className="flex space-x-4">
          <label className="flex-1">
            <input 
              type='number' 
              placeholder='Montant minimum' 
              value={minPrice !== '' ? minPrice : ''} 
              onChange={(e) => setMinPrice(e.target.value ? parseFloat(e.target.value) : '')}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </label>
          <label className="flex-1">
            <input 
              type='number' 
              placeholder='Montant maximum' 
              value={maxPrice !== '' ? maxPrice : ''} 
              onChange={(e) => setMaxPrice(e.target.value ? parseFloat(e.target.value) : '')}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </label>
        </div>
        <div className="space-y-2">
          <button 
            onClick={handleSubmit}
            className="bg-blue-500 text-white rounded-full py-2 px-4 w-full hover:bg-blue-600 transition-colors"
          >
            Entrer Budget
          </button>
          <button 
            onClick={() => onAnswer('client a passé la question')} 
            className="bg-gray-300 text-gray-800 rounded-full py-2 px-4 w-full hover:bg-gray-400 transition-colors"
          >
            Passer la question
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question9;
