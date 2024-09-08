'use client';

import React, { useState } from 'react';
import { provinces } from '@/constants'; // Import the provinces list
import Image from 'next/image';

interface SearchBarProps {
  onSearch: (province: string, city: string) => void; // Update to only use province
}

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image 
      src="/magnifying-glass.svg"
      alt="magnifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBarPosition: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (province === '' || city === '' ) {
      return alert('Please fill in the search bar');
    }

    onSearch(province, city);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <select
          value={province}
          onChange={(e) => setProvince(e.target.value)}
          className="searchbar__input"
        >
          <option value="" disabled>Select Province</option>
          {provinces.map((prov) => (
            <option key={prov} value={prov}>
              {prov}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Ville"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBarPosition;
