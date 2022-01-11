import React from 'react'
import { Button } from '../../exports/export'

export const Banner = () => {
    return <>
        <section className='banner relative'>
            <div className="banner__wrapper relative">
                <div className="banner__wrapper_img translate-x-0 translate-y-[-8.1404px]">
                    <img src="/images/bannerImage.jpg" alt="Mantra" />
                </div>
                <div className='px-[60px] banner__content absolute top-2/4 -translate-y-1/2' >
                    <div className="p-[60px]">
                        <h2 className='uppercase text-[48px] text-[#f4f4f4] leading-[1.1]'>Mantra Gilet</h2>
                        <div className="shop__btn max-w-max flex items-center justify-center">
                            <Button path='/products/mantra-gilet' content='Shop now' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}


