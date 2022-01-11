import React from 'react';
import {  Announcement } from '../../exports/export';
import { Link } from 'react-router-dom';
import { Button } from '../../exports/export';
interface IProps {
    heroHeader: IObj[]
}
interface IObj {
    id: number,
    imgSrc: string;
    desc: string,
}
export const HeroBody = ({ heroHeader }: IProps) => {
    return <>
        <section className='z-10 overflow-hidden w-full my-[60px]'>
            <div className="slide__track bg-transparent  w-[200vw] py-2 text-[24px] text-[#f4f4f4] font-light leading-[14px] uppercase flex justify-between items-center">
                {
                    heroHeader.map((item) => {
                        return (
                            <div className="slide flex">
                                <div className="slide__image w-[48px] h-[58px] mx-[65px] flex items-center">
                                    <img src={item.imgSrc} alt="" />
                                </div>
                                <div className="slide__text text-center flex items-center m-0 uppercase leading-snug">
                                    <a className="" href="/pages/background">{item.desc}</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
        <section className='px-[60px] mt-[30px]' >
            <div className="hero__body relative flex justify-center items-center">
                <div className="hero__img">
                    <img src="/images/hero-img.png" alt="" />
                </div>
                <div className="hero__text text-center text-[#f4f4f4] absolute top-2/4 -translate-y-1/2 w-[533px]">
                    <h2 className='text-[48px]'>
                        GODARK LOYALTY PROGRAMME
                    </h2>
                    <p className='text-[#97999b] mt-[15px]'>Receive exclusive early access to products, unique rewards and discounts.</p>
                    <div className='flex justify-center items-center' >
                        <Button path='/pages/rewards' content='learn more' />
                    </div>
                </div>
            </div>
        </section>
    </>
}


