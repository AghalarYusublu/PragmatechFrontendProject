import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useAppSelector } from '../../redux/hooks';
import { heroCarouselData } from '../../redux/reducers/heroCarouselSlice';




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
    heroCarouselTextData: IObj
}
interface IObj {
    id: number,
    subtitle: string,
    title: string,
    desc: string
}


export const HeroCarousel = ({ heroCarouselTextData }: IProps) => {
    const data = useAppSelector(heroCarouselData);
    return <>      
                <div className="hero__carousel__img w-max">
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

                </div>
                <div className="mt-0 px-0 flex items-center justify-center w-full">
                    <div className="py-[25px] hero__carousel__text  font-light">
                        <p className='text-[12px] text-[#4f4f4f] mb-[20px] leading-[15px] uppercase tracking-[.05em]'> {heroCarouselTextData.subtitle}</p>
                        <h2 className="text-[32px] text-[#f4f4f4] font uppercase tracking-[.01m] leading-[1.2]">{heroCarouselTextData.title}</h2>
                        <p className="text-[14px] text-[#97999b] mt-[15px] tracking-[.01em] leading-[24px] whitespace-pre-line">
                            {
                                heroCarouselTextData.desc
                            }
                        </p>
                    </div>
                </div>
        
    </>
}


