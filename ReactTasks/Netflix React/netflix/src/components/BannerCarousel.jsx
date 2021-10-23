import React from 'react'

const BannerCarousel = ({ title, date, desc, imgSrc, starring, genre }) => {
    return <>
        <div className="slide"  >
            <div className="slide-item" style={{ backgroundImage: `url(${imgSrc})` }}>
                <div className="box-left"></div>
                <div className="slide-image" style={{ backgroundImage: `url(${imgSrc})` }}></div>
                <div className="title-info">
                    <h2>{title}</h2>
                    <h3>{date}</h3>
                    <p className="overview " >{desc}</p>
                    <div className="up-down">
                        <i className="far fa-thumbs-up"></i>
                        <i className="far fa-thumbs-down" aria-hidden="true"></i>
                    </div><p className="overview"> Starring : {starring}
                    </p>

                    <p className="overview"> Genre : {genre}
                    </p>
                </div>
            </div>
        </div>
    </>
}

export default BannerCarousel
