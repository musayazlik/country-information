import Header from '../../components/header'
import React from 'react'
import Search from '../../components/search'
import FilterDropDown from '../../components/filterDropDown'

const Home = () => {
  return (
    <>
      <Header />

      <div className='container flex flex-col md:flex-row justify-between items-center py-12'>
        <Search />
        <FilterDropDown />
      </div>
    </>
  )
}

export default Home
