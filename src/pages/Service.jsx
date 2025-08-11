import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import BestServices from '../components/BestServices'

import midBanner from '../images/banner/mid_banner.jpg'
import bottombanner from '../images/banner/special.png'

import highlight1 from '../images/icon/highlight1.png'
import highlight2 from '../images/icon/highlight2.png'
import highlight3 from '../images/icon/highlight3.png'
import highlight4 from '../images/icon/highlight4.png'

import service1 from '../images/services/Herbal_and_mineral.png'
import service2 from '../images/services/Varmam_therapy.png'
import service3 from '../images/services/Thokkanam.png'
import service4 from '../images/services/Abhyangam.png'
import service5 from '../images/services/Nasyam.png'
import service6 from '../images/services/Vamanam.png'
import service7 from '../images/services/Virechanam.png'
import service8 from '../images/services/Vasti.png'
import service9 from '../images/services/Rakta_Mokshanam.png'
import service10 from '../images/services/shirodhara.png'
import service11 from '../images/services/Navarakizhi.png'
import service12 from '../images/services/Thalapothichil.png'
import service13 from '../images/services/Podikizhi.png'
import service14 from '../images/services/Herbal_Steam_Bath.png'

import nature1 from '../images/services/Hydrotherapy.png'
import nature2 from '../images/services/Mud_Therapy.png'
import nature3 from '../images/services/Plantain_Leaf_Bath.png'
import nature4 from '../images/services/Acupuncture.png'
import nature5 from '../images/services/Diet_Fasting_Therapy.png'
import nature6 from '../images/services/Yoga_Pranayama.png'

import life1 from '../images/services/Wellness.png'
import life2 from '../images/services/Detox.png'
import life3 from '../images/services/Stress.png'
import life4 from '../images/services/Diet.png'

import speacil1 from '../images/icon/Back Pain.png'
import speacil2 from '../images/icon/knee_pain.png'
import speacil3 from '../images/icon/spine_disorders.png'
import speacil4 from '../images/icon/heel.png'
import speacil5 from '../images/icon/Psoriasis.png'
import speacil6 from '../images/icon/hair_loss.png'
import speacil7 from '../images/icon/alopecia.png'
import speacil8 from '../images/icon/Diabetic_Foot.png'
import speacil9 from '../images/icon/asthma.png'
import speacil10 from '../images/icon/cold.png'
import speacil11 from '../images/icon/Migraine_Treatment.png'

import kattu from '../images/services/kattu.jpg'
import bodypain from '../images/therapies/back_pain_neck_pain.png'
import steam from '../images/icon/steam_bath.png'
import Sattigai from '../images/icon/service.1.png'
import karram from '../images/services/1.png'

const Service = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <>
            <div className='overflow-hidden'>
                <div>
                    <section className='bg-white'>
                        <div className="relative">
                            <img
                            src={midBanner}
                            className="w-full object-cover"
                            alt="none"
                            />

                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-full text-center">
                            <div
                                className='w-[80%] md:w-[55%] mx-auto flex flex-col gap-3'
                                data-aos='fade-up'
                                data-aos-duration='2000'
                            >
                                <h2 className="text-[#0d6c1d] text-[13px] md:text-[3rem] font-bold">
                                We’re Here to Help You Heal Naturally
                                </h2>
                                <p className='tracking-tight text-[10px] md:text-[18px] text-gray-700'>
                                Take the first step toward holistic wellness. Whether you're curious about our services or ready to make an appointment, our team is here for you every step of the way.
                                </p>
                            </div>
                            </div>
                        </div>
                        </section>

                    {/* ----------- benefits ------------ */}

                    <section className=' w-[95%] md:w-[99%] mx-auto   -mt-[2rem] md:-mt-[4rem] pb-2 font-[poppins]' data-aos='fade-up'>
                        <div className=''>
                            <div className='flex items-center justify-center '>
                                <div className='grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-10 w-full   pb-6 md:pb-6  px-6 md:px-9 rounded-md md:rounded-3xl'>
                                    <div>
                                        <div className='h-full bg-[#aabc9b]   drop-shadow-sm flex flex-col items-center pb-4 md:pb-8 px-4  rounded-xl'>
                                            <div className='bg-[#aabc9b] rounded-t-4xl p-4 -mt-6'>
                                                <img src={highlight1} className='w-9 md:w-12 object-cover' alt='none' />
                                            </div>

                                            <div className='flex flex-col items-center md:gap-y-1'>
                                                <h3 className='font-semibold text-[11px] md:text-[14px] text-white'>Personalized Siddha Treatments</h3>
                                                <p className='font-[roboto] text-[9px] md:text-[12px] text-center text-gray-50'>Tailored therapies based on your unique dosha and health needs.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className=' h-full bg-[#aabc9b]  drop-shadow-sm flex flex-col items-center pb-4 md:pb-8 px-4  rounded-xl'>
                                            <div className='bg-[#aabc9b] rounded-t-4xl p-4 -mt-6'>
                                                <img src={highlight2} className='w-9 md:w-12 object-cover' alt='none' />
                                            </div>

                                            <div className='flex flex-col items-center md:gap-y-1'>
                                                <h3 className='font-semibold text-[11px] md:text-[14px] text-white'>Pain & Stress Relief</h3>
                                                <p className='font-[roboto] text-[9px] md:text-[12px] text-center text-gray-50'>Effective Varmam and Thokkanam therapies for pain, tension, and stress relief.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='h-full bg-[#aabc9b]  drop-shadow-sm flex flex-col items-center pb-4 md:pb-8 px-4  rounded-xl'>
                                            <div className='bg-[#aabc9b] rounded-t-4xl p-4 -mt-6'>
                                                <img src={highlight3} className='w-9 md:w-12 object-cover' alt='none' />
                                            </div>

                                            <div className='flex flex-col items-center md:gap-y-1'>
                                                <h3 className='font-semibold text-[11px] md:text-[14px] text-white'>Rejuvenation & Anti-Aging</h3>
                                                <p className='font-[roboto] text-[9px] md:text-[12px] text-center text-gray-50'>Kayakalpa Chikitsa for rejuvenating the body and slowing down the aging process.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='h-full bg-[#aabc9b] drop-shadow-sm flex flex-col items-center pb-4 md:pb-8 px-4  rounded-xl'>
                                            <div className='bg-[#aabc9b] rounded-t-4xl p-4 -mt-6'>
                                                <img src={highlight4} className='w-9 md:w-12 object-cover' alt='none' />
                                            </div>

                                            <div className='flex flex-col items-center md:gap-y-1'>
                                                <h3 className='font-semibold text-[11px] md:text-[14px] text-white'>Stress & Anxiety Relief</h3>
                                                <p className='font-[roboto] text-[9px] md:text-[12px] text-center text-gray-50'>Targeted therapies to calm the mind, ease stress, and enhance relaxation.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ----------- Healthcare Services -------------- */}

                    <section className='py-10 md:py-20 font-[poppins] bg-gradient-to-t to-white from-yellow-50/50'>
                        <div className='w-full  mx-auto '>
                            <div className='px-15 md:px-0 w-full md:w-[85%] mx-auto space-y-26'>
                                <div className='flex justify-center items-center w-full '>
                                    <div>
                                        <div className='flex flex-col justify-center items-center  md:gap-y-2 w-full md:w-[80%] mx-auto mb-14 md:mb-20'>
                                            <h1 className='font-[poppins]   text-[16px] md:text-[32px] font-bold mx-auto text-center'>Siddha External Therapies</h1>
                                            <p className='text-[10px] md:text-[12px] font-[roboto] text-gray-500 text-justify md:text-center w-[90%] mx-auto mt-2 md:mt-0'>
                                                Siddha medicine is a traditional healing system that originated in South India. It focuses on balancing the body's energies and promoting overall well-being through natural remedies, herbal treatments, and lifestyle practices.
                                            </p>
                                        </div>
                                        <div>
                                            <div className='grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-16 md:gap-y-24 w-full'>
                                                <div>
                                                    <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 h-full drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                                        <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-md md:rounded-xl  drop-shadow-md p-2  md:p-3  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]' data-aos='fade-up' data-aos-duration='2000'>
                                                            <img src={service1} className='w-10 md:w-12 object-cover  group-hover:-rotate-[55deg]' alt='none' />
                                                        </div>

                                                        <div className='flex flex-col items-start gap-y-1  md:gap-y-2 py-1 md:py-3 px-4' data-aos='zoom-in-left' data-aos-duration='2000'>
                                                            <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Herbal and mineral </h3>
                                                            <p className='font-[roboto] text-[11px] md:text-[13px] text-gray-700 '>Discover the power of herbal and mineral remedies, blending nature’s healing touch with ancient wisdom for your well-being</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 h-full drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                                        <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-md md:rounded-xl  drop-shadow-md p-2  md:p-3  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]' data-aos='fade-up' data-aos-duration='2000'>
                                                            <img src={service2} className='w-10 md:w-12 object-cover  group-hover:-rotate-[55deg]' alt='none' />
                                                        </div>

                                                        <div className='flex flex-col items-start gap-y-1  md:gap-y-2 py-1 md:py-3 px-4' data-aos='zoom-in-left' data-aos-duration='2000'>
                                                            <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Varmam therapy </h3>
                                                            <p className='font-[roboto] text-[11px] md:text-[13px] text-gray-700 '>Varmam therapy effectively treats pain, nerve imbalances, paralysis, and joint issues, promoting healing and restoring vitality</p>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div>
                                                    <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 h-full drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                                        <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-md md:rounded-xl  drop-shadow-md p-2  md:p-3  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]' data-aos='fade-up' data-aos-duration='2000'>
                                                            <img src={service3} className='w-10 md:w-12 object-cover  group-hover:-rotate-[55deg]' alt='none' />
                                                        </div>

                                                        <div className='flex flex-col items-start gap-y-1  md:gap-y-2 py-1 md:py-3 px-4' data-aos='zoom-in-left' data-aos-duration='2000'>
                                                            <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Thokkanam </h3>
                                                            <p className='font-[roboto] text-[11px] md:text-[13px] text-gray-700 '>Traditional Siddha therapeutic massage offers effective pain relief and treats musculoskeletal issues, promoting overall wellness.</p>
                                                        </div>
                                                        
                                                    </div>
                                                </div>

                                                {/* Card i - Kattu (Bandaging) */}
                                                <div>
                                                    <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 h-full drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                                        <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-md md:rounded-xl  drop-shadow-md p-2  md:p-3  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]' data-aos='fade-up' data-aos-duration='2000'>
                                                            <img src={kattu} className='w-10 md:w-12 object-cover  group-hover:-rotate-[55deg]' alt='none' />
                                                        </div>

                                                        <div className='flex flex-col items-start gap-y-1 md:gap-y-2 py-1 md:py-3 px-4' data-aos='zoom-in-left' data-aos-duration='2000'>
                                                            <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Kattu </h3>
                                                            <p className='font-[roboto] text-[11px] md:text-[13px] text-gray-700 '>Effective in treating wounds, fracture, muscle spasm, sprain, joint dislocation, and pain management.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Card ii - Pathu (Poultice) */}
                                                <div>
                                                    <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 h-full drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                                        <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-md md:rounded-xl  drop-shadow-md p-2  md:p-3  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]' data-aos='fade-up' data-aos-duration='2000'>
                                                            <img src={service2} className='w-10 md:w-12 object-cover  group-hover:-rotate-[55deg]' alt='none' />
                                                        </div>

                                                        <div className='flex flex-col items-start gap-y-1 md:gap-y-2 py-1 md:py-3 px-4' data-aos='zoom-in-left' data-aos-duration='2000'>
                                                            <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Pattru  </h3>
                                                            <p className='font-[roboto] text-[11px] md:text-[13px] text-gray-700 '>Poultice is used in treating skin diseases like eczema, boils, abscess, musculoskeletal diseases like arthritis, sprain, injuries, and other conditions like sinusitis, wounds, and hemorrhoids.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Card iii - Othadam (Fomentation) */}
                                                <div>
                                                    <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 h-full drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                                        <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-md md:rounded-xl  drop-shadow-md p-2  md:p-3  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]' data-aos='fade-up' data-aos-duration='2000'>
                                                            <img src={bodypain} className='w-10 md:w-12 object-cover  group-hover:-rotate-[55deg]' alt='none' />
                                                        </div>

                                                        <div className='flex flex-col items-start gap-y-1 md:gap-y-2 py-1 md:py-3 px-4' data-aos='zoom-in-left' data-aos-duration='2000'>
                                                            <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Ottradam  </h3>
                                                            <p className='font-[roboto] text-[11px] md:text-[13px] text-gray-700 '>It is helpful in treating inflammation, disc bulge, toothache, muscle cramps, body pain, asthma, and ano-rectal diseases.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Card iv - Steam (Sufh-vedhiyal) */}
                                                <div>
                                                    <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 h-full drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                                        <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-md md:rounded-xl  drop-shadow-md p-2  md:p-3  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]' data-aos='fade-up' data-aos-duration='2000'>
                                                            <img src={steam} className='w-10 md:w-12 object-cover  group-hover:-rotate-[55deg]' alt='none' />
                                                        </div>

                                                        <div className='flex flex-col items-start gap-y-1 md:gap-y-2 py-1 md:py-3 px-4' data-aos='zoom-in-left' data-aos-duration='2000'>
                                                            <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Steam  </h3>
                                                            <p className='font-[roboto] text-[11px] md:text-[13px] text-gray-700 '>Local steaming is useful in inflammation, fluid accumulation, and spasm. Whole body steam is a cleansing and relaxing procedure.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Card v - Varthi */}
                                                <div>
                                                    <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 h-full drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                                        <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-md md:rounded-xl  drop-shadow-md p-2  md:p-3  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]' data-aos='fade-up' data-aos-duration='2000'>
                                                            <img src={service3} className='w-10 md:w-12 object-cover  group-hover:-rotate-[55deg]' alt='none' />
                                                        </div>

                                                        <div className='flex flex-col items-start gap-y-1 md:gap-y-2 py-1 md:py-3 px-4' data-aos='zoom-in-left' data-aos-duration='2000'>
                                                            <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Varthi  </h3>
                                                            <p className='font-[roboto] text-[11px] md:text-[13px] text-gray-700 '>Helps in treating chronic ulcer and fistula.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Card vi - Kaaram */}
                                                <div>
                                                    <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 h-full drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                                        <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-md md:rounded-xl  drop-shadow-md p-2  md:p-3  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]' data-aos='fade-up' data-aos-duration='2000'>
                                                            <img src={karram} className='w-10 md:w-12 object-cover  group-hover:-rotate-[55deg]' alt='none' />
                                                        </div>

                                                        <div className='flex flex-col items-start gap-y-1 md:gap-y-2 py-1 md:py-3 px-4' data-aos='zoom-in-left' data-aos-duration='2000'>
                                                            <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Kaaram  </h3>
                                                            <p className='font-[roboto] text-[11px] md:text-[13px] text-gray-700 '>Applying various medical formulations to remove warts, corns, and skin tags.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Card vii - Attai (Leech Therapy) */}
                                                <div>
                                                    <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 h-full drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                                        <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-md md:rounded-xl  drop-shadow-md p-2  md:p-3  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]' data-aos='fade-up' data-aos-duration='2000'>
                                                            <img src={service4} className='w-10 md:w-12 object-cover  group-hover:-rotate-[55deg]' alt='none' />
                                                        </div>

                                                        <div className='flex flex-col items-start gap-y-1 md:gap-y-2 py-1 md:py-3 px-4' data-aos='zoom-in-left' data-aos-duration='2000'>
                                                            <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Attai  </h3>
                                                            <p className='font-[roboto] text-[11px] md:text-[13px] text-gray-700 '>Helps to improve circulation, reduce inflammation, promote wound healing, and treat varicose veins.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Card viii - Karanool */}
                                                <div>
                                                    <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 h-full drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                                        <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-md md:rounded-xl  drop-shadow-md p-2  md:p-3  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]' data-aos='fade-up' data-aos-duration='2000'>
                                                            <img src={life2} className='w-10 md:w-12 object-cover  group-hover:-rotate-[55deg]' alt='none' />
                                                        </div>

                                                        <div className='flex flex-col items-start gap-y-1 md:gap-y-2 py-1 md:py-3 px-4' data-aos='zoom-in-left' data-aos-duration='2000'>
                                                            <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Karanool  </h3>
                                                            <p className='font-[roboto] text-[11px] md:text-[13px] text-gray-700 '>Useful in treating ano-rectal diseases.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Card ix - Sattigai */}
                                                <div>
                                                    <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 h-full drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                                        <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-md md:rounded-xl  drop-shadow-md p-2  md:p-3  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]' data-aos='fade-up' data-aos-duration='2000'>
                                                            <img src={Sattigai} className='w-10 md:w-12 object-cover  group-hover:-rotate-[55deg]' alt='none' />
                                                        </div>

                                                        <div className='flex flex-col items-start gap-y-1 md:gap-y-2 py-1 md:py-3 px-4' data-aos='zoom-in-left' data-aos-duration='2000'>
                                                            <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Sattigai  </h3>
                                                            <p className='font-[roboto] text-[11px] md:text-[13px] text-gray-700 '>Treats warts, corns, chronic pain, and is used to stop bleeding.</p>
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


                    <section className='py-10 md:py-20 font-[poppins] bg-gradient-to-t to-yellow-50/50 from-white'>
                        <div className='w-full  mx-auto '>

                            {/* ------------------------------------------------------------------------------------------- */}

                            <div className='px-15 md:px-0 w-full md:w-[85%] mx-auto space-y-26'>
                                <div className='flex justify-center items-center w-full '>
                                    <div>

                                        <div className='flex flex-col justify-center items-center gap-y-2 w-full md:w-[80%] mx-auto mb-14 md:mb-20'>
                                            <h1 className='font-[poppins] text-[16px] md:text-[32px] font-bold mx-auto text-center'>Ayurveda Panchakarma & Wellness Therapies</h1>
                                            <p className='text-[10px] md:text-[12px] font-[roboto] text-gray-500 text-justify md:text-center w-[90%] mx-auto mt-2 md:mt-0'>Discover the ancient secrets of holistic well-being through authentic Panchakarma treatments and personalized Ayurvedic therapies. Rooted in centuries-old wisdom, our therapies aim to detoxify, rejuvenate, and restore balance to your body, mind, and spirit</p>
                                        </div>

                                        <div>
                                            <div className='grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 md:gap-y-24 w-full'>

                                                <div>
                                                    <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 h-full drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                                        <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-md md:rounded-xl  drop-shadow-md p-2  md:p-3  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]' data-aos='fade-up' data-aos-duration='2000'>
                                                            <img src={service4} className='w-10 md:w-12 object-cover  group-hover:-rotate-[55deg]' alt='none' />
                                                        </div>

                                                        <div className='flex flex-col items-start gap-y-1  md:gap-y-2 py-1 md:py-3 px-4' data-aos='zoom-in-left' data-aos-duration='2000'>
                                                            <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Abhyangam </h3>
                                                            <p className='font-[roboto] text-[11px] md:text-[13px] text-gray-700 '>Abhyangam is a full-body herbal oil massage that detoxifies, relieves stress, and enhances circulation for overall health.</p>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div>
                                                    <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 h-full drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                                        <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-md md:rounded-xl  drop-shadow-md p-2  md:p-3  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]' data-aos='fade-up' data-aos-duration='2000'>
                                                            <img src={service5} className='w-10 md:w-12 object-cover  group-hover:-rotate-[55deg]' alt='none' />
                                                        </div>

                                                        <div className='flex flex-col items-start gap-y-1  md:gap-y-2 py-1 md:py-3 px-4' data-aos='zoom-in-left' data-aos-duration='2000'>
                                                            <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Nasyam </h3>
                                                            <p className='font-[roboto] text-[11px] md:text-[13px] text-gray-700 '>Nasyam is the nasal administration of medicated oils, providing relief from sinus issues, migraines, and enhancing mental clarity.</p>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div>
                                                    <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 h-full drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                                        <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-md md:rounded-xl  drop-shadow-md p-2  md:p-3  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]' data-aos='fade-up' data-aos-duration='2000'>
                                                            <img src={service6} className='w-10 md:w-12 object-cover  group-hover:-rotate-[55deg]' alt='none' />
                                                        </div>

                                                        <div className='flex flex-col items-start gap-y-1  md:gap-y-2 py-1 md:py-3 px-4' data-aos='zoom-in-left' data-aos-duration='2000'>
                                                            <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Vamanam </h3>
                                                            <p className='font-[roboto] text-[11px] md:text-[13px] text-gray-700 '>Vamanam is a therapeutic emesis treatment that helps detoxify the body and balances Kapha-related disorders for improved health</p>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div>
                                                    <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 h-full drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                                        <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-md md:rounded-xl  drop-shadow-md p-2  md:p-3  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]' data-aos='fade-up' data-aos-duration='2000'>
                                                            <img src={service7} className='w-10 md:w-12 object-cover  group-hover:-rotate-[55deg]' alt='none' />
                                                        </div>

                                                        <div className='flex flex-col items-start gap-y-1  md:gap-y-2 py-1 md:py-3 px-4' data-aos='zoom-in-left' data-aos-duration='2000'>
                                                            <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Virechanam </h3>
                                                            <p className='font-[roboto] text-[11px] md:text-[13px] text-gray-700 '>Virechanam is a purgation therapy that cleanses Pitta, detoxifies the body, and restores balance for better health and vitality</p>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div>
                                                    <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 h-full drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                                        <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-md md:rounded-xl  drop-shadow-md p-2  md:p-3  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]' data-aos='fade-up' data-aos-duration='2000'>
                                                            <img src={service8} className='w-10 md:w-12 object-cover  group-hover:-rotate-[55deg]' alt='none' />
                                                        </div>

                                                        <div className='flex flex-col items-start gap-y-1  md:gap-y-2 py-1 md:py-3 px-4' data-aos='zoom-in-left' data-aos-duration='2000'>
                                                            <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Vasti </h3>
                                                            <p className='font-[roboto] text-[11px] md:text-[13px] text-gray-700 '>Vasti is a therapeutic herbal enema treatment that balances Vata, detoxifies the body, and promotes overall wellness</p>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div>
                                                    <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 h-full drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                                        <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-md md:rounded-xl  drop-shadow-md p-2  md:p-3  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]' data-aos='fade-up' data-aos-duration='2000'>
                                                            <img src={service9} className='w-10 md:w-12 object-cover  group-hover:-rotate-[55deg]' alt='none' />
                                                        </div>

                                                        <div className='flex flex-col items-start gap-y-1  md:gap-y-2 py-1 md:py-3 px-4' data-aos='zoom-in-left' data-aos-duration='2000'>
                                                            <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Rakta Mokshanam </h3>
                                                            <p className='font-[roboto] text-[11px] md:text-[13px] text-gray-700 '>Bloodletting therapy for skin diseases and blood purification, promoting clear skin and wellness.</p>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div>
                                                    <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 h-full drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                                        <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-md md:rounded-xl  drop-shadow-md p-2  md:p-3  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]' data-aos='fade-up' data-aos-duration='2000'>
                                                            <img src={service10} className='w-10 md:w-12 object-cover  group-hover:-rotate-[55deg]' alt='none' />
                                                        </div>

                                                        <div className='flex flex-col items-start gap-y-1  md:gap-y-2 py-1 md:py-3 px-4' data-aos='zoom-in-left' data-aos-duration='2000'>
                                                            <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Shirodhara </h3>
                                                            <p className='font-[roboto] text-[11px] md:text-[13px] text-gray-700 '>Medicated oil poured on the forehead to relax the mind, balance the nervous system, and reduce stress.</p>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div>
                                                    <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 h-full drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                                        <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-md md:rounded-xl  drop-shadow-md p-2  md:p-3  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]' data-aos='fade-up' data-aos-duration='2000'>
                                                            <img src={service11} className='w-10 md:w-12 object-cover  group-hover:-rotate-[55deg]' alt='none' />
                                                        </div>

                                                        <div className='flex flex-col items-start gap-y-1  md:gap-y-2 py-1 md:py-3 px-4' data-aos='zoom-in-left' data-aos-duration='2000'>
                                                            <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Navarakizhi </h3>
                                                            <p className='font-[roboto] text-[11px] md:text-[13px] text-gray-700 '>Rice bolus massage to nourish, strengthen, and improve muscle tone, boosting vitality and overall health.</p>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div>
                                                    <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 h-full drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                                        <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-md md:rounded-xl  drop-shadow-md p-2  md:p-3  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]' data-aos='fade-up' data-aos-duration='2000'>
                                                            <img src={service12} className='w-10 md:w-12 object-cover  group-hover:-rotate-[55deg]' alt='none' />
                                                        </div>

                                                        <div className='flex flex-col items-start gap-y-2 py-1 md:py-3 px-4' data-aos='zoom-in-left' data-aos-duration='2000'>
                                                            <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Thalapothichil </h3>
                                                            <p className='font-[roboto] text-[11px] md:text-[13px] text-gray-700 '>Herbal paste applied to the scalp to relieve stress, insomnia, and mental fatigue, promoting clarity.</p>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div>
                                                    <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 h-full drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                                        <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-md md:rounded-xl  drop-shadow-md p-2  md:p-3  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]' data-aos='fade-up' data-aos-duration='2000'>
                                                            <img src={service13} className='w-10 md:w-12 object-cover  group-hover:-rotate-[55deg]' alt='none' />
                                                        </div>

                                                        <div className='flex flex-col items-start gap-y-1  md:gap-y-2 py-1 md:py-3 px-4' data-aos='zoom-in-left' data-aos-duration='2000'>
                                                            <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Podikizhi </h3>
                                                            <p className='font-[roboto] text-[11px] md:text-[13px] text-gray-700 '>Herbal powder pouch massage to relieve pain, stiffness, and muscle tension, aiding in recovery and relaxation.</p>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div>
                                                    <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 h-full drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                                        <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-md md:rounded-xl  drop-shadow-md p-2  md:p-3  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]' data-aos='fade-up' data-aos-duration='2000'>
                                                            <img src={service14} className='w-10 md:w-12 object-cover  group-hover:-rotate-[55deg]' alt='none' />
                                                        </div>

                                                        <div className='flex flex-col items-start gap-y-1  md:gap-y-2 py-1 md:py-3 px-4' data-aos='zoom-in-left' data-aos-duration='2000'>
                                                            <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Herbal Steam Bath </h3>
                                                            <p className='font-[roboto] text-[11px] md:text-[13px] text-gray-700 '>Detoxifies by opening body channels, removing toxins, improving circulation, and boosting well-being.</p>
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


                    {/* <!-- ------------------------------- Naturopathy Therapies ------------------------------- --> */}

                    <section className='py-10 md:py-20 font-[poppins] bg-gradient-to-t to-white from-green-50/40'>
                        <div className='w-full  mx-auto '>

                            <div className='px-15 md:px-0 w-full md:w-[85%] mx-auto space-y-26'>
                                <div className='flex justify-center items-center w-full '>
                                    <div>

                                        <div className='flex flex-col justify-center items-center gap-y-2 w-full md:w-[80%] mx-auto mb-20'>
                                            <h1 className='font-[poppins]   text-[16px] md:text-[32px] font-bold mx-auto text-center'>Naturopathy Therapies</h1>
                                            <p className='text-[10px] md:text-[12px] font-[roboto] text-gray-500 text-justify md:text-center w-[90%] mx-auto mt-2 md:mt-0'>Embrace the power of nature to restore your health and vitality. Naturopathy focuses on drugless, holistic healing by stimulating the body’s self-healing abilities through natural elements like earth, water, sunlight, diet, and lifestyle.</p>
                                        </div>

                                        <div>
                                            <div className='grid grid-cols-1 md:grid-cols-3 gap-x-16  gap-y-16 md:gap-y-24 w-full'>

                                                <div>
                                                    <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                                        <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-md md:rounded-xl  drop-shadow-md p-2  md:p-3  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]' data-aos='fade-up' data-aos-duration='2000'>
                                                            <img src={nature1} className='w-10 md:w-12 object-cover  group-hover:-rotate-[55deg]' alt='none' />
                                                        </div>

                                                        <div className='flex flex-col items-start gap-y-1 md:gap-y-2 py-1 md:py-3 px-4'  data-aos='zoom-in-left' data-aos-duration='2000'>
                                                            <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Hydrotherapy </h3>
                                                            <p className='font-[roboto] text-[11px] md:text-[13px] text-gray-700 '>Includes hip bath, foot bath, jet spray, and steam for circulation improvement and detoxification.</p>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div>
                                                    <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                                        <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-md md:rounded-xl  drop-shadow-md p-2  md:p-3  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]' data-aos='fade-up' data-aos-duration='2000'>
                                                            <img src={nature2} className='w-10 md:w-12 object-cover  group-hover:-rotate-[55deg]' alt='none' />
                                                        </div>

                                                        <div className='flex flex-col items-start gap-y-1 md:gap-y-2 py-1 md:py-3 px-4'  data-aos='zoom-in-left' data-aos-duration='2000'>
                                                            <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Mud Therapy </h3>
                                                            <p className='font-[roboto] text-[11px] md:text-[13px] text-gray-700 '>Local and full-body applications that cool, detoxify, and rejuvenate the body’s organs.</p>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div>
                                                    <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 h-full drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                                        <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-md md:rounded-xl  drop-shadow-md p-2  md:p-3  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]' data-aos='fade-up' data-aos-duration='2000'>
                                                            <img src={nature3} className='w-10  md:w-12 object-cover  group-hover:-rotate-[55deg]' alt='none' />
                                                        </div>

                                                        <div className='flex flex-col items-start gap-y-1 md:gap-y-2 py-1 md:py-3 px-4'  data-aos='zoom-in-left' data-aos-duration='2000'>
                                                            <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Plantain Leaf Bath </h3>
                                                            <p className='font-[roboto] text-[11px] md:text-[13px] text-gray-700 '>Traditional treatment to cool the body and soothe skin inflammation naturally.</p>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div>
                                                    <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 h-full drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                                        <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-md md:rounded-xl  drop-shadow-md p-2  md:p-3  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]' data-aos='fade-up' data-aos-duration='2000'>
                                                            <img src={nature4} className='w-10 md:w-12 object-cover  group-hover:-rotate-[55deg]' alt='none' />
                                                        </div>

                                                        <div className='flex flex-col items-start gap-y-1 md:gap-y-2 py-1 md:py-3 px-4'  data-aos='zoom-in-left' data-aos-duration='2000'>
                                                            <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Acupuncture </h3>
                                                            <p className='font-[roboto] text-[11px] md:text-[13px] text-gray-700 '>Stimulates points to relieve pain, improve organ function, and balance energy flow in the body.</p>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div>
                                                    <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 h-full drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                                        <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-md md:rounded-xl  drop-shadow-md p-2  md:p-3  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]' data-aos='fade-up' data-aos-duration='2000'>
                                                            <img src={nature5} className='w-10 md:w-12 object-cover  group-hover:-rotate-[55deg]' alt='none' />
                                                        </div>

                                                        <div className='flex flex-col items-start gap-y-1 md:gap-y-2 py-1 md:py-3 px-4'  data-aos='zoom-in-left' data-aos-duration='2000'>
                                                            <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Diet & Fasting Therapy </h3>
                                                            <p className='font-[roboto] text-[11px] md:text-[13px] text-gray-700 '>Custom diet plans, therapeutic fasting, and lifestyle counseling for better health.</p>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div>
                                                    <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 h-full drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                                        <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-md md:rounded-xl  drop-shadow-md p-2  md:p-3  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]' data-aos='fade-up' data-aos-duration='2000'>
                                                            <img src={nature6} className='w-10 md:w-12 object-cover  group-hover:-rotate-[55deg]' alt='none' />
                                                        </div>

                                                        <div className='flex flex-col items-start gap-y-1 md:gap-y-2 py-1 md:py-3 px-4'  data-aos='zoom-in-left' data-aos-duration='2000'>
                                                            <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Yoga & Pranayama  </h3>
                                                            <p className='font-[roboto] text-[11px] md:text-[13px] text-gray-700 '>Guided sessions to improve flexibility, mindfulness, and achieve inner peace and calm.</p>
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



                    {/* <!-- ------------------------------- Lifestyle & Holistic Wellness ------------------------------- --> */}

                    <section className='py-10 md:py-20 font-[poppins] bg-gradient-to-t to-white from-green-50/40'>
                        <div className='w-full  mx-auto '>

                            <div className='px-15 md:px-0 w-full md:w-[85%] mx-auto space-y-26'>
                                <div className='flex justify-center items-center w-full '>
                                    <div>

                                        <div className='flex flex-col justify-center items-center gap-y-2 w-full md:w-[80%] mx-auto  mb-16 md:mb-20'>
                                            <h1 className='font-[poppins] text-[16px] md:text-[32px] font-bold mx-auto text-center'>Lifestyle & Holistic Wellness</h1>
                                            <p className='text-[10px] md:text-[12px] font-[roboto] text-gray-500 text-justify md:text-center w-[90%] mx-auto mt-2 md:mt-0'>Achieve balance in body, mind, and soul through an integrated approach to health. Lifestyle & Holistic Wellness focuses on mindful living, combining modern science with ancient wisdom to promote long-term well-being and inner harmony.</p>
                                        </div>

                                        <div>
                                            <div className='grid grid-cols-1 md:grid-cols-3 gap-x-16  gap-y-16 md:gap-y-24 w-full'>

                                                <div>
                                                    <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 h-full drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                                        <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-md md:rounded-xl  drop-shadow-md p-2  md:p-3  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]' data-aos='fade-up' data-aos-duration='2000'>
                                                            <img src={life1} className='w-10 md:w-12 object-cover  group-hover:-rotate-[55deg]' alt='none' />
                                                        </div>

                                                        <div className='flex flex-col items-start gap-y-1 md:gap-y-2 py-1 md:py-3 px-4' data-aos='zoom-in-left' data-aos-duration='2000'>
                                                            <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Preventive Checkups & Wellness </h3>
                                                            <p className='font-[roboto] text-[11px] md:text-[13px] text-gray-700 '>Proactive care to maintain long-term health and well-being.</p>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div>
                                                    <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 h-full drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                                        <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-md md:rounded-xl  drop-shadow-md p-2  md:p-3  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]' data-aos='fade-up' data-aos-duration='2000'>
                                                            <img src={life2} className='w-10 md:w-12 object-cover  group-hover:-rotate-[55deg]' alt='none' />
                                                        </div>

                                                        <div className='flex flex-col items-start gap-y-1 md:gap-y-2 py-1 md:py-3 px-4' data-aos='zoom-in-left' data-aos-duration='2000'>
                                                            <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Detox & Immunity Boost </h3>
                                                            <p className='font-[roboto] text-[11px] md:text-[13px] text-gray-700 '>Cleansing and strengthening your body’s natural defense system.</p>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div>
                                                    <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 h-full drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                                        <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-md md:rounded-xl  drop-shadow-md p-2  md:p-3  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]' data-aos='fade-up' data-aos-duration='2000'>
                                                            <img src={life3} className='w-10 md:w-12 object-cover  group-hover:-rotate-[55deg]' alt='none' />
                                                        </div>

                                                        <div className='flex flex-col items-start gap-y-1 md:gap-y-2 py-1 md:py-3 px-4' data-aos='zoom-in-left' data-aos-duration='2000'>
                                                            <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Stress & Mind-Body Care </h3>
                                                            <p className='font-[roboto] text-[11px] md:text-[13px] text-gray-700 '>Holistic methods to calm the mind and enhance inner harmony.</p>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div>
                                                    <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md  pb-2 md:pb-3 h-full drop-shadow-lg hover:shadow-[0px_50px_100px_-10px_rgba(50,50,93,0.25),0px_30px_20px_-30px_rgba(0,0,0,0.3),0px_-2px_10px_0px_inset_rgba(10,37,64,0.35)]' >
                                                        <div className='group-hover:scale-105 group-hover:rotate-[55deg] duration-500 ml-7 group-hover:-ml-5 w-fit  bg-white rounded-md md:rounded-xl  drop-shadow-md p-2  md:p-3  -mt-8 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]' data-aos='fade-up' data-aos-duration='2000'>
                                                            <img src={life4} className='w-10 md:w-12 object-cover  group-hover:-rotate-[55deg]' alt='none' />
                                                        </div>

                                                        <div className='flex flex-col items-start gap-y-1 md:gap-y-2 py-1 md:py-3 px-4' data-aos='zoom-in-left' data-aos-duration='2000'>
                                                            <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Diet & Lifestyle Plans </h3>
                                                            <p className='font-[roboto] text-[11px] md:text-[13px] text-gray-700 '>Tailored plans based on your unique body type (prakriti) for overall wellness.</p>
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


                    {/* --------------------- Specialized in ------------------- */}

                    <section className='py-10 md:py-20 font-[poppins] bg-slate-100'>
                        <div className='w-full px-4 md:w-[80%] mx-auto'>

                            <div className='flex flex-col md:flex-row gap-y-14 items-center justify-center '>

                                <div className='w-full md:w-[50%] mx-auto'>
                                    <div className='flex flex-col gap-y-1 justify-center items-start  mb-8 md:mb-12'>
                                        <p className='text-[10px]  md:text-[12px] font-semibold text-[#a64c4f]'>Specialized in</p>
                                        <h2 className='font-[roboto] text-gray-600   font-semibold text-[13px] md:text-[18px] text-start  '>We specialize in holistic Siddha and Ayurvedic treatments, focusing on pain relief, rejuvenation, detox, and restoring balance to the body and mind naturally. </h2>
                                    </div>

                                    <div>
                                        <div>
                                            <img src={bottombanner} className='w-full object-cover rounded-md md:rounded-xl shadow-2xl drop-shadow-lg' alt='none' />
                                        </div>
                                    </div>
                                </div>


                                <div className='w-full md:w-[50%] mx-auto'>
                                    <div className='flex items-center justify-center w-full md:ml-14'>
                                        <div className='grid grid-cols-3 md:grid-cols-4  md:gap-x-14  gap-y-6 md:gap-y-14 w-full'>

                                            <div className='flex flex-col items-center gap-y-2'>
                                                <div className='bg-white rounded-md md:rounded-xl flex flex-col justify-center drop-shadow-md p-3 md:p-4 transition-transform duration-700 transform hover:rotate-y-[180deg] shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                                    <img src={speacil1} className='w-10 md:w-12 object-cover  ' alt='none' />
                                                </div>
                                                <span className='font-[roboto] text-[10px] md:text-[12px]'>Back Pain</span>
                                            </div>

                                            <div className='flex flex-col items-center gap-y-2'>
                                                <div className='bg-white rounded-md md:rounded-xl flex flex-col justify-center drop-shadow-md p-3 md:p-4  transition-transform duration-700 transform hover:rotate-y-[180deg]  shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                                    <img src={speacil2} className='w-10 md:w-12 object-cover  ' alt='none' />
                                                </div>
                                                <span className='font-[roboto] text-[10px] md:text-[12px]'>Knee Pain </span>
                                            </div>

                                            <div className='flex flex-col items-center gap-y-2'>
                                                <div className='bg-white rounded-md md:rounded-xl flex flex-col justify-center drop-shadow-md p-3 md:p-4  transition-transform duration-700 transform hover:rotate-y-[180deg]  shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                                    <img src={speacil3} className='w-10 md:w-12 object-cover  ' alt='none' />
                                                </div>
                                                <span className='font-[roboto] text-[10px] md:text-[12px]'>Spine Disorders </span>
                                            </div>

                                            <div className='flex flex-col items-center gap-y-2'>
                                                <div className='bg-white rounded-md md:rounded-xl flex flex-col justify-center drop-shadow-md p-3 md:p-4  transition-transform duration-700 transform hover:rotate-y-[180deg]  shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                                    <img src={speacil4} className='w-10 md:w-12 object-cover  ' alt='none' />
                                                </div>
                                                <span className='font-[roboto] text-[10px] md:text-[12px]'>Heel Pain </span>
                                            </div>

                                            <div className='flex flex-col items-center gap-y-2'>
                                                <div className='bg-white rounded-md md:rounded-xl flex flex-col justify-center drop-shadow-md p-3 md:p-4  transition-transform duration-700 transform hover:rotate-y-[180deg] shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                                    <img src={speacil5} className='w-10 md:w-12 object-cover  ' alt='none' />
                                                </div>
                                                <span className='font-[roboto] text-[10px] md:text-[12px]'> Psoriasis </span>
                                            </div>

                                            <div className='flex flex-col items-center gap-y-2'>
                                                <div className='bg-white rounded-md md:rounded-xl flex flex-col justify-center drop-shadow-md p-3 md:p-4  transition-transform duration-700 transform hover:rotate-y-[180deg] shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                                    <img src={speacil6} className='w-10 md:w-12 object-cover  ' alt='none' />
                                                </div>
                                                <span className='font-[roboto] text-[10px] md:text-[12px]'>Hair Fall </span>
                                            </div>

                                            <div className='flex flex-col items-center gap-y-2'>
                                                <div className='bg-white rounded-md md:rounded-xl flex flex-col justify-center drop-shadow-md p-3 md:p-4  transition-transform duration-700 transform hover:rotate-y-[180deg] shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                                    <img src={speacil7} className='w-10 md:w-12 object-cover  ' alt='none' />
                                                </div>
                                                <span className='font-[roboto] text-[10px] md:text-[12px]'>Alopecia Areata</span>
                                            </div>

                                            <div className='flex flex-col items-center gap-y-2'>
                                                <div className='bg-white rounded-md md:rounded-xl flex flex-col justify-center drop-shadow-md p-3 md:p-4  transition-transform duration-700 transform hover:rotate-y-[180deg] shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                                    <img src={speacil8} className='w-10 md:w-12 object-cover  ' alt='none' />
                                                </div>
                                                <span className='font-[roboto] text-[10px] md:text-[12px]'>Diet Therapy</span>
                                            </div>

                                            <div className='flex flex-col items-center gap-y-2'>
                                                <div className='bg-white rounded-md md:rounded-xl flex flex-col justify-center drop-shadow-md p-3 md:p-4  transition-transform duration-700 transform hover:rotate-y-[180deg] shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                                    <img src={speacil9} className='w-10 md:w-12 object-cover  ' alt='none' />
                                                </div>
                                                <span className='font-[roboto] text-[10px] md:text-[12px]'>Asthma</span>
                                            </div>

                                            <div className='flex flex-col items-center gap-y-2'>
                                                <div className='bg-white rounded-md md:rounded-xl flex flex-col justify-center drop-shadow-md p-3 md:p-4  transition-transform duration-700 transform hover:rotate-y-[180deg] shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                                    <img src={speacil10} className='w-10 md:w-12 object-cover  ' alt='none' />
                                                </div>
                                                <span className='font-[roboto] text-[10px] md:text-[12px]'>Sinusitis</span>
                                            </div>

                                            <div className='flex flex-col items-center gap-y-2'>
                                                <div className='bg-white rounded-md md:rounded-xl flex flex-col justify-center drop-shadow-md p-3 md:p-4  transition-transform duration-700 transform hover:rotate-y-[180deg] shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                                    <img src={speacil11} className='w-10 md:w-12 object-cover  ' alt='none' />
                                                </div>
                                                <span className='font-[roboto] text-[10px] md:text-[12px]'>Migraine </span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

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
                            <div data-aos='fade-up' data-aos-duratoin='1000'>
                                <BestServices />
                            </div>
                        </div>
                    </section >
                </div>
            </div>
        </>
    )
}

export default Service