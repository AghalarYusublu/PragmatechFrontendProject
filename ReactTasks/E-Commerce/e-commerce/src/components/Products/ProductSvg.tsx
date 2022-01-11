import React from 'react';
import '../../css/products.css'

interface IImages {
    id: number;
    title: string;
    imgSrc: string;
}

export function ProductSvg() {

    const images: IImages[] = [
        {
            id: 1,
            title: "Durable",
            imgSrc: "Untitled-design---2021-10-19T133100.465"
        },
        {
            id: 2,
            title: "Insulated",
            imgSrc: "Untitled-design---2021-10-19T131844.906"
        },
        {
            id: 3,
            title: "Thermo Regen",
            imgSrc: "Untitled-design---2021-10-19T133119.605"
        },
        {
            id: 4,
            title: "Windproof",
            imgSrc: "Untitled-design---2021-10-19T131712.452"
        },
        {
            id: 5,
            title: "Water Repellent",
            imgSrc: "Untitled-design---2021-10-19T133215.413"
        },
        {
            id: 6,
            title: "Premium Insulation",
            imgSrc: "Untitled-design---2021-10-19T131844.906"
        },
    ]
    
    return (
        <section>
            <div className="w-full mx-auto px-[60px] my-[60px]">
                <div className="flex gap-[30px] justify-center">
                    {
                        images.map((image) => {
                            return (
                                <div key={image.id} className=" mr-20">
                                    <div className="flex flex-col items-center">
                                        <div className=" w-[60px] mb-[15px]">
                                            <div className="flex w-full relative">
                                                <img className='w-full object-cover' src={`/images/${image.imgSrc}.png`} alt={image.title} />
                                            </div>
                                        </div>
                                        <h3 className='leading-[15px] font-light text-xs uppercase text-center text-[#f4f4f4]'>{image.title}</h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}