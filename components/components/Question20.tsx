import React from 'react';
import SearchBarPosition from './_components/SearchBarPosition';

interface QuestionProps {
  onAnswer: (answer: string) => void;
}

const Question20: React.FC<QuestionProps> = ({ onAnswer }) => {
  const handleSearch = (province: string, ville: string) => {
    // Combine manufacturer and model into a single string, or handle them separately
    const answer = `Province: ${province}, Ville: ${ville}`;
    onAnswer(answer);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h3 className="text-xl font-semibold mb-4">
        Veuillez nous donner vos coordonnées
      </h3>
      <SearchBarPosition onSearch={handleSearch} />
    </div>
  );
};

export default Question20;
