import { configureStore } from '@reduxjs/toolkit'
import charactersSlice from './slices/charactersSlice'
import pagesSlice from './slices/pagesSlice'

export default configureStore({
  reducer: {
    characters: charactersSlice,
    pages: pagesSlice
  }
})