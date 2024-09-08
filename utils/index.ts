import { Car } from '@/types';
import { Cars } from '@/components/data/CarDatabase'; // Ensure the import path is correct
import { FilterProps } from '@/types';

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};



export async function fetchCars(filters: FilterProps) {
  const { marque, année, modèle, limit, motorisation } = filters;

  // Filter cars based on the filters provided
  const filteredCars = Cars.filter((car: Car) => {
    let isValid = true;
    
    // Match against 'marque'
    if (marque && !car.marque.toLowerCase().includes(marque.toLowerCase())) {
      isValid = false;
    }
    
    // Match against 'année'
    if (année && car.année !== année) {
      isValid = false;
    }
    
    // Match against 'motorisation'
    if (motorisation && !car.motorisation.toLowerCase().includes(motorisation.toLowerCase())) {
      isValid = false;
    }
    
    // Match against 'modèle'
    if (modèle && !car.modèle.toLowerCase().includes(modèle.toLowerCase())) {
      isValid = false;
    }
    
    return isValid;
  });

  // Slice the filtered results based on the limit
  const result = filteredCars.slice(0, limit || 10);

  return result;
}

export const generateCarImageUrl = (car: Car, angle?
  : string) => {
    const url = new URL('https://cdn.imagin.studio/getimage');

    const { marque, année, modèle } = car;

    url.searchParams.append('customer',
      'hrjavascript-mastery'); //api key of the tutor, might not work indefinitively
      url.searchParams.append('make', marque);
      url.searchParams.append('modelFamily', modèle.split(" ")[0]);
      url.searchParams.append('zoomType', 'fullscreen');
      url.searchParams.append('modelYear', `${année}`);
      url.searchParams.append('angle', `${angle}`);
    
      return `${url}`;
  }

  export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);
  
    searchParams.set(type, value);
  
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  
    return newPathname;
  }
  