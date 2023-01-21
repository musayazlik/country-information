import { configureStore } from '@reduxjs/toolkit'
import countrySlice from './countrySlice'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import paginationSlice from './paginationSlice'

const store = configureStore({
  reducer: {
    country: countrySlice,
    pagination: paginationSlice,
  },
  middleware: [thunk, logger],
})

export default store
