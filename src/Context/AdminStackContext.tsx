import React, {createContext, useState} from 'react';

type StackContextProvider = {
    children: React.ReactNode
}

type stackData = {
  stackName?: string, 
  stackDescription?: string,
  image?: string,
  createdAt?: string,
  updatedAt?: string,
  _id?: string
}

export const StackContext = createContext<{
    openModal: boolean | null,
    setOpenModal: (newValue: any) => void,
    stackData:stackData [],
    setStackData: (newValue: any) => void,
  }>({
    openModal: null,
    setOpenModal: () => undefined,
    stackData:[],
    setStackData: (newValue: any) => undefined,
  }) 

const AdminStackContext = ({children}: StackContextProvider) => {  
    const [openModal, setOpenModal] = useState(false);
    const [stackData, setStackData] = useState([]);

  return (
    <StackContext.Provider value={{openModal, setOpenModal, stackData, setStackData} as any}>{children}</StackContext.Provider>
  )
}

export default AdminStackContext
