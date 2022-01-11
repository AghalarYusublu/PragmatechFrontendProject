import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface mansCollectionState {
    mansCollectionData: IMansCollectionData[];
}

export interface IMansCollectionData {
    id: number;
    mainImg: string;
    images: string[];
    title: string;
    subtitle?: string;
    price: string;
    colors?: string[];
    sizes?: string[];
    overview: string;
    reviews: number;
    colorText?: string;
}

const state: mansCollectionState = {
    mansCollectionData: [
        {
            id: 1,
            mainImg: "/images/ExpeditionParkaVentileFront.png",
            title: "EXPEDITION PARKA - Ventile®",
            price: "£995",
            colors: ["Ventile®", "Multicam®"],
            overview: "An extremely resilient, cold environment parka tested down to -40℃. Cordura® X Dyneema® reinforced shoulder & elbow panels and a highly windproof, breathable and water-repellant Cotton Ventile® fabric blocks out the bitter cold. Designed with years of combined Special Forces experience this parka leaves nothing to chance. Unquestionable protection against harsh winter elements, allowing you to concentrate on what matters most: the task at hand. Don't let your blood run cold ... TAKE CONTROL",
            reviews: 5,
            sizes: ["S", "M", "L", "XL", "XXL"],
            images: ["ExpeditionParkaVentileFront_180x.png", "ExpeditionParkaVentileLeft_180x.png", "ExpeditionParkaVentileBack_180x.png", "ExpeditionParkaVentileRight_180x.png", "ExpeditionParkaVentileOpen_180x.png"],
            colorText: "2 Colours Available"
        },
        {
            id: 2,
            mainImg: "/images/ExpeditionParkaMulticamFront.png",
            title: "EXPEDITION PARKA - MultiCam®",
            price: "£995",
            colors: ["Ventile®", "Multicam®"],
            overview: "An extremely resilient, cold environment parka tested down to -40℃. Cordura® X Dyneema® reinforced shoulder & elbow panels and a highly windproof ripstop MultiCam® Black fabric blocks out the bitter cold. Designed with years of combined Special Forces experience this parka leaves nothing to chance. Unquestionable protection against harsh winter elements, allowing you to concentrate on what matters most: the task at hand. Don't let your blood run cold ... TAKE CONTROL.",
            reviews: 9,
            sizes: ["S", "M", "L", "XL", "XXL"],
            images: ["ExpeditionParkaVentileFront_180x.png", "ExpeditionParkaVentileLeft_180x.png", "ExpeditionParkaVentileBack_180x.png", "ExpeditionParkaVentileRight_180x.png", "ExpeditionParkaVentileOpen_180x.png"],
            colorText: "2 Colours Available"
        },
        {
            id: 3,
            mainImg: "/images/PatriotBlackFront.png",
            title: "PATRIOT JACKET",
            price: "£595",
            colors: ["Crimson Red", "Obsidian Black", "Olive Green"],
            overview: "Developed for severe cold weather conditions. A rip-stop and durable water repellent Pertex® Quantum outer is injected with 850 Fill Power providing superior warmth to weight ratio without compromising on durability. Further reinforcements to the shoulders are provided with a technical composite blend of Dyneema® and Cordura® for enhanced abrasion resistance. When savage winter climates offer no salvation - this is the refuge you seek.",
            reviews: 16,
            sizes: ["S", "M", "L", "XL", "XXL"],
            images: ["ExpeditionParkaVentileFront_180x.png", "ExpeditionParkaVentileLeft_180x.png", "ExpeditionParkaVentileBack_180x.png", "ExpeditionParkaVentileRight_180x.png", "ExpeditionParkaVentileOpen_180x.png"],
            colorText: "3 Colours Available"
        },
        {
            id: 4,
            mainImg: "/images/BreachFront.png",
            title: "BREACH JACKET",
            price: "£595",
            colors: ["Obsidian Black"],
            overview: "A heavy duty cold weather down jacket fortified with 850 fill power for supreme protection against harsh winter elements. Toughened with Cordura® reinforcements on the shoulders and elbows, providing enduring abrasion resistance. A lightweight Pertex® Quantum outer fabric offers a highly water resistant outer shell. Loaded with naturally hydrophobic down providing ultimate warmth to weight ratio throughout.",
            reviews: 43,
            sizes: ["S", "M", "L", "XL", "XXl", "XXXL"],
            images: ["ExpeditionParkaVentileFront_180x.png", "ExpeditionParkaVentileLeft_180x.png", "ExpeditionParkaVentileBack_180x.png", "ExpeditionParkaVentileRight_180x.png", "ExpeditionParkaVentileOpen_180x.png"],
        },
        {
            id: 5,
            mainImg: "/images/SmockFront_720x.png",
            subtitle: "Restock Landed",
            title: "SCOUT SMOCK",
            price: "£575",
            colors: ["Obsidian Black"],
            overview: `The Scout Smock is a commanding pullover, sculpted to dominate severe environments. External 3-layer waterproof ripstop from Schoeller®, featuring c_change® membrane which adapts to ambient conditions. Superior warmth is provided utilising POLARTEC® HIGH LOFT™ fleece. Side zips, drop pouch compartment and hand warmer pockets are all sealed and secured using robust YKK Aquaguard® zips. The helmet compatible hood incorporates COHAESIVE™ cord lock technology allowing for rapid 3-way adjustments.

            To strive, to seek and not to yield!`,
            reviews: 22,
            sizes: ["XS", "S", "M", "L", "XL", "XXl", "XXXL"],
            images: ["ExpeditionParkaVentileFront_180x.png", "ExpeditionParkaVentileLeft_180x.png", "ExpeditionParkaVentileBack_180x.png", "ExpeditionParkaVentileRight_180x.png", "ExpeditionParkaVentileOpen_180x.png"],
        },
        {
            id: 6,
            mainImg: "/images/RaidBlackFront_720x.png",
            title: "RAID JACKET",
            price: "£545",
            colors: ["Obsidian Black"],
            overview: `Uncompromising performance is provided using our robust 3-layer waterproof Schoeller® fabric, containing an adaptive c_change® membrane. Underarm vents and multiple pockets are all bonded and sealed using robust YKK Aquaguard® zips, incorporated COHAESIVE™ cord lock technology allows for rapid adjustment of hood and waist. Recco® technology is concealed within a helmet-compatible storm peaked hood for search and rescue operations.

            Sculpted to embrace the elements. There’s no such thing as bad weather - only unsuitable clothing.`,
            reviews: 60,
            sizes: ["S", "M", "L", "XL", "XXl"],
            images: ["ExpeditionParkaVentileFront_180x.png", "ExpeditionParkaVentileLeft_180x.png", "ExpeditionParkaVentileBack_180x.png", "ExpeditionParkaVentileRight_180x.png", "ExpeditionParkaVentileOpen_180x.png"],
            colorText: "3 Colours Available"
        },
    ]
}

export const mansCollectionSlice = createSlice({
    name: "mansCollection",
    initialState: state,
    reducers: {
        setMainImg: (state, action) => {
            state.mansCollectionData.forEach((data) => {
                data.mainImg = action.payload;
            })
        }
    }
});

export const selectMansCollectionData = (state: RootState) => state.mansCollection.mansCollectionData;

export const { setMainImg } = mansCollectionSlice.actions;

export default mansCollectionSlice.reducer;