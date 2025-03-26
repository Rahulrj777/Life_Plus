import React from 'react'

// import logo from '../images/64.png'
import logo from '../images/logo.png'
// import line from '../images/banner/line.png'


//icons
import { FiInstagram } from "react-icons/fi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { ImWhatsapp } from "react-icons/im";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { LuFacebook } from "react-icons/lu";
import { FaThreads } from "react-icons/fa6";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { TbDeviceLandlinePhone } from "react-icons/tb";


import { MdOutlineMail } from "react-icons/md";
import { FaMobileScreen } from "react-icons/fa6";



import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';


const Footer = () => {

    function topPage() {
        window.scroll(0, 0)
    }

    return (
        <>

            <div className='w-full relative bg-[#4a5c24]'>

                <div class="  font-[poppins]  pt-8 md:pt-14 z-40">
                    <div class="px-4  w-full  md:w-[85%] mx-auto md:px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 ">

                        <div class=" p-2 md:p-4">
                            <img src={logo} className='w-14 sm:w-14 md:w-32  object-cover ' alt="" />

                            <p className='mt-3 font-[Merriweather]  text-[11px] leading-5 text-white font-extralight'>Discover holistic wellness with PranaVeda's expert Ayurveda services and transform your health naturally.</p>

                        </div>

                        <div className="p-2 md:p-4">
                            <div className="text-[12px] sm:text-[15px] md:text-[16px] uppercase text-white font-bold font-[Merriweather] pb-1 border-b w-fit border-gray-100 border-dotted">Get in Touch</div>
                            <Link className="text-gray-100 my-3 block text-[12px] sm:text-[13px] md:text-[13px] cursor-pointer hover:text-red-500" to="home" smooth={true} duration={500}>
                                Home
                            </Link>

                            <Link className="text-gray-100 my-3 block text-[12px] sm:text-[13px] md:text-[13px] cursor-pointer hover:text-red-500" to="home" smooth={true} duration={500}>
                                Home
                            </Link>

                            <Link className="text-gray-100 my-3 block text-[12px] sm:text-[13px] md:text-[13px] cursor-pointer hover:text-red-500" to="home" smooth={true} duration={500}>
                                Home
                            </Link>

                        </div>


                        <div class="p-2 md:p-4">
                            <div className="text-[12px] sm:text-[15px] md:text-[16px] uppercase text-white font-bold font-[Merriweather] pb-1 border-b w-fit border-gray-100 border-dotted">Email Support</div>

                            <Link to='/' onClick={topPage}>
                                <p class="text-gray-100 my-3 block  text-[12px] sm:text-[13px]  md:text-[13px] hover:text-red-500" >Help Center </p>
                            </Link>
                            <Link to='/' onClick={topPage}>
                                <a class="text-gray-100  my-3 block  text-[12px] sm:text-[13px]  md:text-[13px] hover:text-red-500" href="/#">Privacy Policy </a>
                            </Link>

                            <Link to='/' onClick={topPage}>
                                <a class="text-gray-100 my-3 block  text-[12px] sm:text-[13px]  md:text-[13px] hover:text-red-500" href="/#">Terms & Conditions</a>
                            </Link>


                        </div>

                        <div class="p-2 md:p-4">
                            <div className="text-[12px] sm:text-[15px] md:text-[16px] uppercase text-white font-bold font-[Merriweather] pb-1 border-b w-fit border-gray-100 border-dotted">Head Office</div>


                            <div >
                                {/* <h2 className='text-[14px] font-semibold '>SPECTRA CONSTRUCTIONS AND INFRASTRUCTURE PVT. LTD</h2> */}
                                <p class="text-gray-100 my-3 block  text-[12px] sm:text-[13px]  md:text-[13px]" >  Chennai  </p>

                            </div>
                            <a href="mailto::info@scipl.net" target="_blank" class="text-gray-100 my-3   text-[12px] sm:text-[13px]  md:text-[13px] flex items-center gap-x-2" ><MdOutlineMail className=' text-[16px] md:text-[20px] font-bold' />contact@lifeplus.com</a>
                            {/* <a href="tel:91" target="_blank" className='text-gray-100 text-[12px] sm:text-[13px] md:text-[14px] my-3 flex items-center gap-x-2 '><MdOutlinePhoneAndroid className='text-[16px] md:text-[20px] font-bold' /> 044 -22602050</a> */}
                            <p href="tel:91" target="_blank" className='text-gray-100 text-[12px] sm:text-[13px] md:text-[13px] my-3 flex items-center gap-x-2 '><TbDeviceLandlinePhone className='text-[16px] md:text-[20px] font-bold' /> +91 987894683</p>

                        </div>


                    </div>
                </div>


                <div class="bg-[#4a5c24] md:pt-2 z-40">
                    <div class="flex flex-col  justify-between md:flex-row-reverse pb-2 md:pb-5 px-3 m-auto border-t border-[#aaaaaa] text-gray-800 text-sm  w-full md:w-[80%]  items-center">

                        <div class="mt-1 md:mt-2 flex-col  flex gap-x-4 md:gap-x-8 ">

                            <div className='mt-1 md:mt-2 flex-row  flex gap-x-4 md:gap-x-8 '>
                                <Link to='' target='_blank' >
                                    <div className='w-6 h-6 md:w-9 md:h-9 bg-white hover:border hover:border-[#6bb8ff] hover:bg-[#fbfbfb] rounded-full flex justify-center items-center shadow-md drop-shadow-md  cursor-pointer hover:shadow-lg hover:drop-shadow-xl hover:animate-bounce'>
                                        <FaSquareXTwitter className='text-[12px] sm:text-[13px] md:text-[16px] text-green-800' />
                                    </div>
                                </Link>

                                <Link to="" target='_blank'>
                                    <div className='w-6 h-6 md:w-9 md:h-9 bg-white hover:border hover:border-[#6bb8ff] hover:bg-[#fbfbfb] rounded-full flex justify-center items-center shadow-md drop-shadow-md  cursor-pointer hover:shadow-lg hover:drop-shadow-xl hover:animate-bounce'>
                                        <FiInstagram className='text-[12px] sm:text-[13px] md:text-[16px] text-green-800' />
                                    </div>
                                </Link>

                                <Link to="https://api.whatsapp.com/send?phone="
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className=""
                                >
                                    <div className='w-6 h-6 md:w-9 md:h-9 bg-white hover:border hover:border-[#6bb8ff] hover:bg-[#fbfbfb] rounded-full flex justify-center items-center shadow-md drop-shadow-md cursor-pointer hover:shadow-lg hover:drop-shadow-xl hover:animate-bounce'>
                                        <ImWhatsapp className='text-[12px] sm:text-[13px] md:text-[16px] text-green-800' />
                                    </div>
                                </Link>

                                <Link to="" target='_blank' className="">
                                    <div className='w-6 h-6 md:w-9 md:h-9 bg-white hover:border hover:border-[#6bb8ff] hover:bg-[#fbfbfb] rounded-full flex justify-center items-center shadow-md drop-shadow-md  cursor-pointer hover:shadow-lg hover:drop-shadow-xl hover:animate-bounce'>
                                        <PiLinkedinLogoBold className='text-[12px] sm:text-[13px] md:text-[16px] text-green-800' />
                                    </div>
                                </Link>

                                <Link to='' target='_blank'>
                                    <div className='w-6 h-6 md:w-9 md:h-9 bg-white hover:border hover:border-[#6bb8ff] hover:bg-[#fbfbfb] rounded-full flex justify-center items-center shadow-md drop-shadow-md cursor-pointer hover:shadow-lg hover:drop-shadow-xl hover:animate-bounce'>
                                        <LuFacebook className='text-[12px] sm:text-[13px] md:text-[16px] text-green-800' />
                                    </div>
                                </Link>

                                {/* <Link to="" target='_blank'>
                                    <div className='w-6 h-6 md:w-9 md:h-9 bg-white hover:border hover:border-gray-300 hover:bg-[#fbfbfb] rounded-full flex justify-center items-center shadow-md drop-shadow-md cursor-pointer hover:shadow-lg hover:drop-shadow-xl hover:animate-bounce'>
                                        <FaThreads className='text-[12px] sm:text-[13px] md:text-[16px] text-gray-800' />
                                    </div>
                                </Link> */}
                            </div>
                        </div>

                        <div class=" mt-3 md:my-5 text-[9px] sm:text-[11px] md:text-[13px] text-gray-300 pb-8">Life Plus Pvt Ltd © 2025. All Rights Reserved.</div>

                    </div>
                </div>


            </div>



        </>
    )
}

export default Footer