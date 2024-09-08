'use client'

import React, { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import CustomButton from '@/components/CustomButton';
import Quiz from '@/components/Quiz';
import SellQuestionary from '@/components/SellQuestionary';
import BlogSection from './_components/BlogSection';
import AnalyzeSection from './_components/AnalyzeSection';

import Footer from '@/components/Footer';
import MarketingSection from '@/app/about/_components/MarketingSection';
import Testimonial from '@/app/about/_components/Testimonial';

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

  const [isOpen, setIsOpen] = useState(false);
  const [sellOpen, setSellOpen] = useState(false);


  const handleScroll = () => {
  const carSection = document.getElementById("car");
  if (carSection) {
    carSection.scrollIntoView({ behavior: "smooth" });
  }
}
  const {user} = useUser();


  const handleSellCarClick = () => {
    alert('Redirecting to the Sell Car form...');
  };

  return (
    <div className='p-8 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200'>
      <h2 className='font-bold text-3xl'>Bonjour, {user?.fullName}</h2>
      <h2 className='font-bold text-xl mb-6 text-gray-700'>Bienvenue dans votre Tableau de Bord</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
        <div className='bg-white shadow-lg rounded-lg p-6'>
          <h3 className='font-semibold text-xl mb-4'>Prend un test pour trouver ton vehicule parfait</h3>
          <CustomButton 
        title="Acheter un véhicule"
        containerStyles="bg-blue-500 text-white rounded-full py-4 px-6 hover:bg-blue-600 w-full text-center"
        handleClick={() => setIsOpen(true)}
        />
 <Quiz 
      isOpen={isOpen}
      closeModal={() => 
        setIsOpen(false)}      
      />


        </div>
        <div className='bg-white shadow-lg rounded-lg p-6'>
          <h3 className='font-semibold text-xl mb-4'>Vendre un véhicule</h3>
          <CustomButton 
        title="Vendre mon véhicule"
        containerStyles="bg-blue-500 text-white rounded-full py-4 px-6 hover:bg-blue-600 w-full text-center"
        handleClick={() => setSellOpen(true)}
        />
 <SellQuestionary 
      isOpen={sellOpen}
      closeModal={() => 
        setSellOpen(false)}      
      />
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
