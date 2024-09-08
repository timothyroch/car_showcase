"use client";

import React from 'react';

interface QuestionProps {
  onAnswer: (answer: string) => void;
}

const Question6: React.FC<QuestionProps> = ({ onAnswer }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h3 className="text-xl font-semibold mb-4">
        Est-ce un véhicule loué ou financé?
      </h3>
      <div className="space-y-2">
        <button 
          onClick={() => onAnswer('loué')} 
          className="bg-gray-300 text-gray-800 rounded-full py-2 px-4 w-full hover:bg-green-600 transition-colors"
        >
          Loué
        </button>
        <button 
          onClick={() => onAnswer('financé')} 
          className="bg-gray-300 text-gray-800 rounded-full py-2 px-4 w-full hover:bg-blue-600 transition-colors"
        >
          Financé
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

export default Question6;
