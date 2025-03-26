import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { MdPhoneIphone } from 'react-icons/md';
import { gsap } from "gsap";

import logo from '../images/logo.png';
import call from '../images/call.gif'

//icons
import { GrWaypoint } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";
import { MdPhoneAndroid } from "react-icons/md";




const Header = () => {

    const [nav, setNav] = useState(false); // State to manage mobile menu visibility
    const [navbarBg, setNavbarBg] = useState('bg-[#cce6d7] text-gray-700'); // State to manage navbar background color

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setNavbarBg('bg-slate-50 shadow-md text-black');
            } else {
                setNavbarBg('bg-[#cce6d7] text-gray-700');
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const topPage = () => {
        window.scrollTo(0, 0);
    };





    return (
        <>
            {/* Top Navbar */}
            <div className="flex items-center justify-between bg-[#45601a] h-8 md:h-11 w-full font-[roboto]">
                <div className="overflow-hidden w-[65%] md:w-[50%] h-full">
                    <div className="w-fit px-4 md:px-6 h-full flex justify-center items-center">
                        <div className="marquee-container">
                            <p className="marquee-text text-[8px] md:text-[12px] font-bold text-white">
                                10% OFF ON FIRST BOOKING. CODE: APP10
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-[35%] md:w-[50%] flex justify-end gap-x-6 pr-4 sm:pr-6 md:pr-8 lg:pr-10">

                    <div>
                        <a href="tel:+916379172058" target="_blank" rel="noopener noreferrer">
                            <div className="flex items-center gap-x-1">
                                <div>
                                    <MdOutlineEmail className='text-green-400 text-[21px]' />
                                </div>

                                <span className="font-[Roboto] text-[10px] md:text-[12px] text-white font-medium">
                                    abcd@gmail.com
                                </span>
                            </div>
                        </a>
                    </div>


                    <div>
                        <a href="tel:+916379172058" target="_blank" rel="noopener noreferrer">
                            <div className="flex items-center gap-x-1">
                                <div>
                                    <MdPhoneAndroid className='text-green-400 text-[20px]' />
                                </div>

                                <span className="font-[Roboto] text-[10px] md:text-[12px] text-white font-medium">
                                    +91 9047651568
                                </span>
                            </div>
                        </a>
                    </div>

                </div>
            </div>

            {/* Main Navbar */}
            <nav className={`w-full sticky top-0 z-30 py-3 md:py-4 border-b border-gray-50 ${navbarBg}`}>
                <div className="max-w-full mx-auto font-[poppins]">
                    <div className="flex justify-between items-center px-4 sm:px-9 w-full xl:w-[90%] mx-auto">
                        {/* Logo */}
                        <div className="w-fit">
                            <Link to="/" onClick={topPage}>
                                {/* <span className="text-xl font-bold text-black">Logo</span> */}
                                <img src={logo} className="w-40" alt="none" />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <ul className="hidden md:flex w-full justify-end mr-12  gap-x-4 xl:gap-x-10 font-medium">
                            <li>
                                <Link to="/" onClick={topPage} className="hover:text-green-600  text-[13px] ">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" onClick={topPage} className="hover:text-green-600 text-[13px]">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/healthcare_services" onClick={topPage} className="hover:text-green-600 text-[13px]">
                                    Healthcare Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" onClick={topPage} className="hover:text-green-600 text-[13px]">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>


                        {/* WhatsApp Button */}
                        <div className="cursor-pointer flex justify-end items-end w-full md:w-fit">
                            <Link href="#">
                                <div className="relative">

                                    {/* Button */}
                                    <button

                                        className="relative  cursor-pointer drop-shadow-md font-semibold font-[poppins] bg-[#cda43e] hover:bg-slate-100 text-white hover:text-green-400 px-5 md:px-8  py-0.5 md:py-1.5 uppercase rounded-md duration-500 transform perspective-100 transition-transform hover:scale-105 hover:shadow-xl shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_30px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]"

                                    >
                                        <span  className="inline-block text-[10px] md:text-[13px] font-medium ">Explore  </span>
                                    </button>
                                </div>
                            </Link>
                        </div>


                        {/* Mobile Menu Icon */}
                        <div onClick={handleNav} className="block lg:hidden cursor-pointer px-2 mb-2">
                            {nav ? (
                                <AiOutlineClose className=" text-[16px] md:text-[20px] text-black" />
                            ) : (
                                <AiOutlineMenu className=" text-[16px] md:text-[20px] text-black" />
                            )}
                        </div>

                        {/* Mobile Navigation */}
                        <ul
                            className={`fixed top-0 left-0 pt-10 pl-6 w-[60%] h-full bg-gray-50 z-50 border-r transition-transform ${nav ? 'translate-x-0' : '-translate-x-full'
                                }`}
                        >
                            <li>
                                <div className="w-fit">
                                    <Link to="/" onClick={topPage}>
                                        {/* <span className="text-xl font-bold text-black">Logo</span> */}
                                        <img src={logo} className="w-28" alt="none" />
                                    </Link>
                                </div>
                            </li>

                            <li className="px-6 py-4" onClick={topPage}>
                                <Link to="/" onClick={handleNav} className="text-[13px] font-semibold text-gray-700">
                                    Home
                                </Link>
                            </li>
                            <li className="px-6 py-4" onClick={topPage}>
                                <Link to="/about" onClick={handleNav} className="text-[13px] font-semibold text-gray-700">
                                    About Us
                                </Link>
                            </li>
                            <li className="px-6 py-4" onClick={topPage}>
                                <Link to="/healthcare_services" onClick={handleNav} className="text-[13px] font-semibold text-gray-700">
                                    Healthcare Services
                                </Link>
                            </li>
                            <li className="px-6 py-4" onClick={topPage}>
                                <Link to="/contact" onClick={handleNav} className="text-[13px] font-semibold text-gray-700">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
