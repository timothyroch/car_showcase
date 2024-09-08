import React from 'react';

interface QuestionProps {
  onAnswer: (answer: string) => void;
}

const Question2: React.FC<QuestionProps> = ({ onAnswer }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h3 className="text-2xl font-semibold mb-4">Possédez-vous un véhicule actuellement?</h3>
      <div className="flex flex-col space-y-4">
        <button 
          onClick={() => onAnswer('oui')} 
          className="bg-green-200 text-gray-900 py-2 px-4 rounded-lg shadow hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Oui
        </button>
        <button 
          onClick={() => onAnswer('non')} 
          className="bg-red-200 text-gray-900 py-2 px-4 rounded-lg shadow hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Non
        </button>
      </div>
    </div>
  );
};

export default Question2;
