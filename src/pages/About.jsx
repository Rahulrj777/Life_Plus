import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

import banner from '../images/about/about_banner.jpg'
import banner1 from '../images/about/about_banner-1.jpg'

import about from '../images/about/about.png'

// icons
import { LiaHeartbeatSolid } from "react-icons/lia";



const About = () => {


    const buttonRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        // Button Hover Effect (Rotation and Scale)
        gsap.fromTo(buttonRef.current,
            { rotate: -10, scale: 1 },
            {
                rotate: 10,
                scale: 1.05,
                duration: 0.5,
                ease: "power2.inOut",
                repeat: -1,
                yoyo: true
            }
        );

        // Text Slide-In Effect (Adjusted for Visibility)
        gsap.fromTo(textRef.current,
            { x: -20, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out"
            }
        );
    }, []);




    return (
        <>
            <div className='overflow-hidden'>


                <div className='fixed top-0 left-0 w-full h-screen -z-30'>
                    <img src={banner1} className='w-full  object-cover h-screen md:h-full' alt='none' />
                </div>

                {/* ------ header section ----------- */}

                <section className=''>
                    <div>
                        <img src={banner} className='w-full object-cover' alt='none' />
                    </div>
                </section>


                {/* about section */}

                <section className='py-10 md:py-20 font-[poppins] bg-white'>
                    <div className='w-full px-4 md:w-[80%] mx-auto'>
                        <div className='flex flex-col-reverse gap-y-14 md:flex-row justify-center items-center'>

                            <div className='w-full md:w-[50%] mx-auto'>
                                <div className='flex justify-center items-center'>
                                    <img src={about} className='w-[95%] md:w-[80%] object-cover drop-shadow-md' alt='none' />
                                </div>
                            </div>

                            <div className='w-full md:w-[50%] mx-auto'>

                                <div>
                                    <p className='flex items-center gap-x-2 text-[12px] md:text-[14px] text-red-600'> About <span className='mt-0.2 rounded-3xl border border-red-600 w-[10%]'> </span>  </p>

                                    <h3 className=' text-[18px]  md:text-[24px]  font-semibold mb-3 md:mb-6'>Your Trusted Partner in Holistic Healthcare</h3>
                                    <p className='text-[12px] md:text-[14px] leading-6 md:leading-7 text-gray-600'>
                                        At LifePlus Ayush Vaidyasala, we are committed to bringing the ancient wisdom of Siddha, Ayurveda, and Naturopathy into modern healthcare.
                                        Our approach focuses on natural, non-invasive treatments that heal from within, restore balance, and promote overall wellness.
                                    </p>


                                    <ul className='mt-4 md:mt-8 text-[11px] md:text-[12px]  space-y-2 md:space-y-4 list-disc list-inside font-medium'>
                                        <li>Authentic Siddha & Ayurvedic Remedies - Rooted in tradition, backed by nature.</li>
                                        <li> Expert Practitioners - Guided by experienced Siddha and Ayurveda specialists.</li>
                                        <li>Holistic Healing - Addressing the root cause, not just symptoms.</li>
                                    </ul>

                                    <p className='text-[12px] md:text-[12px] leading-6 md:leading-6 text-gray-600 mt-6'>
                                        We believe in the power of natural healing, helping individuals achieve health, harmony, and vitality through time-tested therapies.
                                    </p>

                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                {/* why choose section */}

                <section className='bg-[#f1f2f3] font-[poppins]'>
                    <div className="py-10 md:py-20"  >

                        <div className='w-full px-4 md:w-[80%] mx-auto'>

                            <div className='flex flex-col  justify-center items-center w-full gap-y-1 mb-6 md:mb-14'>
                                <p className='text-red-600 text-[12px] md:text-[14px] flex items-center justify-center gap-x-1 md:gap-x-3 w-full text-center'> <span className='mt-0.2 rounded-3xl border border-red-600 w-[5%]'> </span> Why Choose <span className='mt-0.2 rounded-3xl border border-red-600 w-[5%]'> </span></p>
                                <h4 className='text-[16px] md:text-[24px] text-center  font-semibold '>Choose us for personalized, effective care rooted in traditional healing and expert guidance</h4>
                            </div>

                            <div className='flex justify-center items-center w-full'>
                                <div className='grid  grid-cols-3 md:grid-cols-5 gap-y-9   md:gap-x-12 w-full'>

                                    <div>
                                        <div className='flex flex-col items-center gap-y-4'>
                                            <div className="bg-white p-5 rounded-sm relative shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_30px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]">
                                                <LiaHeartbeatSolid className='text-[20px] md:text-[40px] text-red-500 ' />
                                            </div>
                                            <h3 className='font-[roboto] text-[10px] md:text-[13px] text-gray-700'>Traditional Healing</h3>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='flex flex-col items-center gap-y-4'>
                                            <div className="bg-white p-5 rounded-sm relative shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_30px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]">
                                                <LiaHeartbeatSolid className='text-[20px] md:text-[40px] text-red-500 ' />
                                            </div>
                                            <h3 className='font-[roboto] text-[10px] md:text-[13px] text-gray-700'> Expert Practitioners</h3>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='flex flex-col items-center gap-y-4'>
                                            <div className="bg-white p-5 rounded-sm relative shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_30px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]">
                                                <LiaHeartbeatSolid className='text-[20px] md:text-[40px] text-red-500 ' />
                                            </div>
                                            <h3 className='font-[roboto] text-[10px] md:text-[13px] text-gray-700'>Safe & Natural Treatments</h3>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='flex flex-col items-center gap-y-4'>
                                            <div className="bg-white p-5 rounded-sm relative shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_30px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]">
                                                <LiaHeartbeatSolid className='text-[20px] md:text-[40px] text-red-500 ' />
                                            </div>
                                            <h3 className='font-[roboto] text-[10px] md:text-[13px] text-gray-700'>Personalized Care</h3>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='flex flex-col items-center gap-y-4'>
                                            <div className="bg-white p-5 rounded-sm relative shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_30px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]">
                                                <LiaHeartbeatSolid className='text-[20px] md:text-[40px] text-red-500 ' />
                                            </div>
                                            <h3 className='font-[roboto] text-[10px] md:text-[13px] text-gray-700'>Comprehensive Wellness</h3>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </section>


                {/* -------------- banner ---------------- */}

                <section className='py-10 md:py-28 bg-black/55'>
                    <div className='w-full px-4 md:w-[80%] mx-auto font-[poppins]'>

                        <div className='flex justify-center items-center'>
                            <div className='flex flex-col items-center gap-y-6 md:gap-y-8'>
                                <p className='text-[14px] md:text-[24px]  md:w-[90%]  leading-6 md:leading-11 font-semibold text-center text-white font-[Merriweather]'>We are committed to providing authentic, research-backed therapies that align with your body’s natural rhythm, ensuring a holistic approach to health and healing.</p>

                                <button
                                    ref={buttonRef}
                                    className="cursor-pointer px-4 md:px-8 py-1.5 md:py-3 font-[roboto] rounded-xl bg-[#587821] text-white font-medium hover:scale-105 duration-500 hover:bg-green-600"
                                >
                                    <span ref={textRef} className='text-[10px] md:text-[16px]'>Join us in embracing wellness the natural way!</span>
                                </button>

                            </div>
                        </div>

                    </div>
                </section>

            </div>
        </>
    )
}

export default About