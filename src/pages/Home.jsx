import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Testimonials from '../components/Testmonials';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { FaPlay } from "react-icons/fa";
import { GiBodyBalance } from "react-icons/gi";



import banner from '../images/banner/banner.jpg'
import bannervideo from '../images/banner.mp4'
import whychoosebanner from '../images/banner/whybanner.jpg'

import about1 from '../images/about1.jpg'
import about2 from '../images/about2.jpg'

import service from '../images/service.jpg'


import offer1 from '../images/services/varmam.jpg'
import offer2 from '../images/services/thokanam.jpg'
import offer3 from '../images/services/abhyangam.jpg'
import offer4 from '../images/services/nasya.jpg'
import offer5 from '../images/services/vamana.jpg'
import offer6 from '../images/services/virechanam.jpg'

import who1 from '../images/icon/who1.png'
import who2 from '../images/icon/who2.png'
import who3 from '../images/icon/who3.png'
import who4 from '../images/icon/who4.png'

import mid1 from '../images/icon/mid1.png'
import mid2 from '../images/icon/mid2.png'
import mid3 from '../images/icon/mid3.png'
import mid4 from '../images/icon/mid4.png'

import service1 from '../images/icon/service1.png'
import service2 from '../images/icon/service2.png'
import service3 from '../images/icon/service3.png'
import service4 from '../images/icon/service4.png'

import why1 from '../images/icon/why1.png'
import why2 from '../images/icon/why2.png'
import why3 from '../images/icon/why3.png'
import why4 from '../images/icon/why4.png'


// import service1 from '../images/services/service1.jpg'

// import service1 from '../images/services/siddha.jpg'
// import service2 from '../images/services/ayurveda.jpg'
// import service3 from '../images/services/naturopathy.jpg'

import icon1 from '../images/services/1.png'
import booking from '../images/appointment.jpg'
import midBanner from '../images/banner/mid_banner.jpg'
import review from '../images/review-1.jpg'
import doctor from '../images/doctor.jpg'


//icons
import { GiLindenLeaf } from "react-icons/gi";
import { FaStethoscope } from "react-icons/fa6";
import BestServices from '../components/BestServices'

import { FaCheck } from "react-icons/fa";
import { PiHeadsetFill } from "react-icons/pi";
import { FaStar } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa";

import { GiMedicinePills } from "react-icons/gi";
import DoctorList from '../components/DoctorList';



const Home = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);


    return (
        <>

            <div className='overflow-hidden '>

                {/* -------------- banner slide ---------------- */}

                <section className='w-full h-full font-[poppins] py-10 md:py-0 bg-gray-50' id='home'>
                    <div className='w-full    flex flex-col  md:flex-row gap-y-10 justify-center items-center   overflow-hidden'>

                        <div className='w-full px-4 md:w-[50%] mx-auto  h-full '>

                            <div className='md:pl-16 md:pr-5' data-aos="fade-up" data-aos-duration="3000">
                                <p className='text-[12px] md:text-[16px] tracking-tight md:tracking-normal font-semibold text-green-800 flex items-center gap-1.5'> Balancing Body, Mind & Nature  </p>
                                <div className='font-bold font-[Lora] md:tracking-[2px] '>
                                    <h2 className='text-[2rem] md:text-[3.8rem] uppercase  text-red-500 drop-shadow-md'> Helping You Feel </h2>
                                    <h2 className='text-[1.8rem] md:text-[3.5rem] uppercase text-gray-600'> Better—Naturally </h2>
                                </div>
                                <p className='mt-2 -md:mt-5  text-[12px] md:text-[14px]  text-gray-500  leading-5 md:leading-7 font-[roboto]  md:font-medium pr-8'>
                                    We use natural herbs and safe treatments to support your health and well-being. Whether you're
                                    looking to reduce stress, boost your energy, or improve your overall health, we’re here to help with
                                    gentle and effective herbal care.
                                </p>

                                <div className='mt-6 md:mt-14 font-[Merriweather]'>
                                    <button className='px-4 md:px-8  py-2 md:py-2.5 rounded-md bg-[#cda43e] hover:scale-105 duration-500 font-semibold hover:bg-[#abc283] text-white text-[12px] md:text-[14px] cursor-pointer shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_30px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)] '>
                                        Get Start Now
                                    </button>
                                </div>

                            </div>

                            {/* <img src={banner} className='w-full object-cover' alt='none' /> */}
                        </div>

                        <div className='w-full md:w-[50%] mx-auto   h-full'>
                            <div className=' relative'>
                                <video className='w-full  rounded-br-[7rem] md:rounded-br-[10rem]' autoPlay loop muted playsInline>
                                    <source src={bannervideo} className='' type='video/mp4' />
                                </video>


                                <div className='absolute inset-0 flex justify-center items-center'>
                                    <span className="relative flex size-20 cursor-pointer">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4CAF50] opacity-70 scale-75 transform transition-transform duration-1500 ease-out"></span>
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#66BB6A] opacity-60 scale-90 transform transition-transform duration-2000 ease-out delay-300"></span>
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#81C784] opacity-50 scale-100 transform transition-transform duration-2500 ease-out delay-600"></span>
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#A5D6A7] opacity-40 scale-110 transform transition-transform duration-3000 ease-out delay-900"></span>
                                        <span className="relative inline-flex size-20 rounded-full bg-[#388E3C] justify-center items-center">
                                            <FaPlay className='text-white text-[30px]' />
                                        </span>
                                    </span>
                                </div>

                                <div className='absolute -bottom-2 left-0 right-0 flex justify-start' data-aos='fade-right' data-aos-duratoin='1000'>
                                    <img src={doctor} className='w-[30%] bg-gray-50 p-2  object-cover' alt='none' />
                                </div>


                            </div>
                        </div>

                    </div>
                </section>


                {/* --------------- highlights ---------------- */}

                {/* <section className='py-10 md:py-20 bg-slate-100 font-[poppins]'>
                    <div className='w-full px-10 md:w-[90%] mx-auto  '>

                        <div className='flex justify-center items-center w-full'>
                            <div className='grid  grid-cols-1 md:grid-cols-4 gap-y-6 gap-x-10 w-full' data-aos='fade-up' data-aos-duratoin='3000'>

                                <div className=''>
                                    <div className=' h-full  w-full md:w-60 px-10 py-4 rounded-bl-3xl md:rounded-bl-[2rem] bg-white rounded-r-md border-r-2 border-r-green-500/30 border-l-4 border-teal-700/60 shadow-md drop-shadow-sm'>

                                        <div className='flex justify-center items-center gap-x-4 w-full'>
                                            <MdDateRange className='text-[20px] md:text-[50px] text-red-500' />
                                            <h3 className='text-[10px] font-semibold text-gray-700 '>Book Your Appointment</h3>
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <div className='h-full w-full md:w-60 px-10 py-4 rounded-tr-3xl md:rounded-tr-none md:rounded-bl-[2rem] bg-white rounded-r-md border-r-2 border-r-green-500/30 border-l-4 border-teal-700/60 shadow-md drop-shadow-sm'>

                                        <div className='flex justify-center items-center gap-x-4 w-full'>
                                            <TbClock className='text-[20px] md:text-[50px] text-red-500' />
                                            <h3 className='text-[10px] font-semibold text-gray-700 '>24/7 Expert Consultation</h3>
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <div className='h-full w-full md:w-60 px-10 py-4 rounded-bl-3xl md:rounded-bl-[2rem] bg-white rounded-r-md border-r-2 border-r-green-500/30 border-l-4 border-teal-700/60 shadow-md drop-shadow-sm'>

                                        <div className='flex justify-center items-center gap-x-4 w-full'>
                                            <TbHealthRecognition className='text-[20px] md:text-[50px] text-red-500' />
                                            <h3 className='text-[10px] font-semibold text-gray-700 '>Your Health, Our Priority</h3>
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <div className='h-full w-full md:w-60 px-10 py-4 rounded-tr-3xl md:rounded-tr-none md:rounded-bl-[2rem]  bg-white rounded-r-md border-r-2 border-r-green-500/30 border-l-4 border-teal-700/60 shadow-md drop-shadow-sm'>

                                        <div className='flex justify-center items-center gap-x-4 w-full'>
                                            <LiaFileMedicalAltSolid className='text-[20px] md:text-[45px] text-red-500' />
                                            <h3 className='text-[10px] font-semibold text-gray-700 '>Innovative Treatments</h3>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </section> */}


                {/* --------------- About us ---------------- */}

                <section className='pb-6 pt-10 md:py-20 bg-white font-[poppins]'>
                    <div className='w-full px-4 md:w-[90%] mx-auto'>

                        <div className='flex flex-col md:flex-row  gap-y-12 justify-center '>

                            <div className='w-full md:w-[50%] mx-auto'>
                                <div className='flex items-center justify-center relative'>
                                    <div className='flex items-center justify-center gap-x-7'>
                                        <img src={about1} className='w-[40%] object-cover' alt='about' data-aos='zoom-in' data-aos-duratoin='1000' />
                                        <img src={about2} className='w-[40%] object-cover' alt='about' data-aos='zoom-in' data-aos-duratoin='1000' />
                                    </div>
                                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full  md:py-0 px-5' data-aos='zoom-out' data-aos-duratoin='1000'  >
                                        <div className='bg-white p-3 md:p-4 overflow-hidden  h-full  w-[80%] md:w-[50%] mx-auto rounded-bl-4xl'>
                                            <div className='bg-white p-3 md:p-7  mx-auto border-2 border-green-600 rounded-bl-3xl  space-y-1 md:space-y-3'>
                                                <div className='flex justify-center items-center'>
                                                    <GiLindenLeaf className=' text-[14px] md:text-[20px] text-green-600' />
                                                </div>
                                                <h3 className='text-center font-bold text-[10px] md:text-[16px] font-[Merriweather]'>Renew Yourself with Ayurveda</h3>
                                                <p className='text-[8px] md:text-[10px] text-center'>
                                                    Discover the ancient healing power of Ayurveda to rejuvenate your body, mind, and spirit.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className='w-full md:w-[50%] mx-auto'>
                                <div data-aos='fade-left' data-aos-duratoin='1000'>
                                    <p className='text-red-500 text-[12px] md:text-[13px] font-semibold uppercase md:mb-2'>Who We Are </p>
                                    <h3 className='text-[16px] md:text-[30px] font-semibold font-[Merriweather] leading-11 '>Natural Healing. Real Results</h3>
                                    <p className='text-[10px] md:text-[12px] text-gray-500 mt-2  md:mt-5'>
                                        LifePlusHerbal Healthcare Center is dedicated to helping you achieve better health through the power of nature. We provide herbal treatments,
                                        wellness guidance, and personalized care designed to support your body’s natural healing process. Our goal is to help you feel your best—gently,
                                        safely, and naturally.
                                    </p>
                                    <div className='border border-gray-200  my-6 w-[95%]'></div>
                                    <ul className='grid grid-cols-2 md:grid-cols-3 font-[Merriweather]  gap-x-2 md:gap-x-4 gap-y-4  md:gap-y-8  text-[10px] md:text-[12px] font-semibold '>
                                        <li className='flex items-center gap-x-2'>  <span><img src={who1} className='w-5 md:w-7 object-cover' alt='none' /></span>   <span>Herbal Expertise</span> </li>
                                        <li className='flex items-center gap-x-2'>  <span><img src={who2} className='w-6 md:w-8 object-cover' alt='none' /></span>   <span>Certified Doctors</span> </li>
                                        <li className='flex items-center gap-x-2'>  <span><img src={who3} className='w-6 md:w-8 object-cover' alt='none' /></span>   <span>24/7 Support</span> </li>
                                        <li className='flex items-center gap-x-2'>  <span><img src={who4} className='w-6 md:w-8 object-cover' alt='none' /></span>   <span>Natural Treatments</span> </li>
                                    </ul>
                                    <div className='mt-2'>
                                        <button className='font-[Merriweather] cursor-pointer px-3 md:px-8 py-1.5 md:py-2.5 drop-shadow-lg mt-3 md:mt-5 bg-green-800 hover:bg-green-700 hover:scale-105 duration-300  font-semibold text-white rounded-md text-[10px] md:text-[12px] '>Learn More</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* contact box */}

                <section className='py-8 md:py-20 '>
                    <div className='w-full flex justify-center items-center relative font-[Merriweather]'>

                        <div className='border border-gray-200 w-full absolute z-10'></div>

                        <div className='flex flex-col md:flex-row items-center  md:gap-x-10 bg-white z-40 border border-gray-200 px-5 md:px-16 py-2 md:py-4 rounded-xl  md:rounded-4xl' data-aos='fade-up' data-aos-duratoin='1000'>
                            <h3 className='font-light text-[8px] md:text-[14px] flex items-center gap-x-2 md:gap-x-4'>  <span> <PiHeadsetFill className='text-green-500 text-[20px] md:text-[40px]' /> </span> <span> Begin your personalized wellness journey with Life Plus. </span> </h3>
                            <div>
                                <button className='px-3 md:px-6  mt-1 md:mt-0 py-1.5 md:py-2.5 bg-[#a48125] rounded-md md:rounded-xl text-[10px] md:text-[14px] text-white font-bold'>Contact us</button>
                            </div>
                        </div>

                    </div>
                </section>


                {/* ----------------- mid banner -------------- */}

                <section>
                    <div className="relative">
                        <img src={midBanner} className="w-full object-cover" alt="none" />

                        <div className="absolute  top-20 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-full text-center">
                            <div className='w-[60%] md:w-[50%] mx-auto' data-aos='fade-up' data-aos-duratoin='2000'>
                                <h2 className="text-gray-600 text-[12px] md:text-[5rem] font-semibold font-[Merriweather]">  We’re Here to Help You Heal Naturally </h2>
                                <p className='tracking-tight text-[8px]  md:text-[16px] text-gra'> Take the first step toward holistic wellness. Whether you're curious about our services or ready to make an appointment, our team is here for you every step of the way. </p>
                            </div>
                        </div>

                        <div className='absolute bottom-0 bg-black/70 w-full pt-3 md:py-8 font-[Merriweather]'>
                            <div className='w-full md:w-[95%] mx-auto flex justify-center items-center'>
                                <div className='grid grid-cols-3 md:grid-cols-4  gap-y-3 gap-x-9 md:gap-x-32 text-[7px] md:text-[14px]'>

                                    <div>
                                        <div className='flex items-center gap-x-2 md:gap-x-4'>
                                            <img src={mid1} className='w-5 md:w-8 object-cover' alt='none' />
                                            <h3 className='font-semibold text-white'> Personalized Care </h3>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='flex items-center gap-x-2 md:gap-x-4'>
                                            <img src={mid2} className='w-5 md:w-8 object-cover' alt='none' />
                                            <h3 className='font-semibold text-white'>Healing Support</h3>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='flex items-center gap-x-2 md:gap-x-4'>
                                            <img src={mid3} className='w-5 md:w-8 object-cover' alt='none' />
                                            <h3 className='font-semibold text-white'>Secure Treatment</h3>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='hidden md:flex items-center gap-x-2 md:gap-x-4'>
                                            <img src={mid4} className='w-8 object-cover' alt='none' />
                                            <h3 className='font-semibold text-white'>Emergency Assistance</h3>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>



                {/* ---------------------- Our Services -------------- */}

                <section className='pt-14 pb-10 md:py-20  font-[poppins]'>
                    <div className='w-full px-4 md:w-[80%]   md:h-[35rem] mx-auto relative'>

                        <div className='flex flex-col md:flex-row items-start justify-center '>

                            <div className='w-full md:w-[70%] mx-auto md:pr-20'>

                                <p className='text-[12px] md:text-[14px] font-semibold md:mb-5 text-[#c49125]'>Our Services</p>
                                <h2 className='font-[Merriweather] font-bold text-[17px] md:text-[2.5rem] text-[#4a5c24]'>Your Wellness Journey Starts Naturally</h2>

                                <div className='border border-gray-200 w-full my-2 md:my-7'></div>

                                <div className='flex flex-col md:flex-row items-center gap-y-2 gap-x-10 text-[10px] md:text-[12px] text-gray-500 text-justify'>
                                    <p>Rooted in tradition, our Siddha and Ayurvedic therapies offer holistic solutions for stress, pain, detox, and daily wellness—naturally restoring balance to body, mind, and spirit.</p>
                                    <p>Discover the power of ancient healing with our Siddha and Ayurvedic services. From detox and pain relief to lifestyle guidance, we offer natural, personalized care for your complete well-being.</p>
                                </div>

                            </div>

                            <div className='w-full md:w-[30%] h-full mx-auto hidden md:block'>
                                <div data-aos='fade-left' data-aos-duratoin='2000'>
                                    <img src={service} className='w-full  md:h-[35rem] object-cover' alt='none' />
                                </div>
                            </div>

                            <div className=' md:absolute -bottom-10 mt-6 md:mt-0 md:mr-40 flex justify-start md:w-[95%]' data-aos='fade-right' data-aos-duratoin='2000'>
                                <div className='flex  items-center'>
                                    <div className='grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10 '>

                                        <div>
                                            <div className='bg-white drop-shadow-sm px-2 md:px-4 py-6 md:py-8 h-full'>
                                                <div className='flex flex-col gap-y-2 md:gap-y-6 items-center justify-center'>
                                                    <div>
                                                        <img src={service1} className=' w-14 md:w-20 object-cover' alt='none' />
                                                    </div>


                                                    <div className='flex flex-col items-center gap-y-2'>
                                                        <h3 className='text-[14px] font-bold  font-[Merriweather] text-[#6e9039] text-center'> Siddha Medicine & Therapies </h3>
                                                        <p className='text-[11px] md:text-[12px] text-gray-500 text-center'> Siddha is a powerful ancient healing science from Tamil Nadu, focusing on balancing the three humors — Vata, Pitta, and Kapha. Our Siddha care includes: </p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='bg-[#6e9039] drop-shadow-sm px-2 md:px-4 py-6 md:py-8 h-full'>
                                                <div className='flex flex-col gap-y-2 md:gap-y-6 items-center justify-center'>
                                                    <div>
                                                        <img src={service2} className='w-14 md:w-20 object-cover' alt='none' />
                                                    </div>

                                                    <div className='flex flex-col items-center gap-y-2'>
                                                        <h3 className='text-[14px] font-semibold  font-[Merriweather] text-white text-center'>Ayurveda Panchakarma & Wellness Therapies</h3>
                                                        <p className='text-[11px] md:text-[12px] text-gray-100 text-center'>  Our Ayurveda department offers classical Panchakarma and rejuvenation therapies for detoxification, restoration, and prevention of disease: </p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='bg-white drop-shadow-sm px-2 md:px-4 py-6 md:py-8 h-full'>
                                                <div className='flex flex-col gap-y-2 md:gap-y-6 items-center justify-center'>
                                                    <div>
                                                        <img src={service3} className='w-14 md:w-20 object-cover' alt='none' />
                                                    </div>

                                                    <div className='flex flex-col items-center gap-y-2'>
                                                        <h3 className='text-[14px] font-bold  font-[Merriweather] text-[#6e9039] text-center'> Naturopathy Therapies </h3>
                                                        <p className='text-[11px] md:text-[12px] text-gray-500 text-center'> Naturopathy restores health using elements of nature like water, mud, air, and plant-based remedies. Our treatments include: </p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='bg-[#6e9039] drop-shadow-sm px-2 md:px-6 py-6 md:py-8 h-full flex md:hidden'>
                                                <div className='flex flex-col gap-y-2 md:gap-y-6 items-center justify-center'>
                                                    <div>
                                                        <img src={service4} className='w-14 md:w-20 object-cover' alt='none' />
                                                    </div>

                                                    <div className='flex flex-col items-center gap-y-2'>
                                                        <h3 className='text-[14px] font-bold  font-[Merriweather] text-white text-center'> Lifestyle & Holistic Wellness </h3>
                                                        <p className='text-[11px] md:text-[12px] text-gray-50 text-center'> We focus on not just treating illness but nurturing a healthy way of living: </p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                {/* old services */}

                {/* <section className='py-10 md:py-20 bg-[#FAF9F6]'>
                    <div className='w-full px-4 md:w-[80%] mx-auto font-[poppins]'>
                        <div className='flex flex-col items-center gap-y-2  mb-6 md:mb-14' data-aos='fade-down' data-aos-duratoin='1000'>
                            <h3 className='font-bold text-[16px] md:text-[24px] '>Our Healthcare Services</h3>
                            <p className='text-[12px] md:text-[14px] text-center font-[roboto] w-full md:w-[70%] text-gray-600'>
                                Holistic Healing Through Time-Tested Therapies
                                At LifePlus Ayush Vaidyasala, we offer a unique blend of Siddha, Ayurveda, and Naturopathy treatments, designed to heal, rejuvenate, and restore balance.
                            </p>
                        </div>


                        <div className='flex justify-center items-center'>
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12 '>

                                <div>
                                    <div className="w-full flex flex-col items-center">

                                        <div className="z-0" data-aos='fade-down' data-aos-duratoin='1000'>
                                            <img src={service1} className="w-full object-cover" alt="service" />
                                        </div>

                                        <div className="w-[93%] mx-auto -mt-10 z-10" data-aos='fade-up' data-aos-duratoin='3000'>
                                            <div className="bg-white py-6 px-5 rounded-sm relative shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_30px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]">

                                                <div className="flex justify-between mb-4" >
                                                    <div>
                                                        <img src={icon1} className='w-8 md:w-10 object-cover drop-shadow-md ' alt='icon' />
                                                    </div>
                                                    <div className='absolute -top-6 right-0 bg-red-600 rounded-t-3xl rounded-r-3xl h-10 md:h-12 w-10 md:w-12 drop-shadow-md  flex justify-center items-center ' data-aos='flip-up' data-aos-duratoin='2000'>
                                                        <PiHeartbeatFill className="text-white  text-[18px] md:text-[20px] drop-shadow-md" />
                                                    </div>
                                                </div>

                                                <div>
                                                    <h3 className='font-semibold text-[14px] '> Siddha Treatments</h3>
                                                    <ul className='text-[10px] md:text-[12px] font-[roboto] space-y-1 mt-3 '>
                                                        <li className='flex items-center gap-x-2'> <FaCheck className='text-[8px] md:text-[10px] text-green-600 ' />  <span>Herbal & Mineral-Based Medicines</span>  </li>
                                                        <li className='flex items-center gap-x-2'> <FaCheck className='text-[8px] md:text-[10px] text-green-600 ' />  <span>Varmam Therapy</span>  </li>
                                                        <li className='flex items-center gap-x-2'> <FaCheck className='text-[8px] md:text-[10px] text-green-600 ' />  <span>Kayakalpa Detoxification</span>  </li>
                                                        <li className='flex items-center gap-x-2'> <FaCheck className='text-[8px] md:text-[10px] text-green-600 ' />  <span>Traditional External Therapies</span>  </li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="w-full flex flex-col items-center">

                                        <div className="z-0" data-aos='fade-down' data-aos-duratoin='1000'>
                                            <img src={service2} className="w-full object-cover" alt="service" />
                                        </div>

                                        <div className="w-[93%] mx-auto -mt-10 z-10" data-aos='fade-up' data-aos-duratoin='3000'>
                                            <div className="bg-white py-6 px-5 rounded-sm relative shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_30px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]">
                                                <div className="flex justify-between mb-4 ">
                                                    <div>
                                                        <img src={icon1} className='w-8 md:w-10 object-cover drop-shadow-md ' alt='icon' />
                                                    </div>
                                                    <div className='absolute -top-6 right-0 bg-red-600 rounded-t-3xl rounded-r-3xl h-10 md:h-12 w-10 md:w-12 drop-shadow-md  flex justify-center items-center ' data-aos='flip-up' data-aos-duratoin='2000'>
                                                        <PiHeartbeatFill className="text-white text-[18px] md:text-[20px] drop-shadow-md" />
                                                    </div>
                                                </div>

                                                <div>
                                                    <h3 className='font-semibold text-[14px] '> Ayurveda Therapies</h3>
                                                    <ul className='text-[10px] md:text-[12px] font-[roboto] space-y-1 mt-3 '>
                                                        <li className='flex items-center gap-x-2'> <FaCheck className='text-[8px] md:text-[10px] text-green-600 ' />  <span>Thalapothichil</span>  </li>
                                                        <li className='flex items-center gap-x-2'> <FaCheck className='text-[8px] md:text-[10px] text-green-600 ' />  <span>Navara Kizhi</span>  </li>
                                                        <li className='flex items-center gap-x-2'> <FaCheck className='text-[8px] md:text-[10px] text-green-600 ' />  <span>Janu Basti</span>  </li>
                                                        <li className='flex items-center gap-x-2'> <FaCheck className='text-[8px] md:text-[10px] text-green-600 ' />  <span>Lung disorders</span>  </li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="w-full flex flex-col items-center">

                                        <div className="z-0" data-aos='fade-down' data-aos-duratoin='1000'>
                                            <img src={service3} className="w-full object-cover" alt="service" />
                                        </div>

                                        <div className="w-[93%] mx-auto -mt-10 z-10" data-aos='fade-up' data-aos-duratoin='3000'>
                                            <div className="bg-white py-6 px-5 rounded-sm relative shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_30px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]">
                                                <div className="flex justify-between mb-4 ">
                                                    <div>
                                                        <img src={icon1} className='w-8 md:w-10 object-cover drop-shadow-md ' alt='icon' />
                                                    </div>
                                                    <div className='absolute -top-6 right-0 bg-red-600 rounded-t-3xl rounded-r-3xl h-10 md:h-12 w-10 md:w-12 drop-shadow-md  flex justify-center items-center ' data-aos='flip-up' data-aos-duratoin='2000'>
                                                        <PiHeartbeatFill className="text-white text-[18px] md:text-[20px] drop-shadow-md" />
                                                    </div>
                                                </div>

                                                <div>
                                                    <h3 className='font-semibold text-[14px] '> Naturopathy Therapies</h3>
                                                    <ul className='text-[10px] md:text-[12px] font-[roboto] space-y-1 mt-3 '>
                                                        <li className='flex items-center gap-x-2'> <FaCheck className='text-[8px] md:text-[10px] text-green-600 ' />  <span>Hydrotherapy & Mud Therapy</span>  </li>
                                                        <li className='flex items-center gap-x-2'> <FaCheck className='text-[8px] md:text-[10px] text-green-600 ' />  <span>Diet & Nutrition-Based Healing</span>  </li>
                                                        <li className='flex items-center gap-x-2'> <FaCheck className='text-[8px] md:text-[10px] text-green-600 ' />  <span>Yoga & Meditation Therapy</span>  </li>
                                                        <li className='flex items-center gap-x-2'> <FaCheck className='text-[8px] md:text-[10px] text-green-600 ' />  <span>Lifestyle Correction Programs</span>  </li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                </section>  */}


                {/* -------------- we offer  -------------------- */}

                <section className='py-10 md:py-20 bg-[#f9f3eb] font-[poppins]' >
                    <div className='w-full px-4 md:w-[90%] mx-auto'>
                        <div className='flex flex-col items-center md:gap-y-4 mb-10 md:mb-16' data-aos='fade-up' data-aos-duratoin='1000'>
                            <p className='text-[10px] md:text-[14px] text-[#936932] font-semibold uppercase'>What We Offer</p>
                            <h2 className='md:leading-13  text-[20px] md:text-[50px] md:w-[70%] mx-auto text-center font-bold font-[Merriweather] text-[#4a5c24]'>Healing Powered by Nature</h2>
                        </div>


                        <div className='flex justify-center items-center'>
                            <div className='grid  grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10' data-aos='fade-up' data-aos-duratoin='3000'>





                                <div>
                                    <div className='bg-white  flex flex-col justify-center gap-y-4 md:gap-y-6 hover:drop-shadow-md hover:rounded-xl duration-500 overflow-hidden h-full'>

                                        <div className='flex items-center justify-between w-full'>
                                            <div className='w-[60%] mx-auto'>
                                                <h3 className='px-5 font-[Merriweather] text-[16px] md:text-[20px] text-[#4a5c24] font-bold'>Varmam therapy</h3>
                                            </div>
                                            <div className='w-[40%] mx-auto flex justify-end'>
                                                <img src={offer1} className='w-[100%] rounded-bl-[5rem]' />
                                            </div>
                                        </div>

                                        <div className='px-5 pb-8 flex flex-col gap-y-8'>
                                            <p className='text-[12px] md:text-[14px] leading-6 text-gray-600'>Varmam therapy effectively treats pain, nerve imbalances, paralysis, and joint issues, promoting healing and restoring vitality</p>

                                            <div className='border border-gray-200'></div>


                                        </div>
                                    </div>
                                </div>


                                <div>
                                    <div className='bg-white  flex flex-col gap-y-4 md:gap-y-6 hover:drop-shadow-md hover:rounded-xl duration-500 overflow-hidden h-full'>

                                        <div className='flex items-center justify-between w-full'>
                                            <div className='w-[60%] mx-auto'>
                                                <h3 className='px-5 font-[Merriweather] text-[16px] md:text-[20px] text-[#4a5c24] font-bold'>Thokkanam</h3>
                                            </div>
                                            <div className='w-[40%] mx-auto flex justify-end'>
                                                <img src={offer2} className='w-[100%] rounded-bl-[5rem]' />
                                            </div>
                                        </div>

                                        <div className='px-5 pb-8 flex flex-col gap-y-8'>
                                            <p className='text-[12px] md:text-[14px] leading-6 text-gray-600'>Traditional Siddha therapeutic massage offers effective pain relief and treats musculoskeletal issues, promoting overall wellness.</p>

                                            <div className='border border-gray-200'></div>

                                        </div>
                                    </div>
                                </div>



                                <div>
                                    <div className='bg-white  flex flex-col gap-y-4 md:gap-y-6 hover:drop-shadow-md hover:rounded-xl duration-500 overflow-hidden h-full'>

                                        <div className='flex items-center justify-between w-full'>
                                            <div className='w-[60%] mx-auto'>
                                                <h3 className='px-5 font-[Merriweather] text-[16px] md:text-[20px] text-[#4a5c24] font-bold'>Abhyangam</h3>
                                            </div>
                                            <div className='w-[40%] mx-auto flex justify-end'>
                                                <img src={offer3} className='w-[100%] rounded-bl-[5rem]' />
                                            </div>
                                        </div>

                                        <div className='px-5 pb-8 flex flex-col gap-y-8'>
                                            <p className='text-[12px] md:text-[14px] leading-6 text-gray-600'>Abhyangam is a full-body herbal oil massage that detoxifies, relieves stress, and enhances circulation for overall health.</p>

                                            <div className='border border-gray-200'></div>


                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className='bg-white  flex flex-col gap-y-4 md:gap-y-6 hover:drop-shadow-md hover:rounded-xl duration-500 overflow-hidden h-full'>

                                        <div className='flex items-center justify-between w-full'>
                                            <div className='w-[60%] mx-auto'>
                                                <h3 className='px-5 font-[Merriweather] text-[16px] md:text-[20px] text-[#4a5c24] font-bold'>Nasyam</h3>
                                            </div>
                                            <div className='w-[40%] mx-auto flex justify-end'>
                                                <img src={offer4} className='w-[90%] rounded-bl-[5rem]' />
                                            </div>
                                        </div>

                                        <div className='px-5 pb-8 flex flex-col gap-y-8'>
                                            <p className='text-[12px] md:text-[14px] leading-6 text-gray-600'>Nasyam is the nasal administration of medicated oils, providing relief from sinus issues, migraines, and enhancing mental clarity.</p>

                                            <div className='border border-gray-200'></div>


                                        </div>
                                    </div>
                                </div>


                                <div>
                                    <div className='bg-white  flex flex-col gap-y-4 md:gap-y-6 hover:drop-shadow-md hover:rounded-xl duration-500 overflow-hidden h-full'>

                                        <div className='flex items-center justify-between w-full'>
                                            <div className='w-[60%] mx-auto'>
                                                <h3 className='px-5 font-[Merriweather] text-[16px] md:text-[20px] text-[#4a5c24] font-bold'>Vamanam</h3>
                                            </div>
                                            <div className='w-[40%] mx-auto flex justify-end'>
                                                <img src={offer5} className='w-[90%] rounded-bl-[5rem]' />
                                            </div>
                                        </div>

                                        <div className='px-5 pb-8 flex flex-col gap-y-8'>
                                            <p className='text-[12px] md:text-[14px] leading-6 text-gray-600'>Vamanam is a therapeutic emesis treatment that helps detoxify the body and balances Kapha-related disorders for improved health</p>

                                            <div className='border border-gray-200'></div>


                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className='bg-white  flex flex-col gap-y-4 md:gap-y-6 hover:drop-shadow-md hover:rounded-xl duration-500 overflow-hidden h-full'>

                                        <div className='flex items-center justify-between w-full'>
                                            <div className='w-[60%] mx-auto'>
                                                <h3 className='px-5 font-[Merriweather] text-[16px] md:text-[20px] text-[#4a5c24] font-bold'>Virechanam</h3>
                                            </div>
                                            <div className='w-[40%] mx-auto flex justify-end'>
                                                <img src={offer6} className='w-[90%] rounded-bl-[5rem]' />
                                            </div>
                                        </div>

                                        <div className='px-5 pb-8 flex flex-col gap-y-8'>
                                            <p className='text-[12px] md:text-[14px] leading-6 text-gray-600'>Virechanam is a purgation therapy that cleanses Pitta, detoxifies the body, and restores balance for better health and vitality</p>

                                            <div className='border border-gray-200'></div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='flex justify-center items-center mt-8 '>
                            <button className='bg-[#a48125] px-6 py-2 text-white text-[12px] cursor-pointer hover:scale-105 duration-200' >Explain More</button>
                        </div>

                    </div>
                </section>




                {/* booking button */}

                {/* <section className='pt-0 md:pt-20  pb-0 md:pb-20 font-[poppins]'>
                    <div className='w-full  md:w-[80%] mx-auto'>

                        <div className='flex flex-col md:flex-row items-center justify-center h-full bg-green-700/20'>

                            <div className='w-full md:w-[50%] h-full py-12 md:py-8 px-4  md:px-10'>
                                <div className='flex flex-col  gap-y-4 md:gap-y-10'>
                                    <h3 className='font-bold text-[18px] md:text-[28px]'>Book an Appointment for World Class Siddha Treatment</h3>
                                    <p className='text-[12px] md:text-[15px] '>Looking for the best & quick treatments without a long waiting time?</p>
                                    <p className='text-[10px] md:text-[14px] font-medium'> Simply reserve a time slot, walk in at the appointed time and get prioritized treatments at no extra cost. </p>
                                    <div>
                                        <button className='shadow-md drop-shadow-md cursor-pointer px-4 md:px-6  py-2 md:py-2.5 font-semibold rounded-md md:rounded-lg text-[11px]  md:text-[14px] bg-white'>Reserve My Slot!</button>
                                    </div>

                                </div>
                            </div>

                            <div className='w-full md:w-[50%] h-full'>
                                <div>
                                    <img src={booking} className='w-full object-cover rounded-bl-[8rem]  md:rounded-bl-[20rem]' alt='none' />
                                </div>
                            </div>

                        </div>

                    </div>
                </section> */}


                {/* ---------- why choose us --------------*/}

                <section>
                    <div className="relative h-[70rem] md:h-[40rem]">
                        {/* Background Image and Overlay */}
                        <div className="relative h-full">
                            <img src={whychoosebanner} className="w-full h-full object-cover" alt="none" />
                            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
                        </div>

                        {/* Centered Content */}
                        <div className="absolute inset-0 flex justify-center items-center text-center px-4">
                            <div className="w-full max-w-7xl">
                                {/* Heading */}

                                <div className="w-full  mx-auto mb-10 md:mb-14" data-aos="fade-up" data-aos-duration="1000">
                                    <p className="text-[12px] md:text-[14px] font-semibold uppercase text-[#9dd246] mb-3">Why Choose Us</p>
                                    <h2 className="text-white text-[20px] md:text-[3rem] font-semibold font-[Merriweather]">
                                        Embracing Nature’s Healing Power for Better Health
                                    </h2>
                                </div>

                                {/* Feature Cards */}
                                <div className="w-full md:w-[100%] mx-auto">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                                        {/* Card 1 */}
                                        <div className="bg-black/30 shadow-md drop-shadow-sm px-6 py-8 sm:py-16" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="10">
                                            <div className="flex flex-col gap-y-6 items-center justify-center">
                                                <div>
                                                    <img src={why1} className='w-11 md:w-14 object-cover' alt='none' />
                                                </div>
                                                <div className="flex flex-col items-center gap-y-2">
                                                    <h3 className="text-[14px] md:text-[18px] font-semibold font-[Merriweather] text-white">Eco-Friendly Approach</h3>
                                                    <p className="text-[12px] text-gray-300 text-center">Healing that cares for you and the planet, naturally and safely</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Card 2 */}
                                        <div className="bg-black/30 shadow-md drop-shadow-sm px-6 py-8 sm:py-16" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
                                            <div className="flex flex-col gap-y-6 items-center justify-center">
                                                <div>
                                                    <img src={why2} className='w-11 md:w-14 object-cover' alt='none' />
                                                </div>
                                                <div className="flex flex-col items-center gap-y-2">
                                                    <h3 className="text-[14px] md:text-[18px] font-semibold font-[Merriweather] text-white">Natural & Chemical-Free</h3>
                                                    <p className="text-[12px] text-gray-300 text-center">Our remedies are 100% herbal and mineral-based for safe, natural healing.</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Card 3 */}
                                        <div className="bg-black/30 shadow-md drop-shadow-sm px-6 py-8 sm:py-16" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="50">
                                            <div className="flex flex-col gap-y-6 items-center justify-center">
                                                <div>
                                                    <img src={why3} className='w-11 md:w-14 object-cover' alt='none' />
                                                </div>
                                                <div className="flex flex-col items-center gap-y-2">
                                                    <h3 className="text-[14px] md:text-[18px] font-semibold font-[Merriweather] text-white">Expert Practitioners</h3>
                                                    <p className="text-[12px] text-gray-300 text-center">Our team includes expert Siddha doctors, trained therapists, and wellness specialists.</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Card 4 */}
                                        <div className="bg-black/30 shadow-md drop-shadow-sm px-6 py-8 sm:py-16" data-aos="fade-up" data-aos-duration="3000" data-aos-delay="100">
                                            <div className="flex flex-col gap-y-6 items-center justify-center">
                                                <div>
                                                    <img src={why4} className='w-11 md:w-14 object-cover' alt='none' />
                                                </div>
                                                <div className="flex flex-col items-center gap-y-2">
                                                    <h3 className="text-[14px] md:text-[18px] font-semibold font-[Merriweather] text-white">Long-Lasting Results</h3>
                                                    <p className="text-[12px] text-gray-300 text-center">Our holistic approach delivers lasting health improvements, not just temporary relief.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>


                {/* reviews */}

                <section className='bg-[#5d772f]'>
                    <div className='w-[95%] mx-auto'>
                        <div className='bottom-0  w-full py-5 md:py-8 font-[Merriweather]'>
                            <div className='w-full md:w-[85%] mx-auto'>
                                <div className='grid grid-cols-4 gap-x-6'>

                                    <div>
                                        <div className='flex flex-col items-center md:gap-y-2'>
                                            <h2 className='text-[16px] md:text-[48px] font-bold text-white'>45K+</h2>
                                            <h3 className='text-[7px] md:text-[14px] font-medium tracking-tight text-[#99c24a] font-[poppins] uppercase '>Happy Customer</h3>
                                        </div>
                                    </div>

                                    <div>
                                        <div className='flex flex-col items-center md:gap-y-2'>
                                            <h2 className='text-[16px] md:text-[48px] font-bold text-white'>40+</h2>
                                            <h3 className='text-[7px] md:text-[14px] font-medium tracking-tight text-[#99c24a] font-[poppins] uppercase '>Services</h3>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='flex flex-col items-center md:gap-y-2'>
                                            <h2 className='text-[16px] md:text-[48px] font-bold text-white'>31+</h2>
                                            <h3 className='text-[7px] md:text-[14px] font-medium tracking-tight text-[#99c24a] font-[poppins] uppercase '>Doctors</h3>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='flex flex-col items-center md:gap-y-2'>
                                            <h2 className='text-[16px] md:text-[48px] font-bold text-white'>25+</h2>
                                            <h3 className='text-[7px] md:text-[14px] font-medium tracking-tight text-[#99c24a] font-[poppins] uppercase '>Experiecne</h3>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* -------------- client ratings ---------------- */}

                <section className='py-10 md:py-20 bg-[#f9f3eb] font-[poppins]'>
                    <div className='w-full px-4 md:w-[80%] mx-auto'>
                        <div className='flex flex-col-reverse md:flex-row gap-y-9 justify-center items-center'>

                            <div className='w-full md:w-[50%] mx-auto' data-aos='fade-right' data-aos-duration='2000' data-aos-delay='50'>
                                <div className='relative'>
                                    <img src={review} className='w-full object-cover' alt='none' />
                                    <div className='absolute top-3 md:top-6 left-3 md:left-6 bg-white ' data-aos='zoom-in' data-aos-duration='1000' data-aos-delay='10'>
                                        <div>
                                            <h2 className='bg-[#6e9039] w-full px-6 py-2 text-white font-medium text-[12px] md:text-[15px] text-center '>Excellent</h2>

                                            <div className='py-3 md:py-4  px-4 md:px-6'>
                                                <div className='flex items-center justify-center gap-x-1.5 text-[10px] md:text-[12px]'>
                                                    <FaStar className='text-yellow-500 ' />
                                                    <FaStar className='text-yellow-500 ' />
                                                    <FaStar className='text-yellow-500 ' />
                                                    <FaStar className='text-yellow-500 ' />
                                                    <FaStar className='text-gray-200 ' />
                                                </div>

                                                <div className='flex justify-center items-center py-2'>
                                                    <h3 className='text-[28px] md:text-[45px] font-bold text-[#6e9039]'>4.7</h3>
                                                </div>
                                                <div>
                                                    <p className='bg-[#a48125] px-4 py-1.5 rounded-md md:rounded-full text-[10px] md:text-[12px]  text-white'>Client Ratings</p>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className='w-full md:w-[50%] mx-auto' data-aos='fade-left' data-aos-duration='2000' data-aos-delay='50'>
                                <div className=' md:pl-14 flex flex-col gap-y-3 md:gap-y-8'>
                                    <h3 className='text-[24px] md:text-[45px] font-[Merriweather] text-[#4a5c24] '> Your health is a reflection of nature's balance </h3>
                                    <p className='text-[13px] md:text-[14px] text-gray-600  leading-5 md:leading-7'>Your health mirrors nature’s balance. Our Siddha treatments restore harmony between your body’s energies for lasting wellness and vitality.</p>
                                    <div>
                                        <button className='px-4 md:px-8 py-1.5 md:py-3 bg-[#a48125] flex items-center gap-x-1.5 md:gap-x-3 text-white text-[12px] md:text-[14px]'> Discover more <FaArrowRight className='text-[12px] md:text-[15px]' /> </button>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                {/* Testimonial */}

                <section className='py-10 md:py-20'>
                    <div className='w-full px-4 md:w-[80%] mx-auto'>

                        <div className='flex flex-col justify-center items-center mx-auto mb-14' data-aos='fade-up' data-aos-duration='2000' data-aos-delay='50'>
                            <p className='text-[12px] md:text-[14px] text font-semibold uppercase text-[#936932] mb-3'>Testimonial</p>
                            <h2 className="text-[20px] md:text-[3rem]  font-[Merriweather]  text-[#4a5c24] ">Customer Feedback & Reviews</h2>
                            <div className='flex items-center justify-center gap-x-3 mt-4 text-[16px] md:text-[20px]'>
                                <FaStar className='text-yellow-500 ' />
                                <FaStar className='text-yellow-500 ' />
                                <FaStar className='text-yellow-500 ' />
                                <FaStar className='text-yellow-500 ' />
                                <FaStar className='text-gray-200 ' />
                            </div>
                        </div>

                        <div>
                            <Testimonials />
                        </div>



                    </div>
                </section>





                {/* <section className='py-10 md:py-20 bg-slate-100 font-[poppins]'>
                    <div className='w-full px-4 md:w-[80%] mx-auto'>
                        <div className='flex flex-col md:flex-row gap-y-10 justify-center gap-x-16'>

                            <div className='w-full md:w-[50%] mx-auto'>
                                <div data-aos='fade-right' data-aos-duratoin='1000' >
                                    <p className='text-red-500 text-[12px] md:text-[14px] font-semibold'>Why Choose Us</p>
                                    <h3 className='text-[16px] md:text-[30px] font-semibold '>The natural way to achieving balance and optimal health</h3>
                                    <p className='text-[10px] md:text-[12px] text-gray-500 mt-2 md:mt-5'>
                                        Embrace the wisdom of nature with Ayurveda, a holistic approach to wellness that promotes balance and supports your journey to optimal health.
                                        By aligning your body, mind, and spirit with natural rhythms, Ayurveda offers personalized solutions for a healthier and more vibrant life.
                                    </p>
                                    <ul className='grid  grid-cols-2 md:grid-cols-3 gap-x-4  gap-y-4 md:gap-y-8 mt-4 md:mt-8  text-[10px] md:text-[12px] font-semibold list-decimal list-inside'>
                                        <li>Holistic Healing</li>
                                        <li>Natural Remedies</li>
                                        <li>Boosts Immunity</li>
                                        <li>Stress Relief</li>
                                        <li>Improves Digestion</li>
                                    </ul>
                                    <div className='mt-2'>
                                        <button className=' cursor-pointer px-4 md:px-5  py-1.5 md:py-2 mt-5 bg-green-800 hover:bg-green-700 hover:scale-105 duration-300  font-semibold text-white rounded-md  text-[10px] md:text-[12px] '>Learn More</button>
                                    </div>
                                </div>
                            </div>

                            <div className='w-full md:w-[50%] mx-auto'>
                                <div className='relative'>

                                    <video className='w-full rounded-tl-full border-t-8 border-teal-700/70' autoPlay loop muted playsInline data-aos='fade-up' data-aos-duratoin='1000'>
                                        <source src={video} className=' w-full object-cover' alt="none" />
                                    </video>

                                    <div className='absolute top-0' data-aos='fade-right' data-aos-duratoin='1000'>

                                        <div className='bg-white  p-2 md:p-4  w-[70%] md:w-[55%]  rounded-br-4xl'>
                                            <div className='bg-white  p-2 md:p-8 flex items-start gap-x-4  border-2 border-green-600 rounded-br-3xl space-y-3'>
                                                <div>
                                                    <GiLifeInTheBalance className='text-[26px] text-green-600' />
                                                </div>
                                                <p className='text-[10px] md:text-[12px] font-semibold'>
                                                    We improve your health and tech
                                                    you how to stay healthy
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section> */}





                {/* -------------- doctor list ---------------- */}

                <section className='pt-4 pb-10 md:py-20 bg-white font-[poppins]'>
                    <div className='w-full px-4 md:w-[90%] mx-auto'>
                        <div className='flex flex-col items-center gap-y-3 mb-8 md:mb-14' data-aos='fade-up' data-aos-duration='2000' data-aos-delay='50'>
                            <h3 className='font-bold text-[16px] md:text-[32px] font-[Merriweather]'>Meet our professional therapist</h3>
                            <p className='text-[10px] md:text-[12px] text-gray-600 text-center'>Our skilled therapists are experts in Siddha and Ayurveda, offering personalized care to support your unique healing journey with dedication and expertise</p>
                        </div>

                        {/* <div className='flex justify-center items-center'>
                            <div className='grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-8 mt-8'>

                                <div>
                                    <div>
                                        <img src={doctor} className='w-full object-cover' alt='none' />
                                    </div>
                                    <div className='relative bg-white -mt-10 shadow-md drop-shadow-md border-b-2 border-green-500 w-[80%] mx-auto p-4 flex flex-col items-center' data-aos='fade-down' data-aos-duratoin='1000'>
                                        <h3 className='text-[14px] font-semibold'>Dr sheeladevi  </h3>
                                        <p className='font-[roboto] text-[12px] text-gray-600'>Embrace the wisdom</p>

                                        <div className='absolute -top-4 left-4' data-aos='fade-up' data-aos-duratoin='1000'>
                                            <div className='size-10 bg-[#a48125] rounded-full p-2 flex justify-center items-center'>
                                                <FaStethoscope className='text-white' />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <img src={doctor} className='w-full object-cover' alt='none' />
                                    </div>
                                    <div className='relative bg-white -mt-10 shadow-md drop-shadow-md border-b-2 border-green-500 w-[80%] mx-auto p-4 flex flex-col items-center ' data-aos='fade-down' data-aos-duratoin='1000'>
                                        <h3 className='text-[14px] font-semibold'>Dr Vivekanandan </h3>
                                        <p className='font-[roboto] text-[12px] text-gray-600'>Embrace the wisdom</p>

                                        <div className='absolute -top-4 left-4' data-aos='fade-up' data-aos-duratoin='1000'>
                                            <div className='size-10 bg-[#a48125] rounded-full p-2 flex justify-center items-center'>
                                                <FaStethoscope className='text-white' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <img src={doctor} className='w-full object-cover' alt='none' />
                                    </div>
                                    <div className='relative bg-white -mt-10 shadow-md drop-shadow-md border-b-2 border-green-500 w-[80%] mx-auto p-4 flex flex-col items-center ' data-aos='fade-down' data-aos-duratoin='1000'>
                                        <h3 className='text-[14px] font-semibold'>Dr Sophia </h3>
                                        <p className='font-[roboto] text-[12px] text-gray-600'>Embrace the wisdom</p>
                                        <div className='absolute -top-4 left-4' data-aos='fade-up' data-aos-duratoin='1000'>
                                            <div className='size-10 bg-[#a48125] rounded-full p-2 flex justify-center items-center'>
                                                <FaStethoscope className='text-white' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <img src={doctor} className='w-full object-cover' alt='none' />
                                    </div>
                                    <div className='relative bg-white -mt-10 shadow-md drop-shadow-md border-b-2 border-green-500 w-[80%] mx-auto p-4 flex flex-col items-center ' data-aos='fade-down' data-aos-duratoin='1000'>
                                        <h3 className='text-[14px] font-semibold'>Dr sivaranjani  </h3>
                                        <p className='font-[roboto] text-[12px] text-gray-600'>Embrace the wisdom</p>
                                        <div className='absolute -top-4 left-4' data-aos='fade-up' data-aos-duratoin='1000'>
                                            <div className='size-10 bg-[#a48125] rounded-full p-2 flex justify-center items-center'>
                                                <FaStethoscope className='text-white' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <img src={doctor} className='w-full object-cover' alt='none' />
                                    </div>
                                    <div className='relative bg-white -mt-10 shadow-md drop-shadow-md border-b-2 border-green-500 w-[80%] mx-auto p-4 flex flex-col items-center ' data-aos='fade-down' data-aos-duratoin='1000'>
                                        <h3 className='text-[14px] font-semibold'>Dr Atchaya   </h3>
                                        <p className='font-[roboto] text-[12px] text-gray-600'>Embrace the wisdom</p>
                                        <div className='absolute -top-4 left-4' data-aos='fade-up' data-aos-duratoin='1000'>
                                            <div className='size-10 bg-[#a48125] rounded-full p-2 flex justify-center items-center'>
                                                <FaStethoscope className='text-white' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <img src={doctor} className='w-full object-cover' alt='none' />
                                    </div>
                                    <div className='relative bg-white -mt-10 shadow-md drop-shadow-md border-b-2 border-green-500 w-[80%] mx-auto p-4 flex flex-col items-center ' data-aos='fade-down' data-aos-duratoin='1000'>
                                        <h3 className='text-[14px] font-semibold'>Dr suguna   </h3>
                                        <p className='font-[roboto] text-[12px] text-gray-600'>Embrace the wisdom</p>
                                        <div className='absolute -top-4 left-4' data-aos='fade-up' data-aos-duratoin='1000'>
                                            <div className='size-10 bg-[#a48125] rounded-full p-2 flex justify-center items-center'>
                                                <FaStethoscope className='text-white' />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div> */}

                        <div>
                            <DoctorList />
                        </div>


                    </div>
                </section>





                {/* ------------------ Popular Ayurveda Therapies ----------- */}

                <section className='py-10 md:py-20 bg-slate-100 font-[poppins]'>
                    <div className='w-full px-4 md:w-[90%] mx-auto'>


                        <div className='flex flex-col items-center gap-y-3 mb-8 md:mb-12' data-aos='fade-up' data-aos-duration='2000' data-aos-delay='50'>
                            <h3 className='font-bold text-[16px] md:text-[32px] font-[Merriweather] '>Popular Ayurveda Therapies</h3>
                            <p className='text-[10px] md:text-[12px] text-gray-600 text-center'>Embrace the wisdom of nature with Ayurveda, a holistic approach to wellness that promotes balance and supports your journey to optimal health.</p>
                        </div>

                        {/* <div className='flex justify-center items-center font-[roboto] w-full gap-x-32'>

                            <div>
                                <div className='flex flex-col justify-center items-center gap-y-2'>
                                    <div className='bg-white p-6 rounded-tr-3xl  rounded-bl-3xl border-l-2 border-green-500 shadow-md drop-shadow-md'>
                                        <FaLaptopMedical className='text-[28px] text-gray-700 ' />
                                    </div>
                                    <p className='text-[14px] text-gray-700 font-semibold'>Virechana</p>
                                </div>
                            </div>
                            <div>
                                <div className='flex flex-col justify-center items-center gap-y-2'>
                                    <div className='bg-white p-6 rounded-tr-3xl  rounded-bl-3xl border-l-2 border-green-500 shadow-md drop-shadow-md'>
                                        <FaLaptopMedical className='text-[28px] text-gray-700 ' />
                                    </div>
                                    <p className='text-[14px] text-gray-700 font-semibold'>Virechana</p>
                                </div>
                            </div>
                            <div>
                                <div className='flex flex-col justify-center items-center gap-y-2'>
                                    <div className='bg-white p-6 rounded-tr-3xl  rounded-bl-3xl border-l-2 border-green-500 shadow-md drop-shadow-md'>
                                        <FaLaptopMedical className='text-[28px] text-gray-700 ' />
                                    </div>
                                    <p className='text-[14px] text-gray-700 font-semibold'>Virechana</p>
                                </div>
                            </div>
                            <div>
                                <div className='flex flex-col justify-center items-center gap-y-2'>
                                    <div className='bg-white p-6 rounded-tr-3xl  rounded-bl-3xl border-l-2 border-green-500 shadow-md drop-shadow-md'>
                                        <FaLaptopMedical className='text-[28px] text-gray-700 ' />
                                    </div>
                                    <p className='text-[14px] text-gray-700 font-semibold'>Virechana</p>
                                </div>
                            </div>
                            <div>
                                <div className='flex flex-col justify-center items-center gap-y-2'>
                                    <div className='bg-white p-6 rounded-tr-3xl  rounded-bl-3xl border-l-2 border-green-500 shadow-md drop-shadow-md'>
                                        <FaLaptopMedical className='text-[28px] text-gray-700 ' />
                                    </div>
                                    <p className='text-[14px] text-gray-700 font-semibold'>Virechana</p>
                                </div>
                            </div>

                        </div> */}

                        <div data-aos='fade-up' data-aos-duratoin='1000'>
                            <BestServices />
                        </div>

                    </div>
                </section >

            </div>

        </>
    )
}

export default Home
