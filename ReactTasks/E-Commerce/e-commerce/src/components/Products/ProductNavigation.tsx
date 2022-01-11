import React from 'react'
import "../../css/products.css";
import {Link} from 'react-scroll'
interface IProps {
    isScroll: boolean
}


export const ProductNavigation = ({isScroll}:IProps) => {
    return <>
        <section className={`flex z-10 sticky ${isScroll == false ? "top-[141.46px]" : "top-0"} product__navigation__sec bg-[#030000] sticky justify-center items-center`}>
            <div className="product__nav overflow-y-hidden overflow-x-auto">
                <ul className='flex '>
                    <li>
                        <Link to='overview'  spy={true} smooth={true} duration={1000} className='product__navigation__link block cursor-none py-[20px] px-[55px] relative text-[#818080] font-normal tracking-[.2em] text-[13px] leading-[16px] uppercase'>
                            Overview
                        </Link>
                    </li>
                    <li>
                        <Link to='media'  spy={true} smooth={true} duration={1000} className='product__navigation__link block cursor-none py-[20px] px-[55px] relative text-[#818080] font-normal tracking-[.2em] text-[13px] leading-[16px] uppercase'>
                            Media
                        </Link>
                    </li>
                    <li>
                        <Link to='technical'  spy={true} smooth={true} duration={1000} className='product__navigation__link block cursor-none py-[20px] px-[55px] relative text-[#818080] font-normal tracking-[.2em] text-[13px] leading-[16px] uppercase'>
                            Technical
                        </Link>
                    </li>
                    <li>
                        <Link to='sizing'  spy={true} smooth={true} duration={1000} className='product__navigation__link block cursor-none py-[20px] px-[55px] relative text-[#818080] font-normal tracking-[.2em] text-[13px] leading-[16px] uppercase'>
                            Sizing
                        </Link>
                    </li>
                    <li>
                        <Link to='reviews'  spy={true} smooth={true} duration={1000} className='product__navigation__link block cursor-none py-[20px] px-[55px] relative text-[#818080] font-normal tracking-[.2em] text-[13px] leading-[16px] uppercase'>
                            Reviews
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="product__buy__btn flex items-center">
                <Link to='overview' className='cursor-none py-[20px] px-[55px] text-[#7b7356] font-normal tracking-[.2em] text-[13px] leading-[16px] uppercase'>Buy now</Link>
            </div>
        </section>
     
    </>
}


