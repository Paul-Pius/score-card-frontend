import React, { useState, createContext } from 'react';

type AddScoreModalContextProvider = {
    children: React.ReactNode
}

type scoreData = {
    _id?: string,
  agile: number, 
  algorithm: number,
  assesment: number,
  cummulative: number,
    dev: Record<string, any>
    task: number,
    email: string,
    week: number
}

export const AddScoreContext = createContext<{
    openModal: boolean | null,
    setOpenModal: (newValue: any) => void,
    scoreData:scoreData [],
    setScoreData: (newValue: any) => void,
  }>({
    openModal: null,
    setOpenModal: () => undefined,
    scoreData:[],
    setScoreData: (newValue: any) => undefined,
  }) 

export default function AddScoreModalContext({children}: AddScoreModalContextProvider) {
    const [openModal, setOpenModal] = useState(false);
    const [scoreData, setScoreData] = useState([]);
  return (
    <AddScoreContext.Provider value={{openModal, setOpenModal, scoreData, setScoreData} as any}>{children}</AddScoreContext.Provider>
  )
}
