import React from 'react';

interface QuestionProps {
  onAnswer: (answer: string) => void;
}

const Question14: React.FC<QuestionProps> = ({ onAnswer }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h3 className="text-2xl font-semibold mb-4">Quel est le point suivant le plus important selon vous?</h3>
      
      <div className="flex flex-col space-y-4">
        <button
          onClick={() => onAnswer('prix')}
          className="bg-gray-200 text-gray-900 py-2 px-4 rounded-lg shadow hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Le prix
        </button>
        <button
          onClick={() => onAnswer('émotion')}
          className="bg-gray-200 text-gray-900 py-2 px-4 rounded-lg shadow hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          L'émotion que le véhicule me procure
        </button>
        <button
          onClick={() => onAnswer('prix et émotion')}
          className="bg-gray-200 text-gray-900 py-2 px-4 rounded-lg shadow hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Les deux
        </button>
      </div>
    </div>
  );
};

export default Question14;
