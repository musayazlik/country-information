// @ts-nocheck
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allCountries: [],
  filteredCountries: [],
  countryDetails: [],
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
    setCountryDetails: (state, action) => {
      state.countryDetails = action.payload
    },
  },
})

export const { setCountries, setFilteredCountries, setCountryDetails } =
  countrySlice.actions
export default countrySlice.reducer
