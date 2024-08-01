import { configureStore } from '@reduxjs/toolkit'
import charactersSlice from './slices/charactersSlice'
import pagesSlice from './slices/pagesSlice'
import apiSlice from './slices/apiSlice'
import filmsSlice from './slices/filmsSlice'

export default configureStore({
  reducer: {
    characters: charactersSlice,
    films: filmsSlice,
    pages: pagesSlice,
    api: apiSlice
  }
})