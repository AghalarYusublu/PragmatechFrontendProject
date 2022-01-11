import React from 'react'
import { Link } from 'react-router-dom'
import "../../css/collection.css"


interface IProps {
    item: IData
}
interface IData {
    id: number;
    imgSrc: string;
}

export const ProductImgSlide = ({ item } : IProps) => {
    return <>
        <Link to={'/product-modal'} target={'_blank'}>
            <div className='collection_carousel_slide relative min-h-full min-w-[29.5rem] max-w-[29.5rem] overflow-hidden flex-shrink-0 w-full'>
                <div className="carousel_slide_card relative">
                    <div className="carousel_slidecard_imgContainer relative flex z-[2] pointer-events-none">
                        <div className="carousel_slidecard_img flex w-full">
                            <img src={item.imgSrc} />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    </>
}
