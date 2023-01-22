// @ts-nocheck
import Header from '../../components/header'
import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setCountryDetails } from '../../store/countrySlice'
import { Link, useParams } from 'react-router-dom'
import { RiArrowLeftLine } from 'react-icons/ri'

const Details = () => {
  const dispatch = useDispatch()
  const { name } = useParams()
  const [borders, setBorders] = React.useState([])

  /** Data */
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/name/${name}?fields=name,population,region,flags,capital,subregion,tld,currencies,languages,borders`
      )
      .then((res) => {
        dispatch(setCountryDetails(res.data))
      })
      .catch((err) => {
        console.log(err)
      })
  }, [dispatch, name])
  const data = useSelector((state) => state?.country.countryDetails)

  useEffect(() => {
    if (data[0]?.borders.length > 0) {
      axios
        .get(
          `https://restcountries.com/v3.1/alpha?codes=${data[0]?.borders.toString()}`
        )
        .then((res) => {
          setBorders(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [data])

  return (
    <>
      <Header />

      <div className='container flex flex-col sm:grid grid-cols-12 gap-x-20 gap-y-10 mb-20'>
        <div className='col-span-12'>
          <Link
            to={'/'}
            className=' shadow-cs text-vdb-lm-text dark:text-white  bg-white dark:bg-vdb-dm-bg dark:shadow-dm-blue/50 cursor-pointer px-7 py-3 mt-10 font-semibold text-base inline-flex justify-center items-center gap-x-3 rounded-lg '>
            <RiArrowLeftLine className='inline-block text-xl ' />
            Back
          </Link>
        </div>
        <div className='col-span-12 lg:col-span-5'>
          <img
            src={data[0]?.flags.svg}
            alt='flag'
            className='w-full rounded-sm object-contain object-left-top max-h-96'
          />
        </div>
        <div className='col-span-12 lg:col-span-7 py-6'>
          <h1 className='text-3xl font-bold text-vdb-lm-text dark:text-white mb-6'>
            {data[0]?.name.common}
          </h1>
          <div className=' flex flex-col sm:grid grid-cols-12 gap-x-10 gap-y-6'>
            <div className='col-span-12 lg:col-span-6'>
              <p className='text-vdb-lm-text dark:text-white text-sm mb-2'>
                <span className='font-bold'>Native Name:</span>{' '}
                {data[0]?.name.nativeName[
                  Object.keys(data[0]?.name.nativeName)[0]
                ].common || '-'}
              </p>
              <p className='text-vdb-lm-text dark:text-white text-sm mb-2'>
                <span className='font-bold'>Population:</span>{' '}
                {data[0]?.population}
              </p>
              <p className='text-vdb-lm-text dark:text-white text-sm mb-2'>
                <span className='font-bold'>Region:</span> {data[0]?.region}
              </p>
              <p className='text-vdb-lm-text dark:text-white text-sm mb-2'>
                <span className='font-bold'>Sub Region:</span>{' '}
                {data[0]?.subregion || '-'}
              </p>
              <p className='text-vdb-lm-text dark:text-white text-sm mb-2'>
                <span className='font-bold'>Capital:</span>{' '}
                {data[0]?.capital[0] || '-'}
              </p>
            </div>
            <div className='col-span-12 lg:col-span-6'>
              <p className='text-vdb-lm-text dark:text-white text-sm mb-2'>
                <span className='font-bold'>Top Level Domain:</span>{' '}
                {data[0]?.tld[0] || '-'}
              </p>
              <p className='text-vdb-lm-text dark:text-white text-sm mb-2'>
                <span className='font-bold'>Currencies:</span>{' '}
                {data[0]?.currencies[Object.keys(data[0]?.currencies)[0]]
                  ?.name || '-'}
              </p>
              <p className='text-vdb-lm-text dark:text-white text-sm mb-2'>
                <span className='font-bold'>Languages:</span>{' '}
                {(data[0]?.languages &&
                  Object.values(data[0]?.languages).join(', ')) ||
                  '-'}
              </p>
            </div>
          </div>
          <div className='col-span-12 mt-10'>
            <div className='flex gap-3 items-center flex-wrap'>
              <h1 className='text-lg font-bold text-vdb-lm-text dark:text-white whitespace-nowrap '>
                Border Countries:
              </h1>

              {borders.length >= 1 ? (
                borders?.map((border) => (
                  <button
                    key={border}
                    className='shadow-cs text-vdb-lm-text dark:text-white  bg-white dark:bg-vdb-dm-bg dark:shadow-dm-blue/50 cursor-pointer px-5 py-1 font-semibold text-base inline-flex justify-center items-center gap-x-3 rounded-md whitespace-nowrap'>
                    {border?.name.common}
                  </button>
                ))
              ) : (
                <p className='text-vdb-lm-text dark:text-white text-sm'>
                  No border countries
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Details
