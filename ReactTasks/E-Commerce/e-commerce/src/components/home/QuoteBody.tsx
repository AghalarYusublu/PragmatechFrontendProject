import React from 'react';
import { Button } from '../../exports/export';

export const QuoteBody = () => {
    return <>
        <section className='px-[60px] mt-[30px]' >
            <div className="hero__body relative grid">
                <div className="hero__img m-0">
                    <img src="/images/Thrudark_.jpg" alt="" />
                </div>
                <div className="flex justify-items-start p-[60px] items-center absolute -translate-y-1/2 top-1/2">
                    <div className="quote__body__content  text-[#f4f4f4] ">
                        <div className="w-[50px] h-[50px] mb-[25px]">
                            <img src="./images/Logo_100x.png" alt="" />
                        </div>
                        <p className='text-[24px] font-light uppercase leading-[1.35]'>
                            "THE RELENTLESS PURSUIT OF EXCELLENCE."
                        </p>
                        <p className='text-[#f4f4f4] font-light tracking-[.05em] leading-[15px] text-[12px] mt-[25px] uppercase'>Decades of Special Forces experience underpin the design and development of our products.</p>
                        <div className='w-max mt-[60px]' >
                            <Button path='/pages/development"' content='DEVELOPMENT' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}


