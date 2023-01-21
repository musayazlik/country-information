import React from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'

const FilterDropDown = () => {
  return (
    <>
      <details className='flex-shrink relative'>
        <summary className='flex flex-1 justify-between items-center pl-6 pr-4 py-4 gap-x-8 text-vdb-lm-text dark:text-white shadow-cs bg-white dark:bg-vdb-dm-bg dark:shadow-dm-blue/50 mb-2 cursor-pointer rounded-lg'>
          <p className='text-sm whitespace-nowrap'>Filter by Region</p>
          <RiArrowDownSLine className='ml-2' />
        </summary>
        <div className='flex flex-col absolute w-full px-6 py-4 gap-x-8 text-vdb-lm-text dark:text-white shadow-cs bg-white dark:bg-vdb-dm-bg dark:shadow-dm-blue/50 mb-2 cursor-pointer rounded-lg gap-y-2.5 text-base'>
          <div className='flex flex-row justify-between items-center last:mb-0 hover:scale-105 duration-200'>
            <p className='ml-2'>Africa</p>
          </div>
          <div className='flex flex-row justify-between items-center last:mb-0 hover:scale-105 duration-200'>
            <p className='ml-2'>America</p>
          </div>
          <div className='flex flex-row justify-between items-center last:mb-0 hover:scale-105 duration-200'>
            <p className='ml-2'>Asia</p>
          </div>
          <div className='flex flex-row justify-between items-center last:mb-0 hover:scale-105 duration-200'>
            <p className='ml-2'>Europe</p>
          </div>
          <div className='flex flex-row justify-between items-center last:mb-0 hover:scale-105 duration-200'>
            <p className='ml-2'>Oceania</p>
          </div>
        </div>
      </details>
    </>
  )
}

export default FilterDropDown
