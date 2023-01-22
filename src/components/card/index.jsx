import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Card = ({
  name = '',
  population = '',
  region = '',
  capital = '',
  flag = '',
}) => {
  const dispatch = useDispatch()
  return (
    <>
      <Link
        to={`details/${name}`}
        onClick={() => {
          dispatch({ type: 'country/setCountryDetails', payload: {} })
          window.scrollTo(0, 0)
        }}
        className='col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3'>
        <div className=' bg-white shadow-cs dark:shadow-dm-blue/50 dark:bg-vdb-dm-bg duration-200 rounded-md'>
          <img
            src={flag}
            alt='Afghanistan'
            className='w-full h-56 rounded-t-md object-center object-cover'
          />
          <div className='p-6'>
            <h2 className='text-vdb-lm-text dark:text-white text-lg font-bold mb-4'>
              {name}
            </h2>
            <p className='text-vdb-lm-text dark:text-white text-sm mb-2'>
              <span className='font-bold'>Population:</span> {population}
            </p>
            <p className='text-vdb-lm-text dark:text-white text-sm mb-2'>
              <span className='font-bold'>Region:</span> {region}
            </p>
            <p className='text-vdb-lm-text dark:text-white text-sm mb-6'>
              <span className='font-bold'>Capital:</span> {capital || 'N/A'}
            </p>
          </div>
        </div>
      </Link>
    </>
  )
}

export default Card
