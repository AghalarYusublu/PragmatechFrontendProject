import React from 'react'
import { Link } from 'react-router-dom'
import "../../css/collection.css"


interface IProps {
    item: IData
}
interface IData {
    id: number;
    imgSrc: string;
    title: string;
    price: string;
    colors?: string;
}

export const ProductSlide = ({ item }: IProps) => {
    return <>
        <Link to={'/products'} target={'_blank'}>
            <div className='collection__carousel__slide relative min-h-full min-w-[29.5rem] max-w-[29.5rem] overflow-hidden flex-shrink-0 w-full'>
                <div className="carousel__slide__card relative">
                    <div className="carousel__slidecard__imgContainer poin relative flex z-[2] pointer-events-none">
                        <div className="carousel__slidecard__img flex w-full">
                            <img src={item.imgSrc} alt={item.title} />
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
                    <div className="carousel__slidecard__content flex flex-col justify-center tracking-[.01em] font-light leading-[24px] items-center transition">
                        <h3 className='mt-auto text-center text-[16px]  text-[#f4f4f4] uppercase'>
                            {item.title}
                        </h3>
                        <div className="product__card__price mt-[5px]">
                            <p className='text-[14px] tracking-[.01em] font-light leading-[24px] mt-0 mb-0'>
                                <span className='text-[#f4f4f4]'>{item.price}</span>
                            </p>
                        </div>
                        <div className='product__card__colors mt-[5px] text-[16px] text-[#97999b] font-light leading-[24px] tracking-[.01em]'>
                            <span>{item.colors}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    </>
}
