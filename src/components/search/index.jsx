/* eslint-disable no-unused-vars */
// @ts-nocheck
import React from 'react'
/** Icons */
import { RiSearchLine } from 'react-icons/ri'
import { useSelector, useDispatch } from 'react-redux'

const Search = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state?.country)

  const handleSearch = (value) => {
    if (value.length > 0) {
      if (data.filteredCountries.length > 0) {
        const findData = data.filteredCountries.filter((item) => {
          return item.name.common.toLowerCase().includes(value.toLowerCase())
        })
        dispatch({
          type: 'country/setSearch',
          payload: { findData, searchStatus: true },
        })
      } else {
        const findData = data.allCountries.filter((item) => {
          return item.name.common.toLowerCase().includes(value.toLowerCase())
        })
        dispatch({
          type: 'country/setSearch',
          payload: { findData, searchStatus: true },
        })
      }
    } else {
      dispatch({
        type: 'country/setSearch',
        payload: { findData: [], searchStatus: false },
      })
    }
  }

  return (
    <>
      <div className='relative w-full'>
        <input
          type='text'
          className='w-full h-full md:max-w-md pl-16 pr-6 py-4 rounded-md shadow-dm-blue/5 shadow-cs focus:outline-none focus:ring-2 focus:ring-vdb-dm-bg/50 dark:focus:ring-white text-vdb-lm-text dark:bg-vdb-dm-bg dark:shadow-dm-blue/20 dark:text-white '
          placeholder='Search for a country...'
          onChange={(e) => handleSearch(e.target.value)}
        />
        <div className='absolute top-0 bottom-0 my-auto left-8  flex items-center'>
          <RiSearchLine className='text-vdb-lm-text dark:text-white text-lg' />
        </div>
      </div>
    </>
  )
}

export default Search
