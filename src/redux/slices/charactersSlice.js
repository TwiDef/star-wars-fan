import { createSlice } from '@reduxjs/toolkit';

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    charactersList: [],
    singleCharacter: null,
  },
  reducers: {
    setChars: (state, action) => {
      state.charactersList = action.payload
    },
    setSingleChar: (state, action) => {
      state.singleCharacter = action.payload
    }
  }
})

export const { setChars, setSingleChar } = charactersSlice.actions

export default charactersSlice.reducer