import React from 'react'


export const HeroBanner = () => {

    return <>
        <section className="hero__banner">
            <div className="flex justify-center items-center relative">
                <div className="hero__img flex w-full">
                    <img className='w-full' src="/images/UKSF_1944x.jpg" alt="" />
                </div>
                <div className="hero__text text-center absolute bottom-0 text-[#f4f4f4] flex pt-[50px] pb-[125px] max-w-[665px]">
                    <h2 className='text-[48px] uppercase font-light tracking-[.01em] leading-[1.1]'>
                    THE ‘TIER 1’ BROTHERHOOD OF BRANDS</h2>
 

                </div>
            </div>
        </section>

    </>
}

