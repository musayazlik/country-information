import Header from '../../components/header'
import React from 'react'
import Search from '../../components/search'
import FilterDropDown from '../../components/filterDropDown'

const Home = () => {
  return (
    <>
      <Header />

      <div className='container flex flex-col gap-10 items-start justify-center md:flex-row md:justify-between md:items-stretch py-12'>
        <Search />
        <FilterDropDown />
      </div>
    </>
  )
}

export default Home
