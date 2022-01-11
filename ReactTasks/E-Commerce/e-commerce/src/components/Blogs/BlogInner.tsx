import React from 'react';

interface IProps {
    data: IPropsData
}

interface IPropsData {
    id: number;
    subtitle?: string;
    title: string;
    info: string;
    imgSrc: string;
    class: string;
}

export function BlogInner({ data }: IProps) {
    return (
        <>
            <div className="blog__inner__sec my-[100px]">
                <div className="blog__inner__wrapper relative z-[1] grid">
                    <div className="blog__inner__body flex items-center py-0">
                        <div className={`blog__inner__items flex flex-grow ${data.class}`}>
                            <div className="blog__inner__item w-1/2">
                                <div className="blog__inner__contentConatiner bg-black h-full flex justify-center items-center p-[100px]">
                                    <div className='blog__inner__content max-w-[445px] text-left'>
                                        <p className='uppercase leading-[15px] font-light text-xs text-[#7b7356] mb-[15px]'>{data.subtitle}</p>
                                        <h2 className='uppercase font-light text-[32px] text-[#f4f4f4]'>{data.title}</h2>
                                        <p className='leading-6 font-light text-sm text-[#97999b] mt-[15px] whitespace-pre-line'>{data.info}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="blog__inner__item w-1/2">
                                <div className="blog__inner__imgContainer h-full">
                                    <div className="blog__inner__img w-full h-full flex">
                                        <img className='w-full h-full' src={data.imgSrc} alt="Ama Dablam 1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
