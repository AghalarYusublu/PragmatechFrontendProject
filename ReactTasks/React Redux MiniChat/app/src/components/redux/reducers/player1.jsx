import { createSlice } from "@reduxjs/toolkit";



const state = {
    message: [],
    name: 'Player 1',
    messageCount: 0
}



const player1Message = createSlice({
    name: 'Player 1',
    initialState: state,
    reducers: {
        setPlayer1Message: (state, action) => {
            state.message.push(action.payload)
        },
        setMessage1Count: (state, action) => {
            state.messageCount = action.payload
        }
    }
})
export const { setPlayer1Message, setMessage1Count } = player1Message.actions;
export default player1Message.reducer