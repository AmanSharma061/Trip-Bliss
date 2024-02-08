import React from 'react'
import Header from './components/Header'
import Map from './components/Map'
import List from './components/List'
import { useState } from 'react'
import { useEffect } from 'react'
import { getPlacesData } from './Api/data'

import { useMap } from './contexts/mapContext/mapContextProvider'
function App () {
  const { places, setPlaces, filtered } = useMap()
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 })
  const [bounds, setBounds] = useState({})

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude })
      }
    )
  }, [])

  return (
    <>
      <Header setCoordinates={setCoordinates} />
      <div className='grid md:grid-cols-3 gap-y-1  '>
        <List
          places={places}
          setPlaces={setPlaces}
          coordinates={coordinates}
          bounds={bounds}
        />

        <div className='grid col-span-2'>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filtered.length ? filtered : places}
          />
        </div>
      </div>
    </>
  )
}

export default App
