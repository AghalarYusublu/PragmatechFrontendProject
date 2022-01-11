import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from '../Button';

export function SingleImg() {
    return (
        <div className='rain_trousers_sec block'>
            <div className="rain_trouserssec_wrapper my-[60px]">
                <div className="rain_trouserssec_body">
                    <div className="rain_trousers_inner grid">
                        <div className="rain_trousers_background col-[1] row-[1] overflow-hidden">
                            <div className="rain_trousersbackground_img flex w-full h-full">
                                <img className='w-full object-cover' src="/images/Feature-Backround_1944x.jpg" alt="Feature Background" />
                            </div>
                        </div>
                        <div className="rain_trousers_container col-[1] row-[1] flex items-center p-[60px]">
                            <div className="rain_trousers_items flex flex-row-reverse flex-grow">
                                <div className="rain_trousers_item w-1/2">
                                    <div className="rain_trousersitem_content flex justify-center items-center bg-black h-full p-[100px]">
                                        <div className="rain_trouseritem_info text-center max-w-[445px]">
                                            <p className='text-xs font-light uppercase mb-[15px] text-[#7b7356]'>Just landed</p>
                                            <h2 className='text-[48px] font-light uppercase text-[#f4f4f4]'>raid trousers</h2>
                                            <p className='mt-[15px] text-[#97999b] text-sm font-light'>3-layer ripstop from schoeller®, featuring c_change® membrane which adapts to ambient conditions. Fabric fibres open up allowing excess heat and moisture to escape to the outside air, but at times of low activity remain closed keeping heat close to the body.</p>
                                            <div className="double_imgitem_links  w-[max-content] mx-auto mt-[30px] transition">
                                            <Button path='/products/raid-trousers' content='shop now'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rain_trousers_item w-1/2">
                                    <div className="rain_trousersitem_content h-full">
                                        <div className="rain_trousersitem_img flex w-full h-full">
                                            <img className='w-full' src="/images/singleImage.jpg" alt="Thru Dark Rain Trousers" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}