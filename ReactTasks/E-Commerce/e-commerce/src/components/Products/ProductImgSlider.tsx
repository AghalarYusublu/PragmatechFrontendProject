import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { useAppSelector } from '../../redux/hooks';
import { selectProductSliderOnlyImgData } from '../../redux/reducers/productImgSliderSlice';

import { ProductImgSlide } from '..//../exports/export';

import "../../css/productSlider.css"
import '../../css/products.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"

// import Swiper core and required modules
import SwiperCore, {
    Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);

export const ProductImgSlider = () => {
    const data = useAppSelector(selectProductSliderOnlyImgData)
    return <>
        <section className='my-[60px] px-[60px]' id='media'>
            <div className="mb-[50px] flex flex-col items-center justify-center uppercase">
                <p className="text-center text-[#4f4f4f] text-[12px] tracking-[.05em] leading-[15px] mb-[15px] ">
                    DON'T LET YOUR BLOOD RUN COLD - TAKE CONTROL
                </p>
                <h2 className="text-[#f4f4f4] tracking-[.01em] leading-[1.2] text-[32px]">
                    SF EXPEDITION PARKA
                </h2>
            </div>
            <div className="product__img__slider product__slider">
                <Swiper slidesPerView={3} spaceBetween={30} loop={true} pagination={{
                    "clickable": true
                }} className="mySwiper !pb-[30px]">
                    {
                        data.map((item) => {
                            return (
                                <SwiperSlide>
                                    <ProductImgSlide item={item} />
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>
            </div>
        </section>
    </>
}

