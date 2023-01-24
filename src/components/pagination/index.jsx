/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
// @ts-nocheck
import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'

/** Pagination Slice */
import {
  setPage,
  prevPage,
  nextPage,
  setPerPage,
} from '../../store/paginationSlice'

const Pagination = () => {
  const dispatch = useDispatch()
  /** Pagination And Country State Data */
  const pagination = useSelector((state) => state?.pagination)
  const countryData = useSelector((state) => state?.country)

  /** Set Total Pages */
  useEffect(() => {
    if (
      countryData.searchStatus === true ||
      (countryData.filteredCountries &&
        countryData.filteredCountries.length > 0)
    ) {
      dispatch(setPerPage(countryData.filteredCountries.length))
    } else {
      dispatch(setPerPage(countryData.allCountries.length))
    }
  }, [
    countryData.allCountries,
    countryData.filteredCountries,
    countryData.searchStatus,
    dispatch,
  ])

  /** Pagination Number Area */
  const paginationArea = () => {
    const items = []
    let threePoints = true
    for (let number = 1; number <= pagination.totalPages; number++) {
      if (
        number <= 1 ||
        number >= pagination.totalPages ||
        (number >= pagination.currentPage - 1 &&
          number <= pagination.currentPage + 1)
      ) {
        items.push(
          <li
            key={number}
            className={`page-item px-2 sm:px-4 sm:py-2 cursor-pointer border-2 border-dm-gray/50 text-dm-gray rounded-md shadow-cs flex justify-center items-center ${
              pagination.currentPage === number
                ? 'bg-vdb-dm-bg text-white border-dm-blue'
                : ''
            }`}
            onClick={() => {
              dispatch(setPage(number))
            }}>
            <a className='page-link'>{number}</a>
          </li>
        )
      } else {
        if (threePoints === true) {
          items.push(
            <li key={number} className='page-item threePoints'>
              <a className='page-link'>...</a>
            </li>
          )
          threePoints = false
        }
      }
    }
    return items
  }

  return (
    <>
      <div className='paginationArea w-full mb-8'>
        <nav aria-label='navigation' className=''>
          <ul className='pagination flex w-full items-center justify-center gap-x-2 sm:gap-3  '>
            <li className='page-item next pr-2 pl-1 py-1 sm:pl-2 sm:pr-4 sm:py-2 cursor-pointer border-2 border-dm-gray/50 text-dm-gray rounded-md shadow-cs hover:bg-dm-gray hover:text-white duration-200'>
              <a
                className='page-link flex justify-center items-center'
                onClick={() => {
                  dispatch(prevPage())
                }}>
                <RiArrowLeftSLine fontSize={24} />
                <span className='hidden sm:block'>Prev</span>
              </a>
            </li>

            {paginationArea()}

            <li className='page-item next pr-1 pl-2 py-1 sm:pl-4 sm:pr-2 sm:py-2 cursor-pointer border-2 border-dm-gray/50 text-dm-gray rounded-md shadow-cs hover:bg-dm-gray hover:text-white duration-200'>
              <a
                onClick={() => {
                  dispatch(nextPage())
                }}
                className='page-link flex justify-center items-center'>
                <span className='hidden sm:block'>Next</span>
                <RiArrowRightSLine fontSize={24} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Pagination
