import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../exports/export';

interface MyProps {
    info: IData
}

interface IData {
    id: number;
    title: string;
    imgSrc: string;
}

export function DoubleImgItem({ info }: MyProps) {
    return (
        <div className="double_img_item relative w-[calc(50% - 15px * 2)] grid">
            <div className="col-[1] row-[1]">
                <div className="flex">
                    <img src={info.imgSrc} alt="ThruDark" />
                </div>
            </div>
            <div className="inner_carousel_content w-full h-full p-10 bottom-0 absolute flex flex-col items-center justify-end">
                <h2 className='text-center text-[32px] font-light text-[#f4f4f4] uppercase'>{info.title}</h2>
                <div className="inner_carousel_reveal relative z-[2] w-[max-content]">
                 <Button path='/collections/mens-apparel' content='Shop now'/>
                </div>
            </div>
        </div>
    )
}