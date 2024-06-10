import { createSlice } from '@reduxjs/toolkit';

export const charactersSlice = createSlice({
    name: 'characters',
    initialState: {
        charactersList: []
    },
    reducers: {
        setChars: (state, action) => {
            state.charactersList = action.payload
        }
    }
})


export const { setChars } = charactersSlice.actions

export default charactersSlice.reducer