import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from '../../exports/export'

export const HeroBodyFullWidth = () => {
    return <>
        <section className='mt-[60px]' >
            <div className="hero__full__width relative flex justify-center items-center">
                <div className="hero__img">
                    <img src="/images/ThruDark-Main_1944x.jpg" alt="" />
                </div>
                <div className="hero__text text-center text-[#f4f4f4] absolute top-2/4 -translate-y-1/2 max-w-[665px]">
                    <p className='mb-[20px] text-[12px] font-light tracking-wider uppercase'>ThruDark</p>
                    <h2 className='text-[48px] uppercase font-light tracking-[.01em] leading-[1.1]'>
                        the tıer 1‘ brotherhood of brands
                    </h2>

                    <div className='flex justify-center items-center' >
                     <Button path='/pages/background' content='read more'/>
                    </div>
                </div>
            </div>
        </section>
    </>
}


