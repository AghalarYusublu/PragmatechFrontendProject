import React from 'react'

interface IProps {
    heroInnerData: IObj
}
interface IObj {
    id: number,
    title: string,
    auther: string
}

export const HeroInner = ({ heroInnerData }: IProps) => {
    return <>

        <div className="my-[60px] px-[60px]">
            <div className="p-[60px] flex items-center justify-center">
                <div className="hero__inner__text uppercase flex-col text-[#f4f4f4] flex justify-center items-center">
                    <div className="w-[50px] h-[50px] mb-[25px]">
                        <img src="/images/Logo_100x.png" alt="" />
                    </div>
                    <p className="text-[24px] text-center font-light leading-[1.35]">{heroInnerData.title}</p>
                    <p className='mt-[25px] text-[12px] tracking-[.05em] leading-[15px]'>{heroInnerData.auther}</p>
                </div>
            </div>
        </div>

    </>
}


