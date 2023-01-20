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
  },
})

export const { setCountries } = countrySlice.actions
export default countrySlice.reducer
