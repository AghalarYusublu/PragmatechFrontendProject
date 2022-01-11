import React from 'react';
import { Link } from 'react-router-dom';
import "..//..//css/collection.css";

interface IProps {
    data: IPropsData
}

interface IPropsData {
    id: number;
    mainImg: string;
    title: string;
    subtitle?: string;
    price: string;
    colors?: string[];
    sizes?: string[];
    overview: string;
    reviews: number;
    colorText?: string;
}

export function ProductItem({ data }: IProps) {
    const newTitle = data.title.replace(/[^A-Z0-9]/ig, "");
    return (
        <div className="cllctn__product__item">
            <div className="cllctn__product__card relative">
                <div className="cllctn__product__img pointer-events-none overflow-hidden flex z-[2] relative">
                    <div className="flex w-full opacity-[1] transition-all">
                        <img className='w-full object-cover' src={data.mainImg} alt={data.title} />
                    </div>
                </div>
                <div className="cllctn__product__overlay absolute top-0 left-0 z-[2] w-full h-full opacity-0 invisible pointer-events-none transition-all">
                    <div className="cllctn__product__wishList flex justify-center items-center w-[40px] h-[40px] pointer-events-auto absolute top-[15px] right-[15px]">
                        <div className="relative flex justify-center items-center w-[40px] h-[40px] bg-[#1b1919] clip__path">
                            <span className='flex items-center justify-center w-[40px] h-[40px] text-[#f4f4f4]'>
                                <svg className='w-[20px] h-[20px]' viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M16.13 8.186V6.814l3.508-3.726-.08-.088H7v9h12.345l.208-.178-3.424-3.636zM21 11.9L19.714 13H6V2h14l1 1.1-4.143 4.4L21 11.9z" fill="currentColor"></path>
                                    <path d="M3 2h1v19H3V2z" fill="currentColor"></path>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center opacity-[1] visible transition-all">
                    {data.subtitle ? <h3 className='uppercase leading-[15px] font-light text-xs text-[#7b7356] text-center mb-[5px]'>{data.subtitle}</h3> : null}
                    <h2 className='leading-6 font-light text-sm text-center text-[#f4f4f4] mt-auto'>{data.title}</h2>
                    <div className="mt-[5px]">
                        <p className='leading-6 font-light text-sm text-[#f4f4f4]'>{data.price}</p>
                    </div>
                    <span className='block mt-[5px] text-[#97999b] leading-6 font-light text-sm'>{data.colorText}</span>
                </div>
                <Link to={{ pathname: `/products/${newTitle}` }} className='cursor-none absolute top-0 left-0 right-0 bottom-0 z-[1]'></Link>
            </div>
        </div>
    )
}
