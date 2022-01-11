import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";


export interface technologiesState {
    technologiesData: ITechnologiesData[];

}
interface ITechnologiesData {
    id: number,
    imgSrc: string,
    kicker?: string,
    title: string,
    text:string

}

const state: technologiesState = {
    technologiesData: [
        {
            id: 1,
            imgSrc: '/images/Dyneema.jpg',
            kicker:'DYNEEMA®',    
            title:'A FIBRE 15 TIMES STRONGER THAN STEEL',
            text:'Dyneema® is the trade name given to fibers made with high molecular weight polyethylene. Its properties, such as its strength, lightness, versatility and resistance to chemical and abrasive, agents, make it an ideal yarn for high performance technical fabrics. Dyneema® brand has become a benchmark yarn for this type of fibers, lighter than any other similar yarn on the market and being constantly improved through R&D.'
        },
        {
            id: 2,
            imgSrc: '/images/Ventile.jpg',
            kicker:'DYNEEMA®',    
            title:'VENTILE',
            text:'Wartime England was in full swing, with pilots flying over the Atlantic in need of a garment that was both comfortable in the cockpit, but also protective should they hit the water. That’s where Ventile® fabric was born. Life expectancy of a pilot in the sea increased from just four, to over twenty minutes – the time it would take to recover a pilot in the water. Survival rates increased by 80%. The cotton used to manufacture Ventile was selected from extra-long cotton stable fibres, which is only found in the top 2% of the world’s cotton crop. This enabled thin yarns of outstanding strength to be spun and woven – an essential element in the construction of Ventile. Today, Ventile is still used by fighter pilots the world over. The fabrics incredible properties have seen its use extended into many other demanding locations, from Himalayan mountaineering to Polar exploration. Ventile’s versatility embraces everything from extreme to leisure environments. In 1953 Sir Edmund Hillary reached the world’s highest point on the first summit of Everest in a garment made of Ventile® fabric. In 1979 Adventurer Sir Ranulph Fiennes crossed the Arctic clothed in Ventile®.'
        },
        {
            id: 3,
            imgSrc: '/images/DOWN.jpg',
            kicker:'Hydrophobic Down ',    
            title:'Insulated',
            text:'Injected with hydrophobic down providing superior warmth to weight ratio without compromising on durability.'
        },
       
    ]

}
export const technologiesSlice = createSlice({
    name: "technologies",
    initialState: state,
    reducers: {

    }
});

export const technologiesData = (state: RootState) => state.technologies.technologiesData

export default technologiesSlice.reducer;