import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    value: 0
}
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state, action) {
            state.value+=1
        },
        decrement(state, action) {
          state.value > 0 ? state.value -= 1 : state.value;
        },
        reset(state, action) {
            state.value = 0
        }
    }
})
export const {increment, decrement, reset} = counterSlice.actions
export default counterSlice.reducer