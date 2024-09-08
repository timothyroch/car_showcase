"use client";

import { useState } from 'react';
import Image from 'next/image';
import CustomButton from './CustomButton';
import CarDetails from './CarDetails';
import Quiz from './Quiz';
import { useRouter } from 'next/navigation';



const Hero = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
  const carSection = document.getElementById("car");
  if (carSection) {
    carSection.scrollIntoView({ behavior: "smooth" });
  }
}



  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Car -- quickly and easily! 
        </h1>

        <p className='hero__subtitle'>
          Streamline your car rental experience with our effortless booking experience.
        </p>

        <CustomButton 
        title="Explore Cars"
        containerStyles="bg-primary-blue text-white rounded-full mt-10"
        handleClick={handleScroll}
        />

        <CustomButton 
        title="Prend un test pour trouver ton vehicule parfait"
        containerStyles="bg-primary-blue text-white rounded-full mt-10 p-10"
        href='/dashboard'
        />
                <CustomButton 
        title="Vend ton véhicule"
        containerStyles="bg-primary-blue text-white rounded-full mt-10 p-10"
        href='/dashboard'
        />

        
      </div>
        <div className='hero__image-container'>
          <div className='hero__image'>
            <Image src="/hero.png" alt="hero" fill className="object-contain"/>
            </div>

            <div className="hero__image-overlay" />
        </div>
    </div>
  )
}

export default Hero