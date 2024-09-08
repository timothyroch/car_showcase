"use client";

import React from 'react';

interface QuestionProps {
  onAnswer: (answer: string) => void;
}

const Question10: React.FC<QuestionProps> = ({ onAnswer }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h3 className="text-2xl font-semibold mb-4">Vous aimeriez</h3>
      <div className="flex flex-col space-y-4">
        <button
          onClick={() => onAnswer('louer')}
          className="bg-gray-200 text-gray-900 py-2 px-4 rounded-lg shadow hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Louer
        </button>
        <button
          onClick={() => onAnswer('financer')}
          className="bg-gray-200 text-gray-900 py-2 px-4 rounded-lg shadow hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Financer
        </button>
        <button
          onClick={() => onAnswer('comptant')}
          className="bg-gray-200 text-gray-900 py-2 px-4 rounded-lg shadow hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Acheter comptant
        </button>
      </div>
    </div>
  );
};

export default Question10;
