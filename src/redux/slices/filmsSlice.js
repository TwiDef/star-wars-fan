import { createSlice } from '@reduxjs/toolkit';

export const filmsSlice = createSlice({
  name: 'films',
  initialState: {
    filmList: []
  },
  reducers: {
    setFilms: (state, action) => {
      state.filmList = action.payload
    }
  }
})

export const { setFilms } = filmsSlice.actions

export default filmsSlice.reducer