import React, { useState } from 'react';

interface QuestionProps {
  onAnswer: (answer: string) => void;
}

const QSell1: React.FC<QuestionProps> = ({ onAnswer }) => {
  const [selectedYear, setSelectedYear] = useState('');

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(event.target.value);
    onAnswer(event.target.value);
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from(new Array(50), (v, i) => currentYear - i);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <p className="text-lg mb-6">Votre voiture a été fabriquée en quelle année?</p>

      <select
        value={selectedYear}
        onChange={handleYearChange}
        className="bg-gray-200 text-gray-900 py-2 px-4 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-gray-500 mb-4"
      >
        <option value="" disabled>
          Sélectionner une année
        </option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>


    </div>
  );
};

export default QSell1;
