import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import { selectInnerData } from '../../redux/reducers/innerSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import "../../css/main.css"

import 'swiper/css';

export function Inner() {
    const data = useAppSelector(selectInnerData);

    return (
        <section className="inner">
            <div className="inner__wrapper overflow-hidden my-[60px] px-[60px]">
                <div className='inner_wrapper_header flex flex-col items-center mb-[50px]'>
                    <p className='text-center text-[#4f4f4f]'>High Performance Outerwea</p>
                    <h2 className='text-center text-white text-[32px] font-light uppercase'>for your next mission</h2>
                </div>
                <div className="inner_wrapper_body">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {
                            data.map((info) => {
                                return (
                                    <SwiperSlide>
                                        <div key={info.id} className="inner__carousel__item relative max-w-[454px] min-w-[454px]">
                                            <div className="inner__carousel__imgContainer">
                                                <div className="inner__carousel__imgItem opacity-[1]">
                                                    <img src={info.imgSrc} alt="Accessories" />
                                                </div>
                                            </div>
                                            <div className="inner__carousel__content w-full h-full p-10 bottom-0 absolute flex flex-col justify-end">
                                                <h2 className='text-left text-[32px] font-light text-white uppercase'>{info.title}</h2>
                                                <div className="inner__carousel__reveal relative z-[2] w-full min-h-0 max-h-0 opacity-0">
                                                    <div className="inner__carousel__reveal__links flex items-center  clip__path justify-center w-full bg-[#161616] text-[#f4f4f4] mt-[25px]">
                                                        <Link to="/collections/accessories" className='inner__carousel__reveal__link tracking-[.2em] block text-xs font-normal uppercase p-[15px] text-center text-[#929292]'>show now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}