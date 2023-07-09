import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: [],
  },
  reducers: {
    setFavorites(state, { payload }) {
      return {...state, favorites: state.favorites.concat(payload)}
    },
  }
})

export const { setFavorites } = slice.actions

export const selectFavorites = (state: any) => state.favorites

export default slice.reducer