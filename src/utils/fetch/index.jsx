import { useState, useEffect, createContext } from 'react'

const DataContext = createContext()

const DataProvider = ({ children }) => {

  const [data, setData] = useState({})
  const [error, setError] = useState(false)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {

    async function fetchData() {
      try {
        const response = await fetch('./logements.json')
        const data = await response.json()
        setData(data)
      } catch (err) {
        console.log(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    setLoading(true)
    fetchData()
  }, [])


 return (
  <DataContext.Provider value={{data, error, isLoading}}>
    {children}
  </DataContext.Provider>

 )
}
  
export {DataContext, DataProvider}