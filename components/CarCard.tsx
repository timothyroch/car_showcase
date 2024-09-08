"use client";

import { Car } from '@/types';
import { useState } from 'react';
import Image from 'next/image';
import CustomButton from './CustomButton';
import CarDetails from './CarDetails';

interface CarCardProps {
  car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
  const { année, marque, modèle, motorisation, puissance, prix, imageUrl } = car;

  const [isOpen, setIsOpen] = useState(false);

  const calculateCarRent = (price: string) => {
    // Extract the numeric value from the price string and calculate rent
    const numericPrice = parseInt(price.replace(/[^0-9]/g, ''), 10);
    return (numericPrice * 0.01).toFixed(2);
  };

  const carRent = calculateCarRent(prix);

  return (
    <div className='car-card group'>
      <div className='car-card__content'>
        <h2 className='car-card__content-title'>
          {marque} {modèle}
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
        <div className='flex group-hover:invisible w-full justify-between text-gray'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src="/steering-wheel.svg" width={20} height={20} alt='steering wheel' />
            <p className='text-[14px]'>
              {motorisation === 'Automatic' ? 'automatic' : 'Manual'}
            </p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src="/tire.svg" width={20} height={20} alt='tire' />
            <p className='text-[14px]'>
              {motorisation}
            </p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src="/gas.svg" width={20} height={20} alt='gas' />
            <p className='text-[14px]'>
              {puissance} HP
            </p>
          </div>
        </div>

        <div className='car-card__btn-container'>
          <CustomButton 
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-17px font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CarDetails 
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
