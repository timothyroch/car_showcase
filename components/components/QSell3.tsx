'use client';

import React, { useState } from 'react';

interface QuestionProps {
  onAnswer: (answer: File[]) => void;
}

const QSell3: React.FC<QuestionProps> = ({ onAnswer }) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setSelectedFiles(Array.from(files));
    }
  };

  const handleSubmit = () => {
    onAnswer(selectedFiles); // Pass selected files to onAnswer
  };

  const handleSkip = () => {
    onAnswer([]); // Pass an empty array to indicate the question was skipped
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h3 className="text-xl font-semibold mb-4">Avez-vous des photos de votre véhicule à télécharger ?</h3>
      
      <input 
        type="file" 
        accept="image/*"
        multiple 
        onChange={handleFileChange}
        className="mb-4 w-full text-gray-800"
      />

      <div className="space-y-2 mt-4">
        <button 
          onClick={handleSubmit} 
          className="bg-blue-500 text-white rounded-full py-2 px-4 w-full hover:bg-blue-600 transition-colors"
        >
          Soumettre
        </button>
        <button 
          onClick={handleSkip} 
          className="bg-gray-300 text-gray-800 rounded-full py-2 px-4 w-full hover:bg-gray-400 transition-colors"
        >
          Passer la question
        </button>
      </div>

      {selectedFiles.length > 0 && (
        <div className="mt-4">
          <h4 className="text-lg font-semibold">Photos sélectionnées :</h4>
          <ul className="list-disc pl-5">
            {selectedFiles.map((file, index) => (
              <li key={index} className="text-gray-700">
                {file.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default QSell3;
