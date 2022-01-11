import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";


export interface heroCarouselState {
    carouselData: ICarouselData[];

}
interface ICarouselData {
    id: number,
    imgSrc: string,
}

const state: heroCarouselState = {
    carouselData: [
        {
            id: 1,
            imgSrc: '/images/LOUIS.jpg',
        },
        {
            id: 2,
            imgSrc: '/images/Louis-copy_900x.jpg',
        },
        {
            id: 3,
            imgSrc: '/images/Loui-2_900x.jpg',
        },
        {
            id: 4,
            imgSrc: '/images/Thrudark-7.jpg',
        }
    ]

}
export const heroCarouselSlice = createSlice({
    name: "heroCarousel",
    initialState: state,
    reducers: {

    }
});

export const heroCarouselData = (state: RootState) => state.heroCarousel.carouselData;

export default heroCarouselSlice.reducer;