import { configureStore } from '@reduxjs/toolkit'
import  counterReducer  from '../features/counter/counterSlice'

const store = configureStore({
    reducer: {
        count: counterReducer
    }
})
export default store