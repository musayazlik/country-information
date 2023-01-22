// @ts-nocheck

import React from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'

/** Country Slice */
import { setCountries } from '../../store/countrySlice'

/** Components */
import Header from '../../components/header'
import Card from '../../components/card'
import Search from '../../components/search'
import FilterDropDown from '../../components/filterDropDown'
import Pagination from '../../components/pagination'

const Home = () => {
  const dispatch = useDispatch()
  /** Data */
  React.useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/all`)
      .then((res) => {
        dispatch(setCountries(res.data))
      })
      .then((err) => {
        console.log(err)
      })
  }, [])

  const data = useSelector((state) => state?.country)
  const pagination = useSelector((state) => state?.pagination)

  return (
    <>
      <Header />

      <div className='container flex flex-col gap-10 items-start justify-center md:flex-row md:justify-between md:items-stretch py-12'>
        <Search />
        <FilterDropDown />
      </div>

      <div className='container flex flex-col sm:grid grid-cols-12 gap-x-8 gap-y-10 mb-20'>
        {data.filteredCountries.length > 0
          ? data.filteredCountries
              .slice(
                (pagination.currentPage - 1) * pagination.pageShowLength,
                pagination.pageShowLength * pagination.currentPage
              )
              .map((country, index) => {
                return (
                  <Card
                    key={index}
                    name={country.name.common}
                    population={country.population}
                    region={country.region}
                    capital={country.capital}
                    flag={country.flags.svg}
                  />
                )
              })
          : data.allCountries
              .slice(
                (pagination.currentPage - 1) * pagination.pageShowLength,
                pagination.pageShowLength * pagination.currentPage
              )
              .map((country, index) => {
                return (
                  <Card
                    key={index}
                    name={country.name.common}
                    population={country.population}
                    region={country.region}
                    capital={country.capital}
                    flag={country.flags.svg}
                  />
                )
              })}
      </div>
      <Pagination />
    </>
  )
}

export default Home
