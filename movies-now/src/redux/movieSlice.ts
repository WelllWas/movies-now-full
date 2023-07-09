import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'movie',
  initialState: {
    movie: {},
  },
  reducers: {
    setMovie(state, { payload }) {
      return {...state, movie: {...payload}}
    },
    resetMovie(state){
      return {...state, movie: {}}
    }
  }
})

export const { setMovie, resetMovie } = slice.actions

export const selectMovie = (state: any) => state.movie

export default slice.reducer