import { Link } from 'react-router-dom';
import logo from '../images/logo.png'

import { FiInstagram } from "react-icons/fi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { LuFacebook } from "react-icons/lu";
import { MdOutlinePhoneAndroid } from "react-icons/md";

import { MdOutlineMail } from "react-icons/md";

const Footer = () => {

    function topPage() {
        window.scroll(0, 0)
    }

    return (
        <>

            <div className='w-full relative bg-[#86a39f]'>

                <div class="  font-[poppins]  pt-8 md:pt-14 z-40">
                    <div class="px-4  w-full  md:w-[85%] mx-auto md:px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 ">

                        <div class=" p-2 md:p-4 ">
                            <img src={logo} className='w-14 sm:w-14 md:w-38  object-cover ' alt="" />

                            <p className='mt-3 font-[Merriweather]  text-[11px] leading-5 text-white font-extralight'>Discover holistic wellness with PranaVeda's expert Ayurveda services and transform your health naturally.</p>

                        </div>

                        <div className="p-2 md:p-4">
                            <div className="text-[12px] sm:text-[15px] md:text-[16px] uppercase text-white font-bold font-[Merriweather] pb-1  w-fit ">Get in Touch</div>
                            <Link onClick={topPage} className="text-gray-100 my-3 block text-[12px] sm:text-[13px] md:text-[13px] cursor-pointer hover:text-red-500" to="/" smooth={true} duration={500}>
                                Home
                            </Link>

                            <Link onClick={topPage} className="text-gray-100 my-3 block text-[12px] sm:text-[13px] md:text-[13px] cursor-pointer hover:text-red-500" to="about" smooth={true} duration={500}>
                                About
                            </Link>

                            <Link onClick={topPage} className="text-gray-100 my-3 block text-[12px] sm:text-[13px] md:text-[13px] cursor-pointer hover:text-red-500" to="contact" smooth={true} duration={500}>
                                Contact
                            </Link>

                        </div>


                        <div class="p-2 md:p-4">
                            <div className="text-[12px] sm:text-[15px] md:text-[16px] uppercase text-white font-bold font-[Merriweather] pb-1  w-fit "> Support</div>

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
                            <div className="text-[12px] sm:text-[15px] md:text-[16px] uppercase text-white font-bold font-[Merriweather] pb-1  w-fit ">Contact</div>


                            <div >
                                <p class="text-gray-100 my-3 block  text-[12px] sm:text-[13px]  md:text-[13px]" >  Chennai  </p>

                            </div>
                            <a href="mailto::lifeplusayushvadhyasala@gmail.com" target="_blank" class="text-gray-100 my-3   text-[12px] sm:text-[13px]  md:text-[13px] flex items-center gap-x-2" ><MdOutlineMail className=' text-[16px] md:text-[20px] font-bold' /> lifeplusayushvadhyasala@gmail.com</a>
                            <a href="tel:918015907797" target="_blank" className='text-gray-100 text-[12px] sm:text-[13px] md:text-[13px] my-3 flex items-center gap-x-2 '><MdOutlinePhoneAndroid className='text-[16px] md:text-[20px] font-bold' /> +91 8015907797</a>
                            <a href="tel:918015525797" target="_blank" className='text-gray-100 text-[12px] sm:text-[13px] md:text-[13px] my-3 flex items-center gap-x-2 '><MdOutlinePhoneAndroid className='text-[16px] md:text-[20px] font-bold' /> +91 8015525797</a>
                            <a href="tel:918015508797" target="_blank" className='text-gray-100 text-[12px] sm:text-[13px] md:text-[13px] my-3 flex items-center gap-x-2 '><MdOutlinePhoneAndroid className='text-[16px] md:text-[20px] font-bold' /> +91 8015508797</a>

                        </div>


                    </div>
                </div>


                <div class="bg-[#86a39f] md:pt-2 z-40">
                    <div class="flex flex-col  justify-between md:flex-row-reverse pb-2 md:pb-5 px-2 m-auto border-t border-gray-200 text-gray-800 text-sm  w-full md:w-[85%]  items-center">

                        <div class="mt-1 md:mt-2 flex-col  flex gap-x-4 md:gap-x-8 ">

                            <div className='mt-1 md:mt-2 flex-row  flex gap-x-4 md:gap-x-8 '>
                                <Link to='' target='_blank' >
                                    <div className='w-6 h-6 md:w-9 md:h-9 bg-white hover:border hover:border-[#6bb8ff] hover:bg-[#fbfbfb] rounded-full flex justify-center items-center shadow-md drop-shadow-md  cursor-pointer hover:shadow-lg hover:drop-shadow-xl hover:animate-bounce'>
                                        <FaSquareXTwitter className='text-[12px] sm:text-[13px] md:text-[16px] text-[#8e6600]' />
                                    </div>
                                </Link>

                                <Link to="https://www.instagram.com/lifeplusayushvaidhyasala?igsh=MWw3cHp0YmtzbDM2Zw==" target='_blank'>
                                    <div className='w-6 h-6 md:w-9 md:h-9 bg-white hover:border hover:border-[#6bb8ff] hover:bg-[#fbfbfb] rounded-full flex justify-center items-center shadow-md drop-shadow-md  cursor-pointer hover:shadow-lg hover:drop-shadow-xl hover:animate-bounce'>
                                        <FiInstagram className='text-[12px] sm:text-[13px] md:text-[16px] text-[#8e6600]' />
                                    </div>
                                </Link>

                                <Link to="" target='_blank' className="">
                                    <div className='w-6 h-6 md:w-9 md:h-9 bg-white hover:border hover:border-[#6bb8ff] hover:bg-[#fbfbfb] rounded-full flex justify-center items-center shadow-md drop-shadow-md  cursor-pointer hover:shadow-lg hover:drop-shadow-xl hover:animate-bounce'>
                                        <PiLinkedinLogoBold className='text-[12px] sm:text-[13px] md:text-[16px] text-[#8e6600]' />
                                    </div>
                                </Link>

                                <Link to='' target='_blank'>
                                    <div className='w-6 h-6 md:w-9 md:h-9 bg-white hover:border hover:border-[#6bb8ff] hover:bg-[#fbfbfb] rounded-full flex justify-center items-center shadow-md drop-shadow-md cursor-pointer hover:shadow-lg hover:drop-shadow-xl hover:animate-bounce'>
                                        <LuFacebook className='text-[12px] sm:text-[13px] md:text-[16px] text-[#8e6600]' />
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div class=" mt-3 md:my-5 text-[9px] sm:text-[11px] md:text-[13px] text-gray-100 pb-8">Life Plus Pvt Ltd © 2025. All Rights Reserved.</div>

                    </div>
                </div>


            </div>



        </>
    )
}

export default Footer