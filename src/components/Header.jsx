import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { gsap } from "gsap";

import logo from '../images/logo.png';
import { MdOutlineEmail, MdPhoneAndroid } from "react-icons/md";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [navbarBg, setNavbarBg] = useState('bg-gray-50 text-gray-700');

  const handleNav = () => setNav(!nav);

  useEffect(() => {
    const handleScroll = () => {
      setNavbarBg(window.scrollY > 50 ? 'bg-slate-50 shadow-md text-black' : 'bg-gray-50 text-gray-700');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const topPage = () => window.scrollTo(0, 0);

  // Button hover animation
  const buttonRef = useRef(null);
  const borderRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(borderRef.current, { scale: 1, opacity: 0.5 });
    }, buttonRef);
    return () => ctx.revert();
  }, []);

  const handleMouseEnter = () => {
    gsap.to(borderRef.current, {
      scale: 1.05,
      opacity: 1,
      borderColor: "#00FF99",
      boxShadow: "0 0 15px #00FF99",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(borderRef.current, {
      scale: 1,
      opacity: 0.5,
      borderColor: "transparent",
      boxShadow: "none",
      duration: 0.3,
      ease: "power2.inOut",
    });
  };

  return (
    <>
      {/* 🔹 Top Navbar */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 bg-[#86a39f] w-full font-[roboto] px-4 md:px-8 py-2">

        {/* Marquee */}
        <div className="overflow-hidden w-full md:w-[60%] h-6 md:h-full flex items-center">
          <div className="marquee-container w-full">
            <p className="marquee-text text-[12px] md:text-[14px] font-bold text-white whitespace-nowrap">
              Trusted hands. Natural care. LifePlus Herbal Healthcare Center
            </p>
          </div>
        </div>
        
        {/* Email */}
        <div className="flex items-center gap-x-1">
          <MdOutlineEmail className="text-white text-[18px] md:text-[22px]" />
          <span className="text-[12px] md:text-[14px] text-white md:font-medium">
            lifeplusayushvadhyasala@gmail.com
          </span>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-x-1">
          <MdPhoneAndroid className='text-white text-[16px] md:text-[22px]' />
          <span className="text-[12px] md:text-[14px] text-white md:font-medium">
            +91 8015907797
          </span>
        </div>

      </div>

      {/* 🔹 Main Navbar */}
      <nav className={`w-full sticky top-0 z-50 md:py-0 border-b border-gray-50 drop-shadow-sm ${navbarBg}`}>
        <div className="max-w-[1280px] mx-auto font-[poppins]">
          <div className="flex justify-between items-center px-4 sm:px-9">

            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" onClick={topPage}>
                <img src={logo} className="h-30 md:h-36 w-auto object-contain" alt="LifePlus Logo" />
              </Link>
            </div>

            {/* Desktop Nav */}
            <ul className="hidden md:flex flex-1 justify-center gap-x-8 xl:gap-x-12 font-semibold text-[14px] md:text-[16px]">
              {['Home', 'About', 'Services', 'Contact'].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.replace(/\s+/g, '_').toLowerCase()}`}
                    onClick={topPage}
                    className="hover:text-green-700 hover:scale-110 active:scale-105 transition-transform duration-200 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Button */}
            <div className="cursor-pointer hidden md:flex justify-end items-end w-fit ml-6">
              <div className="relative group" ref={buttonRef}>
                <Link to="/contact" onClick={topPage}>
                  <button
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="relative z-10 cursor-pointer drop-shadow-md font-semibold font-[poppins] bg-[#d480a1] hover:bg-[#0a7c1d] text-white px-4 md:px-10 py-2 md:py-3 uppercase rounded-md duration-300 transform hover:scale-105 active:scale-105 text-[12px] md:text-[14px]"
                  >
                    book appointment
                  </button>
                </Link>
              </div>
            </div>

            {/* Mobile Menu Icon */}
            <div onClick={handleNav} className="block lg:hidden cursor-pointer px-5">
              {nav ? (
                <AiOutlineClose className=" text-[20px] md:text-[24px] text-black" />
              ) : (
                <AiOutlineMenu className=" text-[20px] md:text-[24px] text-black" />
              )}
            </div>
          </div>

          {/* Mobile Navigation */}
          <ul className={`fixed top-0 left-0 pt-10 pl-6 w-[70%] h-[100vh] bg-gray-50 z-50 drop-shadow-md transition-transform ${nav ? 'translate-x-0' : '-translate-x-full'}`}>
            <li className="ml-6">
              <img
                src={logo}
                alt="LifePlus Logo"
                className="h-40"
              />
            </li>
            {['Home', 'About Us', 'Services', 'Contact'].map((item, idx) => (
              <li key={idx} className="px-2 py-4">
                <Link
                  to={item === 'Home' ? '/' : `/${item.replace(/\s+/g, '_').toLowerCase()}`}
                  onClick={handleNav}
                  className="text-[14px] font-semibold text-gray-700 hover:text-green-700 hover:scale-105 active:scale-105 transition-transform inline-block"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;