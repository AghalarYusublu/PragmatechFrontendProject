import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
    ndd: IPropsNavData[]
}

interface IPropsNavData {
    subtitle: string;
}

export function NavbarDropdown({ ndd }: IProps) {
    return (
        <div className='dropdown fixed top-0 bottom-0 left-0 max-w-[480px] w-full -translate-x-full opacity-0 invisible transition-all duration-500'>
            <div className="h-full bg-[#030000]">
                <div className="flex flex-col relative w-full h-full px-[60px] pt-[168px] pb-[60px] transition-opacity">
                    <div className="mb-[30px]">
                        <ul className='list-none p-0'>
                            {
                                ndd.map((data) => {
                                    return (
                                        <li className='border-t border-solid border-[#1b1818]'>
                                            <div className="border-b border-solid border-[#1b1818]">
                                                <Link to="/collections/mens-apparel" className="relative block w-full py-[15px] text-[#f4f4f4] transition-colors cursor-none">
                                                    {data.subtitle}
                                                </Link>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="w-[50px] mt-auto text-[#7b7356]">
                        <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.154 40.188C36.615 39.653 45 31.02 45 20.631 45 9.785 36 1 25 1S5 9.785 5 20.632c0 10.465 8.385 19.02 18.846 19.555v3.59c0 1.3-1.615 2.14-1.692 2.292L25 49.89l2.77-3.82c0-.076-1.693-.993-1.693-2.291v-3.59h.077zM25 11.465c-.692-.458-1.23-1.298-1.23-2.444 0-1.528.768-2.368 1.23-3.056.538.688 1.308 1.604 1.23 3.056 0 1.146-.538 1.986-1.23 2.444zM7.154 19.486C7.692 10.625 15 3.597 24 3.062c10.308-.534 18.923 7.563 18.923 17.57 0 9.32-7.462 16.958-16.77 17.493v-6.34s3.924 0 4.693.076c1.385.076 1.923.306 2.77 1.375h.769l-1.308-2.98c-.154-.381-.615-.687-1.077-.687h-5.923v-2.52c3.154-.535 5.461-2.98 5.923-6.723.308-2.673.385-3.82.692-5.958.154-1.222.616-2.292 1.616-2.674v-.763c-.385.076-1 .229-1.846.534-1.693.688-2.539 1.757-2.693 3.285-.23 2.368-.538 5.27-.846 7.257-.308 1.91-1.308 3.514-2.923 4.049V12.229c1.154-.458 2-1.528 2-2.826 0-2.292-2.77-4.278-3.154-4.584-.308.306-3.154 2.292-3.154 4.584 0 1.298.846 2.368 2 2.826v13.903c-1.538-.535-2.615-2.139-2.923-4.049-.077-1.986-.384-4.965-.615-7.333-.154-1.451-1-2.597-2.692-3.285a12.899 12.899 0 00-1.847-.534v.687c1 .382 1.462 1.451 1.616 2.674.307 2.215.384 3.284.692 5.958.462 3.743 2.77 6.188 5.923 6.722v2.521h-5.77c-.538 0-1 .306-1.23.764l-1.23 2.903h.769c.846-1.07 1.384-1.375 2.769-1.375.846 0 4.692-.077 4.692-.077v6.34c-9.692-.534-17.384-8.784-16.692-18.562z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}