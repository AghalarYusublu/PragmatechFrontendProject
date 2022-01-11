import React from 'react';
import { Button } from "..//..//exports/export";
import { Link } from 'react-router-dom';

interface MainProps {
    info: IMainData
}

interface IMainData {
    id: number;
    img: string;
    kicker?: string;
    title: string;
    desc: string
}

export function LatestThruDarkItem({ info }: MainProps) {
    return (
        <div className='latest__thrudark__carousel__item min-w-[40.66rem] max-w-[52.083rem]'>
            <Link to="/blogs/expeditions/op-nepal" className='relative grid cursor-none'>
                <div className="latest__carousel__img__container col-[1] row-[1] overflow-hidden flex-shrink-0 z-[-1] relative">
                    <div className="latest__carousel__img__item w-full h-full flex">
                        <img className='max-w-full object-cover' src={info.img} alt={info.title} />
                    </div>
                </div>
                <div className="latest__carousel__content__container col-[1] row-[1]">
                    <div className="latest__carousel__container flex flex-col justify-end w-full h-full p-[60px] max-w-[475px]">
                        <p className='text-xs font-light leading-[15px] uppercase text-[#f4f4f4] mb-[10px]'>{info.kicker}</p>
                        <h3 className='text-2xl font-light uppercase text-[#f4f4f4]'>{info.title}</h3>
                        <p className='text-sm font-light leading-6 mt-[5px] text-[#97999b]'>{info.desc}</p>
                        <div className="latest__carousel__links mt-[25px] w-[max-content]">
                            <Button content='Read Article' path='/blogs/expeditions/op-nepal' />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}