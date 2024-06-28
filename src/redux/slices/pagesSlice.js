import { createSlice } from '@reduxjs/toolkit';

export const pagesSlice = createSlice({
  name: 'pages',
  initialState: {
    activePage: localStorage.getItem('activePage') ?
      Number(localStorage.getItem('activePage')) :
      0
  },
  reducers: {
    onSetIndex: (state, action) => {
      state.activePage = action.payload
      localStorage.setItem('activePage', action.payload)
    }
  }
})

export const { onSetIndex } = pagesSlice.actions

export default pagesSlice.reducer