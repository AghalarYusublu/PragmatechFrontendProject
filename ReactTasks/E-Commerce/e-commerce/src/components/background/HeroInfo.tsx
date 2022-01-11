import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useAppSelector } from '../../redux/hooks';





import "swiper/css";
import "swiper/css/effect-fade"
import "swiper/css/zoom"
import "swiper/css/navigation"
import "swiper/css/pagination"
import '../../css/heroCarousel.css'

// import Swiper core and required modules
import SwiperCore, {
    Zoom, Pagination
} from 'swiper';
// install Swiper modules
SwiperCore.use([Zoom, Pagination]);


interface IProps {
    heroInfoData: IObj
}
interface IObj {
    id: number,
    imgSrc: string,
    subtitle: string,
    title: string,
    desc: string
}


export const HeroInfo = ({ heroInfoData }: IProps) => {

    return <>
        <div className="hero__carousel__img hero__info w-max">
            <Swiper loop={false} pagination={{
                "clickable": false
            }} className="mySwiper product__feature__content">
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img src={heroInfoData.imgSrc} />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        <div className="mt-0 px-0 flex items-center bg-[#000] justify-center w-full">
            <div className="py-[25px] hero__carousel__text  font-light">
                <p className='text-[12px] text-[#7b7356] mb-[20px] leading-[15px] uppercase tracking-[.05em]'>{heroInfoData.subtitle}</p>
                <h2 className="text-[48px] text-[#f4f4f4] font uppercase tracking-[.01m] leading-[1.1]">{heroInfoData.title}</h2>
                <p className="text-[14px] text-[#97999b] mt-[15px] tracking-[.01em] leading-[24px] whitespace-pre-line">
                    {heroInfoData.desc}
                </p>
            </div>
        </div>

    </>
}


