/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
// @ts-nocheck
import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

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
    if (countryData.filteredCountries.length > 0) {
      dispatch(setPerPage(countryData.filteredCountries.length))
    } else {
      dispatch(setPerPage(countryData.allCountries.length))
    }
  }, [
    countryData.filteredCountries.length,
    countryData.allCountries.length,
    dispatch,
    pagination.pageShowLength,
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
            className={`page-item ${
              pagination.currentPage === number ? 'active' : ''
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
      <div className='paginationArea w-full'>
        <nav aria-label='navigation' className=''>
          <ul className='pagination flex w-full justify-center '>
            <li className='page-item previous flex w-auto px-4 py-2 cursor-pointer'>
              <a
                className='page-link flex justify-center items-center'
                onClick={() => {
                  dispatch(prevPage())
                }}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  class='feather feather-chevron-left'>
                  <polyline points='15 18 9 12 15 6'></polyline>
                </svg>
                <span>Prev</span>
              </a>
            </li>

            {paginationArea()}

            <li className='page-item next px-4 py-2 cursor-pointer'>
              <a
                onClick={() => {
                  dispatch(nextPage())
                }}
                className='page-link flex justify-center items-center'>
                <span>Next</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  className='feather feather-chevron-right'>
                  <polyline points='9 18 15 12 9 6'></polyline>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Pagination
