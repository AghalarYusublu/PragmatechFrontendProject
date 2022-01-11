import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface productSliderState {
    productSliderData: IProductSliderData[]
}

interface IProductSliderData {
    id: number,
    imgSrc: string,
    title: string;
    price: string;
    colors?: string
}


const state: productSliderState = {
    productSliderData: [
        {
            id: 1,
            imgSrc: '/images/CapNQGFront_720x.png',
            title: 'THRUDARK CAP',
            price: '£40',
            colors: '7 Colours Available'
        },
        {
            id: 2,
            imgSrc: '/images/HybridBlackFront_900x.png',
            title: 'HYBRID JACKET',
            price: '£325',
            colors: '2 Colours Available'
        },
        {
            id: 3,
            imgSrc: '/images/ZodiacRedFront_900x.png',
            title: 'ZODIAC JACKET',
            price: '£345',
            colors: '4 Colours Available'
        },
        {
            id: 4,
            imgSrc: '/images/ExpeditionParkaVentileFront_720x.png',
            title: 'EXPEDITION PARKA - Ventile®',
            price: '£995',
            colors: '2 Colours Available'
        },
        {
            id: 5,
            imgSrc: '/images/ChargeTrousersGreenLeft_720x.png',
            title: 'CHARGE TROUSERS',
            price: '£295',
            colors: '3 Colours Available'
        },
        {
            id: 6,
            imgSrc: '/images/ForceVelocitySSShirtBlackFront_720x.png',
            title: 'FORCE VELOCITY TECHNICAL TSHIRT - OBSIDIAN BLACK',
            price: '£85',
            colors: '3 Colours Available'
        },
        {
            id: 7,
            imgSrc: '/images/ForceVelocity2in1ShortFront_720x.png',
            title: 'FORCE VELOCITY 2-IN-1 SHORT',
            price: '£75'
        }
    ],
  

}


export const productSliderSlice = createSlice({
    name: "productSlider",
    initialState: state,
    reducers: {

    }
});
export const selectProductSliderData = (state: RootState) => state.productSlider.productSliderData


export default productSliderSlice.reducer;