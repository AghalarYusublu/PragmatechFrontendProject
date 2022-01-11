import React, { Component } from 'react';
import { Header, BlogsBanner, BlogInner, BlogHeader, Collection, Footer } from '../exports/export';
import { connect } from "react-redux";
import { RootState } from "../redux/store";
import { Link } from 'react-router-dom';
import "../css/blogs.css";

interface MainProps {
    dataOne: MainPropsData[];
    dataTwo: MainPropsData[];
    bcd:MPBCD[]
}

interface MainPropsData {
    id: number;
    subtitle?: string;
    title: string;
    info: string;
    imgSrc: string;
    class: string;
}

interface MPBCD {
    id: number;
    img: string;
    title: string;
    price: string;
    colors?: string;
    sizes?: string[];
}

interface Istate {
    isScroll: boolean
}

class Blogs extends Component<MainProps, Istate> {
    constructor(props: MainProps) {
        super(props)
        this.state = {
            isScroll: false
        }
    }

    handleNavbar = () => {
        let prevScrollPos = window.pageYOffset;
        window.onscroll = () => {
            let currentScrollPos = window.pageYOffset;
            if (prevScrollPos > currentScrollPos) {
                this.setState({
                    isScroll: false
                })
            } else {
                this.setState({
                    isScroll: true
                })
            }
            prevScrollPos = currentScrollPos;
        }
    }

    componentDidMount() {
        window.onscroll = this.handleNavbar;
    }

    componentWillUnmount() {
        window.onscroll = this.handleNavbar;
    }

    render() {
        const { dataOne, dataTwo,bcd } = this.props;
        return (
            <div className='bg-black'>
                <Header isScroll={this.state.isScroll} />
                <BlogsBanner />
                <div className='blogs__inner px-[60px] w-full grid mt-[80px] mb-[60px] mx-auto'>
                    {
                        dataOne.map((data) => {
                            return (
                                <BlogInner data={data} />
                            )
                        })
                    }
                    <BlogHeader />
                    {
                        dataTwo.map((data) => {
                            return (
                                <BlogInner data={data} />
                            )
                        })
                    }
                    <div className="blog__video my-[100px]">
                        <div className="blogs__video__item">
                            <video className='w-full' controls disablePictureInPicture controlsList='nodownload noplaybackrate'>
                                <source src='https://player.vimeo.com/external/648940115.hd.mp4?s=fffad8099c0f2c782560bc7cce6d71a2bcad69eb&profile_id=174' type='video/mp4' />
                            </video>
                        </div>
                    </div>
                    <div className="blogs__sharing flex justify-center mt-[100px]">
                        <div className='flex items-center flex-col'>
                            <p className='uppercase leading-[15px] font-light text-xs text-[#f4f4f4]'>Share</p>
                            <ul className='social__sharing__items m-0 p-0 list-none mt-[20px] ml-5 flex items-center'>
                                <li className="social__sharing__item mr-5">
                                    <Link to="//www.facebook.com/sharer.php?u=https://www.thrudark.com" className='cursor-none'>
                                        <span className='block w-[20px] h-[20px] text-white'>
                                            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.093 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.563V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" fill="currentColor"></path>
                                            </svg>
                                        </span>
                                    </Link>
                                </li>
                                <li className="social__sharing__item mr-5">
                                    <Link to="//twitter.com/share?text=&url=https://www.thrudark.com" className='cursor-none    '>
                                        <span className='block w-[20px] h-[20px] text-white'>
                                            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0)">
                                                    <path d="M6.292 18.125c7.545 0 11.673-6.253 11.673-11.674 0-.176-.004-.355-.012-.531A8.332 8.332 0 0020 3.796a8.09 8.09 0 01-2.355.644 4.125 4.125 0 001.804-2.269 8.248 8.248 0 01-2.605.996A4.108 4.108 0 009.85 6.908a11.654 11.654 0 01-8.456-4.284A4.108 4.108 0 002.664 8.1a4.108 4.108 0 01-1.86-.512v.05a4.102 4.102 0 003.293 4.024 4.078 4.078 0 01-1.851.07 4.111 4.111 0 003.831 2.852A8.23 8.23 0 010 16.282a11.64 11.64 0 006.292 1.843z" fill="currentColor"></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0">
                                                        <path fill="#fff" d="M0 0h20v20H0z"></path>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="blogs__links mt-[60px]">
                        <Link to="/blogs/expeditions" className='blogs__link relative overflow-hidden flex justify-center items-center w-[max-content] pb-[10px] rounded-none uppercase text-center text-[#f4f4f4] leading-4 font-normal text-[13px] mx-auto cursor-none'>
                            <span>Back to blog</span>
                            <span className='block ml-[15px] px-[15px] border-l border-dotted border-[#4f4f4f] text-[#7b7356]'>
                                <svg className='w-[15px] h-[15px]' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM7 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM13 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" fill="currentColor"></path>
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div>
                <Collection data={bcd} />
                <div className="blogs__background">
                    <div className="my-[60px]">
                        <div className="blogs__background__img flex w-full">
                            <img className='w-full object-cover' src="/images/Ama-Dablam-1_2b54ec22-2ba6-4015-bb48-d97add2f90b7_1944x.jpg" alt="Blogs Background Img" />
                        </div>
                    </div>
                </div>
                <Footer />
            </div >
        )
    }
}

function mapStateToProps(state: RootState) {
    const dataOne = state.blogsData.oneData;
    const dataTwo = state.blogsData.twoData;
    const bcd = state.collection.blogCollectionData;
    return {
        dataOne,
        dataTwo,
        bcd
    };
}

export default connect(mapStateToProps)(Blogs);