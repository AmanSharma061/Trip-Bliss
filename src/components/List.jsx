//List of Places
import React from 'react'
import { useEffect } from 'react'
import { useState, useRef, createRef } from 'react'
import { useMap } from '../contexts/mapContext/mapContextProvider'
import Placedetails from './Placedetails'
import { getPlacesData } from '../Api/data'
function List ({ coordinates, bounds, childclicked }) {
  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState(0)
  const { places, setPlaces, childClicked, filtered, setFiltered } = useMap()
  const [elementRefs, setElementRefs] = useState([])

  useEffect(() => {
    const filteredData = places.filter(place => place.rating > rating)
    setFiltered(filteredData)
  }, [rating])

  useEffect(() => {
    const refs = Array(places?.length)
      .fill()
      .map((_, i) => elementRefs[i] || createRef())
    setElementRefs(refs)
  }, [places])

  useEffect(() => {
    const ne = bounds.ne
    const sw = bounds.sw
    // setIsLoading(true)

    getPlacesData(type, ne, sw).then(data => {
      setPlaces(data.filter(place => place.name && place.num_reviews > 0))
      // filteredData(places, rating)
      // let xx = false
      // setIsLoading(xx)
    })
  }, [coordinates, bounds, type, rating])

  return (
    <div>
      {/* <div>
        <h1 className='font-bold pb-2 px-4 text-center text-2xl '>
          Hotels , Resturants and Attractions Around You
        </h1>
      </div> */}
      <div className='grid grid-cols-3 md:grid-cols-7 md:px-2 ml-4 font-semibold  md:gap-x-32  gap-x-8 '>
        <div>
          <h1 className='px-2 py-1'>Type</h1>
          <select
            name=''
            id=''
            value={type}
            onChange={e => setType(e.target.value)}
            className='border-2 border-gray-300 rounded px-2 py-1 '
          >
            <option value='hotels'>Hotels</option>
            <option value='restaurants'>Restaurants</option>
            <option value='attractions'>Attractions</option>
          </select>
        </div>

        <div>
          {/* Rating Selection */}
          <h1 className='px-2 py-1'>Rating</h1>
          <select
            value={rating}
            onChange={e => setRating(e.target.value)}
            className='border-2 border-gray-3000 rounded px-2 py-1'
          >
            <option value={0}>All</option>
            <option value={3}>Above 3.0</option>
            <option value={4}>Above 4.0</option>
            <option value={4.5}>Above 4.5</option>
          </select>
        </div>
      </div>

      {/* Resturants Details Card */}
      <div className='overflow-scroll h-[75vh]  mt-5  shadow-inner mx-2'>
        {filtered.length ? (
          <>
            {filtered?.map((place, i) => (
              <div className='grid grid-cols-1' key={i} ref={elementRefs[i]}>
                <Placedetails
                  place={place}
                  selected={childClicked === i}
                  refProp={elementRefs[i]}
                />
              </div>
            ))}
          </>
        ) : (
          <>
            {places?.map((place, i) => (
              <div className='grid grid-cols-1' key={i} ref={elementRefs[i]}>
                <Placedetails
                  place={place}
                  selected={childClicked === i}
                  refProp={elementRefs[i]}
                />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default List
