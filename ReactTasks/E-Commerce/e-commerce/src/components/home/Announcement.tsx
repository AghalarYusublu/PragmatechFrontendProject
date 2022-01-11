import React from 'react';
import { useState } from 'react';

interface IProps {
    announcement: IObj[]
}
interface IObj {
    id: number,
    imgSrc: string;
    desc: string,
}

export const Announcement = ({ announcement }: IProps) => { 

    return <>
        <section className='z-10 overflow-hidden w-full my-[60px]'>
            <div className="slide__track bg-transparent  w-[200vw] py-2 text-[24px] text-[#f4f4f4] font-light leading-[14px] uppercase flex justify-between items-center">
                {
                    announcement.map((item) => {
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

    </>
}


