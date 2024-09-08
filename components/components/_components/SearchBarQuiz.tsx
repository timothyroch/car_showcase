"use client";

import React, { useState } from 'react';
import { manufacturers } from '@/constants';import Image from 'next/image';

interface SearchBarProps {
  onSearch: (manufacturer: string, model: string) => void;
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

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer === '' && model === '') {
      return alert('Please fill in the search bar');
    }

    onSearch(manufacturer, model);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <select
          value={manufacturer}
          onChange={(e) => setManufacturer(e.target.value)}
          className="searchbar__input"
        >
          <option value="" disabled>Select Manufacturer</option>
          {manufacturers.map((maker) => (
            <option key={maker} value={maker}>
              {maker}
            </option>
          ))}
        </select>
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
          placeholder="Enter model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
