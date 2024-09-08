'use client'

import SuccessMessage from '@/components/components/SuccessMessage';
import React, { useState } from 'react';

interface CarOffer {
  id: number;
  model: string;
  description: string;
  imageUrl: string;
}

const carOffers: CarOffer[] = [
  {
    id: 1,
    model: 'Honda Civic',
    description: 'Une berline compacte réputée pour sa fiabilité, son confort de conduite et son efficacité énergétique, offrant un intérieur bien aménagé et des caractéristiques modernes.',
    imageUrl: '/hondacivic.png',
  },
  {
    id: 2,
    model: 'Toyota Prius',
    description: 'La voiture hybride emblématique avec une autonomie électrique pour les trajets courts.',
    imageUrl: '/toyotaprius.png',
  },
  {
    id: 3,
    model: 'Mazda Mazda3',
    description: 'Une berline élégante et dynamique avec une conduite agréable, un intérieur haut de gamme et des caractéristiques modernes, offrant un bon équilibre entre performance et économie de carburant.',
    imageUrl: '/mazdamazda3.png',
  },
];

const CarOffers: React.FC<{ isOpen: boolean; closeModal: () => void }> = ({ isOpen, closeModal }) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleContactClick = () => {
    setShowSuccessMessage(true);
    // Optionally, you might want to close the modal or perform other actions here
    // closeModal();
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Un vendeur a été contacté</h1>
        <h2 className="text-xl font-bold mb-6">Voici des offres qui pourraient vous intéresser</h2>

        <div className="space-y-6">
          {carOffers.map(car => (
            <div
              key={car.id}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center gap-6"
            >
              <img
                src={car.imageUrl}
                alt={car.model}
                className="w-full md:w-1/3 rounded-lg object-cover"
              />
              <div className="w-full md:w-2/3">
                <h2 className="text-xl font-semibold mb-2">{car.model}</h2>
                <p className="text-gray-700 mb-4">{car.description}</p>
                <button
                  onClick={handleContactClick}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  contacter un Vendeur
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1 flex flex-col gap-2">
        {showSuccessMessage && <SuccessMessage onClose={() => setShowSuccessMessage(false)} />}
          </div>
      </div>
    </div>
  );
};

export default CarOffers;
