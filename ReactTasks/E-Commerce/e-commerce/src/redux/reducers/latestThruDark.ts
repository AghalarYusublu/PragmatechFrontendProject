import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface latestState {
    ltdd: IltddData[]
}

interface IltddData {
    id: number;
    img: string;
    kicker?: string;
    title: string;
    desc: string;
}

const state:latestState = {
    ltdd: [
        {
            id: 1,
            img: "/images/Ama-Dablam-8.jpg",
            kicker: "Ama Dablam Peak - A technical challenge & a worthy conquest.",
            title: "OP: Nepal",
            desc: "At 6,812m above sea level, Ama Dablam is a long way off the highest peaks in the Himalayas, and yet climbing it is regarded as a true achievement among the mountaineering fraternity."
        },
        {
            id: 2,
            img: "/images/Blog-1.jpg",
            kicker: "Staz joins SAS: who dares wins as undercover mole 'number 5'",
            title: "Anthony ‘STAZ’ Stazicker",
            desc: "ThruDark Co-founder, distinguished Special Forces Operator and now joining the SAS: Who Dares Wins cast as 'number 5' the undercover mole for 2021."
        },
        {
            id: 3,
            img: "/images/Nims-Blog-2.jpg",
            title: "NIMS DAI: K2 WINTER EXPEDITION",
            desc: "K2 is the 2nd tallest of the world’s 14 tallest mountains—all higher than 8,000 meters."
        },
        {
            id: 4,
            img: "/images/Nims-1.jpg",
            kicker: "BEYOND POSSIBLE: ONE SOLDIER, FOURTEEN PEAKS",
            title: "NIMS PURJA: BEYOND POSSIBLE: ONE SOLDIER, FOURTEEN PEAKS.",
            desc: "Nims wasn’t always a climber. He was born at sea-level and not from the traditional Sherpa family."
        },
        {
            id: 5,
            img: "/images/Talisman-3-1.jpg",
            kicker: "IN MEMORY OF FALLEN FRIENDS & SUPPORT OF CHARITY CALM",
            title: "TALISMAN TRIATHLON",
            desc: "Every week, 125 people in the UK take their own lives. 75% of all UK suicides are male."
        }
    ]
}

export const latestThruDarkSlice = createSlice({
    name:"latest",
    initialState:state,
    reducers:{

    }
})

export const selectLatestData = (state:RootState) => state.latestData.ltdd;

export default latestThruDarkSlice.reducer;