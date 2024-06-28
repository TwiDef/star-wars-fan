import { configureStore } from '@reduxjs/toolkit'
import charactersSlice from './slices/charactersSlice'
import pagesSlice from './slices/pagesSlice'
import apiSlice from './slices/apiSlice'

export default configureStore({
  reducer: {
    characters: charactersSlice,
    pages: pagesSlice,
    api: apiSlice
  }
})