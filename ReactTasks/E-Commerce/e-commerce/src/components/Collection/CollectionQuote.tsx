import React from 'react';
import { Link } from 'react-router-dom';

export function CollectionQuote() {
    return (
        <section id="quote">
            <div className="mx-auto px-[60px] w-full my-[60px]">
                <div className="quote__inner">
                    <div className="grid z-[1] relative">
                        <div className="col-[1] row-[1] flex items-center p-[60px]">
                            <div className=" text-center w-[calc((8/12)*100%)] flex flex-col items-center my-0 mx-auto">
                                <div className="quote__img w-[50px] h-[50px] mb-[25px]">
                                    <div className="w-full flex relative">
                                        <img className='w-full object-cover' src="/images/Logo_100x.png" alt="logo" />
                                    </div>
                                </div>
                                <p className='uppercase font-light text-2xl text-[#f4f4f4]'>
                                    "Decades of combined Special Forces’ experience has enabled us to critique existing performance wear to develop ThruDark products to the highest specification possible."
                                </p>
                                <p className='uppercase leading-[15px] font-light text-xs mt-[25px] text-[#f4f4f4]'>- Louis</p>
                                <div className="mt-[60px]">
                                    <Link to="/pages/background" className='relative overflow-hidden flex justify-center items-center w-[max-content] pb-[10px] rounded-none uppercase text-center text-[#f4f4f4] leading-4 font-normal text-[13px] mx-auto after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#f4f4f4] after:scale-x-[1] cursor-none'>
                                        <span>Heritage</span>
                                        <span className='block ml-[15px] px-[15px] border-l border-dotted border-[#4f4f4f] text-[#7b7356]'>
                                            <svg className='w-[15px] h-[15px]' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM7 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM13 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" fill="currentColor"></path>
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
