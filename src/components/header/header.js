import React from 'react'
import { Link } from 'react-router-dom'
import './fixHeader'
const Header = () => {

    document.addEventListener('DOMContentLoaded', function () {
        // Your code here, including the window.onscroll event handler

    window.onscroll = function () {
        const currentScrollPos = window.pageYOffset;

        if (prevScrollPos > currentScrollPos) {
            header.style.top = '0'; // Show header when scrolling up
        } else {
            header.style.top = `-${header.offsetHeight}px`; // Hide header when scrolling down
        }

        prevScrollPos = currentScrollPos;
    }
});
    window.addEventListener('scroll', function () {
        var targetElement = document.getElementById('header');
        var scrollY = window.scrollY;

        // You can adjust the threshold value according to your needs
        var threshold = 200;

        if (scrollY > threshold) {
            targetElement.classList.add('scrolled', 'bg-bawhite-400');
        } else {
            targetElement.classList.remove('scrolled', 'bg-bawhite-400');
        }
    });

    let prevScrollPos = window.pageYOffset;
    const header = document.getElementById('header');


    return (
        <header id='header' className='fixed z-[999] top-0 left-0 w-full group transition-all duration-500 group-[.colorChange]:bg-bablack-400'>

            <nav className="py-[48px] border-gray-200 bacontainer text-bawhite-400">
                <div className="flex flex-wrap justify-between items-center mx-auto">
                    <Link href="" className="flex items-center w-40">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 208.3 27.7" aria-hidden="true" data-acsb-hidden="true" data-acsb-force-hidden="true"><path className='fill-bawhite-400 group-[.scrolled]:fill-bablack-400 group-[.colorChange]:fill-bapink-400' d="M0 24.1h11.7c5.5 0 8.7-2.3 8.7-6.8 0-2.8-1.7-4.5-4.1-5.3 2-.9 3.4-2.6 3.4-5.3 0-3.5-2.2-5.9-7.5-5.9H0v23.3zM13.1 7.9c0 1.6-1 2.4-3.2 2.4H6.4V5.5h3.5c2.2 0 3.2.8 3.2 2.4zm.7 9c0 1.7-1 2.4-3.3 2.4H6.4v-4.9h4.2c2.2 0 3.2.8 3.2 2.5zM38.2 24.1h6.7L36.8.7h-8.4l-8.1 23.4h6.5l1.2-3.8h9.1l1.1 3.8zM32.5 5.9l2.9 9.5h-5.9l3-9.5zM55.1 24.5c6.3 0 10.3-3 10.3-7.7 0-3.8-2.5-5.8-6.5-6.6l-5.1-1c-2-.4-2.6-1-2.6-2.1S52.4 5 54.5 5c2.4 0 4.1 1 4.2 3.1H65C65 2.5 60.3.3 54.5.3c-5.6 0-9.7 2.8-9.7 7.3 0 3.8 2.5 5.8 6.5 6.6l5.1 1c2 .4 2.6 1 2.6 2.1 0 1.5-1.4 2.3-3.7 2.3-2.6 0-4.5-1.3-4.6-3.8h-6.3c.2 5.5 3.7 8.7 10.7 8.7zM67.3 24.1h6.4V.7h-6.4v23.4zM82 12.4c0-3.9 2.1-6.8 5.6-6.8 2.9 0 4.7 1.7 5.1 3.7h6.7C98.8 3.2 93.6.2 87.7.2 80 .2 75.4 5 75.4 12.3s4.5 12.1 12.3 12.1c6 0 11.2-2.9 11.8-9.1h-6.7c-.4 2.1-2.1 3.7-5.1 3.7-3.6.2-5.7-2.7-5.7-6.6zM113.7 0h-5.2l-10 27.7h5.2l10-27.7zM137.8 12.4c0-6.6-3.6-11.7-12.8-11.7h-9.8v23.4h9.8c9.2 0 12.8-5.1 12.8-11.7zm-6.6 0c0 4.6-2.6 6.3-6.2 6.3h-3.3V6.1h3.3c3.6 0 6.2 1.7 6.2 6.3zM139.5 24.1H158v-5.3h-12.2v-4h10.7V9.7h-10.7V6.1h11.9V.7h-18.2v23.4zM180 8.9c0-5.9-3.8-8.1-9.6-8.1h-10.1v23.4h6.4V17h3.8c5.7 0 9.5-2.2 9.5-8.1zm-6.6 0c0 2.3-1.1 3.2-3.7 3.2h-3.1V5.6h3.1c2.6 0 3.7 1 3.7 3.3zM181 6.2h7.4v17.9h6.4V6.2h7.4V.7H181v5.5zM203.5 23.7c-2.6 0-4.8-2.1-4.8-4.8 0-2.6 2.1-4.8 4.8-4.8s4.8 2.1 4.8 4.8c0 2.6-2.2 4.8-4.8 4.8zm0-8.8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"></path><path className='fill-bawhite-400 group-[.scrolled]:fill-bablack-400' d="M204 17.2h-1.4v1.6h1.4c.5 0 .7-.3.7-.8s-.3-.8-.7-.8zm-.1-.8c1.2 0 1.8.5 1.8 1.6 0 .6-.3 1.1-.9 1.3l1.2 1.8h-1.2l-1.1-1.6h-1.2v1.6h-1.1v-4.7h2.5z"></path></svg>
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link href="" className="flex items-center">
                            <svg width="21" height="5" viewBox="0 0 21 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_4_6)">
                                    <path d="M2.5 5C3.88071 5 5 3.88071 5 2.5C5 1.11929 3.88071 0 2.5 0C1.11929 0 0 1.11929 0 2.5C0 3.88071 1.11929 5 2.5 5Z" fill="#F4F4F4" className='group-[.scrolled]:fill-bablack-400 group-[.colorChange]:fill-bapink-400' />
                                    <path d="M10.5 5C11.8807 5 13 3.88071 13 2.5C13 1.11929 11.8807 0 10.5 0C9.11929 0 8 1.11929 8 2.5C8 3.88071 9.11929 5 10.5 5Z" fill="#F4F4F4" className='group-[.scrolled]:fill-bablack-400 group-[.colorChange]:fill-bapink-400' />
                                    <path d="M18.5 5C19.8807 5 21 3.88071 21 2.5C21 1.11929 19.8807 0 18.5 0C17.1193 0 16 1.11929 16 2.5C16 3.88071 17.1193 5 18.5 5Z" fill="#F4F4F4" className='group-[.colorChange]:fill-bapink-400 group-[.scrolled]:fill-bablack-400 ' />
                                </g>
                                <defs>
                                    <clipPath id="clip0_4_6">
                                        <rect width="21" height="5" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </Link>
                        <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium mr-20 gap-[30px] lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <Link to="/work" className="headerLink nav_link ">Work</Link>
                            </li>
                            <li>
                                <Link to="/about" className="headerLink nav_link">about</Link>
                            </li>
                            <li>
                                <Link to="/news" className="headerLink nav_link">news</Link>
                            </li>
                            <li>
                                <Link to="/thinking" className="headerLink nav_link">thinking</Link>
                            </li>
                            <li>
                                <Link to="/careers" className="headerLink nav_link">careers</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="headerLink nav_link">contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </header>
    )
}

export default Header