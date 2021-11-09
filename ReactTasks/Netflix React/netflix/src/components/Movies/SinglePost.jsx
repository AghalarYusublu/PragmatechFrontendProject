import React from 'react'
import { useParams } from 'react-router'
import { useState, useEffect, useContext } from 'react'
import { DarkMode } from '../../App';
import SDK from '../ApiFolder/Sdk';

const SinglePost = () => {

    let { id, type } = useParams();
    const [datas, setDatas] = useState()
    const darkMode = useContext(DarkMode)
    const sdk = new SDK();    

    const SinglePost = async () => {
        try {
            const data = await sdk.getSinglePost(id, type)                  
            setDatas(data)
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        SinglePost()
    }, [])


    return <>
        <div className="container">
            {
                <section id="movie">
                    <img src={'https://image.tmdb.org/t/p/original' + datas?.poster_path} alt="" />
                    <div className="movie-info" style={darkMode.darkMode === false ? { color: "#141414" } : { color: "#e5e5e5" }}>
                        <h1>{datas?.name}</h1>
                        <p><strong>Rating: </strong>{datas?.vote_average}</p>
                        <p><strong>Date: </strong>{datas?.release_date || datas?.first_air_date}</p>                    
                        <p><strong>Overview: </strong>{datas?.overview}</p>
                    </div>
                </section>
            }
        </div>
    </>
}

export default SinglePost
