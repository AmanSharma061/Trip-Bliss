import mapContext from './mapContext'
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
const MapContextProvider = ({ children }) => {
  const [places, setPlaces] = useState([])
  const [childClicked, setChildClicked] = useState(null)
  const [filtered, setFiltered] = useState([])
  return (
    <mapContext.Provider
      value={{
        places,
        setPlaces,
        childClicked,

        setChildClicked,
        filtered,
        setFiltered,
        
      }}
    >
      {children}
    </mapContext.Provider>
  )
}

export const useMap = () => {
  return useContext(mapContext)
}
export default MapContextProvider
