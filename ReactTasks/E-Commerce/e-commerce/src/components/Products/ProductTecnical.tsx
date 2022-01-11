import React from 'react';
import { Link } from 'react-router-dom';
import "..//..//css/collection.css";
import '../../css/products.css'

interface IPerformance {
    id: number;
    imgSrc: string;
    title: string;
}

interface IFeatures {
    id: number;
    text: string;
}

export function ProductTechnical() {
    const performance: IPerformance[] = [
        {
            id: 1,
            imgSrc: "Temp-Rating-Breath",
            title: "Breathability"
        },
        {
            id: 2,
            imgSrc: "Untitled-design---2021-10-19T131712.452",
            title: "Wind Resistance"
        },
        {
            id: 3,
            imgSrc: "Untitled-design---2021-10-19T133119.605",
            title: "Thermal Rating"
        },
        {
            id: 4,
            imgSrc: "Untitled-design---2021-10-19T133100.465",
            title: "Durability"
        }
    ]

    let features: IFeatures[] = [
        {
            id: 1,
            text: "DESIGNED AND DEVELOPED FOR EXTREME COLD WEATHER EXPEDITIONS, INSULATED WITH 900 FILL POWER DOWN."
        },
        {
            id: 2,
            text: "LARGE CAPACITY BELLOW POCKETS AND EXTENDED CHEST POCKETS ALLOW FOR STORAGE OF EXPEDITION CRITICAL ITEMS."
        },
        {
            id: 3,
            text: "INTERNALLY THERE ARE FOUR LARGE ADDITIONAL POCKETS FOR SENSITIVE ITEMS TO BE PLACED NEXT TO THE BODIES CORE."
        },
        {
            id: 4,
            text: "EXTERNAL MICRO FLEECED HAND POCKETS, WRIST WARMERS AND AN INTERNAL BALACLAVA PROVIDE EXPOSED HANDS AND FACE PROTECTION FROM SEVERE COLD."
        },
        {
            id: 5,
            text: "INTERNAL WAIST DRAW CORD AND REMOVABLE SNOW SKIRT ARE PROVIDED TO HELP MINIMISE HEAT LOSS FROM THE BODY’S CORE AND MITIGATE WIND AND SNOW INGRESS."
        },
        {
            id: 6,
            text: "UPPER ARM AND HOOD VELCRO PATCHES DESIGNED TO INCORPORATE REFLECTIVE PATCHES, EMERGENCY STROBES AND LIGHTING SYSTEMS FOR USE IN EMERGENCY SITUATIONS."
        },
        {
            id: 7,
            text: "CORDURA® X DYNEEMA® REINFORCED SHOULDER & ELBOW PANELS."
        },
        {
            id: 8,
            text: "THRUDARK HERITAGE CAMO LINER."
        },
        {
            id: 9,
            text: "YKK ZIPS THROUGHOUT."
        },
        {
            id: 10,
            text: "THRUDARK EXPEDITION PATCHES INCLUDED."
        },
        {
            id: 11,
            text: "THE WEIGHT OF THIS JACKET IS 1900 GRAMS BASED ON A SIZE LARGE"
        }
    ]

    return (
        <section className='prdct__technical'>
            <div className="w-full mx-auto px-[60px] my-[60px] pt-[40px]">
                <div className="grid grid-cols-12">
                    <div className="prdct__technical__content row-[1]">
                        <p className='text-[#4f4f4f] mb-[15px] text-xs font-light leading-[15px] uppercase'>Technical</p>
                        <h2 className='text-[#f4f4f4] text-[32px] font-light uppercase'>EXPEDITION PARKA - Ventile®</h2>
                        <p className='text-[#bfbfbf] mt-[15px] text-sm font-light leading-6'>
                            An extremely resilient, cold environment parka tested down to -40℃. Cordura® X Dyneema® reinforced shoulder & elbow panels and a highly windproof, breathable and water-repellant Cotton Ventile® fabric blocks out the bitter cold.  Designed with years of combined Special Forces experience this parka leaves nothing to chance.  Unquestionable protection against harsh winter elements, allowing you to concentrate on what matters most: the task at hand.
                        </p>
                        <p className='text-[#f4f4f4] mt-[45px] text-lg font-light uppercase'>Don't let your blood run cold - TAKE CONTROL.</p>
                        <div className="block mt-[50px]">
                            {
                                performance.map((data) => {
                                    return (
                                        <div key={data.id} className="flex mb-10">
                                            <div className="w-[50px] h-[50px] mr-[25px] flex-shrink-0">
                                                <div className="flex w-full relative">
                                                    <img className='w-full object-cover' src={`/images/${data.imgSrc}.png`} alt={data.title} />
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <h3 className='text-[13px] text-[#f4f4f4] font-normal leading-4 uppercase'>{data.title}</h3>
                                                <div className="grid grid-cols-10 relative mt-[10px] gap-[5px]">
                                                    <span className='block relative w-full h-2 bg-[#202020]'></span>
                                                    <span className='block relative w-full h-2 bg-[#202020]'></span>
                                                    <span className='block relative w-full h-2 bg-[#202020]'></span>
                                                    <span className='block relative w-full h-2 bg-[#202020]'></span>
                                                    <span className='block relative w-full h-2 bg-[#202020]'></span>
                                                    <span className='block relative w-full h-2 bg-[#202020]'></span>
                                                    <span className='block relative w-full h-2 bg-[#202020]'></span>
                                                    <span className='block relative w-full h-2 bg-[#202020]'></span>
                                                    <span className='block relative w-full h-2 bg-[#202020]'></span>
                                                    <span className='block relative w-full h-2 bg-[#202020]'></span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="block mt-[50px]">
                            <p className='text-[#4f4f4f] mb-[15px] text-xs font-light uppercase'>Product Resistance</p>
                            <h2 className='text-[32px] text-[#f4f4f4] font-light uppercase'>Temperature Rating</h2>
                            <div className="relative h-full before:content[' '] before:absolute before:top-0 before:left-0 before:w-[10px] before:h-[10px] before:border-t before:border-l before:border-solid before:border-white before:transition-opacity after:content-[' '] after:absolute after:top-0 after:right-0 after:w-[10px] after:h-[10px] after:border-t after:border-r after:border-solid after:border-white">
                                <div className="mt-[30px] p-[3vw] border border-solid border-[#1a1a1a] before:content[' '] before:absolute before:bottom-0 before:right-0 before:w-[10px] before:h-[10px] before:border-b before:border-r before:border-solid before:border-white before:transition-opacity after:content-[' '] after:absolute after:bottom-0 after:left-0 after:w-[10px] after:h-[10px] after:border-b after:border-l after:border-solid after:border-white">
                                    <div className="flex relative overflow-hidden">
                                        <div className="w-full h-full">
                                            <svg className='w-[inherit] h-[inherit]' width="320" height="320" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="160" cy="160" r="160" fill="#161616"></circle>
                                                <circle opacity="0.3" cx="159" cy="160" r="125" stroke="#F4F4F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="0.1 8"></circle>
                                                <circle cx="159" cy="160" r="125" stroke="url(#gradient1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="prdct__temperature__stroke"></circle>
                                                <circle cx="158" cy="35" r="3" fill="#7B7356"></circle>
                                                <defs>
                                                    <radialGradient id="gradient1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(159 160) rotate(90) scale(125)">
                                                        <stop offset="0.125954" stop-color="#56CCF2"></stop>
                                                        <stop offset="0.500957" stop-color="#7B7356"></stop>
                                                    </radialGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="absolute top-0 left-0 w-full h-full">
                                            <svg className='w-[inherit] h-[inherit]' width="320" height="320" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M151.485 46.4558C146.799 41.7695 146.799 34.1716 151.485 29.4853C156.172 24.799 163.77 24.799 168.456 29.4853C173.142 34.1716 173.142 41.7695 168.456 46.4558C163.77 51.1421 156.172 51.1421 151.485 46.4558Z" fill="#56CCF2"></path>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M150.071 47.87C144.604 42.4027 144.604 33.5384 150.071 28.0711C155.538 22.6037 164.403 22.6037 169.87 28.0711C175.337 33.5384 175.337 42.4027 169.87 47.87C164.403 53.3374 155.538 53.3374 150.071 47.87ZM151.485 29.4853C146.799 34.1716 146.799 41.7695 151.485 46.4558C156.172 51.1421 163.77 51.1421 168.456 46.4558C173.142 41.7695 173.142 34.1716 168.456 29.4853C163.77 24.799 156.172 24.799 151.485 29.4853Z" fill="#161616"></path>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M157.098 34.3995L158.627 33.5864L164.502 37.2577L164.442 38.9887L158.325 42.2413L156.856 41.3235L157.098 34.3995ZM157.855 41.3584L163.973 38.1058L158.097 34.4344L157.855 41.3584Z" fill="#161616"></path>
                                            </svg>
                                        </div>
                                        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full text-center">
                                            <div className="grid grid-rows-1 w-[64%]">
                                                <div className="flex justify-center items-end overflow-hidden">
                                                    <div className="text-[4.5vw] text-[#f4f4f4] font-light whitespace-nowrap uppercase">
                                                        <span>-40</span>
                                                        <span className='text-[2vw]'>°C</span>
                                                    </div>
                                                </div>
                                                <div className="flex justify-center items-start border-t border-solid border-[#4f4f4f] overflow-hidden">
                                                    <div className="w-full text-center pt-[0.5vw]">
                                                        <p className='mt-[0.8vw] text-[1vw] text-[#f4f4f4] font-normal opacity-[1] uppercase'>Extreme</p>
                                                        <p className='mt-[0.8vw] text-[1vw] text-[#f4f4f4] font-normal opacity-[.3] uppercase'>Enduring</p>
                                                        <p className='mt-[0.8vw] text-[1vw] text-[#f4f4f4] font-normal opacity-[.1] uppercase'>Essential</p>
                                                        <p className='mt-[0.8vw] text-[1vw] text-[#f4f4f4] font-normal opacity-[.06] uppercase'>Versatile</p>
                                                        <p className='mt-[0.8vw] text-[1vw] text-[#f4f4f4] font-normal opacity-[-.06] uppercase'>Lightweight</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[50px]">
                            <div className="flex border-b border-solid border-[#212121] mb-[30px] pb-[30px] text-[#7b7356]">
                                <h2 className='text-xs font-light leading-[15px] uppercase'>Feature Set</h2>
                                <span className='text-xs font-light leading-[15px] ml-auto'>v1.0</span>
                            </div>
                            <ul className='mb-[30px] pb-[30px] border-b border-solid border-[#212121] list-none'>
                                {
                                    features.map((info) => {
                                        return (
                                            <li className='flex items-center mb-5 text-xs text-[#f4f4f4] font-light leading-[15px] uppercase'>
                                                <div className="w-[5px] h-[5px] mr-[15px] text-[#7b7356]">
                                                    <svg viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="m4.5 3.165-3 1.732V1.433l3 1.732Z" fill="currentColor" className="ico-Edged__Fill"></path>
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M1.75 5.33 1 4.897V1.433L1.75 1l3 1.732v.866l-3 1.732ZM4.5 3.165l-3-1.732v3.464l3-1.732Z" fill="currentColor" className="ico-Edged__Stroke"></path>
                                                    </svg>
                                                </div>
                                                {info.text}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <div className="mb-[30px]">
                                <button className='border-0 rounded-none overflow-x-hidden p-0 relative w-full before:content-[""] before:absolute before:top-0 before:left-0 before:w-[10px] before:h-[10px] before:transition-opacity before:border-t before:border-l before:border-solid before:border-white after:content-[""] after:absolute after:top-0 after:right-0 after:w-[10px] after:h-[10px] after:border-t after:border-r after:border-solid after:border-white after:transition-opacity'>
                                    <div className='block p-5 border border-solid border-[#1a1a1a] before:content-[""] before:absolute before:bottom-0 before:right-0 before:w-[10px] before:h-[10px] before:transition-opacity before:border-b before:border-r before:border-solid before:border-white after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-[10px] after:h-[10px] after:border-b after:border-l after:border-solid after:border-white after:transition-opacity'>
                                        <div className='flex items-center'>
                                            <div className="block w-[45px] flex-shrink-0 mr-5">
                                                <div className="flex relative w-full">
                                                    <img className='w-full object-cover' src="/images/Untitled-design---2021-10-26T144418.045.png" alt="Flag" />
                                                </div>
                                            </div>
                                            <div className="block text-left flex-grow">
                                                <h2 className='text-[#f4f4f4] text-[13px] font-normal leading-4 uppercase'>Made in Italy</h2>
                                                <p className='mt-[3px] text-[#4f4f4f] text-xs font-light leading-[15px] uppercase'>Why do we source from here?</p>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div className="mb-[30px] text-[#bfbfbf]">
                                <p className='mt-0 mb-0 text-sm font-light leading-6 text-[#97999b]'>
                                    Please refer to fabric care instructions for particular garment care. If you should have any further queries about the care of your garment please send us an email to
                                    <Link className='text-[#f5f5f3] relative w-[max-content] pl-[3px] mt-0' to="mailto:support@thrudark.com">support@thrudark.com</Link>
                                    .
                                    <br />
                                    <br />
                                    Find out about the latest ThruDark product developments
                                    <Link className='text-[#f5f5f3] relative w-[max-content] pl-[3px] mt-0' to="/pages/contact">here</Link>.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="prdct__technical__img row-[1]">
                        <div className="sticky top-14">
                            <div className="relative w-full cursor-grab">
                                <img src="/images/download.png" alt="Download" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}