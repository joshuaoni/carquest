import React, { MouseEventHandler } from "react";

export interface HeroProps {
  // handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  handleClick?: MouseEventHandler<HTMLButtonElement>
}

export interface LayoutProps {
  children: React.ReactNode
}

export interface SearchManufacturerProps {
  manufacturer: string,
  setManufacturer: (arg: string) => void
}

export interface CarProps {
  city_mpg: number,
  class: string,
  combination_mpg: number,
  cylinders: number,
  displacement: number,
  drive: string,
  fuel_type: string,
  highway_mpg: number,
  make: string,
  model: string,
  transmission: string,
  year: number
}

export interface CarCardProps {
  car: CarProps
}

export interface CarProviderProps {
  children: React.ReactNode,
  //cars: null | CarProps[]
  cars: []
}

export interface CarDetailsProps {
  isOpen: boolean,
  closeModal: () => void,
  car: CarProps
}

export interface FilterProps {
  manufacturer: string,
  year: string,
  fuel: string,
  limit: string,
  model: string
}

export interface HomePageProps {
  searchParams?: { [key: string]: string | undefined };
}

export interface OptionProps {
  title: string,
  value: string
}

export interface CustomFilterProps {
  title: string,
  options: OptionProps[]
}

export interface ShowMoreProps {
  pageNumber: number,
  isNext: boolean
}
