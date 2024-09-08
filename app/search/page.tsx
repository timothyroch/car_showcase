import dynamic from 'next/dynamic';
import { Motorisation, Année } from '@/constants';
import { Car } from '@/types';
import { Cars } from '@/components/data/CarDatabase'; // Correctly import Cars
import React from 'react'
import { fetchCars } from '@/utils';
const SearchBar = dynamic(() => import('@/components/SearchBar'), { ssr: false });
const CustomFilter = dynamic(() => import('@/components/CustomFilter'), { ssr: false });
const CarCard = dynamic(() => import('@/components/CarCard'), { ssr: false });
const ShowMore = dynamic(() => import('@/components/ShowMore'), { ssr: false });


interface HomeProps {
  searchParams: {
    marque?: string;
    année?: number;
    motorisation?: string;
    limit?: number;
    modèle?: string;
  };
}

export default function Home({ searchParams }: HomeProps) {
  const { marque = "", année = 2024, motorisation = "", limit = 10, modèle = "" } = searchParams;

  // Filter cars based on searchParams
  const filteredCars = Cars.filter((car: Car) => {
    let isValid = true;

    if (marque && !car.marque.toLowerCase().includes(marque.toLowerCase())) {
      isValid = false;
    }
    if (modèle && !car.modèle.toLowerCase().includes(modèle.toLowerCase())) {
      isValid = false;
    }
    if (année && car.année !== année) {
      isValid = false;
    }
    if (motorisation && !car.motorisation.toLowerCase().includes(motorisation.toLowerCase())) {
      isValid = false;
    }

    return isValid;
  });
  // Ensure there are always cars displayed
  const displayedCars = filteredCars.slice(0, limit || 10);
  const isDataEmpty = displayedCars.length === 0;

  // If no cars are displayed, show some default cars
  const defaultDisplayedCars = isDataEmpty ? Cars.slice(0, limit || 10) : displayedCars;
  return (
    <div className='bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 min-h-[100vh]'>
      
      <div>     
        <main className="overflow-hidden">


<div className="mt-12 padding-x padding-y max-width" id="discover">
  <div className="home__text-container" id="car">
    <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
    <p>Explore the cars you might like</p>
  </div>
  <div className="home__filters">
    <SearchBar />
    <div className="home__filter-container">
      <CustomFilter title="motorisation" options={Motorisation} />

    </div>
  </div>

  {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {filteredCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > filteredCars.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>No cars match your search criteria.</p>
          </div>
        )}
</div>
</main>
</div>
    </div>
  )
}

