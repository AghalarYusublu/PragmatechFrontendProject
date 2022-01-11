import React from 'react';
import { Link } from 'react-router-dom';

export function CollectionBanner() {
    return (
        <section className='banner relative'>
            <div className="banner__wrapper">
                <header className='banner__wrapper__header mt-[30px] grid z-[1] relative'>
                    <div className="banner__wrapper__content col-[1] row-[1] mt-[138px] z-[5] flex justify-end flex-col items-start px-[60px] pb-[60px]">
                        <ul className='w-full flex flex-wrap p-0'>
                            <li className='text-[#bfbfbf] after:content-["/"]'>
                                <Link to='/' className='leading-6 font-normal text-sm cursor-none text-[#f4f4f4]'>
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li className='text-[#bfbfbf]'>
                                <span className='leading-6 font-normal text-sm'>Men's</span>
                            </li>
                        </ul>
                        <h1 className='uppercase font-light text-[48px] text-center text-[#f4f4f4]'>Men's</h1>
                    </div>
                    <div className="banner__wrapper__img col-[1] row-[1] relative">
                        <img src="/images/Mens.jpg" alt="Ama Dablam" />
                    </div>
                </header>
            </div>
        </section>
    )
}
