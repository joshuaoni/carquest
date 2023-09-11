"use client";

import { CarProps, CarProviderProps } from "@/app/_types";
import { createContext,useContext } from "react";

//export const CarContext= createContext<null | CarProps[]>(null);
const CarContext= createContext([]);

export const useCars = () => {
    return useContext(CarContext);
}

export const CarProvider = ({ cars, children }: CarProviderProps) => {
    return (
        <>
        <CarContext.Provider value={cars}>
            {children}
        </CarContext.Provider>
        </>
    );
}