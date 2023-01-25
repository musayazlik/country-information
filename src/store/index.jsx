import { configureStore } from '@reduxjs/toolkit'
import countrySlice from './countrySlice'
import paginationSlice from './paginationSlice'

const store = configureStore({
  reducer: {
    country: countrySlice,
    pagination: paginationSlice,
  },
})

export default store
