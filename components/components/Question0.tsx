import React from 'react';

interface QuestionProps {
  onAnswer: (answer: string) => void;
}

const Question0: React.FC<QuestionProps> = ({ onAnswer }) => {
 

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <p className="text-lg mb-6">Avez-vous un modèle de voiture spécifique en tête ?</p>
      <div className="flex flex-col space-y-4">
        <button 
          onClick={() => onAnswer('J\'ai un modèle de voiture spécifique en tête')} 
          className="bg-green-500 text-white py-2 px-4 rounded-lg shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          J'ai déjà un modèle en tête
        </button>
        <button 
          onClick={() => onAnswer('Je n\'ai pas de modèle de voiture spécifique en tête')} 
          className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Je ne suis pas sûr du modèle que je veux
        </button>
      </div>
    </div>
  );
};

export default Question0;
