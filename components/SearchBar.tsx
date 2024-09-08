'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { SearchManufacturer } from './';

// Search button component
const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button className={`-ml-3 z-10 ${otherClasses}`}>
    <Image 
      src="/magnifying-glass.svg"
      alt="magnifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  const [marque, setManufacturer] = useState('');
  const [model, setModel] = useState('');
  const router = useRouter();

  // Function to handle search
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (marque === '' && model === '') {
      return alert('Please fill in at least one search field');
    }

    // Update the search parameters in the URL
    const searchParams = new URLSearchParams(window.location.search);

    if (marque) {
      searchParams.set('marque', marque);
    } else {
      searchParams.delete('marque');
    }

    if (model) {
      searchParams.set('modèle', model);
    } else {
      searchParams.delete('modèle');
    }

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    router.push(newPathname, { scroll: false });
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer 
          marque={marque}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image 
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Modèle" // Consider updating placeholder to a more general example if needed
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
