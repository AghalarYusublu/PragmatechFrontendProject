import React, { useState } from 'react';
import { PoductSizeGuideItem } from "..//..//exports/export";
import { motion, AnimatePresence } from "framer-motion";
import '../../css/products.css'


interface ISizeGuide {
    modelSizeGuide: ISizeGuideData;
    measuringGuide: ISizeGuideData
}

interface ISizeGuideData {
    imgSrc: string;
    headerData: SizeGuideHeaderData[]
    sizeGuideData: SizeGuideModelData[];
}

interface SizeGuideModelData {
    id: number;
    name?: string;
    height: string;
    weight: string;
    chest: string;
    waist: string;
    size: string;
}

interface SizeGuideHeaderData {
    id: number;
    title?: string;
}

export function ProductSizeGuide() {

    const [active, setActive] = useState(false);

    const datas: ISizeGuide = {
        modelSizeGuide: {
            imgSrc: "image.jpeg",
            headerData: [
                {
                    id: 1,
                },
                {
                    id: 2,
                    title: "Height"
                },
                {
                    id: 3,
                    title: "Weight"
                },
                {
                    id: 4,
                    title: "Chest"
                },
                {
                    id: 5,
                    title: "Waist"
                },
                {
                    id: 6,
                    title: "Size"
                }
            ],
            sizeGuideData: [
                {
                    id: 1,
                    name: "Louis Tinsley",
                    height: "178CM",
                    weight: "83kg",
                    chest: '42"',
                    waist: '31"',
                    size: "M"
                },
                {
                    id: 2,
                    name: "Anthony 'Staz' Stazicker",
                    height: "173cm",
                    weight: "76kg",
                    chest: '38"',
                    waist: '30"',
                    size: "S"
                },
                {
                    id: 3,
                    name: "Dylan Hartley",
                    height: "185cm",
                    weight: "110kg",
                    chest: '48"',
                    waist: '38"',
                    size: "XXL"
                },
                {
                    id: 4,
                    name: "Jason 'Foxy' Carl Fox",
                    height: "188cm",
                    weight: "100kg",
                    chest: '44"',
                    waist: '34"',
                    size: "L/XL"
                },
                {
                    id: 5,
                    name: "Matt Hardy",
                    height: "190cm",
                    weight: "100kg",
                    chest: '46"',
                    waist: '36"',
                    size: "XL"
                }
            ]
        },
        measuringGuide: {
            imgSrc: "ThruDark-Website-Size-Guide-Mens-Top-1328x1328px.png",
            headerData: [
                {
                    id: 1,
                    title: "Size"
                },
                {
                    id: 2,
                    title: "S"
                },
                {
                    id: 3,
                    title: "M"
                },
                {
                    id: 4,
                    title: "L"
                },
                {
                    id: 5,
                    title: "XL"
                },
                {
                    id: 6,
                    title: "XXL"
                }
            ],
            sizeGuideData: [
                {
                    id: 1,
                    name: "Chest",
                    height: '38"',
                    weight: '40"',
                    chest: '42"',
                    waist: '44"',
                    size: '46"'
                },
            ]
        }
    }

    return (
        <section className='product__sizeGuide' id='sizing'>
            <div className="w-full mx-auto px-[60px] my-[60px]">
                <div className="grid">
                    <div className="col-[1] row-[1] flex -mx-[60px]">
                        <div className="flex relative w-full">
                            <img className='w-full object-cover' src="/images/Background-Image-Desktop.jpg" alt="Background Image" />
                        </div>
                    </div>
                    <div className="col-[1] row-[1] flex my-[60px]">
                        <div className="relative bg-[#030000] w-1/2 flex-shrink-0">
                            <div className="flex relative w-full h-full">
                                <div className="absolute top-0 left-0 w-full h-full pointer-events-none transition-opacity">
                                    <div className="absolute top-0 left-0 w-full h-full">
                                        <div className="flex relative overflow-hidden flex-shrink-0 w-full min-h-full">
                                            <motion.div key={active !== false ? "Model Size" : "Measuring Guide"} className="flex w-full relative" animate={{ opacity: 1, y: 0 }}
                                                initial={{ opacity: 0 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.15 }}>
                                                {
                                                    active !== false ? <img className='w-full object-cover' src={`/images/${datas.modelSizeGuide.imgSrc}`} alt="Image Jpg" /> : <img className='w-full object-cover' src={`/images/${datas.measuringGuide.imgSrc}`} alt="Image Jpg" />
                                                }
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative bg-[#030000] w-1/2 flex-shrink-0">
                            <div className="flex flex-col h-full justify-center items-center py-[70px] px-[100px]">
                                <h2 className='text-[32px] text-[#f4f4f4] font-light uppercase'>Size guide</h2>
                                <div className="mt-[30px]">
                                    <div className="flex justify-center">
                                        <button className={`relative mr-[25px] pb-[10px] text-[#f4f4f4] text-[13px] font-normal leading-4 ${active === true ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#f4f4f4]' : null} uppercase`} onClick={() => setActive(true)}>Model Size</button>
                                        <button className={`relative mr-[25px] pb-[10px] text-[#f4f4f4] text-[13px] font-normal leading-4 ${active === false ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#f4f4f4]' : null} uppercase`} onClick={() => setActive(false)}>Measuring Guide</button>
                                    </div>
                                </div>
                                <div className="w-full mt-10">
                                    <AnimatePresence>
                                        <motion.div className="grid grid-cols-[135px,repeat(5,1fr)]" key={active !== false ? "Model Size" : "Measuring Guide"} animate={{ opacity: 1, x: 0 }}
                                            initial={{ opacity: 0, x: 20 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.15 }}>
                                            {
                                                active !== false ? datas.modelSizeGuide.headerData.map((item) => {
                                                    return (
                                                        <div className="flex items-center justify-center min-h-[50px] py-[10px] px-[5px] text-[#f4f4f4] text-center border-b border-solid border-[#212121] text-xs font-light leading-[15px] uppercase whitespace-nowrap">{item.title}</div>
                                                    )
                                                }) : datas.measuringGuide.headerData.map((item) => {
                                                    return (
                                                        <div className="flex items-center justify-center min-h-[50px] py-[10px] px-[5px] text-[#f4f4f4] text-center border-b border-solid border-[#212121] text-xs font-light leading-[15px] uppercase whitespace-nowrap">{item.title}</div>
                                                    )
                                                })
                                            }
                                            {
                                                active !== false ? datas.modelSizeGuide.sizeGuideData.map((data) => {
                                                    return (
                                                        <PoductSizeGuideItem data={data} />
                                                    )
                                                }) : datas.measuringGuide.sizeGuideData.map((data) => {
                                                    return (
                                                        <PoductSizeGuideItem data={data} />
                                                    )
                                                })
                                            }
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}