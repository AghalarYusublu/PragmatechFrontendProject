import React from 'react';
import { Navbar } from '../../exports/export';

interface IProps {
    isScroll: boolean
}

export function Header({ isScroll }: IProps) {
    return (
        <header className=" z-20 nav left-0 w-full overflow-hidden">
            <div className="slide__track bg-black text-[#4f4f4f] w-[200vw] py-2 text-[11px] font-normal leading-[14px] uppercase flex justify-between">
                <div className="slide flex">
                    <div className="slide__text mx-5 text-center">
                        <a className="hd-AnnouncementBar_Text" href="/collections">Free Delivery on all orders over £150</a>
                    </div>
                    <div className="slide__text mx-5 text-center">
                        <a className="hd-AnnouncementBar_Text" href="/collections">Free Delivery on all orders over £150</a>
                    </div>
                    <div className="slide__text mx-5 text-center">
                        <a className="hd-AnnouncementBar_Text" href="/collections">Free Delivery on all orders over £150</a>
                    </div>
                </div>
                <div className="slide flex">
                    <div className="slide__text mx-5 text-center">
                        <a className="hd-AnnouncementBar_Text" href="/collections">Free Delivery on all orders over £150</a>
                    </div>
                    <div className="slide__text mx-5 text-center">
                        <a className="hd-AnnouncementBar_Text" href="/collections">Free Delivery on all orders over £150</a>
                    </div>
                    <div className="slide__text mx-5 text-center">
                        <a className="hd-AnnouncementBar_Text" href="/collections">Free Delivery on all orders over £150</a>
                    </div>
                </div>
            </div>
            <Navbar isScrollNavbar={isScroll} />
        </header>
    )
}