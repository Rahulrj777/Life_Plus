import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import banner from '../images/banner/service_banner.webp'


//icons
import { FaNotesMedical } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";

import { FaCheck } from "react-icons/fa";

const Service = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <>

            <div className='overflow-hidden'>
                <div>

                    <section className='w-full  z-0'>
                        <div className=''>
                            <img src={banner} className='w-full h-full object-cover  ' alt='service_banner' />
                        </div>
                    </section>

                    {/* ----------- benefits ------------ */}

                    <section className=' w-[95%] md:w-[95%] mx-auto   -mt-[2rem] md:-mt-[4rem] pb-2 font-[poppins]' data-aos='fade-up'>
                        <div className=''>
                            <div className='flex items-center justify-center '>
                                <div className='grid grid-cols-1 md:grid-cols-4 gap-x-14 gap-y-10 w-full   pb-6 md:pb-6  px-6 md:px-9 rounded-md md:rounded-3xl'>

                                    <div>
                                        <div className='h-full bg-yellow-800   drop-shadow-sm flex flex-col items-center pb-8 px-4  rounded-xl'>
                                            <div className='bg-yellow-800 rounded-t-4xl p-4 -mt-6'>
                                                <FaUserDoctor className='text-[22px] md:text-[24px] text-white ' />
                                            </div>

                                            <div className='flex flex-col items-center gap-y-1'>
                                                <h3 className='font-semibold text-[12px] md:text-[14px] text-white'>Personalized Siddha Treatments</h3>
                                                <p className='font-[roboto] text-[10px] md:text-[12px] text-center text-gray-50'>Tailored therapies based on your unique dosha and health needs.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className=' h-full bg-yellow-800  drop-shadow-sm flex flex-col items-center pb-8 px-4  rounded-xl'>
                                            <div className='bg-yellow-800 rounded-t-4xl p-4 -mt-6'>
                                                <FaUserDoctor className='text-[22px] md:text-[24px] text-white ' />
                                            </div>

                                            <div className='flex flex-col items-center gap-y-1'>
                                                <h3 className='font-semibold text-[12px] md:text-[14px] text-white'>Pain & Stress Relief</h3>
                                                <p className='font-[roboto] text-[10px] md:text-[12px] text-center text-gray-50'>Effective Varmam and Thokkanam therapies for pain, tension, and stress relief.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='h-full bg-yellow-800  drop-shadow-sm flex flex-col items-center pb-8 px-4  rounded-xl'>
                                            <div className='bg-yellow-800 rounded-t-4xl p-4 -mt-6'>
                                                <FaUserDoctor className='text-[22px] md:text-[24px] text-white ' />
                                            </div>

                                            <div className='flex flex-col items-center gap-y-1'>
                                                <h3 className='font-semibold text-[12px] md:text-[14px] text-white'>Rejuvenation & Anti-Aging</h3>
                                                <p className='font-[roboto] text-[10px] md:text-[12px] text-center text-gray-50'>Kayakalpa Chikitsa for rejuvenating the body and slowing down the aging process.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='h-full bg-yellow-800 drop-shadow-sm flex flex-col items-center pb-8 px-4  rounded-xl'>
                                            <div className='bg-yellow-800 rounded-t-4xl p-4 -mt-6'>
                                                <FaUserDoctor className='text-[22px] md:text-[24px] text-white ' />
                                            </div>

                                            <div className='flex flex-col items-center gap-y-1'>
                                                <h3 className='font-semibold text-[12px] md:text-[14px] text-white'>Stress & Anxiety Relief</h3>
                                                <p className='font-[roboto] text-[10px] md:text-[12px] text-center text-gray-50'>Targeted therapies to calm the mind, ease stress, and enhance relaxation.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ----------- Healthcare Services -------------- */}

                    <section className='py-10 md:py-20 font-[poppins] bg-white'>
                        <div className='w-full  mx-auto space-y-26'>

                            {/* <div className='flex flex-col gap-y-1 justify-center items-center mb-16 md:mb-20'>
                                <p className='text-[10px] md:text-[12px] font-semibold text-green-600'>Healthcare Services</p>
                                <h2 className='font-[Merriweather]   text-[14px] md:text-[32px]  w-full md:w-[80%] mx-auto text-center'>Description & content Description & content Description & content</h2>
                            </div> */}

                            <div className='w-full px-8 md:w-[85%] mx-auto space-y-26'>
                                <div className='flex justify-center items-center w-full '>
                                    <div>

                                        <div className='flex flex-col justify-center items-center gap-y-2 w-full md:w-[80%] mx-auto mb-20'>
                                            <h1 className='font-[poppins]   text-[14px] md:text-[32px] font-bold mx-auto text-center'>Siddha Medicine & Therapies</h1>
                                            <p className='text-[10px] md:text-[12px] font-[roboto] text-center'>Siddha medicine is a traditional healing system that originated in South India. It focuses on balancing the body's energies and promoting overall well-being through natural remedies, herbal treatments, and lifestyle practices.</p>
                                        </div>

                                        <div>
                                            <div className='grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-24 w-full'>

                                                <div>
                                                    <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                                        <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-lg md:rounded-xl  drop-shadow-md p-4  md:p-5  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                                            <FaNotesMedical className='text-[22px] md:text-[28px] text-[#017e1d] group-hover:-rotate-[55deg]' />
                                                        </div>

                                                        <div className='flex flex-col items-start gap-y-3 py-1 md:py-3 px-4'>
                                                            <h3 className='font-semibold text-[14px] md:text-[18px] font-[Merriweather]'> Herbal and mineral </h3>
                                                            <p className='font-[roboto] text-[13px] text-gray-700 '>Discover the power of herbal and mineral remedies, blending nature’s healing touch with ancient wisdom for your well-being</p>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div>
                                                    <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                                        <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-lg md:rounded-xl  drop-shadow-md p-4  md:p-5  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                                            <FaNotesMedical className='text-[22px] md:text-[28px] text-[#017e1d] group-hover:-rotate-[55deg]' />
                                                        </div>

                                                        <div className='flex flex-col items-start gap-y-3 py-1 md:py-3 px-4'>
                                                            <h3 className='font-semibold text-[14px] md:text-[18px] font-[Merriweather]'> Varmam therapy </h3>
                                                            <p className='font-[roboto] text-[13px] text-gray-700 '>Varmam therapy effectively treats pain, nerve imbalances, paralysis, and joint issues, promoting healing and restoring vitality</p>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div>
                                                    <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                                        <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-lg md:rounded-xl  drop-shadow-md p-4  md:p-5  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                                            <FaNotesMedical className='text-[22px] md:text-[28px] text-[#017e1d] group-hover:-rotate-[55deg]' />
                                                        </div>

                                                        <div className='flex flex-col items-start gap-y-3 py-1 md:py-3 px-4'>
                                                            <h3 className='font-semibold text-[14px] md:text-[18px] font-[Merriweather]'> Thokkanam </h3>
                                                            <p className='font-[roboto] text-[13px] text-gray-700 '>Traditional Siddha therapeutic massage offers effective pain relief and treats musculoskeletal issues, promoting overall wellness.</p>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ------------------------------------------------------------------------------------------- */}

                            <div className='w-full px-8 md:w-[85%] mx-auto space-y-26'>
                                <div className='flex justify-center items-center w-full '>
                                    <div>

                                        <div className='flex flex-col justify-center items-center gap-y-2 w-full md:w-[80%] mx-auto mb-20'>
                                            <h1 className='font-[poppins]   text-[14px] md:text-[32px] font-bold mx-auto text-center'>Ayurveda Panchakarma & Wellness Therapies</h1>
                                            <p className='text-[10px] md:text-[12px] font-[roboto] text-center'>Siddha medicine is a traditional healing system that originated in South India. It focuses on balancing the body's energies and promoting overall well-being through natural remedies, herbal treatments, and lifestyle practices.</p>
                                        </div>

                                        <div>
                                            <div className='grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-24 w-full'>

                                                <div>
                                                    <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                                        <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-lg md:rounded-xl  drop-shadow-md p-4  md:p-5  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                                            <FaNotesMedical className='text-[22px] md:text-[28px] text-[#017e1d] group-hover:-rotate-[55deg]' />
                                                        </div>

                                                        <div className='flex flex-col items-start gap-y-3 py-1 md:py-3 px-4'>
                                                            <h3 className='font-semibold text-[14px] md:text-[18px] font-[Merriweather]'> Abhyangam </h3>
                                                            <p className='font-[roboto] text-[13px] text-gray-700 '>Abhyangam is a full-body herbal oil massage that detoxifies, relieves stress, and enhances circulation for overall health.</p>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div>
                                                    <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                                        <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-lg md:rounded-xl  drop-shadow-md p-4  md:p-5  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                                            <FaNotesMedical className='text-[22px] md:text-[28px] text-[#017e1d] group-hover:-rotate-[55deg]' />
                                                        </div>

                                                        <div className='flex flex-col items-start gap-y-3 py-1 md:py-3 px-4'>
                                                            <h3 className='font-semibold text-[14px] md:text-[18px] font-[Merriweather]'> Nasyam </h3>
                                                            <p className='font-[roboto] text-[13px] text-gray-700 '>Nasyam is the nasal administration of medicated oils, providing relief from sinus issues, migraines, and enhancing mental clarity.</p>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div>
                                                    <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                                        <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-lg md:rounded-xl  drop-shadow-md p-4  md:p-5  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                                            <FaNotesMedical className='text-[22px] md:text-[28px] text-[#017e1d] group-hover:-rotate-[55deg]' />
                                                        </div>

                                                        <div className='flex flex-col items-start gap-y-3 py-1 md:py-3 px-4'>
                                                            <h3 className='font-semibold text-[14px] md:text-[18px] font-[Merriweather]'> Vamanam </h3>
                                                            <p className='font-[roboto] text-[13px] text-gray-700 '>Vamanam is a therapeutic emesis treatment that helps detoxify the body and balances Kapha-related disorders for improved health</p>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div>
                                                    <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                                        <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-lg md:rounded-xl  drop-shadow-md p-4  md:p-5  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                                            <FaNotesMedical className='text-[22px] md:text-[28px] text-[#017e1d] group-hover:-rotate-[55deg]' />
                                                        </div>

                                                        <div className='flex flex-col items-start gap-y-3 py-1 md:py-3 px-4'>
                                                            <h3 className='font-semibold text-[14px] md:text-[18px] font-[Merriweather]'> Virechanam </h3>
                                                            <p className='font-[roboto] text-[13px] text-gray-700 '>Virechanam is a purgation therapy that cleanses Pitta, detoxifies the body, and restores balance for better health and vitality</p>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div>
                                                    <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                                        <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-lg md:rounded-xl  drop-shadow-md p-4  md:p-5  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                                            <FaNotesMedical className='text-[22px] md:text-[28px] text-[#017e1d] group-hover:-rotate-[55deg]' />
                                                        </div>

                                                        <div className='flex flex-col items-start gap-y-3 py-1 md:py-3 px-4'>
                                                            <h3 className='font-semibold text-[14px] md:text-[18px] font-[Merriweather]'> Vasti </h3>
                                                            <p className='font-[roboto] text-[13px] text-gray-700 '>Vasti is a therapeutic herbal enema treatment that balances Vata, detoxifies the body, and promotes overall wellness</p>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* ------------------------------------------------------------------------------------------- */}
                            <div className='w-full px-8 md:w-[85%] mx-auto space-y-26'>
                                <div className='flex justify-center items-center w-full '>
                                    <div>

                                        <div className='flex flex-col justify-center items-center gap-y-2 w-full md:w-[80%] mx-auto mb-20'>
                                            <h1 className='font-[poppins]   text-[14px] md:text-[32px] font-bold mx-auto text-center'>Naturopathy Therapies</h1>
                                            <p className='text-[10px] md:text-[12px] font-[roboto] text-center'>Siddha medicine is a traditional healing system that originated in South India. It focuses on balancing the body's energies and promoting overall well-being through natural remedies, herbal treatments, and lifestyle practices.</p>
                                        </div>

                                        <div>
                                            <div className='grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-24 w-full'>

                                                <div>
                                                    <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                                        <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-lg md:rounded-xl  drop-shadow-md p-4  md:p-5  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                                            <FaNotesMedical className='text-[22px] md:text-[28px] text-[#017e1d] group-hover:-rotate-[55deg]' />
                                                        </div>

                                                        <div className='flex flex-col items-start gap-y-3 py-1 md:py-3 px-4'>
                                                            <h3 className='font-semibold text-[14px] md:text-[18px] font-[Merriweather]'> Abhyangam </h3>
                                                            <p className='font-[roboto] text-[13px] text-gray-700 '>Abhyangam is a full-body herbal oil massage that detoxifies, relieves stress, and enhances circulation for overall health.</p>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div>
                                                    <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                                        <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-lg md:rounded-xl  drop-shadow-md p-4  md:p-5  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                                            <FaNotesMedical className='text-[22px] md:text-[28px] text-[#017e1d] group-hover:-rotate-[55deg]' />
                                                        </div>

                                                        <div className='flex flex-col items-start gap-y-3 py-1 md:py-3 px-4'>
                                                            <h3 className='font-semibold text-[14px] md:text-[18px] font-[Merriweather]'> Nasyam </h3>
                                                            <p className='font-[roboto] text-[13px] text-gray-700 '>Nasyam is the nasal administration of medicated oils, providing relief from sinus issues, migraines, and enhancing mental clarity.</p>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div>
                                                    <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                                        <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-lg md:rounded-xl  drop-shadow-md p-4  md:p-5  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                                            <FaNotesMedical className='text-[22px] md:text-[28px] text-[#017e1d] group-hover:-rotate-[55deg]' />
                                                        </div>

                                                        <div className='flex flex-col items-start gap-y-3 py-1 md:py-3 px-4'>
                                                            <h3 className='font-semibold text-[14px] md:text-[18px] font-[Merriweather]'> Vamanam </h3>
                                                            <p className='font-[roboto] text-[13px] text-gray-700 '>Vamanam is a therapeutic emesis treatment that helps detoxify the body and balances Kapha-related disorders for improved health</p>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div>
                                                    <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                                        <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-lg md:rounded-xl  drop-shadow-md p-4  md:p-5  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                                            <FaNotesMedical className='text-[22px] md:text-[28px] text-[#017e1d] group-hover:-rotate-[55deg]' />
                                                        </div>

                                                        <div className='flex flex-col items-start gap-y-3 py-1 md:py-3 px-4'>
                                                            <h3 className='font-semibold text-[14px] md:text-[18px] font-[Merriweather]'> Virechanam </h3>
                                                            <p className='font-[roboto] text-[13px] text-gray-700 '>Virechanam is a purgation therapy that cleanses Pitta, detoxifies the body, and restores balance for better health and vitality</p>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div>
                                                    <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                                        <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-lg md:rounded-xl  drop-shadow-md p-4  md:p-5  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                                            <FaNotesMedical className='text-[22px] md:text-[28px] text-[#017e1d] group-hover:-rotate-[55deg]' />
                                                        </div>

                                                        <div className='flex flex-col items-start gap-y-3 py-1 md:py-3 px-4'>
                                                            <h3 className='font-semibold text-[14px] md:text-[18px] font-[Merriweather]'> Vasti </h3>
                                                            <p className='font-[roboto] text-[13px] text-gray-700 '>Vasti is a therapeutic herbal enema treatment that balances Vata, detoxifies the body, and promotes overall wellness</p>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* <div className='flex justify-center items-center w-full'>
                                <div className='grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-24 w-full'>

                                    <div>
                                        <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                            <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-lg md:rounded-xl  drop-shadow-md p-4  md:p-5  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                                <FaNotesMedical className='text-[22px] md:text-[28px] text-[#017e1d] group-hover:-rotate-[55deg]' />
                                            </div>

                                            <div className='flex flex-col items-start gap-y-1 py-1 md:py-3 px-4'>
                                                <h3 className='font-semibold text-[14px] md:text-[16px] font-[Merriweather]'> Nasya Treatment </h3>
                                                <ul className='text-[10px] md:text-[12px] font-[roboto] space-y-1 mt-3 '>
                                                    <li className='flex items-center gap-x-2'> <FaCheck className='text-[8px] md:text-[10px] text-green-600 ' />  <span>Improves memory and focus.</span>  </li>
                                                    <li className='flex items-center gap-x-2'> <FaCheck className='text-[8px] md:text-[10px] text-green-600 ' />  <span>Reduces headaches and tension.</span>  </li>
                                                    <li className='flex items-center gap-x-2'> <FaCheck className='text-[8px] md:text-[10px] text-green-600 ' />  <span>Prevents skin diseases.</span>  </li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                    <div>
                                        <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                            <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-lg md:rounded-xl  drop-shadow-md p-4  md:p-5  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                                <FaNotesMedical className='text-[22px] md:text-[28px] text-[#017e1d] group-hover:-rotate-[55deg]' />
                                            </div>

                                            <div className='flex flex-col items-start gap-y-1 py-1 md:py-3 px-4'>
                                                <h3 className='font-semibold text-[14px] md:text-[16px] font-[Merriweather]'> White Discharge Treatment  </h3>
                                                <ul className='text-[10px] md:text-[12px] font-[roboto] space-y-1 mt-3 '>
                                                    <li className='flex items-center gap-x-2'> <FaCheck className='text-[8px] md:text-[10px] text-green-600 ' />  <span>Tailored treatments for your unique needs.</span>  </li>
                                                    <li className='flex items-center gap-x-2'> <FaCheck className='text-[8px] md:text-[10px] text-green-600 ' />  <span>Alleviates irritation, itching, and odor.</span>  </li>
                                                    <li className='flex items-center gap-x-2'> <FaCheck className='text-[8px] md:text-[10px] text-green-600 ' />  <span>Compassionate care from certified practitioners.</span>  </li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                    <div>
                                        <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                            <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-lg md:rounded-xl  drop-shadow-md p-4  md:p-5  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                                <FaNotesMedical className='text-[22px] md:text-[28px] text-[#017e1d] group-hover:-rotate-[55deg]' />
                                            </div>

                                            <div className='flex flex-col items-start gap-y-1 py-1 md:py-3 px-4'>
                                                <h3 className='font-semibold text-[14px] md:text-[16px] font-[Merriweather]'> Natural Ayurvedic Migraine  </h3>
                                                <ul className='text-[10px] md:text-[12px] font-[roboto] space-y-1 mt-3 '>
                                                    <li className='flex items-center gap-x-2'> <FaCheck className='text-[8px] md:text-[10px] text-green-600 ' />  <span>  Throbbing, Drilling, Pounding Headache</span>  </li>
                                                    <li className='flex items-center gap-x-2'> <FaCheck className='text-[8px] md:text-[10px] text-green-600 ' />  <span>Sensitivity to Light and Sound.</span>  </li>
                                                    <li className='flex items-center gap-x-2'> <FaCheck className='text-[8px] md:text-[10px] text-green-600 ' />  <span>  Inability to Focus or Concentrate.</span>  </li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                    <div>
                                        <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                            <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-lg md:rounded-xl  drop-shadow-md p-4  md:p-5  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                                <FaNotesMedical className='text-[22px] md:text-[28px] text-[#017e1d] group-hover:-rotate-[55deg]' />
                                            </div>

                                            <div className='flex flex-col items-start gap-y-1 py-1 md:py-3 px-4'>
                                                <h3 className='font-semibold text-[14px] md:text-[16px] font-[Merriweather]'>  Netra Tharpanam </h3>
                                                <ul className='text-[10px] md:text-[12px] font-[roboto] space-y-1 mt-3 '>
                                                    <li className='flex items-center gap-x-2'> <FaCheck className='text-[8px] md:text-[10px] text-green-600 ' />  <span> Balances Vata and Pitta doshas</span>  </li>
                                                    <li className='flex items-center gap-x-2'> <FaCheck className='text-[8px] md:text-[10px] text-green-600 ' />  <span>Removes dark circles under the eyes.</span>  </li>
                                                    <li className='flex items-center gap-x-2'> <FaCheck className='text-[8px] md:text-[10px] text-green-600 ' />  <span>  Revitalizes tired, dry, rough, or injured eyes.</span>  </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                            <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-lg md:rounded-xl  drop-shadow-md p-4  md:p-5  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                                <FaNotesMedical className='text-[22px] md:text-[28px] text-[#017e1d] group-hover:-rotate-[55deg]' />
                                            </div>

                                            <div className='flex flex-col items-start gap-y-1 py-1 md:py-3 px-4'>
                                                <h3 className='font-semibold text-[14px] md:text-[16px] font-[Merriweather]'> Janu Basti for Knee Health </h3>
                                                <ul className='text-[10px] md:text-[12px] font-[roboto] space-y-1 mt-3 '>
                                                    <li className='flex items-center gap-x-2'> <FaCheck className='text-[8px] md:text-[10px] text-green-600 ' />  <span>Rheumatoid arthritis.</span>  </li>
                                                    <li className='flex items-center gap-x-2'> <FaCheck className='text-[8px] md:text-[10px] text-green-600 ' />  <span>Knee stiffness and swelling.</span>  </li>
                                                    <li className='flex items-center gap-x-2'> <FaCheck className='text-[8px] md:text-[10px] text-green-600 ' />  <span> Joint degeneration due to aging.</span>  </li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                    <div>
                                        <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                            <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-lg md:rounded-xl  drop-shadow-md p-4  md:p-5  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                                <FaNotesMedical className='text-[22px] md:text-[28px] text-[#017e1d] group-hover:-rotate-[55deg]' />
                                            </div>

                                            <div className='flex flex-col items-start gap-y-1 py-1 md:py-3 px-4'>
                                                <h3 className='font-semibold text-[14px] md:text-[16px] font-[Merriweather]'> Ayurvedic Treatment for Piles and Fistula </h3>
                                                <ul className='text-[10px] md:text-[12px] font-[roboto] space-y-1 mt-3 '>
                                                    <li className='flex items-center gap-x-2'> <FaCheck className='text-[8px] md:text-[10px] text-green-600 ' />  <span>Avoid the risks and recovery time of surgery.</span>  </li>
                                                    <li className='flex items-center gap-x-2'> <FaCheck className='text-[8px] md:text-[10px] text-green-600 ' />  <span>Minimal side effects with herbal remedies.</span>  </li>
                                                    <li className='flex items-center gap-x-2'> <FaCheck className='text-[8px] md:text-[10px] text-green-600 ' />  <span>Treatments tailored to your body type and condition.</span>  </li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>

                                    <div>
                                        <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                            <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-lg md:rounded-xl  drop-shadow-md p-4  md:p-5  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                                <FaNotesMedical className='text-[22px] md:text-[28px] text-[#017e1d] group-hover:-rotate-[55deg]' />
                                            </div>

                                            <div className='flex flex-col items-start gap-y-1 py-1 md:py-3 px-4'>
                                                <h3 className='font-semibold text-[14px] md:text-[16px] font-[Merriweather]'> Thalapothichil - Ayurvedic Head Therapy </h3>
                                                <ul className='text-[10px] md:text-[12px] font-[roboto] space-y-1 mt-3 '>
                                                    <li className='flex items-center gap-x-2'> <FaCheck className='text-[8px] md:text-[10px] text-green-600 ' />  <span> Relieves stress, anxiety, and headaches.</span>  </li>
                                                    <li className='flex items-center gap-x-2'> <FaCheck className='text-[8px] md:text-[10px] text-green-600 ' />  <span>Improves sleep and mental clarity.</span>  </li>
                                                    <li className='flex items-center gap-x-2'> <FaCheck className='text-[8px] md:text-[10px] text-green-600 ' />  <span>Balances Pitta dosha and calms the nervous system.</span>  </li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                    <div>
                                        <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                            <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-lg md:rounded-xl  drop-shadow-md p-4  md:p-5  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                                <FaNotesMedical className='text-[22px] md:text-[28px] text-[#017e1d] group-hover:-rotate-[55deg]' />
                                            </div>

                                            <div className='flex flex-col items-start gap-y-1 py-1 md:py-3 px-4'>
                                                <h3 className='font-semibold text-[14px] md:text-[16px] font-[Merriweather]'>Rejuvenating Body Therapy </h3>
                                                <ul className='text-[10px] md:text-[12px] font-[roboto] space-y-1 mt-3 '>
                                                    <li className='flex items-center gap-x-2'> <FaCheck className='text-[8px] md:text-[10px] text-green-600 ' />  <span>Boosts circulation and muscle strength.</span>  </li>
                                                    <li className='flex items-center gap-x-2'> <FaCheck className='text-[8px] md:text-[10px] text-green-600 ' />  <span>Relieves joint pain, stiffness, and arthritis.</span>  </li>
                                                    <li className='flex items-center gap-x-2'> <FaCheck className='text-[8px] md:text-[10px] text-green-600 ' />  <span>Reduces fatigue and promotes vitality.</span>  </li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                    <div>
                                        <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                            <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-lg md:rounded-xl  drop-shadow-md p-4  md:p-5  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                                <FaNotesMedical className='text-[22px] md:text-[28px] text-[#017e1d] group-hover:-rotate-[55deg]' />
                                            </div>

                                            <div className='flex flex-col items-start gap-y-1 py-1 md:py-3 px-4'>
                                                <h3 className='font-semibold text-[14px] md:text-[16px] font-[Merriweather]'> Nasya & Fumigation </h3>
                                                <ul className='text-[10px] md:text-[12px] font-[roboto] space-y-1 mt-3 '>
                                                    <li className='flex items-center gap-x-2'> <FaCheck className='text-[8px] md:text-[10px] text-green-600 ' />  <span>Clears nasal congestion and sinuses.</span>  </li>
                                                    <li className='flex items-center gap-x-2'> <FaCheck className='text-[8px] md:text-[10px] text-green-600 ' />  <span> Improves focus, voice clarity, and immunity.</span>  </li>
                                                    <li className='flex items-center gap-x-2'> <FaCheck className='text-[8px] md:text-[10px] text-green-600 ' />  <span> Detoxifies and calms the mind.</span>  </li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                    <div>
                                        <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                            <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-lg md:rounded-xl  drop-shadow-md p-4  md:p-5  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                                <FaNotesMedical className='text-[22px] md:text-[28px] text-[#017e1d] group-hover:-rotate-[55deg]' />
                                            </div>

                                            <div className='flex flex-col items-start gap-y-1 py-1 md:py-3 px-4'>
                                                <h3 className='font-semibold text-[14px] md:text-[16px] font-[Merriweather]'> Reflexology </h3>
                                                <ul className='text-[10px] md:text-[12px] font-[roboto] space-y-1 mt-3 '>
                                                    <li className='flex items-center gap-x-2'> <FaCheck className='text-[8px] md:text-[10px] text-green-600 ' />  <span> Improves Sleep – Goodbye to sleep troubles</span>  </li>
                                                    <li className='flex items-center gap-x-2'> <FaCheck className='text-[8px] md:text-[10px] text-green-600 ' />  <span> Enhances Circulation – Boosts blood flow for better health</span>  </li>
                                                    <li className='flex items-center gap-x-2'> <FaCheck className='text-[8px] md:text-[10px] text-green-600 ' />  <span> Reduces Stress & Anxiety – Feel calm and refreshed</span>  </li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                    <div>
                                        <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                            <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-lg md:rounded-xl  drop-shadow-md p-4  md:p-5  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                                <FaNotesMedical className='text-[22px] md:text-[28px] text-[#017e1d] group-hover:-rotate-[55deg]' />
                                            </div>

                                            <div className='flex flex-col items-start gap-y-1 py-1 md:py-3 px-4'>
                                                <h3 className='font-semibold text-[14px] md:text-[16px] font-[Merriweather]'> Holistic Healing at Life Plus Ayush  </h3>
                                                <ul className='text-[10px] md:text-[12px] font-[roboto] space-y-1 mt-3 '>
                                                    <li className='flex items-center gap-x-2'> <FaCheck className='text-[8px] md:text-[10px] text-green-600 ' />  <span>Pain Relief – Back, joints, migraines</span>  </li>
                                                    <li className='flex items-center gap-x-2'> <FaCheck className='text-[8px] md:text-[10px] text-green-600 ' />  <span>Hair & Skin Care – Psoriasis, eczema, hair fall</span>  </li>
                                                    <li className='flex items-center gap-x-2'> <FaCheck className='text-[8px] md:text-[10px] text-green-600 ' />  <span>Respiratory Health – Sinusitis, asthma, detox</span>  </li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                    <div>
                                        <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                            <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-lg md:rounded-xl  drop-shadow-md p-4  md:p-5  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                                <FaNotesMedical className='text-[22px] md:text-[28px] text-[#017e1d] group-hover:-rotate-[55deg]' />
                                            </div>

                                            <div className='flex flex-col items-start gap-y-1 py-1 md:py-3 px-4'>
                                                <h3 className='font-semibold text-[14px] md:text-[16px] font-[Merriweather]'> Empowering Pain Management  </h3>
                                                <ul className='text-[10px] md:text-[12px] font-[roboto] space-y-1 mt-3 '>
                                                    <li className='flex items-center gap-x-2'> <FaCheck className='text-[8px] md:text-[10px] text-green-600 ' />  <span>Pain Relief – Neck, back, and knee pain</span>  </li>
                                                    <li className='flex items-center gap-x-2'> <FaCheck className='text-[8px] md:text-[10px] text-green-600 ' />  <span>Skin Care – Eczema, psoriasis, and more</span>  </li>
                                                    <li className='flex items-center gap-x-2'> <FaCheck className='text-[8px] md:text-[10px] text-green-600 ' />  <span>Autoimmune Support – Balance and immunity</span>  </li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>


                                </div>
                            </div> */}

                        </div>
                    </section>

                    {/* --------------------- Specialized in ------------------- */}

                    <section className='py-10 md:py-20 font-[poppins] bg-slate-100'>
                        <div className='w-full px-4 md:w-[80%] mx-auto'>

                            <div className='flex flex-col md:flex-row gap-y-14 items-center justify-center '>

                                <div className='w-full md:w-[50%] mx-auto'>
                                    <div className='flex flex-col gap-y-1 justify-center items-start  mb-8 md:mb-12'>
                                        <p className='text-[10px] md:text-[12px] font-semibold text-green-600'>Specialized in</p>
                                        <h2 className='font-[Merriweather] t text-[20px] md:text-[18px] text-start  '>We specialize in holistic Siddha and Ayurvedic treatments, focusing on pain relief, rejuvenation, detox, and restoring balance to the body and mind naturally. </h2>
                                    </div>

                                    <div>
                                        <div>
                                            <img src={banner} className='w-full object-cover rounded-md md:rounded-xl shadow-2xl drop-shadow-lg' alt='none' />
                                        </div>
                                    </div>
                                </div>


                                <div className='w-full md:w-[50%] mx-auto'>
                                    <div className='flex items-center justify-center w-full md:ml-14'>
                                        <div className='grid grid-cols-3 md:grid-cols-4  md:gap-x-14  gap-y-6 md:gap-y-14 w-full'>

                                            <div className='flex flex-col items-center gap-y-2'>
                                                <div className='bg-white rounded-md md:rounded-xl flex flex-col justify-center drop-shadow-md p-3 md:p-5  shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                                    <FaNotesMedical className='text-[20px] md:text-[28px] text-[#017e1d]' />
                                                </div>
                                                <span className='font-[roboto] text-[10px] md:text-[12px]'>Panchakarma</span>
                                            </div>

                                            <div className='flex flex-col items-center gap-y-2'>
                                                <div className='bg-white rounded-md md:rounded-xl flex flex-col justify-center drop-shadow-md p-3 md:p-5  shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                                    <FaNotesMedical className='text-[20px] md:text-[28px] text-[#017e1d]' />
                                                </div>
                                                <span className='font-[roboto] text-[10px] md:text-[12px]'>Vamanam </span>
                                            </div>

                                            <div className='flex flex-col items-center gap-y-2'>
                                                <div className='bg-white rounded-md md:rounded-xl flex flex-col justify-center drop-shadow-md p-3 md:p-5  shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                                    <FaNotesMedical className='text-[20px] md:text-[28px] text-[#017e1d]' />
                                                </div>
                                                <span className='font-[roboto] text-[10px] md:text-[12px]'>Virechanam </span>
                                            </div>

                                            <div className='flex flex-col items-center gap-y-2'>
                                                <div className='bg-white rounded-md md:rounded-xl flex flex-col justify-center drop-shadow-md p-3 md:p-5  shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                                    <FaNotesMedical className='text-[20px] md:text-[28px] text-[#017e1d]' />
                                                </div>
                                                <span className='font-[roboto] text-[10px] md:text-[12px]'>Abhyangam </span>
                                            </div>

                                            <div className='flex flex-col items-center gap-y-2'>
                                                <div className='bg-white rounded-md md:rounded-xl flex flex-col justify-center drop-shadow-md p-3 md:p-5  shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                                    <FaNotesMedical className='text-[20px] md:text-[28px] text-[#017e1d]' />
                                                </div>
                                                <span className='font-[roboto] text-[10px] md:text-[12px]'>Podikizhi </span>
                                            </div>

                                            <div className='flex flex-col items-center gap-y-2'>
                                                <div className='bg-white rounded-md md:rounded-xl flex flex-col justify-center drop-shadow-md p-3 md:p-5  shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                                    <FaNotesMedical className='text-[20px] md:text-[28px] text-[#017e1d]' />
                                                </div>
                                                <span className='font-[roboto] text-[10px] md:text-[12px]'>Ilakizhi </span>
                                            </div>

                                            <div className='flex flex-col items-center gap-y-2'>
                                                <div className='bg-white rounded-md md:rounded-xl flex flex-col justify-center drop-shadow-md p-3 md:p-5  shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                                    <FaNotesMedical className='text-[20px] md:text-[28px] text-[#017e1d]' />
                                                </div>
                                                <span className='font-[roboto] text-[10px] md:text-[12px]'>Thokkanam</span>
                                            </div>

                                            <div className='flex flex-col items-center gap-y-2'>
                                                <div className='bg-white rounded-md md:rounded-xl flex flex-col justify-center drop-shadow-md p-3 md:p-5  shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                                    <FaNotesMedical className='text-[20px] md:text-[28px] text-[#017e1d]' />
                                                </div>
                                                <span className='font-[roboto] text-[10px] md:text-[12px]'>Suttigai</span>
                                            </div>

                                            <div className='flex flex-col items-center gap-y-2'>
                                                <div className='bg-white rounded-md md:rounded-xl flex flex-col justify-center drop-shadow-md p-3 md:p-5  shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                                    <FaNotesMedical className='text-[20px] md:text-[28px] text-[#017e1d]' />
                                                </div>
                                                <span className='font-[roboto] text-[10px] md:text-[12px]'>Ottradam</span>
                                            </div>

                                            <div className='flex flex-col items-center gap-y-2'>
                                                <div className='bg-white rounded-md md:rounded-xl flex flex-col justify-center drop-shadow-md p-3 md:p-5  shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                                    <FaNotesMedical className='text-[20px] md:text-[28px] text-[#017e1d]' />
                                                </div>
                                                <span className='font-[roboto] text-[10px] md:text-[12px]'>Vethu</span>
                                            </div>

                                            <div className='flex flex-col items-center gap-y-2'>
                                                <div className='bg-white rounded-md md:rounded-xl flex flex-col justify-center drop-shadow-md p-3 md:p-5  shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                                    <FaNotesMedical className='text-[20px] md:text-[28px] text-[#017e1d]' />
                                                </div>
                                                <span className='font-[roboto] text-[10px] md:text-[12px]'>Seelai</span>
                                            </div>






                                        </div>
                                    </div>

                                </div>

                            </div>


                        </div>
                    </section>

                </div>

            </div>

        </>
    )
}

export default Service