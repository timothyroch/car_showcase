'use client'

import React from 'react';
import Intro from './_components/Intro';
import MarketingSection from './_components/MarketingSection';
import dynamic from 'next/dynamic';
import { ArrowRight } from 'lucide-react';

const DynamicTestimonial = dynamic(() => import('./_components/Testimonial'), {
  ssr: false, 
});

const AboutUsPage: React.FC = () => {
  const handleSeeMoreClick = () => {
    // Redirect to /dashboard/blogs when the button is clicked
    window.location.href = '/dashboard/contact';
  };
  return (
<div className='bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200'>
<header className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 pt-7">
          À Propos de Nous
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Découvrez notre histoire et pourquoi vous pouvez nous faire confiance.
        </p>
        <div className="mt-4 border-b-4 border-gray-300 w-1/4 mx-auto"></div>
      </header>


      <section className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 py-20 px-6 lg:px-12">
  <div className="container mx-auto">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
        Découvrez Notre Histoire
      </h2>
      <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
        Depuis notre création en 2005, nous avons transformé l'achat de voitures en une expérience fluide et satisfaisante. Découvrez comment nous avons évolué pour devenir un leader du marché grâce à notre passion pour l'excellence et notre engagement envers nos clients.
      </p>
    </div>

    {/* Capsule Sections */}
    <div className="flex flex-wrap gap-12 justify-center">
      {/* Mission Section */}
      <div className="bg-white p-10 rounded-lg shadow-xl w-full md:w-1/2 lg:w-1/3 transform transition-transform hover:scale-105 hover:shadow-2xl">
        <h3 className="text-3xl font-semibold text-gray-800 mb-6">
          Notre Mission
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Notre mission est de révolutionner l'achat de véhicules avec un service client sans égal. Nous nous engageons à offrir une expérience personnalisée, des conseils experts, et un soutien continu pour que chaque client se sente valorisé et satisfait.
        </p>
        <img src="/images/mission.jpg" alt="Mission" className="w-full h-48 object-cover rounded-lg mt-4"/>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white p-10 rounded-lg shadow-xl w-full md:w-1/2 lg:w-1/3 transform transition-transform hover:scale-105 hover:shadow-2xl">
        <h3 className="text-3xl font-semibold text-gray-800 mb-6">
          Pourquoi Choisir CarHub ?
        </h3>
        <ul className="text-lg text-gray-600 list-disc list-inside mb-6">
          <li>Un choix étendu de véhicules rigoureusement sélectionnés</li>
          <li>Des prix compétitifs avec une transparence totale</li>
          <li>Une équipe de conseillers experts et amicaux</li>
          <li>Un service après-vente réactif et fiable</li>
        </ul>
        <img src="/images/why-choose-us.jpg" alt="Why Choose Us" className="w-full h-48 object-cover rounded-lg mt-4"/>
      </div>

      {/* Contact Us Section */}
      <div className="bg-white p-10 rounded-lg shadow-xl w-full md:w-1/2 lg:w-1/3 transform transition-transform hover:scale-105 hover:shadow-2xl">
        <h3 className="text-3xl font-semibold text-gray-800 mb-6">
          Nous Contacter
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Nous sommes là pour répondre à toutes vos questions et vous aider à trouver la voiture parfaite. N'hésitez pas à nous contacter pour obtenir plus d'informations ou pour planifier une visite.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          Téléphone : (123) 456-7890 <br />
          Email : contact@nomdelentreprise.com <br />
          Adresse : 123 Rue des Voitures, Ville, Pays
        </p>
        <button
          onClick={handleSeeMoreClick}
          className="flex items-center text-blue-600 font-bold text-lg"
        >
          Nous Joindre <ArrowRight className="ml-2" /> {/* Add arrow icon */}
        </button>      </div>
    </div>

    {/* Additional Content */}
    <div className="text-center mt-16">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
        Notre Équipe
      </h2>
      <p className="text-xl text-gray-700 leading-relaxed mb-12">
        Rencontrez les visages derrière notre succès. Notre équipe dévouée de professionnels est prête à vous offrir un service exceptionnel et à vous guider à chaque étape de votre expérience d'achat.
      </p>
      <div className="flex flex-wrap justify-center gap-12">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/3">
          <img src="\louisfelix.jpg" alt="Team Member" className="w-full object-cover rounded-full mb-4"/>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Louis-Félix Brassard</h3>
          <p className="text-gray-600">Directeur Général</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/3">
          <img src="\lor.jpg" alt="Team Member" className="w-full h-96 object-cover rounded-full mb-4"/>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Laurie-Anne Roch</h3>
          <p className="text-gray-600">Responsable des Ventes</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/3">
          <img src="\tim.png" alt="Team Member" className="w-full object-cover rounded-full mb-4"/>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Timothy Roch</h3>
          <p className="text-gray-600">Responsable Service Client</p>
        </div>
      </div>
    </div>
  </div>
</section>

</div>
  );
};

export default AboutUsPage;
