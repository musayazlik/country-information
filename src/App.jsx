import React from 'react'
import './assets/styles/App.css'
import { useDispatch } from 'react-redux'
import { setCountries } from './store/countrySlice'
import axios from 'axios'

function App() {
  const dispatch = useDispatch()

  axios({
    method: 'GET',
    url: `${process.env.REACT_APP_API_URL}/all`,
  })
    .then((res) => {
      dispatch(setCountries(res.data))
    })
    .catch((err) => {
      console.log(err)
    })

  return (
    <>
      <h1>Home</h1>
    </>
  )
}

export default App
