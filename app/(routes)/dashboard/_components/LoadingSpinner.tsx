import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
      <p className="mt-4 text-lg text-gray-800">Chargement, veuillez attendre le feu vert...</p>
    </div>
  );
};

export default LoadingSpinner;
