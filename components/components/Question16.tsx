import React from 'react';

interface QuestionProps {
  onAnswer: (answer: string) => void;
}

const Question16: React.FC<QuestionProps> = ({ onAnswer }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h3 className="text-2xl font-semibold mb-4">Vous regardez préférablement</h3>
      <div className="flex flex-col space-y-4">
        <button 
          onClick={() => onAnswer('Usagé')} 
          className="bg-gray-200 text-gray-900 py-2 px-4 rounded-lg shadow hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Usagé
        </button>
        <button 
          onClick={() => onAnswer('Neuf')} 
          className="bg-gray-200 text-gray-900 py-2 px-4 rounded-lg shadow hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Neuf
        </button>
        <button 
          onClick={() => onAnswer('neuf ou usagé, peu importe')} 
          className="bg-gray-200 text-gray-900 py-2 px-4 rounded-lg shadow hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Un ou l'autre
        </button>
      </div>
    </div>
  );
};

export default Question16;
