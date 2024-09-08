import React from 'react'
import CarCardSection from './CarCardSection'

const AnalyzeSection = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <header className="text-center mt-10 sm:mt-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
          L'Analyze de nos experts
        </h1>
      </header>
      
      <div className="text-center mt-8 sm:mt-10">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900">
          Meilleure voiture pour les trajets quotidiens
        </h1>
      </div>
      <div className="mt-4 border-b-4 border-gray-300 w-1/2 sm:w-1/3 md:w-1/4 mx-auto"></div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-6 sm:gap-8 pt-10 sm:pt-12 2xl:flex 2xl:justify-around">
        <CarCardSection marque='Honda' modèle='Civic' />
        <CarCardSection marque='Toyota' modèle='Prius' />
        <CarCardSection marque='Mazda' modèle='Mazda3' />
      </div>

      <div className="text-center mt-16 sm:mt-20">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900">
          Meilleure voiture pour les familles
        </h1>
      </div>
      <div className="mt-4 border-b-4 border-gray-300 w-1/2 sm:w-1/3 md:w-1/4 mx-auto"></div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-6 sm:gap-8 pt-10 sm:pt-12 2xl:flex 2xl:justify-around">
        <CarCardSection marque='Toyota' modèle='Highlander' />
        <CarCardSection marque='Honda' modèle='Odyssey' />
        <CarCardSection marque='Subaru' modèle='Outback' />
      </div>

      <div className="text-center mt-16 sm:mt-20">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900">
          Meilleure voiture pour l'aventure en plein air 
        </h1>
      </div>
      <div className="mt-4 border-b-4 border-gray-300 w-1/2 sm:w-1/3 md:w-1/4 mx-auto"></div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-6 sm:gap-8 pt-10 sm:pt-12 2xl:flex 2xl:justify-around">
        <CarCardSection marque='Toyota' modèle='4Runner' />
        <CarCardSection marque='Jeep' modèle='Wrangler' />
        <CarCardSection marque='Tesla' modèle='Cybertruck' />
      </div>

      <div className="text-center mt-16 sm:mt-20">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900">
          Meilleure voiture pour le plaisir de conduire
        </h1>
      </div>
      <div className="mt-4 border-b-4 border-gray-300 w-1/2 sm:w-1/3 md:w-1/4 mx-auto"></div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-6 sm:gap-8 pt-10 sm:pt-12 2xl:flex 2xl:justify-around">
        <CarCardSection marque='Mazda' modèle='MX-5 Miata' />
        <CarCardSection marque='Audi' modèle='A4' />
        <CarCardSection marque='BMW' modèle='Série 3' />
      </div>
    </div>
  )
}

export default AnalyzeSection
