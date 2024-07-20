import { createSlice } from '@reduxjs/toolkit';

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    charactersList: [],
    singleCharacter: null,
    favorites: [],
  },
  reducers: {
    setChars: (state, action) => {
      state.charactersList = action.payload
    },
    setSingleChar: (state, action) => {
      state.singleCharacter = action.payload
    },
    addToFavorites: (state, action) => {
      const findCharacter = state.favorites.find(char => {
        return char.name === action.payload.name
      })
      if (!findCharacter) {
        state.favorites.push({ ...action.payload })
      } else {
        /* remove from array */
      }
    }
  }
})

export const { setChars, setSingleChar, addToFavorites } = charactersSlice.actions

export default charactersSlice.reducer