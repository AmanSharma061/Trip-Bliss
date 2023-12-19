//Details of the places
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
;``
import { IoMdCall } from 'react-icons/io'
import { FaLocationDot } from 'react-icons/fa6'
import Rating from '@mui/material/Rating'
import StarIcon from '@mui/icons-material/Star'
import { useMap } from '../contexts/mapContext/mapContextProvider';

function Placedetails ({ place, refProp, selected }) {


if(selected)
    refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  return (
    <div>
      <div class='mx-auto my-10 grid max-w-screen-xl gap-y-4 sm:grid-cols-1 lg:grid-cols-1 cursor-pointer '>
        {/* <div class='mx-2 rounded-xl bg-gray-100'></div> */}
        <div class='group cursor mx-4 overflow-hidden rounded-xl bg-white shadow-xl duration-200 hover:-translate-y-4'>
          {/* image of the resturant and Name in a grid with two columns */}
          <div class='relative'>
            <img
              class='w-full h-52 object-cover'
              src={
                place.photo?place.photo.images.large.url:"https://images.unsplash.com/photo-1535850452425-140ee4a8dbae?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt='food'
            />
            <div class='absolute inset-0 bg-black bg-opacity-40 duration-200 group-hover:bg-opacity-60'></div>
          </div>
          <div class='flex flex-col p-4'>
            <div class='flex-1 '>
              <h3 class='mb-2 text-xl font-bold'>{place.name}</h3>
              {/* <p class='text-gray-500 text-xs font-medium'>
                {place.description}
              </p> */}
            </div>
            {/* Location , Phone , rating out of  */}
            <div class='flex flex-col items-start  justify-between mt-4'>
              <div class='flex items-center gap-x-1'>
                <FaLocationDot className='text-red-500 mx-1 ' />
                <p class='ml-1 text-gray-500 text-xs font-medium'>
                  {place.address}
                </p>
              </div>
              {place.phone && (
                <div class='flex items-center mt-2'>
                  <IoMdCall className='text-red-500 mx-1 mt-2' />
                  <p class='ml-1 text-gray-500 text-xs font-medium'>
                    {place.phone}
                  </p>
                </div>
              )}
              <div class='flex-col items-center mt-2   '>
                <p className='grid grid-cols-3  my-2 ml-1 text-gray-500 text-xs font-medium'>
                  <span>Ratings </span>

                  <Rating
                    name='text-feedback'
                    value={place.rating}
                    size='small'
                    readOnly
                    precision={0.5}
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />
                    }
                  />
                  <span>
                    {place.rating} out of {place.num_reviews}
                  </span>
                </p>
                {/* Ranking out of all resturants section */}
                <p class='ml-1 text-gray-500 text-xs font-medium grid grid-cols-3 '>
                  <span>Ranking </span>
                  <span className='col-span-2 pl-7'>{place.ranking}</span>
                </p>
                {/* Showing the cusines  */}
              </div>

              <p class='ml-1 text-gray-500 text-xs font-medium flex py-2 flex-wrap'>
                {place.cuisine
                  ? place.cuisine.map(c => (
                      <div className='px-1 py-1  '>
                        <button className='px-2  bg-gray-100 rounded-lg  py-1 '>
                          {c.name}
                        </button>
                      </div>
                    ))
                  : ''}
              </p>
              {/* Two buttons one for trip advisor page link and other one for the official website of resturant */}
              <div class='flex items-center mt-2 '>
                <button
                  class='px-2 py-1 text-xs font-medium text-white bg-red-500 rounded-lg flex items-center gap-x-2'
                  onClick={() => {
                    window.open(place.web_url, '_blank')
                  }}
                >
                  Trip Advisor <FaArrowRightLong />
                </button>
                <button
                  class='px-2 py-1 ml-2 text-xs font-medium text-white bg-red-500 rounded-lg flex items-center gap-x-2'
                  onClick={() => {
                    window.open(place.website, '_blank')
                  }}
                >
                  Website <FaArrowRightLong />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class='mx-2 rounded-xl bg-gray-100'></div>
      </div>
    </div>
  )
}

export default Placedetails
