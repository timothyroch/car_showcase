import { Key, MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?:
  MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
  href?:string;

}

export interface SearchManufacturerProps {
  marque: string; // Changed from 'brand' to 'marque'
  setManufacturer: (marque: string) => void;
}



export interface HomeProps {
  searchParams: FilterProps;
}

export interface FilterProps {
  marque: string; // Changed from 'brand' to 'marque'
  année: number;  // Changed from 'year' to 'année'
  motorisation: string; // Changed from 'engineType' to 'motorisation'
  limit: number;
  modèle: string; // Changed from 'model' to 'modèle'
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  value: any;
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

// car.ts
export interface Car {
  id: number;
  marque: string; // Changed from 'brand' to 'marque'
  modèle: string; // Changed from 'model' to 'modèle'
  année: number;  // Changed from 'year' to 'année'
  catégorie: string; // Changed from 'category' to 'catégorie'
  motorisation: string; // Changed from 'engineType' to 'motorisation'
  puissance: number; // Changed from 'horsepower' to 'puissance'
  économieEssence?: string; // Changed from 'fuelEfficiency' to 'économieEssence'
  autonomieÉlectrique?: number;
  prix: string; // Changed from 'price' to 'prix'
  description: string; // Added field for description
  imageUrl: string; // Added field for image URL
}

