import React from 'react'
import { Link } from 'react-router-dom'


interface IProps {
    path:string;
    content: string;
}

export const Button  = ({content,path}:IProps) => {
    return <>
        <Link className='mt-[20px] uppercase cursor-none text-[#f4f4f4] font-normal leading-[16px] clip__path tracking-[.2em] bg-[#161616] transition ease-in flex justify-center text-[13px] items-center py-[12px] px-[15px] relative' to={path} >
            <span className='block'>
            {content}
            </span>
            <span className="shop__btn__icon border-dotted  border-l border-[#4f4f4f] ml-[15px] pl-[15px] text-[#7b7356]">
                <svg viewBox="0 0 16 16" className='w-[15px] h-[15px]  ' fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM7 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM13 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" fill="currentColor"></path>
                </svg>
            </span>
        </Link>
        </>
}


