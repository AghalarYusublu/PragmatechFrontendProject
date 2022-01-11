import { info } from 'console';
import React from 'react'
import '../../css/products.css'
import { useAppSelector } from '../../redux/hooks';
import {technologiesData} from '../../redux/reducers/technologiesSlice'
import { TechnologiesItem } from './TechnologiesItem';


export const Technologies = () => {
    const data = useAppSelector(technologiesData);
    return <>
        <section className='my-[60px] px-[60px]' id='technical'>
            <div className="mb-[50px] flex flex-col items-center justify-center uppercase">
                <p className="text-center text-[#4f4f4f] text-[12px] tracking-[.05em] leading-[15px] mb-[15px] ">
                    CUT FROM A DIFFERENT CLOTH
                </p>
                <h2 className="text-[#f4f4f4] tracking-[.01em] leading-[1.2] text-[32px]">
                    TECHNOLOGIES AND FABRICS
                </h2>
            </div>
            <div className="technologies__body">
                <div className="grid gap-[30px] grid-cols-3 mx-0 z-[1]">
                    {
                    data.map((info)=>{
                        return(
                            <TechnologiesItem item={info}/>
                        )
                    })
                    }
                </div>
            </div>
        </section>
    </>
}


