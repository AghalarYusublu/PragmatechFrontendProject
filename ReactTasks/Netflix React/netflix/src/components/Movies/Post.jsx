import React from 'react'
import { Link } from 'react-router-dom';
import SDK from '../ApiFolder/Sdk';
import { useRef } from 'react';


const Post = ({ id, list_id, release_date, media_type, vote_average, original_name, original_title, first_air_date, backdrop_path, slideStyle, onClick }) => {



    const sdk = useRef(new SDK())

    const RemoveMovie = async () => { 
        const data = {
            items: [
                {
                    media_type: media_type,
                    media_id: id
                }
            ]
        }

        try {
            await sdk.current.removeItems(list_id, data);
        } catch (error) {
            console.log(error)
        }
    }


    return <>
        <div className='post-grid-item' >
            <div className="post-grid-overlay"></div>
            <div className="post-grid-img d-block" >
                <img src={'https://image.tmdb.org/t/p/original/' + backdrop_path} alt="" />
            </div>
            <div className="post-icon" onClick={RemoveMovie}>
                <i className="fas fa-minus-circle"></i>
            </div>
            <Link className="post-grid-details" style={slideStyle} to={{
                pathname: `/singlePost/${media_type}/${id}`
            }}>
                <p className="grid-title">{original_name || original_title}</p>
                <p className="grid-desc">
                    <span className="green">{release_date || first_air_date}</span>
                    <span className="rate">{vote_average}</span>
                </p>
            </Link>

        </div>
    </>
}

export default Post
