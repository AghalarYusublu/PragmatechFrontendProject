import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface collectionState {
    homeCollectionData: ICollectionData[];
    blogCollectionData: ICollectionData[];
}

interface ICollectionData {
    id: number,
    img: string,
    title: string;
    price: string;
    colors?: string;
    sizes?: string[];
}

const state: collectionState = {
    homeCollectionData: [
        {
            id: 1,
            img: "/images/PatriotBlackFront.png",
            title: "patriot jacket",
            price: "£595",
            colors: "3 Colours Available"
        },
        {
            id: 2,
            img: "/images/ExpeditionParkaVentileFront.png",
            title: "EXPEDITION PARKA - Ventile®",
            price: "£995",
            colors: "2 Colours Available"
        },
        {
            id: 3,
            img: "/images/BreachFront.png",
            title: "BREACH JACKET",
            price: "£595"
        },
        {
            id: 4,
            img: "/images/ExpeditionParkaMulticamFront.png",
            title: "EXPEDITION PARKA - Ventile®",
            price: "£995",
            colors: "2 Colours Available"
        },
    ],
    blogCollectionData: [
        {
            id: 1,
            img: "/images/PhalanxFront_720x.png",
            title: "Phalanx Fleece",
            price: "£235",
        },
        {
            id: 2,
            img: "/images/SiegeFront_720x.png",
            title: "SIEGE BASE LAYER",
            price: "£120",
            sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"]
        },
        {
            id: 3,
            img: "/images/MantraFront_720x.png",
            title: "MANTRA GILET",
            price: "£145",
            sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"]
        },
        {
            id: 4,
            img: "/images/BuffFront_720x.png",
            title: "NQG - ORIGINAL BUFF®",
            price: "Sold out",
        },
        {
            id: 5,
            img: "/images/StrikePantsLeft_720x.png",
            title: "STRIKE PANTS",
            price: "Sold out",
        },
        {
            id: 6,
            img: "/images/SiegeHoodedFront_720x.png",
            title: "SIEGE HOODED BASE LAYER",
            price: "£125",
            sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"]
        }
    ]
}

export const collectionSlice = createSlice({
    name: "collection",
    initialState: state,
    reducers: {

    }
});

export const selectHomeCollectionData = (state: RootState) => state.collection.homeCollectionData;
export const selectBlogCollectionData = (state: RootState) => state.collection.blogCollectionData;

export default collectionSlice.reducer;