import React, { useCallback } from 'react'
import Post from './Post'

import { useState, useContext } from 'react'
import { DarkMode } from '../../App';
import shortid from "short-id";
import { Link } from 'react-router-dom';


const slideStyle = {
    width: 280
}

const PostSlider = ({ categoryname, items, list_id }) => {

    let postNum = items.length
    const [index, setIndex] = useState(0)
    const darkMode = useContext(DarkMode)

    const controlNext = () => {
        if (index !== -((postNum - 1) * slideStyle.width)) {
            setIndex(index - slideStyle.width)
        }
    }

    const controlPrev = () => {
        if (index !== 0) {
            setIndex(index + slideStyle.width)
        }
    }

    return <div style={{
        position: "relative"
    }}>
        <span onClick={controlPrev} className="post-slider-arrow post-slider-prev"><i className="fas fa-chevron-left"></i></span>
        <span onClick={controlNext} className="post-slider-arrow post-slider-next"><i className="fas fa-chevron-right"></i></span>
        <div className="post-section-items">
            <div className="category-name">
                <p className="post-items-title me-3" style={darkMode.darkMode === false ? { color: "#141414" } : { color: "#e5e5e5" }}>{categoryname}</p>
                <Link to={{
                    pathname: '/categoryNameEdit',
                    state: { list_id: list_id }
                }} > <i class="far fa-edit"></i></Link>
            </div>
            <div className="post-grid" style={{ transform: `translateX(${index}px)` }} >
                {
                    items?.map((p) => {
                        return <Post key={shortid.generate()} style={slideStyle} {...p} list_id={list_id}  ></Post>
                    })
                }
            </div>
        </div>

    </div>
}

export default PostSlider

