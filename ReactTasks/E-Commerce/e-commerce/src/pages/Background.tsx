
import React, { Component } from 'react'
import { useState } from 'react'
import { Header, HeroBanner, HeroInner, HeroCarousel, ProductSlider, HeroInfo, VideoInner, Footer } from '../exports/export'

interface IProps {
}
interface IState {
    heroInnerData: Obj[]
    carouselTextData: CarouselObj[]
    heroInfoData: HeroInfoObj[]
    isScroll: boolean

}
interface Obj {
    id: number,
    title: string,
    auther: string
}
interface CarouselObj {
    id: number,
    subtitle: string,
    title: string,
    desc: string
}

interface HeroInfoObj {
    id: number,
    imgSrc: string,
    subtitle: string,
    title: string,
    desc: string
}

export class Background extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            isScroll: false,
            heroInnerData: [
                {
                    id: 1,
                    title: 'UNITED KINGDOM SPECIAL FORCES HERITAGE',
                    auther: ''
                },
                {
                    id: 2,
                    title: '"AS UK SPECIAL FORCES OPERATORS, WE WERE EQUIPPED WITH THE HIGHEST SPECIFICATION KIT AND CLOTHING FOR THE OPERATION AT HAND. THAT SAID, WE WERE ALWAYS CRITICAL OF THE WAY IT PERFORMED AND WE ARE AT THE FOREFRONT OF DEVELOPING IT TO MEET OUR DEMANDS."',
                    auther: '— LOUIS'
                },
                {
                    id: 3,
                    title: '"WE ARE FORTUNATE THAT WE ARE AFFORDED UNIQUE SKILLSETS THAT ALLOW US TO CONTINUE TO TRIAL AND DEVELOP OUR EQUIPMENT PERSONALLY AND THROUGH OUR NETWORK OF SOF CONTACTS ACROSS THE GLOBE. WE FEEL WE HAVE BOTH THE CREDIBILITY AND PASSION TO PUSH THIS TO THE NEXT LEVEL."',
                    auther: '— STAZ'
                }, {
                    id: 4,
                    title: `"DECADES OF COMBINED SPECIAL FORCES' EXPERIENCE HAS ENABLED US TO CRITIQUE EXISTING PERFORMANCE WEAR TO DEVELOP THRUDARK PRODUCTS TO THE HIGHEST SPECIFICATION POSSIBLE"`,
                    auther: '— LOUIS'
                }

            ],
            carouselTextData: [
                {
                    id: 1,
                    subtitle: "Heritage",
                    title: "Endeavour Through Adversity",
                    desc: ` Louis – Co-founder – Former Special Forces (SBS)
            
            “We have spent the majority of our military careers within United Kingdom special forces. In this time we’ve endured some of the world’s most arduous environments in extremely demanding circumstances.
        
            ThruDark was born out of our constant requirement for the best clothing and equipment to assist us in this ‘Endeavour Through Adversity’.
           
            The brand name ‘Thru-Dark’ represents the endurance through difficult situations experienced not only by ourselves and our colleagues but to all those who encounter hardship in their own lives.”
           
            14 years distinguished and decorated military service, 8 within UKSF.`
                },

                {
                    id: 2,
                    subtitle: "Heritage",
                    title: "CUT FROM A DIFFERENT CLOTH",
                    desc: ` Staz CGC – Co-founder – Former Special Forces (SBS)
        
                “We have operated and thrived in some of the world’s most inhospitable environments. Our background gives us first-hand experience in developing our products for a broad spectrum of climates from extreme cold tundra, humid jungle to searing, arid desert.
                
                Our products are manufactured to the highest standards using a diverse range of world-leading fabrics that are continually tested and developed by ourselves and our close network of Operators around the globe.
                
                We are proud to exhibit all of our design, development and manufacturing processes to our consumers. We operate with complete transparency to allow an absolute understanding of our products’ worth”
                
                13 years distinguished and decorated military service, 10 within UKSF, last 3 years as a highly experienced, multi-skilled, chief sniper instructor & demolitions expert.
                
                Awarded the Conspicuous Gallantry Cross for combat actions conducted in Afghanistan in 2013.`
                }
            ],
            heroInfoData: [
                {
                    id: 1,
                    imgSrc: '/images/THRUDARK-UKSF_900x.jpg',
                    subtitle: 'RELENTLESS',
                    title: 'PURSUIT OF EXCELLENCE',
                    desc: `“Operational experiences define our products’ functions so that capability is not compromised. Each garment has been through rigorous testing and multiple stages of development before we are prepared to launch our latest products.

                    We push ourselves and our products to the limits to ensure that each and every product meets end-user demands. Failure is unacceptable and we will always ensure that we are constantly improving.
                    
                    We ruthlessly test and critique all products ourselves making no compromise on performance. That’ll do, will never do”`
                },
                {
                    id: 2,
                    imgSrc: '/images/THRUDARK-UKSF-1.jpg',
                    subtitle: 'UNITY',
                    title: 'IN UNION THERE IS STRENGTH',
                    desc: `We are united in our beliefs and mindset, whilst working together as a team.

                    Ultimately, we are a team of former Special Forces operators striving to produce outstanding clothing for the most challenging environments and ventures.
                    
                    Founded on unquestionably authentic principles, supported by powerful experience led stories. We take an inclusive but exclusive approach to our customers.
                    
                    ThruDark – The ‘TIER 1’ BROTHERHOOD of brands`
                }
            ]

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
        return (
            <div>
                <Header isScroll={this.state.isScroll} />
                <HeroBanner />
                <HeroInner heroInnerData={this.state.heroInnerData[0]} />
                <section className='my-[60px] px-[60px]'>
                    <div className="flex flex-row">
                        <HeroCarousel heroCarouselTextData={this.state.carouselTextData[0]} />
                    </div>
                </section>
                <HeroInner heroInnerData={this.state.heroInnerData[1]} />
                <ProductSlider />
                <section className='my-[60px] px-[60px]'>
                    <div className="flex flex-row-reverse">
                        <HeroCarousel heroCarouselTextData={this.state.carouselTextData[1]} />
                    </div>
                </section>
                <HeroInner heroInnerData={this.state.heroInnerData[2]} />
                <ProductSlider />
                <section className='my-[60px] px-[60px]'>
                    <div className="flex flex-row">
                        <HeroInfo heroInfoData={this.state.heroInfoData[0]} />
                    </div>
                </section>
                <HeroInner heroInnerData={this.state.heroInnerData[3]} />
                <section className='my-[60px] px-[60px]'>
                    <div className="flex flex-row-reverse">
                        <HeroInfo heroInfoData={this.state.heroInfoData[1]} />
                    </div>
                </section>
                <VideoInner />
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


