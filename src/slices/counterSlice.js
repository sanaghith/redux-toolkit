import {createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name : "counter",
    initialState:{
        counter : 0,
    },
    reducers :{
        increment : (state , action) => {
            state.counter = state.counter + 1
        },
        decrement : (state , action) => {
            state.counter = state.counter - 1 
        }
    }
})


const counterReducer = counterSlice.reducer;
export default counterReducer
export const {increment , decrement} = counterSlice.actions;
