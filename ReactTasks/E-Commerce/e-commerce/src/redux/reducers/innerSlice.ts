import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import {IData} from "..//../types/InnerData"

const state: IData = {
    innerData: [
        {
            id: 1,
            title: "ACCESSORIES",
            imgSrc: "https://cdn.shopify.com/s/files/1/0591/0164/2941/files/Product_Card_Accessories_844x1264_6e149690-9414-4c80-9883-c99659af0339_900x.jpg?v=1637927788",
        },
        {
            id: 2,
            title: "Insulated jackets",
            imgSrc: "https://cdn.shopify.com/s/files/1/0591/0164/2941/files/Product_Card_Insulated_Jacket_844x1264_dbcdfcf7-f9cd-4ff9-b40a-b92fb7da850d_900x.jpg?v=1637926400",
        },
        {
            id: 3,
            title: "FITNESS",
            imgSrc: "https://cdn.shopify.com/s/files/1/0591/0164/2941/files/Fitness_1fd54f3a-247a-43eb-b520-281db77d7e72_900x.jpg?v=1637169170",
        },
        {
            id: 4,
            title: "Hard Shell jackets",
            imgSrc: "https://cdn.shopify.com/s/files/1/0591/0164/2941/files/Product_Card_Hard_Shell_Jackets_844x1264_ec6d60dc-2b83-4227-8c54-3b9b270469e6_900x.jpg?v=1637927952",
        },
        {
            id: 5,
            title: "Midlayers",
            imgSrc: "https://cdn.shopify.com/s/files/1/0591/0164/2941/files/Product_Card_Mid_Layers_845_900x.jpg?v=1637928467",
        },
        {
            id: 6,
            title: "Apparel",
            imgSrc: "https://cdn.shopify.com/s/files/1/0591/0164/2941/files/Apparell_f903d912-9036-4682-8d73-4cb383edc365_900x.jpg?v=1637169248",
        },
        {
            id: 7,
            title: "Trousers",
            imgSrc: "https://cdn.shopify.com/s/files/1/0591/0164/2941/files/Product_Card_Trousers_844x1264_6ee86620-07dc-4c69-b99f-df01a82ca01d_900x.jpg?v=1637928288",
        }
    ]
}

export const innerSlice = createSlice({
	name: 'inner',
	initialState:state,
	reducers: {
	}
});

export const selectInnerData = (state: RootState) => state.inner.innerData;

export default innerSlice.reducer;