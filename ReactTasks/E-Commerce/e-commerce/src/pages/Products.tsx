import React, { Component } from 'react';
import { AnnoucmentBar } from '../components/home/AnnoucmentBar';
import { Footer, Header, ProductImgSlider, ProductNavigation, ProductReviews, ProductsBanner, ProductSizeGuide, ProductSvg, ProductTechnical, Technologies } from '../exports/export';

interface IProps {

}

interface IState {
    isScroll: boolean;
}

export class Products extends Component<IProps, IState> {
    constructor(props: IProps) {
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
        return (
            <div>
                <Header isScroll={this.state.isScroll} />
                <ProductsBanner />
                <ProductSvg/>
                <div className="bg-[#030000]">
                    <ProductNavigation isScroll={this.state.isScroll} />
                    <ProductImgSlider />
                    <ProductTechnical/>
                    <Technologies />                    
                    <AnnoucmentBar />
                    <ProductSizeGuide/>
                    <ProductReviews/>
                    <Footer />
                </div>
                <div className="section__background">
                    <section className='sec__background absolute top-0 left-0 z-[-2] block w-full h-[1534px] pointer-events-none'>
                        <video className='sec__background__video flex sticky top-0 left-0 z-[-1] w-full h-full object-cover opacity-[1]' autoPlay loop muted playsInline>
                            <source data-src="https://cdn.shopify.com/s/files/1/0591/0164/2941/files/Snow_Background_2s.mp4?v=1634818488" type='video/mp4' src='https://cdn.shopify.com/s/files/1/0591/0164/2941/files/Snow_Background_2s.mp4?v=1634818488' />
                        </video>
                    </section>
                </div>
            </div>
        )
    }
}
