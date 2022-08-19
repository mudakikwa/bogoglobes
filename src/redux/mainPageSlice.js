import { createSlice } from '@reduxjs/toolkit'

export const mainPageSlice = createSlice({
    name: 'mainPageSlice',
    initialState: {
        percentage: 0,
        showReel:false,
        playAudio:false,
        currentProject:1,
        showAbout:false,
    },
    reducers: {
        setPercentage: (state,action) => {
            state.percentage = action.payload
        },
        setReel: (state, action) => {
            state.showReel = action.payload
        },
        setPlayaudio: (state, action) => {
            state.playAudio = action.payload
        },
        setCurrentProject: (state, action) => {
            state.currentProject = action.payload
        },
        setShowAbout: (state, action) => {
            state.showAbout = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setPercentage, setReel, setPlayaudio, setCurrentProject, setShowAbout } = mainPageSlice.actions

export default mainPageSlice.reducer