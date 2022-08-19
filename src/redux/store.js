import { configureStore } from '@reduxjs/toolkit'
import mainPageSliceReducer from './mainPageSlice'
export default configureStore({
    reducer: {
        mainPageSliceReducer: mainPageSliceReducer
    },
})