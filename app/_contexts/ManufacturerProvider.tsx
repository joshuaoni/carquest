"use client";

import { createContext, useContext, SetStateAction, Dispatch } from "react";

const ManufacturerContext= createContext('Toyota');

const SetManufacturerContext= createContext<Dispatch<SetStateAction<string>>>(() => {});

export const useManufacturer = () => {
    return useContext(ManufacturerContext);
}

export const useSetManufacturer = () => {
    return useContext(SetManufacturerContext);
}

export const ManufacturerProvider = ({ 
    manufacturer, children 
}: {
    children:  React.ReactNode, 
    manufacturer: string}) => {
    return (
        <>
            <ManufacturerContext.Provider value={manufacturer}>
                {children}
            </ManufacturerContext.Provider>
        </>
    );
}

export const SetManufacturerProvider = ({ 
    setManufacturer, children 
}: {
    children:  React.ReactNode, 
    setManufacturer: Dispatch<SetStateAction<string>>}) => {
    return (
        <>
            <SetManufacturerContext.Provider value={setManufacturer}>
                {children}
            </SetManufacturerContext.Provider>
        </>
    );
}