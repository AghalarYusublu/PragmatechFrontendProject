import React, { Component } from 'react';
import { useState } from 'react';
import {
    Header, Banner, Inner, HeroBody, SingleImg, DoubleImg, Collection,
    HeroBodyFullWidth, Announcement, ProductFeature, QuoteBody, Footer, LatestThruDark
} from '../exports/export';
import { connect } from "react-redux";
import { RootState } from "../redux/store";
interface IProps {
    hcd: MainPropsData[];
}
interface IState {
    heroHeader: Obj[],
    announcement: Obj[],
    isScroll: boolean
}
interface Obj {
    id: number,
    imgSrc: string;
    desc: string,
}

interface MainPropsData {
    id: number;
    img: string;
    title: string;
    price: string;
    colors?: string;
    sizes?: string[];
}

class Home extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            isScroll: false,
            heroHeader: [{
                id: 1,
                imgSrc: "/images/gold-logo.png",
                desc: 'Order before the 21.12 for guaranteed UK Christmas Delivery (14.12 for Worldwide)'
            }, {
                id: 2,
                imgSrc: "/images/gold-logo.png",
                desc: 'Order before the 21.12 for guaranteed UK Christmas Delivery (14.12 for Worldwide)'
            },
            ],
            announcement: [{
                id: 1,
                imgSrc: "/images/gold-logo.png",
                desc: 'Special Forces DESIGNED - HIGH PERFORMANCE OUTERWEAR'
            }, {
                id: 2,
                imgSrc: "/images/gold-logo.png",
                desc: 'Special Forces DESIGNED - HIGH PERFORMANCE OUTERWEAR'
            }, {
                id: 3,
                imgSrc: "/images/gold-logo.png",
                desc: 'Special Forces DESIGNED - HIGH PERFORMANCE OUTERWEAR'
            }]
        };
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
        const { hcd } = this.props;
        return (
            <div>
                <Header isScroll={this.state.isScroll} />
                <Banner />
                <Inner />
                <HeroBody heroHeader={this.state.heroHeader} />
                <DoubleImg />
                <SingleImg />
                <Collection data={hcd} />
                <HeroBodyFullWidth />
                <Announcement announcement={this.state.announcement} />
                <ProductFeature />
                <LatestThruDark />
                <QuoteBody />
                <Footer />
                <div className="section__background">
                    <section className='sec__background fixed top-0 left-0 z-[-2] block w-full h-full pointer-events-none'>
                        <video className='sec_background_video flex absolute top-0 left-0 z-[-1] w-full h-full object-cover opacity-[1]' autoPlay loop muted playsInline>
                            <source data-src="https://cdn.shopify.com/s/files/1/0591/0164/2941/files/Smoke_Loop_Desktop_Compressed.mp4?v=1634890979" type='video/mp4' src='https://cdn.shopify.com/s/files/1/0591/0164/2941/files/Smoke_Loop_Desktop_Compressed.mp4?v=1634890979' />
                        </video>
                    </section>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state: RootState) {
    const hcd = state.collection.homeCollectionData;
    return {
        hcd
    };
}

export default connect(mapStateToProps)(Home);