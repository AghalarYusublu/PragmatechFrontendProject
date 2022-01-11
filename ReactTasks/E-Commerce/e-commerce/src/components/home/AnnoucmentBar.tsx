import React from 'react';


export const AnnoucmentBar = () => {
    return <>
        <section className='z-10 overflow-hidden w-full my-[60px]'>
            <div className="slide__track bg-transparent  w-[200vw] py-2 text-[24px] text-[#f4f4f4] font-light leading-[14px] uppercase flex justify-between items-center">
                <div className="slide flex">
                    <div className="slide__image w-[48px] h-[58px] mx-[65px] flex items-center">
                        <img src="/images/gold-logo.png" alt="" />
                    </div>
                    <div className="slide__text text-center flex items-center m-0">
                        <a className="" href="/delivery">Buy Now Pay Later With Klarna</a>
                    </div>
                </div>
                <div className="slide flex">
                    <div className="slide__image w-[48px] h-[58px] mx-[65px] flex items-center">
                        <img src="/images/gold-logo.png" alt="" />
                    </div>
                    <div className="slide__text text-center flex items-center m-0">
                        <a className="" href="/delivery">Buy Now Pay Later With Klarna</a>
                    </div>
                </div>
            </div>
        </section>

    </>
}


