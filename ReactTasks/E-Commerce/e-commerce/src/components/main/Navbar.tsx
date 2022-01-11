import React from 'react'
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from 'react';
import { useAppSelector } from "../../redux/hooks";
import { selectNavbarData } from "../../redux/reducers/navbarSlice";
import { NavbarDropdown } from "..//..//exports/export";
import { ISubMenuData } from "../../redux/reducers/navbarSlice";
import "..//..//css/main.css";
import { animateScroll, animateScroll as scroll } from 'react-scroll'

interface IProps {
    isScrollNavbar: boolean
}


export const Navbar = ({ isScrollNavbar }: IProps) => {
    const datas = useAppSelector(selectNavbarData);
    const [navDatas, setNavDatas] = useState<ISubMenuData[]>()

    const getMouseOverData = (index: number) => {
        const navData = datas[index].mainData;
        setNavDatas(navData)
    }
    /* const topNavbar = useRef<HTMLDivElement>(null)
   useEffect(() => {
       if (topNavbar.current?.clientTop === 0) {
           topNavbar.current.style.background = 'none'
       }
       else {
           topNavbar.current.style.backgroundColor = '#030000'
       }
   }) */
    const showNavbarDropdown = () => {
        if (navDatas) {
            return (
                <NavbarDropdown ndd={navDatas} />
            )
        }
    }

    return <>
        <div /* ref={topNavbar}  */ className={` ${isScrollNavbar == true ? "top-[-142.46px] opacity-1" : "top-0  opacity-[0.9]"} px-[60px] mx-auto fixed z-10 nav w-full`}>
            <div className='py-[30px] navbar grid justify-between items-center'>
                <nav>
                    <ul className='flex relative'>
                        {
                            datas.map((data, index) => {
                                return (
                                    <li key={data.id} className='navbar__item relative flex justify-center items-center' onMouseOver={() => { getMouseOverData(index) }}>
                                        <Link className='relative z-10 mx-[14px] text-white' to={'/mens'}><span className="uppercase">{data.title}</span></Link>
                                        {showNavbarDropdown()}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>

                <div className="logo justify-self-center">
                    <Link to={'/'} onClick={()=>{
                        animateScroll.scrollToTop()
                    }}>
                        <div className="logo__icon w-[48px] mx-auto">
                            <svg className="text-white" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.154 40.188C36.615 39.653 45 31.02 45 20.631 45 9.785 36 1 25 1S5 9.785 5 20.632c0 10.465 8.385 19.02 18.846 19.555v3.59c0 1.3-1.615 2.14-1.692 2.292L25 49.89l2.77-3.82c0-.076-1.693-.993-1.693-2.291v-3.59h.077zM25 11.465c-.692-.458-1.23-1.298-1.23-2.444 0-1.528.768-2.368 1.23-3.056.538.688 1.308 1.604 1.23 3.056 0 1.146-.538 1.986-1.23 2.444zM7.154 19.486C7.692 10.625 15 3.597 24 3.062c10.308-.534 18.923 7.563 18.923 17.57 0 9.32-7.462 16.958-16.77 17.493v-6.34s3.924 0 4.693.076c1.385.076 1.923.306 2.77 1.375h.769l-1.308-2.98c-.154-.381-.615-.687-1.077-.687h-5.923v-2.52c3.154-.535 5.461-2.98 5.923-6.723.308-2.673.385-3.82.692-5.958.154-1.222.616-2.292 1.616-2.674v-.763c-.385.076-1 .229-1.846.534-1.693.688-2.539 1.757-2.693 3.285-.23 2.368-.538 5.27-.846 7.257-.308 1.91-1.308 3.514-2.923 4.049V12.229c1.154-.458 2-1.528 2-2.826 0-2.292-2.77-4.278-3.154-4.584-.308.306-3.154 2.292-3.154 4.584 0 1.298.846 2.368 2 2.826v13.903c-1.538-.535-2.615-2.139-2.923-4.049-.077-1.986-.384-4.965-.615-7.333-.154-1.451-1-2.597-2.692-3.285a12.899 12.899 0 00-1.847-.534v.687c1 .382 1.462 1.451 1.616 2.674.307 2.215.384 3.284.692 5.958.462 3.743 2.77 6.188 5.923 6.722v2.521h-5.77c-.538 0-1 .306-1.23.764l-1.23 2.903h.769c.846-1.07 1.384-1.375 2.769-1.375.846 0 4.692-.077 4.692-.077v6.34c-9.692-.534-17.384-8.784-16.692-18.562z" fill="currentColor"></path>
                            </svg>
                        </div>
                        <div className="logo__text w-[180px] mt-[15px]">
                            <svg viewBox="0 0 185 20" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                <path d="M182.516 18.39c-1.39-.408-2.64-1.154-3.543-2.24l-7.502-8.482 5.696-5.022c1.181-1.085 2.639-1.832 4.168-2.375V0h-6.808v.271c1.32.272 1.737 1.833.764 2.715l-6.877 6.039 6.321 6.99c.765.814.348 2.17-.694 2.51v.271h8.961v-.271l-.486-.136z"></path>
                                <path d="M167.231 16.49V2.24c0-.747.556-1.426 1.25-1.63l1.32-.339V0h-8.544v.271l1.32.34c.764.203 1.32.882 1.32 1.628v14.25c0 .747-.556 1.425-1.32 1.629l-1.32.34v.27h8.544v-.27l-1.32-.34c-.694-.204-1.25-.882-1.25-1.629zM156.813 17.779a4.495 4.495 0 01-1.25-1.29c-.348-.475-.695-1.221-1.112-2.103-.486-.95-.833-1.697-1.25-2.24-.348-.61-.834-1.085-1.39-1.56-.555-.475-1.25-.747-2.153-.95 1.806-.272 3.195-.815 4.237-1.629 1.042-.814 1.529-1.9 1.529-3.121 0-.95-.348-1.832-.973-2.579-.625-.746-1.528-1.29-2.709-1.696C150.561.204 149.241 0 147.713 0h-9.447v.271l1.319.34c.765.203 1.32.882 1.32 1.628v14.25c0 .747-.555 1.425-1.32 1.629l-1.319.34v.27h8.544v-.27l-1.32-.34c-.764-.204-1.25-.814-1.25-1.56v-6.515h2.917c.556 0 1.042.203 1.459.543.417.339.764.814 1.042 1.357s.625 1.29 1.042 2.171c.486 1.086.903 1.9 1.25 2.579.348.61.834 1.221 1.39 1.628.555.475 1.25.679 2.084.679 1.25 0 2.361-.136 3.334-.407l-.069-.272c-.765 0-1.39-.203-1.876-.542zm-10.281-8.483h-2.362V.746h2.362c1.737 0 2.987.34 3.89 1.086.903.747 1.32 1.764 1.32 3.19 0 1.424-.417 2.442-1.32 3.189-.903.746-2.223 1.085-3.89 1.085zM131.734 15.54L125.274 0h-2.015l-6.113 15.336c-.625 1.56-1.945 2.714-3.612 3.189v.271h7.155v-.271l-1.945-.407c-.764-.136-1.111-.882-.903-1.56l5.279-13.3 5.28 13.163c.278.747-.139 1.561-.973 1.765l-1.736.339v.271h9.725v-.271l-.347-.068c-1.529-.407-2.779-1.493-3.335-2.918zM108.186 1.154C106.727.407 105.06 0 103.184 0H93.32v.271l1.32.34c.764.203 1.32.882 1.32 1.628v14.25c0 .747-.556 1.425-1.32 1.629l-1.32.34v.27h9.864c1.876 0 3.543-.407 5.002-1.153 1.459-.746 2.57-1.9 3.404-3.325.764-1.425 1.181-3.054 1.181-4.886 0-1.832-.417-3.528-1.181-4.885a8.803 8.803 0 00-3.404-3.325zm-.834 14.657c-1.181 1.493-2.848 2.171-5.071 2.171h-3.126V.746h3.126c2.223 0 3.89.747 5.071 2.172 1.181 1.493 1.737 3.596 1.737 6.446 0 2.85-.556 4.954-1.737 6.447zM83.527.271l1.459.34c.764.203 1.32.882 1.32 1.628v10.179c0 1.764-.417 3.053-1.32 4.003-.904.883-2.223 1.358-3.96 1.358s-3.056-.475-3.96-1.425c-.903-.95-1.32-2.375-1.32-4.275v-9.84c0-.746.556-1.425 1.32-1.628l1.32-.34V0h-8.683v.271l1.32.34c.764.203 1.25.882 1.25 1.628v10.315c0 1.289.348 2.442.973 3.392.625.95 1.528 1.697 2.64 2.24 1.111.543 2.43.814 3.96.814 2.291 0 4.167-.543 5.487-1.629 1.32-1.085 2.014-2.646 2.014-4.75V2.24c0-.746.556-1.425 1.32-1.628l1.459-.34V0h-6.53v.271h-.07zM66.645 17.779a4.497 4.497 0 01-1.25-1.29c-.348-.475-.695-1.221-1.112-2.103-.486-.95-.833-1.697-1.25-2.24-.348-.61-.834-1.085-1.39-1.56-.555-.475-1.32-.747-2.153-.95 1.806-.272 3.195-.815 4.237-1.629 1.042-.814 1.529-1.9 1.529-3.121 0-.95-.348-1.832-.973-2.579-.625-.746-1.528-1.29-2.709-1.696C60.463.204 59.074 0 57.545 0h-9.447v.271l1.32.34c.764.203 1.32.882 1.32 1.628v14.25c0 .747-.556 1.425-1.32 1.629l-1.32.34v.27h8.544v-.27l-1.32-.34a1.676 1.676 0 01-1.25-1.629v-6.446h2.917c.556 0 1.042.203 1.459.543.417.339.764.814 1.042 1.357s.625 1.29 1.042 2.171c.486 1.086.903 1.9 1.25 2.579.348.61.834 1.221 1.39 1.628.555.475 1.25.679 2.084.679 1.25 0 2.362-.136 3.334-.407l-.139-.272c-.695 0-1.25-.203-1.806-.542zm-10.28-8.483h-2.363V.746h2.362c1.737 0 2.987.34 3.89 1.086.903.747 1.32 1.764 1.32 3.19 0 1.424-.417 2.442-1.32 3.189-.903.746-2.153 1.085-3.89 1.085zM35.941.271l1.25.34c.765.203 1.32.882 1.32 1.628v7.057H28.44V2.24c0-.746.555-1.425 1.25-1.628l1.32-.34V0h-8.475v.271l1.32.34c.764.203 1.32.882 1.32 1.628v14.25c0 .747-.556 1.425-1.32 1.629l-1.32.407v.271h8.544v-.271l-1.32-.34a1.676 1.676 0 01-1.25-1.628v-6.446h10.003v6.446c0 .747-.555 1.425-1.25 1.629l-1.32.339v.271h8.544v-.271l-1.32-.34a1.676 1.676 0 01-1.25-1.628V2.307c0-.746.556-1.425 1.25-1.628l1.32-.34V0h-8.544v.271zM2.111 0L1 4.886l.347.135 1.945-2.103C4.821 1.289 5.376.882 6.974.882h2.084v15.472c0 .814-.556 1.492-1.32 1.628l-1.667.407v.272h9.447v-.272l-1.667-.407c-.764-.203-1.32-.882-1.32-1.628V.95h2.084c1.598 0 2.223.34 3.682 2.036l1.945 2.103.347-.135L19.27 0H2.111z"></path>
                            </svg>

                        </div>
                    </Link>
                </div>
                <div className='justify-self-end'>
                    <ul className='flex justify-center items-center'>
                        <li className='mx-[6px] '>
                            <form action="" className='py-[6px] pl-[10px] flex items-center bg-transparent border border-solid border-[transparent] search__bar'>
                                <input className='bg-black outline-none search__input text-white w-0 ' type="text" placeholder='Search' />
                                <button className='w-[30px] h-[30px] mx-[6px]'>
                                    <svg className='w-[23px] text-white' viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 9a7 7 0 1014 0A7 7 0 003 9zm7 8a8 8 0 110-16 8 8 0 010 16zM21.239 20.636l-4.243-4.242.707-.708 4.243 4.243-.707.707z" fill="currentColor"></path>
                                    </svg>
                                </button>
                            </form>
                        </li>
                        <li className='mx-[6px] '>   <Link to={'/account'}><svg className='w-[23px] text-white' viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.3 4.596a4.5 4.5 0 106.363 6.364A4.5 4.5 0 008.3 4.596zm-.708 7.071A5.5 5.5 0 1115.37 3.89a5.5 5.5 0 01-7.778 7.778zM3.614 15.582h15.772L21 16.838v5.244h-1v-4.755l-.957-.745H3.957L3 17.327v4.755H2v-5.244l1.614-1.256z" fill="currentColor"></path>
                        </svg></Link></li>
                        <li className='mx-[6px] '>   <Link to={'/iwish'}><svg className='w-[23px] text-white' viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.13 8.186V6.814l3.508-3.726-.08-.088H7v9h12.345l.208-.178-3.424-3.636zM21 11.9L19.714 13H6V2h14l1 1.1-4.143 4.4L21 11.9z" fill="currentColor"></path>
                            <path d="M3 2h1v19H3V2z" fill="currentColor"></path>
                        </svg></Link></li>
                        <li className='mx-[6px] '>  <Link to={'/cart'}><svg className='w-[23px] text-white' viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20 4.414L18.586 3H4.414L3 4.414V20h17V4.414zM4 2h15l2 2v17H2V4l2-2z" fill="currentColor"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 11.586L10.414 13h2.172L14 11.586V8H9v3.586zM13 14h-3l-2-2V7h7v5l-2 2z" fill="currentColor"></path>
                            <path d="M2 7h4v1H2V7zM17 7h4v1h-4V7zM11 9h1v3h-1V9z" fill="currentColor"></path>
                        </svg></Link></li>
                    </ul>
                </div>

            </div>
        </div>



    </>
}