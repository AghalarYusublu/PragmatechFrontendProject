import React from 'react';
import '../../css/products.css'

interface IProps {
    data: IPropsData
}

interface IPropsData {
    id: number;
    name?: string;
    height: string;
    weight: string;
    chest: string;
    waist: string;
    size: string;
}

export function PoductSizeGuideItem({ data }: IProps) {
    return (
        <>
            <div className="flex items-center justify-start min-h-[50px] py-[10px] px-[5px] text-[#f4f4f4] text-center border-b border-solid border-[#212121] text-xs font-light leading-[15px] uppercase whitespace-nowrap">{data.name}</div>
            <div className="flex items-center justify-center min-h-[50px] py-[10px] px-[5px] text-[#97999b] text-center border-b border-solid border-[#212121] text-xs font-light leading-[15px] uppercase whitespace-nowrap">{data.height}</div>
            <div className="flex items-center justify-center min-h-[50px] py-[10px] px-[5px] text-[#97999b] text-center border-b border-solid border-[#212121] text-xs font-light leading-[15px] uppercase whitespace-nowrap">{data.weight}</div>
            <div className="flex items-center justify-center min-h-[50px] py-[10px] px-[5px] text-[#97999b] text-center border-b border-solid border-[#212121] text-xs font-light leading-[15px] uppercase whitespace-nowrap">{data.chest}</div>
            <div className="flex items-center justify-center min-h-[50px] py-[10px] px-[5px] text-[#97999b] text-center border-b border-solid border-[#212121] text-xs font-light leading-[15px] uppercase whitespace-nowrap">{data.waist}</div>
            <div className="flex items-center justify-center min-h-[50px] py-[10px] px-[5px] text-[#97999b] text-center border-b border-solid border-[#212121] text-xs font-light leading-[15px] uppercase whitespace-nowrap">{data.size}</div>
        </>
    )
}