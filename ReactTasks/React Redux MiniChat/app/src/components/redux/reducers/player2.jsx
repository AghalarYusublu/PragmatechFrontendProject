import { createSlice } from "@reduxjs/toolkit";

const state = {
    message: [],
    name : 'Player 2',
    messageCount: 0
}



const player2Message = createSlice({
    name: 'Player 2',
    initialState: state,
    reducers: {
        setPlayer2Message: (state, action) => {
           state.message.push(action.payload)
        },
        setMessage2Count: (state, action) => {
            state.messageCount = action.payload
        }
    }
})
export const { setPlayer2Message ,setMessage2Count } = player2Message.actions;
export default player2Message.reducer