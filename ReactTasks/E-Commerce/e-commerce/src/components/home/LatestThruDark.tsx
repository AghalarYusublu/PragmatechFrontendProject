import React from 'react';
import { LatestThruDarkItem } from "..//../exports/export";
import { useAppSelector } from '../../redux/hooks';
import { selectLatestData } from '../../redux/reducers/latestThruDark';
import "..//..//css/main.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"


// import Swiper core and required modules
import SwiperCore, {
    Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);

export function LatestThruDark() {
    const data = useAppSelector(selectLatestData);
    return (
        <div className='latest__thrudark'>
            <div className="latest__thrudark__wrapper overflow-hidden my-[60px]">
                <div className="footer_newsLetter_header text-center my-0 mb-[50px] mx-auto">
                    <h3 className='text-[12px] font-light leading-[15px] uppercase text-[#4f4f4f] mb-[15px]'>INTEL</h3>
                    <h1 className='text-[32px] font-light leading-[38px] uppercase text-[#f4f4f4] mb-[15px]'>LATEST FROM THRUDARK</h1>
                </div>
                <div className="latest__thrudark__wrapper__body min-w-[132.4%] max-w-[135%]">
                    <Swiper slidesPerView={3} centeredSlides={true} loop={true} spaceBetween={30} grabCursor={true} pagination={{
                        "clickable": true
                    }} className="mySwiper" >
                        {
                            data.map((info) => {
                                return (
                                    <SwiperSlide>
                                        <LatestThruDarkItem info={info} />
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}