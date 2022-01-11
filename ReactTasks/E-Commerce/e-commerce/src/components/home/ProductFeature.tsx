import React from 'react'
import { useState } from 'react';
import { Button } from '../Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../css/productFeature.css'
import "swiper/css";
import "swiper/css/effect-fade"
import "swiper/css/zoom"
import "swiper/css/navigation"
import "swiper/css/pagination"



// import Swiper core and required modules
import SwiperCore, {
    Zoom, Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Zoom, Pagination]);

export const ProductFeature = () => {
    const [data, setData] = useState([
        {
            id: 1,
            imgSrc: "/images/PatriotBlackFront_800x.png"
        },
        {
            id: 2,
            imgSrc: "/images/PatriotBlackRight_800x.png"
        },
        {
            id: 3,
            imgSrc: "/images/PatriotBlackLeft_800x.png"
        },
        {
            id: 4,
            imgSrc: "/images/PatriotBlackBack_800x.png"
        },
        {
            id: 5,
            imgSrc: "/images/PatriotBlackOpen_800x.png"
        }
    ])
    return <>
        <section className="product__feature  mt-[30px]">
            <div className="product__feature__body flex items-center">
                <div className="product__feature__img py-[60px] w-1/2">
                    <Swiper zoom={true} slidesPerView={1} loop={true} pagination={{
                        "clickable": true
                    }} className="mySwiper product__feature__content">
                        {
                            data.map((item) => {
                                return (
                                    <SwiperSlide>
                                        <div className="swiper-zoom-container">
                                            <img src={item.imgSrc} />
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }


                    </Swiper>

                    {/* <Swiper spaceBetween={30} effect={'fade'} pagination={{
                        "clickable": true
                    }} className="mySwiper product__feature__slides">
                        <SwiperSlide>    <img src="/images/PatriotBlackFront_800x.png" /></SwiperSlide>
                        <SwiperSlide>      <img src="/images/PatriotBlackLeft_800x.png" /></SwiperSlide>
                        <SwiperSlide> <img src="/images/PatriotBlackRight_800x.png" /></SwiperSlide>
                        <SwiperSlide>        <img src="/images/PatriotBlackBack_800x.png" /></SwiperSlide>
                    </Swiper> */}
                </div>
                <div className="product__feature__item py-[60px] w-1/2">
                    <div className="product__feature__content p-0 ">
                        <h2 className="text-[32px] font-light uppercase tracking-[.01em] leading-[1.2] text-[#f4f4f4]">PATRIOT JACKET</h2>
                        <p className='text-[#97999b] mt-[15px] text-[14px] leading-[24px] font-light tracking-[.01em] '>Developed for severe cold weather conditions. A rip-stop and durable water repellent Pertex® Quantum outer is injected with 850 Fill Power providing superior warmth to weight ratio...</p>
                        <div className="grid gap-[30px] grid-cols-4 mt-[25px]">
                            <div className="flex flex-col items-center">
                                <div className="w-1/2 h-1/2 mx-0 mb-[20px]">
                                    <div className="relative flex w-full">
                                        <img src="/images/Untitled-design---2021-10-19T133215.413.png" alt="" />
                                    </div>
                                </div>
                                <h3 className="text-center text-[12px] font-normal uppercase text-[#f4f4f4] leading-[15px] tracking-[.05em] ">
                                    Water Repellent
                                </h3>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-1/2 h-1/2 mx-0 mb-[20px]">
                                    <div className="relative flex w-full">
                                        <img src="/images/Untitled-design---2021-10-19T133119.605.png" alt="" />
                                    </div>
                                </div>
                                <h3 className="text-center text-[12px] font-normal uppercase text-[#f4f4f4] leading-[15px] tracking-[.05em] ">
                                    THERMO REGEN
                                </h3>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-1/2 h-1/2 mx-0 mb-[20px]">
                                    <div className="relative flex w-full">
                                        <img src="/images/Untitled-design---2021-10-19T133100.465.png" alt="" />
                                    </div>
                                </div>
                                <h3 className="text-center text-[12px] font-normal uppercase text-[#f4f4f4] leading-[15px] tracking-[.05em] ">
                                    DURABLE
                                </h3>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-1/2 h-1/2 mx-0 mb-[20px]">
                                    <div className="relative flex w-full">
                                        <img src="/images/Untitled-design---2021-10-19T131844.906.png" alt="" />
                                    </div>
                                </div>
                                <h3 className="text-center text-[12px] font-normal uppercase text-[#f4f4f4] leading-[15px] tracking-[.05em] ">
                                    PREMIUM INSULATION
                                </h3>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-1/2 h-1/2 mx-0 mb-[20px]">
                                    <div className="relative flex w-full">
                                        <img src="/images/Untitled-design---2021-10-19T131826.033.png" alt="" />
                                    </div>
                                </div>
                                <h3 className="text-center text-[12px] font-normal uppercase text-[#f4f4f4] leading-[15px] tracking-[.05em] ">
                                    RIPSTOP
                                </h3>
                            </div>

                        </div>
                        <div className='w-max mt-[45px]'> <Button path='/products/patriot-jacket-obsidian-black' content='Find out more' /></div>
                    </div>
                </div>
            </div>
        </section>


    </>
}


