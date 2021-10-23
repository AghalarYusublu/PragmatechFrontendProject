import React from 'react'
import { Link } from 'react-router-dom';


const Post = ({ title, date, rate, duration, rating, desc, stars, genre, imgSrc, slideStyle, imgSrcSingle }) => {
    return <>
        <Link className='post-grid-item' style={slideStyle} to={{
            pathname: '/singlePost',
            state: { title, duration, rating, desc, stars, genre, imgSrc, imgSrcSingle }
        }} >
            <div className="post-grid-overlay"></div>
            <div className="post-grid-img">
                <img src={imgSrc} alt="" />
            </div>
            <div className="post-grid-details">
                <p className="grid-title">{title}</p>
                <p className="grid-desc">
                    <span className="green">{date}</span>
                    <span className="rate">{rate}</span>
                    <span className="">{duration}</span>
                </p>
            </div>

        </Link>
    </>
}

export default Post
