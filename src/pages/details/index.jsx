// @ts-nocheck
import React from 'react'

/** Components */
import Header from '../../components/header'

/** React Router Dom */
import { Link } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'
/** Icons */
import { RiArrowLeftLine } from 'react-icons/ri'

export const CountryDetailsLoader = async ({ params }) => {
  /** Country Details Fetch */
  const res = await fetch(
    `${process.env.REACT_APP_API_URL}/name/${params.name}?fields=name,population,region,flags,capital,subregion,tld,currencies,languages,borders`
  )
  const dataDetails = await res.json()

  /** Country Border Fetch  */
  const borderRes = await fetch(
    `${
      process.env.REACT_APP_API_URL
    }/alpha?codes=${dataDetails[0]?.borders?.join(',')}&fields=name`
  )
  const borderData = await borderRes.json()

  return { dataDetails, borderData }
}

const Details = () => {
  const { dataDetails, borderData } = useLoaderData()
  const data = dataDetails[0]

  const format = (n) => {
    if (n === undefined) return
    return n
      .toFixed(2)
      .replace('.', ',')
      .replace(/\d{3}(?=(\d{3})*,)/g, function (s) {
        return '.' + s
      })
      .slice(0, -3)
  }

  return (
    <>
      <Header />

      <div className='container flex flex-col space-y-9'>
        <div className='col-span-12'>
          <Link
            to={'/'}
            className=' shadow-cs text-vdb-lm-text dark:text-white  bg-white dark:bg-vdb-dm-bg dark:shadow-dm-blue/50 cursor-pointer px-7 py-3 mt-10 font-semibold text-base inline-flex justify-center items-center gap-x-3 rounded-lg '>
            <RiArrowLeftLine className='inline-block text-xl ' />
            Back
          </Link>
        </div>
        <div className='flex flex-col lg:grid grid-cols-12 gap-16'>
          <div className='col-span-12 lg:col-span-6'>
            <img src={data?.flags?.svg} alt='flag' className=' ' />
          </div>
          <div className='col-span-12 lg:col-span-6 py-6'>
            <h1 className='text-3xl font-bold text-vdb-lm-text dark:text-white mb-6'>
              {data?.name?.common || '-'}
            </h1>
            <div className=' flex flex-col sm:grid grid-cols-12 gap-x-10 gap-y-6'>
              <div className='col-span-12 lg:col-span-6'>
                <p className='text-vdb-lm-text dark:text-white text-sm mb-2'>
                  <span className='font-bold'>Native Name:</span>{' '}
                  {data?.name.nativeName[Object.keys(data?.name.nativeName)]
                    ?.common || '-'}
                </p>
                <p className='text-vdb-lm-text dark:text-white text-sm mb-2'>
                  <span className='font-bold'>Population:</span>{' '}
                  {format(data?.population)}
                </p>
                <p className='text-vdb-lm-text dark:text-white text-sm mb-2'>
                  <span className='font-bold'>Region:</span> {data?.region}
                </p>
                <p className='text-vdb-lm-text dark:text-white text-sm mb-2'>
                  <span className='font-bold'>Sub Region:</span>{' '}
                  {data?.subregion || '-'}
                </p>
                <p className='text-vdb-lm-text dark:text-white text-sm mb-2'>
                  <span className='font-bold'>Capital:</span>{' '}
                  {data?.capital || '-'}
                </p>
              </div>
              <div className='col-span-12 lg:col-span-6'>
                <p className='text-vdb-lm-text dark:text-white text-sm mb-2'>
                  <span className='font-bold'>Top Level Domain:</span>{' '}
                  {data?.tld || '-'}
                </p>
                <p className='text-vdb-lm-text dark:text-white text-sm mb-2'>
                  <span className='font-bold'>Currencies:</span>{' '}
                  {data?.currencies[Object.keys(data?.currencies)]?.name || '-'}
                </p>
                <p className='text-vdb-lm-text dark:text-white text-sm mb-2'>
                  <span className='font-bold'>Languages:</span>{' '}
                  {(data?.languages &&
                    Object.values(data?.languages).join(', ')) ||
                    '-'}
                </p>
              </div>
            </div>
            <div className='col-span-12 mt-10'>
              <div className='flex gap-3 items-center flex-wrap'>
                <h1 className='text-lg font-bold text-vdb-lm-text dark:text-white whitespace-nowrap '>
                  Border Countries:
                </h1>

                {borderData.length >= 1 ? (
                  borderData?.map((border, index) => (
                    <button
                      key={index}
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
      </div>
    </>
  )
}

export default Details
