import React from 'react';
import { useState } from 'react';
import { DoubleImgItem } from '../../exports/export';

export function DoubleImg() {
    const [data, setData] = useState([
        {
            id: 1,
            title: "view all men's",
            imgSrc: "/images/menDoubleImg.jpg"
        },
        {
            id: 2,
            title: "view all women's",
            imgSrc: "/images/womenDoubleImg.jpg"
        }
    ])
    return (
        <div className='block'>
            <div className="my-[60px] px-[60px]">
                <div className="section__body">
                    <div className="double__img relative">
                        <div className="double_img_inner">
                            <div className="double_img_items flex gap-[60px]">
                                {
                                    data.map((item) => {
                                        return(
                                            <DoubleImgItem info={item} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}