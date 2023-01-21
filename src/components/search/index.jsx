import React from 'react'
import { RiSearchLine } from 'react-icons/ri'

const Search = () => {
  return (
    <>
      <div className='relative w-full'>
        <input
          type='text'
          className='w-full max-w-md h-12 pl-16 pr-6 py-3 rounded-md shadow-dm-blue/5 shadow-md focus:outline-none focus:ring-2 focus:ring-vdb-lm-text dark:focus:ring-white text-vdb-lm-text dark:bg-vdb-dm-bg dark:shadow-dm-blue/20 dark:text-white '
          placeholder='Search for a country...'
        />
        <div className='absolute top-0 bottom-0 my-auto left-8  flex items-center'>
          <RiSearchLine className='text-vdb-lm-text dark:text-white text-lg' />
        </div>
      </div>
    </>
  )
}

export default Search
