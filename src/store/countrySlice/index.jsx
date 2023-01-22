// @ts-nocheck
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allCountries: [],
  filteredCountries: [],
}

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    setCountries: (state, action) => {
      state.allCountries = action.payload
    },
    setFilteredCountries: (state, action) => {
      state.filteredCountries = state.allCountries.filter((country) => {
        return country.region === action.payload
      })
    },
  },
})

export const { setCountries, setFilteredCountries } = countrySlice.actions
export default countrySlice.reducer
