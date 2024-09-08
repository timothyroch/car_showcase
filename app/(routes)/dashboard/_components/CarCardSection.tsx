'use client'

import React, { useState } from 'react';

import { Car } from '@/types';
import { Cars } from '@/components/data/CarDatabase';
import Image from 'next/image';
import CustomButton from '@/components/CustomButton';
import CarDetails from '@/components/CarDetails';

interface CarDetailsProps {
  marque: string;
  modèle: string;
}

const CarCardSection: React.FC<CarDetailsProps> = ({ marque, modèle }) => {
  const car: Car | undefined = Cars.find(c => c.marque === marque && c.modèle === modèle);
  const [isOpen, setIsOpen] = useState(false);


  if (!car) {
    return <div>Car not found.</div>;
  }

  return (
    <div className='car-card group p-4 border rounded-lg shadow-lg xl:max-w-96 md:min-w-80'>
    <div className='car-card__content'>
      <h2 className='car-card__content-title text-2xl font-bold'>
        {car.marque} {car.modèle}
      </h2>
    </div>



    <div className='relative w-full min-h-28 max-h-36 h-auto my-3 overflow-hidden'>
  <Image
    src={car.imageUrl}
    alt={`${car.marque} ${car.modèle}`}
    fill
    priority
    className='object-contain'
  />
</div>


    <div className='relative flex w-full mt-2'>
      <div className='flex group-hover:invisible w-full justify-between text-gray-500'>
        <div className='flex flex-col justify-center items-center gap-2'>
          <Image src="/steering-wheel.svg" width={20} height={20} alt='steering wheel' />
          <p className='text-sm'>
            {car.motorisation === 'Automatic' ? 'Automatic' : 'Manual'}
          </p>
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
          <Image src="/tire.svg" width={20} height={20} alt='tire' />
          <p className='text-sm'>
            {car.motorisation}
          </p>
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
          <Image src="/gas.svg" width={20} height={20} alt='gas' />
          <p className='text-sm'>
            {car.puissance} HP
          </p>
        </div>
      </div>

      <div className='car-card__btn-container mt-4'>
        <CustomButton 
          title="View More"
          containerStyles="w-full py-2 rounded-full bg-blue-500"
          textStyles="text-white text-sm font-bold"
          rightIcon="/right-arrow.svg"
          handleClick={() => setIsOpen(true)}
        />
      </div>
    </div>

    {/* Replace this with the actual CarDetails component if needed */}
    {isOpen && (
      <CarDetails 
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    )}
  </div>
  );
};

export default CarCardSection;
