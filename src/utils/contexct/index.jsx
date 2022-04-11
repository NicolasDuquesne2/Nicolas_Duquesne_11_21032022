import { createContext, useState, useEffect } from 'react'
import { useFetch } from "../../utils/fetch"

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
  
  const [imodatas, setImodatas] = useState([])
  const { data, isLoading, error } = useFetch(`./logements.json`)

  useEffect(() =>{
    if (!isLoading) {
      setImodatas(data)
    }
  }, [data, isLoading])

  return (
    <DataContext.Provider value={{imodatas}}>
      {children}
    </DataContext.Provider>
  )
}