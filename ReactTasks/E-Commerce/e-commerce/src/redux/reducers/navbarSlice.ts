import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface navbarState {
    navbarData: INavbarData[]
}

interface INavbarData {
    id: number;
    title: string;
    mainData: ISubMenuData[];
}

export interface ISubMenuData {
    subtitle: string;
}

const state: navbarState = {
    navbarData: [
        {
            id: 1,
            title: "Mens",
            mainData: [
                {
                    subtitle: "Clothing"
                },
                {
                    subtitle: "Accessories"
                },
                {
                    subtitle: "Shop All Mens"
                }
            ]
        },
        {
            id: 2,
            title: "Womens",
            mainData: [
                {
                    subtitle: "Clothing"
                },
                {
                    subtitle: "Accessories"
                },
                {
                    subtitle: "Shop All Mens"
                }
            ]
        },
        {
            id: 3,
            title: "Explore",
            mainData: [
                {
                    subtitle: "GoDark Loyalty"
                },
                {
                    subtitle: "Discover"
                },
                {
                    subtitle: "Pursuit"
                },
                {
                    subtitle: "Support"
                },
                {
                    subtitle: "Intel"
                },
                {
                    subtitle: "Social"
                }
            ]
        }
    ]
}

export const navbarSlice = createSlice({
    name: "navbar",
    initialState: state,
    reducers: {

    }
})

export const selectNavbarData = (state: RootState) => state.navbarReducer.navbarData;

export default navbarSlice.reducer;