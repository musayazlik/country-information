// @ts-nocheck
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allCountries: [],
  filteredCountries: [],
  countryDetails: [],
  searchStatus: false,
}

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    setCountries: (state, action) => {
      state.allCountries = action.payload
    },
    setFilteredCountries: (state, action) => {
      if (state.filteredCountries > 0) {
        state.filteredCountries = state.filteredCountries.filter((country) => {
          return country.region === action.payload
        })
      } else {
        state.filteredCountries = state.allCountries.filter((country) => {
          return country.region === action.payload
        })
      }
    },
    setCountryDetails: (state, action) => {
      state.countryDetails = action.payload
    },
    setSearch: (state, action) => {
      state.filteredCountries = action.payload.findData
      state.searchStatus = action.payload.searchStatus
    },
  },
})

export const { setCountries, setFilteredCountries, setCountryDetails } =
  countrySlice.actions
export default countrySlice.reducer
