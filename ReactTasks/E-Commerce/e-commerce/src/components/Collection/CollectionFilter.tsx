import React from 'react';
import { Link } from 'react-router-dom';
import "..//../css/collection.css";

export function CollectionFilter() {
    const colors: string[] = ["Black", "Green", "Grey", "MultiCam", "Red"];
    return (
        <div className='collection__filters'>
            <div className="block relative bg-[#030000] before:content-[''] before:absolute before:top-0 before:left-0 before:z-[3] before:w-full before:h-[1px] before:bg-[#212121] after:content-[''] after:absolute after:bottom-0 after:left-0 after:z-[3] after:w-full after:h-[1px] after:bg-[#212121]">
                <div className='px-[60px] mx-auto w-full'>
                    <div className="cllctn__filters__body">
                        <div className="cllctn__filters__items py-[2px] flex items-center ">
                            <div className="py-5 mr-[25px]">
                                <div className="collection__filtersItem relative cursor-pointer">
                                    <div className="flex items-center">
                                        <p className='mt-0 mb-0 uppercase leading-4 font-normal text-[13px] text-[#f4f4f4]'>Colour</p>
                                        <div className="icon w-3 ml-[10px] text-[#f4f4f4]">
                                            <svg viewBox="0 0 12 7" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                    <g id="Rectangle-378" transform="translate(0.999471, 1.100450)" stroke="currentColor">
                                                        <polyline id="Path" points="9.899529 0 4.949749 4.73912 2.22044605e-16 0"></polyline>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="collection__filters__dropdown opacity-[0] invisible border-l border-b border-r border-solid border-[#212121] bg-[#030000] p-5 w-[max-content] z-[3] left-0 top-[calc(100%+22px)] absolute -translate-y-[15px] transition-all">
                                        <div className="collection__fltrs__drpdwn__list">
                                            <ul className=' list-none p-0 m-0'>
                                                {
                                                    colors.map((color) => {
                                                        return (
                                                            <li className='mb-[15px]'>
                                                                <Link to={{pathname:`/collections/mens-apparel/${color}`}} className='leading-6 font-light text-sm flex items-center text-[#f4f4f4] cursor-none'>
                                                                    <div className="mr-[10px] w-5 h-5 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-5 before:h-5 before:border before:border-solid before:border-[#212121] before:rounded-[50%] before:transition-all after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:w-[5px] after:h-[5px] after:bg-[#212121] after:rounded-[50%] after:-translate-x-1/2 after:-translate-y-1/2 transition-all">
                                                                    </div>
                                                                    {color}
                                                                </Link>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="py-5 mr-[25px]">
                                <div className="relative cursor-pointer">
                                    <div className="flex items-center">
                                        <p className='mt-0 mb-0 uppercase leading-4 font-normal text-[13px] text-[#f4f4f4]'>Size</p>
                                        <div className="icon w-3 ml-[10px] text-[#f4f4f4]">
                                            <svg viewBox="0 0 12 7" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                    <g id="Rectangle-378" transform="translate(0.999471, 1.100450)" stroke="currentColor">
                                                        <polyline id="Path" points="9.899529 0 4.949749 4.73912 2.22044605e-16 0"></polyline>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="py-5 mr-[25px]">
                                <div className="relative cursor-pointer">
                                    <div className="flex items-center">
                                        <p className='mt-0 mb-0 uppercase leading-4 font-normal text-[13px] text-[#f4f4f4]'>Pursuit</p>
                                        <div className="icon w-3 ml-[10px] text-[#f4f4f4]">
                                            <svg viewBox="0 0 12 7" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                    <g id="Rectangle-378" transform="translate(0.999471, 1.100450)" stroke="currentColor">
                                                        <polyline id="Path" points="9.899529 0 4.949749 4.73912 2.22044605e-16 0"></polyline>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="py-[6px] ml-auto flex items-center collection__filters__sort">
                                <form>
                                    <div className="form__selectField relative">
                                        <select className=' outline-none shadow-none bg-[#030000] leading-6 font-light text-sm py-[9px] px-[15px] uppercase w-full whitespace-nowrap text-[#f4f4f4] cursor-pointer h-auto pr-[unset] text-center border-0' name="SortBy" id="SortBy">
                                            <option value="manuel" selected>Featured</option>
                                            <option value="best-selling">Best selling</option>
                                            <option value="title-ascending">
                                                Alphabetically, A-Z
                                            </option>
                                            <option value="title-descending">
                                                Alphabetically, Z-A
                                            </option>
                                            <option value="price-ascending">
                                                Price, low to high
                                            </option>
                                            <option value="price-descending">
                                                Price, high to low
                                            </option>
                                            <option value="created-descending">
                                                Date, new to old
                                            </option>
                                            <option value="created-ascending">
                                                Date, old to new
                                            </option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
