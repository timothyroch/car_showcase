// SuccessMessage.tsx
import React from 'react';
import { CheckCircle } from 'lucide-react'; // Import the check icon from Lucid Icons

interface SuccessMessageProps {
  onClose: () => void;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ onClose }) => {
  return (
    <div className="flex flex-col items-center p-4">
      <CheckCircle className="w-16 h-16 text-green-500 mb-4" /> {/* Check icon with green color */}
      <h3 className="text-lg font-semibold mb-4">
        Votre formulaire nous a été envoyé, un expert devrait vous contacter dans les plus court délais.
      </h3>
      <button
        onClick={onClose}
        className="p-2 bg-primary-blue-100 rounded-full  text-gray-800"
      >
        Fermer
      </button>
    </div>
  );
};

export default SuccessMessage;
