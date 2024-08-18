import { configureStore } from '@reduxjs/toolkit'
import charactersSlice from './slices/charactersSlice'
import apiSlice from './slices/apiSlice'
import filmsSlice from './slices/filmsSlice'
import searchSlice from './slices/searchSlice'

export default configureStore({
  reducer: {
    characters: charactersSlice,
    films: filmsSlice,
    search: searchSlice,
    api: apiSlice
  }
})