import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "..//..//exports/export";
import "..//..//css/blogs.css";

export function BlogsBanner() {
    return (
        <section className='banner relative'>
            <div className="banner__wrapper">
                <header className='banner__wrapper__header mt-[30px] grid z-[1] relative'>
                    <div className="banner__wrapper__content col-[1] row-[1] mt-[138px] z-[5] mx-auto flex justify-end flex-col items-center pb-[60px] max-w-[calc((5/12)*100%)]">
                        <Link to='/blogs/expeditions' className='uppercase leading-[15px] font-light text-xs cursor-none text-[#f4f4f4]'>Expeditions</Link>
                        <h1 className='uppercase font-light text-[48px] text-center text-[#f4f4f4]'>OP: Nepal</h1>
                        <div className="banner__wrapper__social mt-[25px]">
                            <div className="banner__wrapper__social__sharing flex items-center">
                                <p className='uppercase leading-[15px] font-light text-xs text-[#f4f4f4]'>Share</p>
                                <ul className='social__sharing__items m-0 p-0 list-none ml-5 flex items-center'>
                                    <li className="social__sharing__item mr-5">
                                        <Link to="//www.facebook.com/sharer.php?u=https://www.thrudark.com" className='cursor-none'>
                                            <span className='block w-[20px] h-[20px] text-white'>
                                                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.093 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.563V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" fill="currentColor"></path>
                                                </svg>
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="social__sharing__item mr-5">
                                        <Link to="//twitter.com/share?text=&url=https://www.thrudark.com" className='cursor-none    '>
                                            <span className='block w-[20px] h-[20px] text-white'>
                                                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0)">
                                                        <path d="M6.292 18.125c7.545 0 11.673-6.253 11.673-11.674 0-.176-.004-.355-.012-.531A8.332 8.332 0 0020 3.796a8.09 8.09 0 01-2.355.644 4.125 4.125 0 001.804-2.269 8.248 8.248 0 01-2.605.996A4.108 4.108 0 009.85 6.908a11.654 11.654 0 01-8.456-4.284A4.108 4.108 0 002.664 8.1a4.108 4.108 0 01-1.86-.512v.05a4.102 4.102 0 003.293 4.024 4.078 4.078 0 01-1.851.07 4.111 4.111 0 003.831 2.852A8.23 8.23 0 010 16.282a11.64 11.64 0 006.292 1.843z" fill="currentColor"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <path fill="#fff" d="M0 0h20v20H0z"></path>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="banner__wrapper__img col-[1] row-[1] relative">
                        <img src="/images/Ama-Dablam.jpg" alt="Ama Dablam" />
                    </div>
                </header>
            </div>
        </section>
    )
}
