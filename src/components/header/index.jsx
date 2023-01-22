import React, { useState, useEffect } from 'react'

/** Icons */
import { RiMoonLine, RiSunLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Header = () => {
  /** Dark Mode State */
  const [darkMode, setDarkMode] = useState(false)

  /** Dark Mode Actions */
  useEffect(() => {
    const body = document.querySelector('body')
    const darkMode = localStorage.getItem('darkMode')
    if (darkMode === 'true') {
      body.classList.add('dark')
      setDarkMode(true)
    }
  }, [])
  const darkModeStatus = () => {
    const body = document.querySelector('body')
    body.classList.toggle('dark')
    if (body.classList.contains('dark')) {
      localStorage.setItem('darkMode', 'true')
      setDarkMode(true)
    } else {
      localStorage.setItem('darkMode', 'false')
      setDarkMode(false)
    }
  }

  return (
    <header className='bg-white py-6 shadow-cs dark:shadow-dm-blue/50 dark:bg-vdb-dm-bg duration-200 '>
      <div className='container'>
        <div className='flex flex-cols justify-between items-center'>
          <Link to={'/'}>
            <h1 className='font-extrabold text-sm sm:text-xl text-vdb-lm-text dark:text-white'>
              Where in the world?
            </h1>
          </Link>

          <div
            onClick={() => darkModeStatus()}
            className='text-vdb-lm-text dark:text-white cursor-pointer font-semibold flex justify-center items-center gap-x-2'>
            {darkMode ? (
              <RiSunLine className='text-xl' />
            ) : (
              <RiMoonLine className='text-xl' />
            )}
            <span>Dark Mode</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
