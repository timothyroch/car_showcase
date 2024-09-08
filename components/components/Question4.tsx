import React from 'react';
import SearchBarQuiz from './_components/SearchBarQuiz';

interface QuestionProps {
  onAnswer: (answer: string) => void;
}

const Question4: React.FC<QuestionProps> = ({ onAnswer }) => {
  const handleSearch = (manufacturer: string, model: string) => {
    // Combine manufacturer and model into a single string, or handle them separately
    const answer = `Manufacturer: ${manufacturer}, Model: ${model}`;
    onAnswer(answer);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h3 className="text-xl font-semibold mb-4">
        Quelle est la marque et le modèle?
      </h3>
      <SearchBarQuiz onSearch={handleSearch} />
    </div>
  );
};

export default Question4;
