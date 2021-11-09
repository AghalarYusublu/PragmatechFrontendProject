import React, { useContext } from 'react'
import shortid from "short-id";
import { useState, useRef, useEffect } from 'react'
import SDK from './ApiFolder/Sdk';
import Modal from './Modal';
import { useInView } from 'react-intersection-observer'
import loadingGif from '../images/loading.gif'
import SearchPost from './SearchPost';
import { SearchItem } from '../App';


import BannerCarousel from './BannerCarousel'
import PostSlider from './Movies/PostSlider'

const Home = () => {
    const [banner, setBanner] = useState([
        {
            title: "Stargate Universe", date: "99% Match 2009-2011 2 Seasons", desc: "Trapped on an Ancient spaceship billions of light-years from home, a group of soldiers and civilians struggle to survive and find their way back to Earth.",
            imgSrc: 'https://kevinallen4325.github.io/netflix-react/static/media/stargate.6af5cff1.jpg',
            starring: 'Robert Carlyle, Louis Ferreira, Brian J. Smith',
            genre: 'Sci-fi, Fantasy, Drama'
        },
        {
            title: "Stargate Universe", date: "96% Match 2014 PG-13", desc: "With Humanity Teetering on the bring of extinction, a group of astronauts travels through a wormhole in search of another inhabitable planet.",
            imgSrc: 'https://kevinallen4325.github.io/netflix-react/static/media/intertellar.5fc9d0d2.jpg',
            starring: ' Mathew McConaughey,  Anne Hathaway,  Jessica Chastain',
            genre: 'Sci-fi, Fantasy,  Mystery'
        },
        {
            title: "Step Brothers", date: "92% Match 2008 R", desc: "Brennan and Dale might be grown men, but that doesn't stop a childish sibling rivalry from erupting after Brennan's mom marries Dale's dad.",
            imgSrc: 'https://kevinallen4325.github.io/netflix-react/static/media/stepbrothers.d6301d7a.jpg',
            starring: ' Will Ferrell,  John C. Reilly,  Mary Steenburgen',
            genre: 'Comedy, Late Night Comedies, Slapstick Comedy'
        },
    ])


    const sdk = new SDK();
    const [datas, setDatas] = useState([])
    const [addData, setAddData] = useState([])

    const Posts = async () => {
        const data = await sdk.getListsFromAccount()
        setAddData(data)
        const lists = data?.results.map(w => w.id)
        Promise.all(lists.map(d => sdk.getList(d))).then(d => {
            setDatas(d)
        })
    }
    useEffect(() => {
        Posts()
    }, [])

    const { inputValue, searchResults, loading, setCurrentIndex, currentIndex, handleChange } = useContext(SearchItem)

    const { inView, ref } = useInView({
        threshold: 0,
    })

    useEffect(() => {
        if (inView) {
            setCurrentIndex(currentIndex + 1)
        }
    }, [inView])

    useEffect(() => {
        if (currentIndex > 1) {
            handleChange(true)
        }
    }, [currentIndex])


    const slides = useRef(null)
    let slideNum = banner.length

    const [index, setIndex] = useState(0)

    const controlNext = () => {
        if (index !== -((slideNum - 1) * slides.current.clientWidth)) {
            setIndex(index - slides.current.clientWidth)
        }
        else if (index <= slideNum - 1) {
            setIndex(0);
        }
    }

    const controlPrev = () => {
        if (index !== 0) {
            setIndex(index + slides.current.clientWidth)
        }
        else if (index <= slideNum) {
            setIndex(index + -(slideNum - 1) * slides.current.clientWidth);
        }
    }

    const [isVisible, setIsVisible] = useState(false)
    const [modalData, setModalData] = useState()

    const isOpen = (index) => {
        const searchData = searchResults[index]
        setModalData(searchData)
        setIsVisible(true)
        console.log(searchData)
    }

    return <>
        {isVisible && <Modal {...modalData} closeModal={setIsVisible} addData={addData} />}
        <div className="container p-0">
            {
                inputValue === '' ? <section id="banner">
                    <div className="carousel p-relative">
                        <div onClick={controlPrev} className="control-arrow control-prev" >
                            <a href="#" className="">
                                <i className="bi bi-caret-left-fill"></i>
                            </a>
                        </div>
                        <div className="slider-wrapper" >
                            <div style={{ transform: `translateX(${index}px)` }} className="slides d-flex" ref={slides}>
                                {banner.map(b =>
                                    <BannerCarousel key={shortid.generate()} {...b}>
                                    </BannerCarousel>)}
                            </div>
                        </div>
                        <div className="control-arrow control-next" onClick={controlNext}>
                            <a href="#" className="">
                                <i className="bi bi-caret-right-fill"></i>
                            </a>
                        </div>
                    </div>
                </section> : null
            }
            <section id='post-section'>
                <div className="container p-0">
                    <div className="post-items" style={inputValue === '' ? { marginLeft: '4%' } : { margin: '0' }}>
                        <div className="post-slides" style={inputValue === '' ? { display: "block" } : { display: "flex", flexWrap: 'wrap', justifyContent: 'center', marginTop: '50px   ' }}>
                            {
                                inputValue === '' ? datas?.map(e => <PostSlider key={shortid.generate()} categoryname={e.name} items={e.results} list_id={e.id} ></PostSlider>) :
                                    loading ? <img className='loading' src={loadingGif} /> :
                                        searchResults?.map((s, index) => {
                                            const obj = {};
                                            if (index === searchResults.length - 1) {
                                                obj.ref = ref;
                                            }
                                            return <div {...obj}> <SearchPost onClick={() => { isOpen(index) }} key={shortid.generate()} {...s} ></SearchPost></div>
                                        })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div >
    </>
}

export default Home
