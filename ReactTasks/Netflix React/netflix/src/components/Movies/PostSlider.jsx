import React from 'react'
import Post from './Post'
import { useState, useCallback } from 'react'
import shortid from "short-id";


const slideStyle = {
    width: 280
}

const PostSlider = ({ categoryname, movies }) => {

    let postNum = movies.length
    const [index, setIndex] = useState(0)


    const controlNext = useCallback(() => {
        if (index !== -((postNum - 1) * slideStyle.width)) {
            setIndex(index - slideStyle.width)
        }
    })

    const controlPrev = useCallback(() => {
        if (index !== 0) {
            setIndex(index + slideStyle.width)
        }
    })

    return <div style={{
        position: "relative"
    }}>
        <span onClick={controlPrev} className="post-slider-arrow post-slider-prev"><i className="fas fa-chevron-left"></i></span>
        <span onClick={controlNext} className="post-slider-arrow post-slider-next"><i className="fas fa-chevron-right"></i></span>
        <div className="post-section-items">
            <p className="post-items-title">{categoryname}</p>
            <div className="post-grid" style={{ transform: `translateX(${index}px)` }} >
                {movies.map((p) =>
                    <Post key={shortid.generate()} style={slideStyle} {...p}></Post>)}
            </div>
        </div>

    </div>
}

export default PostSlider

