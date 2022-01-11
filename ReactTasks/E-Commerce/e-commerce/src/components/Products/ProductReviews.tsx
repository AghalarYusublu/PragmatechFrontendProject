import React from 'react';
import { Link } from 'react-router-dom';
import "..//..//css/collection.css";

export function ProductReviews() {
    const stars: string[] = Array(5).fill("fas fa-star");
    return (
        <section className='product__reviews' id='reviews'>
            <div className="w-full mx-auto px-[60px] my-[60px]">
                <div className="block m-0 clear-both">
                    <div className="p-0 border-0">
                        <div className="flex flex-row items-center">
                            <h2 className='text-[32px] text-[#f4f4f4] font-light uppercase m-0'>Reviews</h2>
                            <div className="flex flex-wrap items-center mt-0 ml-auto">
                                <div className="flex gap-[5px]">
                                    {
                                        stars.map((star) => {
                                            return (
                                                <i className={`${star} flex items-center justify-center relative top-[1px] w-[15px] h-[15px] text-[#c4c4c4]`}></i>
                                            )
                                        })
                                    }
                                </div>
                                <div className="mr-[15px]">
                                    <span className='mr-[30px] ml-[10px] text-xs font-light leading-[15px] uppercase text-[#97999b]'>Based on 5 reviews</span>
                                </div>
                                <span>
                                    <Link to="#" className='relative flex items-center justify-center py-3 px-[15px] text-[13px] font-normal leading-4 text-center text-[#f4f4f4] bg-[#161616] clip__path overflow-hidden border-0 rounded-none transition-colors mt-0'>Write a review</Link>
                                </span>
                            </div>
                        </div>
                        <div className="block">
                            <div className="border-t border-b border-solid border-[#212121] py-[60px] mt-[40px]">
                                <div className="grid grid-cols-12 gap-[30px] mt-0 py-0">
                                    <div className="flex flex-col" style={{ gridColumn: "span 3" }}>
                                        <span className='flex mb-[0.5em] text-[13px]'>
                                            {
                                                stars.map((data) => {
                                                    return (
                                                        <i className={`${data} flex items-center justify-center relative w-[15px] h-[15px] top-[1px] text-[#c4c4c4]`}></i>
                                                    )
                                                })
                                            }
                                        </span>
                                        <h3 className='text-[#f4f4f4] text-2xl font-light order-[unset] uppercase'>The Big Boy!</h3>
                                        <span className='inline-block text-xs text-[#f4f4f4] font-light italic leading-[15px] mb-[1em] uppercase'>
                                            <strong>Scott Bunce</strong>
                                        </span>
                                    </div>
                                    <div className="col-[span,6] m-0" style={{ gridColumn: "span 6" }}>
                                        <p className="text-sm font-light leading-6 text-[#97999b]">
                                            I love this coat. Lots of pockets, surprisingly light for a warm parka. Off to Austria in the New Year to try it out. Looks great as well!!
                                        </p>
                                    </div>
                                    <div className="mt-auto ml-auto" style={{ gridColumn: "span 3" }}>
                                        <Link to="#" className='text-[11px] leading-4 text-[#97999b] float-right'>Report as Inappropriate</Link>
                                    </div>
                                </div>
                                <div className="grid grid-cols-12 gap-[30px] mt-[55px] py-0">
                                    <div className="flex flex-col" style={{ gridColumn: "span 3" }}>
                                        <span className='flex mb-[0.5em] text-[13px]'>
                                            {
                                                stars.map((data) => {
                                                    return (
                                                        <i className={`${data} flex items-center justify-center relative w-[15px] h-[15px] top-[1px] text-[#c4c4c4]`}></i>
                                                    )
                                                })
                                            }
                                        </span>
                                        <h3 className='text-[#f4f4f4] text-2xl font-light order-[unset] uppercase'>A+</h3>
                                        <span className='inline-block text-xs text-[#f4f4f4] font-light italic leading-[15px] mb-[1em] uppercase'>
                                            <strong>Mike W</strong>
                                        </span>
                                    </div>
                                    <div className="col-[span,6] m-0" style={{ gridColumn: "span 6" }}>
                                        <p className="text-sm font-light leading-6 text-[#97999b]">
                                            Really impressed to find a mix of down and Ventile with this level of attention to detail. Technically probably more wearable than the MCB version as I trust Ventile in wet conditions more. 10/10.
                                        </p>
                                    </div>
                                    <div className="mt-auto ml-auto" style={{ gridColumn: "span 3" }}>
                                        <Link to="#" className='text-[11px] leading-4 text-[#97999b] float-right'>Report as Inappropriate</Link>
                                    </div>
                                </div>
                                <div className="grid grid-cols-12 gap-[30px] mt-[55px] py-0">
                                    <div className="flex flex-col" style={{ gridColumn: "span 3" }}>
                                        <span className='flex mb-[0.5em] text-[13px]'>
                                            {
                                                stars.map((data) => {
                                                    return (
                                                        <i className={`${data} flex items-center justify-center relative w-[15px] h-[15px] top-[1px] text-[#c4c4c4]`}></i>
                                                    )
                                                })
                                            }
                                        </span>
                                        <h3 className='text-[#f4f4f4] text-2xl font-light order-[unset] uppercase'>This jacket is the next</h3>
                                        <span className='inline-block text-xs text-[#f4f4f4] font-light italic leading-[15px] mb-[1em] uppercase'>
                                            <strong>william Hunt</strong>
                                        </span>
                                    </div>
                                    <div className="col-[span,6] m-0" style={{ gridColumn: "span 6" }}>
                                        <p className="text-sm font-light leading-6 text-[#97999b]">
                                            This jacket is the next level to anything I have every had in the past. Clearly made with the highest quality materials can't wait to go climbing in it soon
                                        </p>
                                    </div>
                                    <div className="mt-auto ml-auto" style={{ gridColumn: "span 3" }}>
                                        <Link to="#" className='text-[11px] leading-4 text-[#97999b] float-right'>Report as Inappropriate</Link>
                                    </div>
                                </div>
                                <div className="grid grid-cols-12 gap-[30px] mt-[55px] py-0">
                                    <div className="flex flex-col" style={{ gridColumn: "span 3" }}>
                                        <span className='flex mb-[0.5em] text-[13px]'>
                                            {
                                                stars.map((data) => {
                                                    return (
                                                        <i className={`${data} flex items-center justify-center relative w-[15px] h-[15px] top-[1px] text-[#c4c4c4]`}></i>
                                                    )
                                                })
                                            }
                                        </span>
                                        <h3 className='text-[#f4f4f4] text-2xl font-light order-[unset] uppercase'>The ThruDark Parka is on</h3>
                                        <span className='inline-block text-xs text-[#f4f4f4] font-light italic leading-[15px] mb-[1em] uppercase'>
                                            <strong>Josh Kind</strong>
                                        </span>
                                    </div>
                                    <div className="col-[span,6] m-0" style={{ gridColumn: "span 6" }}>
                                        <p className="text-sm font-light leading-6 text-[#97999b]">
                                            The ThruDark Parka is on another level of extreme cold weather protection. Attention to design and detail is second to none.
                                            <br />
                                            <br />
                                            Subzero conditions require equipment you can trust and ThruDark know exactly how to do just that. For the amount of design and development that goes into one jacket never mind their whole range the price is perfect. If your looking for gear that wont let you down and may even one day save your life then youve found it!!!
                                            <br />
                                            <br />
                                            I also want to note that the customer support is fantastic. The whole team is super helpful to answer any questions you may have.
                                            <br />
                                            <br />
                                            Once again the ThruDark lads have nailed extreme outdoor gear!!
                                        </p>
                                    </div>
                                    <div className="mt-auto ml-auto" style={{ gridColumn: "span 3" }}>
                                        <Link to="#" className='text-[11px] leading-4 text-[#97999b] float-right'>Report as Inappropriate</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}