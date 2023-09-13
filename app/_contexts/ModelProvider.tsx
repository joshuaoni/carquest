import React from 'react';
import { createContext, useContext, SetStateAction, Dispatch } from "react";

const ModelContext = createContext('Corolla');

const SetModelContext= createContext<Dispatch<SetStateAction<string>>>(() => {});

export const useModel = () => {
    return useContext(ModelContext);
}

export const useSetModel = () => {
    return useContext(SetModelContext);
}

export default function ModelProvider({
    children,
    model
}:{
    children: React.ReactNode,
    model: string
}) {
  return (
    <>
        <ModelContext.Provider value={model}>
            {children}
        </ModelContext.Provider>
    </>
  )
}

export const SetModelProvider = ({ 
    setModel, children 
}: {
    children:  React.ReactNode, 
    setModel: Dispatch<SetStateAction<string>>}) => {
    return (
        <>
            <SetModelContext.Provider value={setModel}>
                {children}
            </SetModelContext.Provider>
        </>
    );
}
