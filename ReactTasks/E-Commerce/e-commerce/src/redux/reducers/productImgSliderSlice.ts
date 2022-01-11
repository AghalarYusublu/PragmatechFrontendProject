import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface productImgSliderState {
    productSliderOnlyImgData: IProductSliderOnlyImgData[]
}

interface IProductSliderOnlyImgData {
    id: number,
    imgSrc: string
}

const state: productImgSliderState = {
    productSliderOnlyImgData: [
        {
            id: 1,
            imgSrc: '/images/Melee-8.jpg'
        },
        {
            id: 2,
            imgSrc: '/images/Melee-6.jpg'
        },
        {
            id: 3,
            imgSrc: '/images/Melee-10.jpg'
        },
        {
            id: 4,
            imgSrc: '/images/Melee-4.jpg'
        }
        , {
            id: 5,
            imgSrc: '/images/Melee-9.jpg'
        }, {
            id: 6,
            imgSrc: '/images/Melee-1.jpg'
        }
    ]
    

}


export const productSliderOnlyImg = createSlice({
    name: "productImgSlider",
    initialState: state,
    reducers: {

    }
});

export const selectProductSliderOnlyImgData = (state: RootState) => state.productSliderImgOnly.productSliderOnlyImgData

export default productSliderOnlyImg.reducer;