import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { useAppSelector } from '../../redux/hooks';
import { selectProductSliderData } from '../../redux/reducers/ProductSliderSlice';
import { ProductSlide } from '..//../exports/export';

import "../../css/productSlider.css"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"

// import Swiper core and required modules
import SwiperCore, {
    Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);

export const ProductSlider = () => {
    const data = useAppSelector(selectProductSliderData)
    return <>
        <section className='my-[60px] px-[60px]'>
            <div className="mb-[50px] flex flex-col items-center justify-center uppercase">
                <p className="text-center text-[#4f4f4f] text-[12px] tracking-[.05em] leading-[15px] mb-[15px] ">
                    Endeavour Through Adversity
                </p>
                <h2 className="text-[#f4f4f4] tracking-[.01em] leading-[1.2] text-[32px]">
                    Louis Loadout
                </h2>
            </div>
            <div className="product__slider">
                <Swiper slidesPerView={3} spaceBetween={30} loop={true} pagination={{
                    "clickable": true
                }} className="mySwiper !pb-[30px]">
                    {
                        data.map((item) => {
                            return (
                                <SwiperSlide>
                                    <ProductSlide item={item} />
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>
            </div>
        </section>
    </>
}

