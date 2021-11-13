import { configureStore } from "@reduxjs/toolkit";

import player1message from './reducers/player1'
import player2message from './reducers/player2'



export default configureStore({
    reducer :{
        player1message:player1message,
        player2message:player2message,
    }
})
