import React from 'react';
import "../../css/collection.css"
import { Button, CollectionItem } from "../../exports/export";
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
interface IProps {
    data: IPropsData[];
}

interface IPropsData {
    id: number;
    img: string;
    title: string;
    price: string;
    colors?: string;
    sizes?: string[];
}

export function Collection({ data }: IProps) {
    return (
        <div className='collection'>
            <div className="collection__wrapper px-[60px] w-full mx-auto">
                <div className="collection__body">
                    <div className="collection__inner">
                        <div className="collection__inner__items grid relative overflow-hidden">
                            <div className="collection__inner__item flex items-center pr-[60px]">
                                <div className="collection__inner__item__content">
                                    <h2 className='text-[32px] font-light uppercase text-[#f4f4f4]'>insulated jackets</h2>
                                    <p className='mt-[10px] text-[#97999b] text-sm font-light leading-6 mb-5'>
                                        When savage winter climates offer no salvation – this is the refuge you seek.
                                    </p>
                                    <div className="collection__btn w-[fit-content]">
                                        <Button path="/collections/insulated-jackets" content="Shop Collection" />
                                    </div>
                                </div>
                            </div>
                            <div className="collection__inner__item relative">
                                <div className="collection__carousel__frameConatiner flex absolute top-0 left-[-2%] z-[2] w-[37.5%] pointer-events-none">
                                    <div className="collection__carousel__frame absolute w-full h-full">
                                        <div className="collection__carousel__frameInner border border-solid border-[#1a1a1a] h-full"></div>
                                    </div>
                                </div>
                                <Swiper slidesPerView={3} spaceBetween={30} loop={true} pagination={{
                                    "clickable": true
                                }} className="mySwiper">
                                    {
                                        data.map((info) => {
                                            return (
                                                <SwiperSlide>
                                                    <CollectionItem info={info} />
                                                </SwiperSlide>
                                            )
                                        })
                                    }
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}