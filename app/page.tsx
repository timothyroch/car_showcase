'use client'

import React, { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import CustomButton from '@/components/CustomButton';
import Quiz from '@/components/Quiz';
import SellQuestionary from '@/components/SellQuestionary';

import Footer from '@/components/Footer';
import BlogSection from './(routes)/dashboard/_components/BlogSection';
import AnalyzeSection from './(routes)/dashboard/_components/AnalyzeSection';
import MarketingSection from './about/_components/MarketingSection';
import Testimonial from './about/_components/Testimonial';
import FindCar from '@/components/FindCar';
import LoadingSpinner from './(routes)/dashboard/_components/LoadingSpinner';


const testimonials = [
  {
    id: '1',
    text: 'Service exceptionnel !',
    author: 'Jean Dupont',
    rating: 5,
  },
  {
    id: '2',
    text: 'Je recommande vivement !',
    author: 'Marie Curie',
    rating: 4,
  },
  {
    id: '3',
    text: 'Expérience fantastique !',
    author: 'Alex Johnson',
    rating: 5,
  },
];

const page = () => {
  const { user, isLoaded, isSignedIn } = useUser(); // Destructure the user, isLoaded, and isSignedIn properties

  const [isOpen, setIsOpen] = useState(false);
  const [sellOpen, setSellOpen] = useState(false);
  const [findOpen, setFindOpen] = useState(false);

  const handleScroll = () => {
    const carSection = document.getElementById("car");
    if (carSection) {
      carSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSellCarClick = () => {
    alert('Redirecting to the Sell Car form...');
  };

  if (!isLoaded) {
    // Optionally, show a loading spinner or message while the user data is loading
    return <LoadingSpinner/>;
  }

  return (
    <div className='p-8 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200'>
      {isSignedIn ? (
        <>
          <h2 className='font-bold text-3xl'>Bonjour, {user?.fullName}</h2>
          <h2 className='font-bold text-xl mb-6 text-gray-700'>Bienvenue dans votre Tableau de Bord</h2>
        </>
      ) : (
        <>
                <h2 className='font-bold text-xl mb-6 text-gray-700'>Bienvenue dans CarHub</h2>
        <h2 className='font-bold text-xl mb-6 text-gray-700'>Comment pouvons-nous vous aider?</h2>
        </>
      )}

<div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
  <div className='bg-white shadow-lg rounded-lg p-6 relative'>
    <h3 className='font-semibold text-xl mb-8'>Acheter</h3>
    <CustomButton 
      title="Acheter un véhicule"
      containerStyles="bg-primary-blue text-white rounded-full py-4 px-6 hover:bg-blue-600 w-full text-center mb-10"
      handleClick={() => setIsOpen(true)}
    />
        <Quiz 
      isOpen={isOpen}
      closeModal={() => setIsOpen(false)}      
    />
    <CustomButton 
      title="Trouver mon véhicule"
      containerStyles="bg-primary-blue text-white rounded-full py-4 px-6 hover:bg-blue-600 w-full text-center mb-4"
      handleClick={() => setFindOpen(true)}
    />
   <FindCar
   isOpen={findOpen}
   closeModal={() => setFindOpen(false)}
   />


  </div>
  
  <div className='bg-white shadow-lg rounded-lg p-6 relative'>
    <h3 className='font-semibold text-xl mb-4'>Vendre</h3>
    <CustomButton 
      title="Vendre mon véhicule"
      containerStyles="bg-primary-blue text-white rounded-full py-4 px-6 hover:bg-blue-600 w-full text-center mb-4"
      handleClick={() => setSellOpen(true)}
    />
    <SellQuestionary 
      isOpen={sellOpen}
      closeModal={() => setSellOpen(false)}      
    />
    <h2 className='font-semibold text-md mb-4'>Évaluez la valeur de votre véhicule</h2>
    <input placeholder='Numéro de plaque' className='bg-white border border-black text-black rounded-full py-4 px-6 mb-4 w-2/3'/><button className='bg-primary-blue text-white rounded-full py-4 px-6 hover:bg-blue-600 text-center mb-4 w-1/3'>Entrer</button>

  </div>
</div>


      <BlogSection/>
      <AnalyzeSection/>
      <MarketingSection/>
      <Testimonial testimonials={testimonials} />
      <Footer/>
    </div>
  );
};

export default page;

