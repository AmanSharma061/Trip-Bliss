import React from 'react'
import GoogleMapReact from 'google-map-react'
import { IoIosLocate } from 'react-icons/io'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import StarIcon from '@mui/icons-material/Star'
import { useMap } from '../contexts/mapContext/mapContextProvider'

function Map ({ setCoordinates, setBounds, coordinates, places }) {
  const { setChildClicked } = useMap()


  return (
    <div>
      <div className='h-[87vh] w-[100%]  py-2 px-2'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyChkaFpBrUZ82jlfCGNDm57Dm0tQRm3UDM' }}
          // defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          onChange={e => {
            setCoordinates({ lat: e.center.lat, lng: e.center.lng })
            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
          }}
       
          // onChildClick={child => setChildClicked(child)}
        >
          {/* Small card with resturant image and name  */}
          {places?.map((place, i) => (
            <div
              className='h-[150px] w-[150px] cursor-pointer bg-gray-200 rounded-md shadow-md flex flex-col items-center justify-center'
              key={i}
              onClick={() => setChildClicked(i)}
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
            >
              <img
                className='h-[100px] w-[150px] object-cover '
                src={
                  place.photo
                    ? place.photo.images.small.url
                    :(place.photo?place.photo.images.large.url:"https://images.unsplash.com/photo-1576300292702-bb2ba4d4c15c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
                }
                alt="resturant's image"
              />
              <h4 className='text-center font-bold'>{place.name}</h4>

              <Rating
                name='text-feedback'
                value={place.rating}
                readOnly
                size='small'
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />
                }
              />
            </div>
          ))}
        </GoogleMapReact>
      </div>
    </div>
  )
}

export default Map
