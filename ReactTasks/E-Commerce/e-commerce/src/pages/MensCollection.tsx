import React, { Component } from 'react';
import { Header, CollectionBanner, CollectionFilter, Product, CollectionQuote, Footer } from "../exports/export";

interface IProps {

}

interface IState {
    isScroll: boolean;
}

export class MensCollection extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
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
                <CollectionBanner />
                <CollectionFilter />
                <Product />
                <CollectionQuote />
                <Footer />
                <div className="section__background">
                    <section className='sec__background fixed top-0 left-0 z-[-2] block w-full h-full pointer-events-none'>
                        <video className='sec__background__video flex absolute top-0 left-0 z-[-1] w-full h-full object-cover opacity-[1]' autoPlay loop muted playsInline>
                            <source data-src="https://cdn.shopify.com/s/files/1/0591/0164/2941/files/Smoke_Loop_Desktop_Compressed.mp4?v=1634890979" type='video/mp4' src='https://cdn.shopify.com/s/files/1/0591/0164/2941/files/Smoke_Loop_Desktop_Compressed.mp4?v=1634890979' />
                        </video>
                    </section>
                </div>
            </div>
        )
    }
}
