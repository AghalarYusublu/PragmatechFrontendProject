import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { Link } from 'react-router-dom';
import { selectMansCollectionData, IMansCollectionData } from '../../redux/reducers/mansCollectionSlice';
import "..//..//css/collection.css";
import '../../css/products.css'

export function ProductsBanner() {
    const [images, setImages] = useState<string[]>();
    const [data, setData] = useState<IMansCollectionData>();
    const [isCheck, setIsCheck] = useState(false);
    const [img, setImg] = useState<string>();
    const { name } = useParams();
    const products = useAppSelector(selectMansCollectionData);
    const stars: string[] = Array(5).fill("fas fa-star");

    const getImg = (index: number) => {
        const srcImg = data?.images[index];
        if (srcImg) {
            setImg(srcImg);
        }
        setIsCheck(true)
    }

    useEffect(() => {
        if (products) {
            const obj = products.find((w) => w.title.replace(/[^A-Z0-9]/ig, "") == name);
            if (obj) {
                setData(obj);
            }
        }
    }, [])

    useEffect(() => {
        if (data) {
            setImages(data.images)
        }
    }, [data])

    return (
        <section id='overview' className='mt-[183px]' >
            <div className="product">
                <div className="product__inner px-[60px] mx-auto w-full">
                    <div className="pt-[40px] mb-[60px]">
                        <div className="grid gap-[15px] grid-cols-12">
                            <div className="product__column grid gap-[15px] grid-cols-7">
                                <div className="product_column_thumbnails block">
                                    <div className="flex flex-col">
                                        {
                                            images?.map((src, index) => {
                                                return (
                                                    <button onClick={() => { getImg(index) }} className='overflow-x-hidden rounded-none border-0 bg-transparent p-0 mb-[15px] cursor-none w-[70px] relative h-full before:content-[" "] before:absolute before:top-0 before:left-0 before:w-[10px] before:h-[10px] before:opacity-0 before:border-t before:border-l before:border-solid before:border-white before:transition-opacity after:content-[" "] after:absolute after:top-0 after:right-0 after:w-[10px] after:h-[10px] after:opacity-0 after:transition-opacity after:border-t after:border-r after:border-solid after:border-white'>
                                                        <div className="prdct__thumbnails__img border border-solid border-[#1a1a1a] transition-all before:content-[' '] before:absolute before:bottom-0 before:right-0 before:w-[10px] before:h-[10px] before:opacity-0 before:border-b before:border-r before:border-solid before:border-white before:transition-opacity after:content-[' '] after:absolute after:bottom-0 after:left-0 after:w-[10px] after:h-[10px] after:opacity-0 after:transition-opacity after:border-b after:border-l after:border-solid after:border-white">
                                                            <div className="flex relative w-full">
                                                                <img src={`/images/${src}`} alt="Expedition" />
                                                            </div>
                                                        </div>
                                                    </button>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="product__column__mainImg w-full relative">
                                    <div className="grid">
                                        <div className=" col-[1] row-[1] opacity-[1] transition-opacity">
                                            <div className="flex w-full relative">
                                                {isCheck !== true ? <img src={data?.mainImg} alt={data?.title} /> : <img className='w-full object-cover' src={`/images/${img}`} alt={data?.title} />}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product__column__detail">
                                <div className="sticky pb-0">
                                    <div className="mb-[10px]">
                                        <h2 className='uppercase font-light text-[32px] text-[#f4f4f4]'>{data?.title}</h2>
                                        <div className="flex relative mt-[5px]">
                                            <div className="leading-6 font-light text-sm text-[#f4f4f4]">
                                                <p className='leading-6 font-light text-sm text-[#f4f4f4]'>
                                                    {data?.price}
                                                </p>
                                            </div>
                                            <div className=" bg-transparent h-[unset] w-auto flex flex-grow relative">
                                                <div className="flex items-center relative h-[unset] w-full justify-end">
                                                    <button className=' select-none text-[#97999b] h-full w-full top-0 left-0 absolute cursor-none text-right text-sm pr-[50px]'>Add to wishlist</button>
                                                    <span className='flex items-center justify-center w-10 h-10 transition-colors'>
                                                        <svg className='w-5 h-5' viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M16.13 8.186V6.814l3.508-3.726-.08-.088H7v9h12.345l.208-.178-3.424-3.636zM21 11.9L19.714 13H6V2h14l1 1.1-4.143 4.4L21 11.9z" fill="currentColor"></path>
                                                            <path d="M3 2h1v19H3V2z" fill="currentColor"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="h-[25px] mt-[25px]">
                                            <div className="min-w-[auto] min-h-[auto] flex items-center">
                                                <span className='m-0 text-[#f4f4f4]'>
                                                    {
                                                        stars.map((star) => {
                                                            return (
                                                                <i className={`${star} relative w-[1.3em] h-[1.3em] mr-[5px]`}></i>
                                                            )
                                                        })
                                                    }
                                                </span>
                                                <span className='uppercase leading-[15px] font-light text-xs text-[#f4f4f4] ml-[10px]'>{data?.reviews} reviews</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product__detail__desc block">
                                        <p className='leading-6 font-light text-sm text-[#97999b] text-left'>{data?.overview}</p>
                                    </div>
                                    <div className="product__sizes flex">
                                        <div className="flex flex-col mt-5">
                                            <label htmlFor="SelectSize" className='flex items-start leading-6 font-light text-sm text-[#f4f4f4] capitalize cursor-none'>Size:</label>
                                            <div className="flex gap-[10px] flex-wrap mt-[10px]">
                                                {data?.sizes?.map((size) => {
                                                    return (
                                                        <div className="relative">
                                                            <button className='w-[44px] h-[44px] relative bg-white text-white clip__path border-0 text-[13px] leading-4 font-normal transition-colors cursor-none uppercase'>
                                                                <span className='absolute top-[1px] right-[1px] bottom-[1px] left-[1px] flex items-center justify-center bg-[#131313] clip__path pointer-events-none'>{size}</span>
                                                            </button>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="block self-start ml-auto">
                                            <button className='w-20 p-0 rounded-none border-0 outline-none overflow-x-hidden bg-transparent text-[#bfbfbf] text-[inherit] cursor-none'>
                                                <label htmlFor="SizeGuide" className='text-sm font-light leading-6 cursor-none'>Size Guide</label>
                                                <span className='block mt-[10px]'>
                                                    <svg viewBox="0 0 65 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="m37.33 18.5-.866 1.5h-6.928l-.866-1.5 3.464-6h1.732l3.464 6ZM33 13l-3.464 6h6.928L33 13Z" fill="currentColor"></path>
                                                        <path d="M1 0h63v1H1V0ZM1 0v6H0V1l1-1Z" fill="currentColor"></path>
                                                        <path d="M32 0h1v5h-1V0ZM64 0v6h1V1l-1-1Z" fill="currentColor"></path>
                                                    </svg>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="prdct__detail__button mt-[50px]">
                                        <button className='flex w-full h-[44px] relative items-center justify-center bg-[#7b7356] text-[#f4f4f4] text-[13px] font-normal leading-4 text-center uppercase p-0 border-0 rounded-none overflow-hidden clip__path'>
                                            <span className='block flex-1'>Select your size</span>
                                            <div className="clip__path bg-[#f4f4f4] py-[10px] px-[15px] min-h-[44px] flex items-center">
                                                <div className="flex text-[#7b7356]">
                                                    <svg className="w-[15px] h-[15px]" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 6.5h12v1H1v-1Z" fill="currentColor"></path>
                                                        <path d="M6.5 13V1h1v12h-1Z" fill="currentColor"></path>
                                                    </svg>
                                                </div>
                                                <span className='block w-[2px] px-[15px] text-[#4f4f4f]'>
                                                    <svg className='w-[2px]' viewBox="0 0 2 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1.5 1V.5h-1V1h1Zm-1 20v.5h1V21h-1Zm0-19.952a.5.5 0 0 0 1 0h-1Zm1 1.904a.5.5 0 0 0-1 0h1Zm-1 .096a.5.5 0 0 0 1 0h-1Zm1 1.904a.5.5 0 0 0-1 0h1Zm-1 .096a.5.5 0 0 0 1 0h-1Zm1 1.904a.5.5 0 0 0-1 0h1Zm-1 .096a.5.5 0 0 0 1 0h-1Zm1 1.904a.5.5 0 0 0-1 0h1Zm-1 .096a.5.5 0 0 0 1 0h-1Zm1 1.904a.5.5 0 1 0-1 0h1Zm-1 .096a.5.5 0 1 0 1 0h-1Zm1 1.904a.5.5 0 1 0-1 0h1Zm-1 .096a.5.5 0 1 0 1 0h-1Zm1 1.904a.5.5 0 1 0-1 0h1Zm-1 .096a.5.5 0 1 0 1 0h-1Zm1 1.904a.5.5 0 1 0-1 0h1Zm-1 .096a.5.5 0 1 0 1 0h-1Zm1 1.904a.5.5 0 1 0-1 0h1Zm-1 .096a.5.5 0 1 0 1 0h-1Zm1 1.904a.5.5 0 1 0-1 0h1ZM.5 1v.048h1V1h-1Zm0 1.952v.096h1v-.096h-1Zm0 2v.096h1v-.096h-1Zm0 2v.096h1v-.096h-1Zm0 2v.096h1v-.096h-1Zm0 2v.096h1v-.096h-1Zm0 2v.096h1v-.096h-1Zm0 2v.096h1v-.096h-1Zm0 2v.096h1v-.096h-1Zm0 2v.096h1v-.096h-1Zm0 2V21h1v-.048h-1Z" fill="currentColor"></path>
                                                    </svg>
                                                </span>
                                                <div className="flex text-[#7b7356]">
                                                    <svg className='w-[15px] h-[15px]' viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M20 4.414L18.586 3H4.414L3 4.414V20h17V4.414zM4 2h15l2 2v17H2V4l2-2z" fill="currentColor"></path>
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M9 11.586L10.414 13h2.172L14 11.586V8H9v3.586zM13 14h-3l-2-2V7h7v5l-2 2z" fill="currentColor"></path>
                                                        <path d="M2 7h4v1H2V7zM17 7h4v1h-4V7zM11 9h1v3h-1V9z" fill="currentColor"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <nav className='sticky leading-6 font-normal text-sm'>
                                    <ul className='vertical-rl flex flex-wrap w-full list-none p-0'>
                                        <li className='text-[#bfbfbf] pl-0 pt-1 marker:hidden'>
                                            <Link to="https://www.thrudark.com" className='text-[#f4f4f4] after:content-["/"] after:pt-[9px] cursor-none'>
                                                <span>Home</span>
                                            </Link>
                                        </li>
                                        <li className='text-[#bfbfbf] pl-0 pt-1 marker:hidden'>
                                            <Link to="https://www.thrudark.com/collections/mens" className='text-[#f4f4f4] after:content-["/"] after:pt-[9px] cursor-none'>
                                                <span>/COLLECTIONS/MENS</span>
                                            </Link>
                                        </li>
                                        <li className='text-[#bfbfbf] pl-0 pt-1 marker:hidden'>
                                            <Link to="https://www.thrudark.com/collections/expedition-parkas" className='text-[#f4f4f4] after:content-["/"] after:pt-[9px] cursor-none'>
                                                <span>/COLLECTIONS/EXPEDITION-PARKAS</span>
                                            </Link>
                                        </li>
                                        <li className='text-[#bfbfbf] pl-0 pt-1 marker:hidden'>
                                            <span>EXPEDITION PARKA - Ventile®</span>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}