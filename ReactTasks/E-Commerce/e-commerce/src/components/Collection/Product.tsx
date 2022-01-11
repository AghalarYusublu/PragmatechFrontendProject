import React from 'react';
import { Link } from 'react-router-dom';
import { ProductItem } from "..//..//exports/export";
import { useAppSelector } from '../../redux/hooks';
import { selectMansCollectionData } from '../../redux/reducers/mansCollectionSlice';
import "..//..//css/collection.css";

export function Product() {
    const datas = useAppSelector(selectMansCollectionData);
    return (
        <section id='collection'>
            <div className="my-[60px] px-[60px]">
                <div className="cllctn__wrapper">
                    <div className="cllctn__product__container">
                        <div className="cllctn__product__items grid grid-cols-3 gap-[30px]">
                            {
                                datas.map((data) => {
                                    return (
                                        <ProductItem key={data.id} data={data} />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <footer className='w-[max-content] mx-auto mt-[100px] mb-[60px]'>
                        <div className="min-w-[220px]">
                            <button className=' whitespace-nowrap overflow-hidden rounded-none border-0 uppercase text-center leading-4 font-normal text-[13px] flex justify-center items-center z-[1] relative clip__path transition-all text-[#f4f4f4] bg-[#7b7356] py-[15px] px-20 w-full cursor-none'>
                                <span className='block'>Load More Results</span>
                            </button>
                            <div className="mx-auto mt-[25px] flex items-center w-full">
                                <p className='leading-4 font-normal text-[13px] mr-[13px] text-[#f4f4f4]'>50</p>
                                <span className='relative overflow-hidden flex-1 h-[2px] bg-[#4f4f4f]'>
                                    <span className='absolute top-0 left-0 right-0 bottom-0 block w-full h-[inherit] bg-[#f4f4f4] translate-x-[-25.3731343283582%]'></span>
                                </span>
                                <p className='leading-4 font-normal text-[13px] ml-[13px] text-[#f4f4f4]'>67</p>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </section>
    )
}
