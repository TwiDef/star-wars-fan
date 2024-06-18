import { createSlice } from '@reduxjs/toolkit';

export const pagesSlice = createSlice({
  name: 'pages',
  initialState: {
    activePage: 0
  },
  reducers: {
    onSetIndex: (state, action) => {
      state.activePage = action.payload
    }
  }
})

export const { onSetIndex } = pagesSlice.actions

export default pagesSlice.reducer