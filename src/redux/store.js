import { configureStore } from '@reduxjs/toolkit'
import charactersSlice from './slices/charactersSlice'

export default configureStore({
    reducer: {
        characters: charactersSlice
    }
})