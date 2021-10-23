import React from 'react'
import { useLocation } from 'react-router'

const SinglePost = () => {
    const location = useLocation()

    return <>
        <div className="container">
            {
                (location.state) ? <section id="movie">
                    <img src={location.state.imgSrcSingle} alt="" />
                    <div className="movie-info">
                        <h1>{location.state.title}</h1>
                        <p><strong>Rating: </strong>{location.state.rating}</p>
                        <p><strong>Duration: </strong>{location.state.duration}</p>
                        <p><strong>Stars: </strong>{location.state.stars}</p>
                        <p><strong>genre: </strong>{location.state.genre}</p>
                        <p><strong>Overview: </strong>{location.state.desc}</p>
                    </div>

                </section> : null
            }
        </div>
    </>
}

export default SinglePost
