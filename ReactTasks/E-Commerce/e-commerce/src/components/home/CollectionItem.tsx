import React from 'react';
import "..//..//css/collection.css";

interface MainProps {
    info: IData
}

interface IData {
    id: number;
    img: string;
    title: string;
    price: string;
    colors?: string;
}

export function CollectionItem({ info }: MainProps) {
    return (
        <div className='collection__carousel__slide relative min-h-full min-w-[29.5rem] max-w-[29.5rem] overflow-hidden flex-shrink-0 w-full'>
            <div className="carousel__slide__card relative">
                <div className="carousel__slide__card__imgContainer relative flex overflow-hidden z-[2] pointer-events-none">
                    <div className="carousel__slide__card__img flex w-full opacity-[1]">
                        <img src={info.img} alt={info.title} />
                    </div>
                </div>
                <div className="carousel__slide__card__content opacity-[0] invisible flex flex-col justify-center items-center transition">
                    <h3 className='mt-auto text-center text-sm font-light leading-6 text-[#f4f4f4] uppercase'>{info.title}</h3>
                    <div className="product__card__price mt-[5px]">
                        <p className='text-sm font-light leading-6 mt-0 mb-0'>
                            <span className='text-[#f4f4f4]'>{info.price}</span>
                        </p>
                    </div>
                    <div className='product__card__colors mt-[5px] text-[#97999b] text-sm font-light leading-6'>
                        <span>{info.colors}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
