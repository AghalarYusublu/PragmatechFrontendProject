import React from 'react'



export const VideoInner = () => {
    return <>
        <div className="my-[60px]">
            <div className="grid">
                <div className="flex col-span-1 row-span-1">
                    <video className='w-full object-cover' autoPlay muted playsInline data-lazy-video loop src="https://player.vimeo.com/external/646982749.hd.mp4?s=a06d9e4f3c873cd1940a5f1fc7cf1773cc73a2a0&profile_id=174"></video>

                </div>
            </div>
        </div>
    </>
}


