import { createSlice } from "@reduxjs/toolkit";

export const speciesSlice = createSlice({
  name: 'species',
  initialState: {
    speciesList: []
  },

  reducers: {
    setSpeciesList: (state, action) => {
      state.speciesList = action.payload
    }
  }
})

export const { setSpeciesList } = speciesSlice.actions

export default speciesSlice.reducer