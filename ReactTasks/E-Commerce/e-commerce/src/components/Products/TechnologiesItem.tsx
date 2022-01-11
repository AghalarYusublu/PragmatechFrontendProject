import React from 'react'
import '../../css/products.css'


interface IProps {
    item: IData
}
interface IData {
    id: number,
    imgSrc: string,
    kicker?: string,
    title: string,
    text: string
}

export const TechnologiesItem = ({ item }: IProps) => {
    return (
        <div className="technologies__items grid w-full overflow-hidden">
            <div className="technologies__img opacity-1  flex">
                <img src={item.imgSrc} alt={item.title} />
            </div>
            <div className="technologies__content z-[1] p-[40px] flex flex-col justify-end text-[#f4f4f4]">
                <p className='text-[12px] font-light tracking-[.05em] leading-[15px] uppercase mb-[15px]'>{item.kicker}</p>
                <h2 className='text-[32px] font-light tracking-[.01em] leading-[1.2] uppercase'>{item.title}</h2>
                <div className="technologies__reveal max-h-0 opacity-0">
                    <p className='text-[14px] font-light tracking-[.01em] leading-[24px]'>{item.text}</p>
                </div>
            </div>
        </div>
    )
}

