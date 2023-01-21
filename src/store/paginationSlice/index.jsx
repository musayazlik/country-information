import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentPage: 1,
  totalPages: 10,
  pageShowLength: 12,
}

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload
    },
    setPerPage: (state, action) => {
      state.totalPages = Math.ceil(action.payload / state.pageShowLength)
    },
    nextPage: (state) => {
      if (state.currentPage < state.totalPages) {
        state.currentPage += 1
      } else {
        state.currentPage = state.totalPages
      }
    },
    prevPage: (state) => {
      if (state.currentPage > 1) {
        state.currentPage -= 1
      } else {
        state.currentPage = 1
      }
    },
  },
})

export const { setPage, setPerPage, nextPage, prevPage } =
  paginationSlice.actions

export default paginationSlice.reducer
