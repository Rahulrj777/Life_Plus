import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';



import banner from '../images/banner/contact_banner.webp'

import contact from '../images/contact.png'
import phone from '../images/contact/phone.png'
import cup from '../images/contact/cup.png'


//icons
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Enquiry from '../components/Enquiry';
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';



const Contact = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);


    return (
        <>

            <div className='overflow-hidden'>

                <section>
                    <div className='relative w-full'>

                        <div>
                            <img src={banner} className='w-full object-cover' alt='none' />
                        </div>

                        <div className='absolute w-full top-0 left-0 right-0 bottom-0 flex justify-start items-center bg-black/60 bg-opacity-40'>
                            <div className='w-full flex flex-col gap-y-2 md:gap-y-4 justify-start font-[Merriweather] px-9'>
                                <h3 className='font-black text-[12px] md:text-[40px] text-white text-center'>
                                    Get in Touch with Us for a Healthier Tomorrow
                                </h3>
                                <p className='text-[6px] md:text-[11px] font-[roboto] text-center text-gray-200 md:tracking-[1px] w-full md:w-[60%] mx-auto'>We are here to guide you on your path to natural healing and well-being. Whether you have queries about our treatments or wish to book a consultation, feel free to reach out</p>
                            </div>
                        </div>

                    </div>
                </section>


                {/* ---------------------- form section ---------------------- */}


                <section className='bg-[#f8f8ff] pt-0 md:pt-20 pb-0 md:pb-20 font-[poppins]'>

                    <div className='relative  w-full px-4 md:w-[80%] mx-auto bg-[#6D918C] py-8 md:px-6 md:rounded-lg z-0'>

                        <div className='absolute bottom-8 left-0 -z-10' data-aos='fade-right' data-aos-delay="50" data-aos-duration="1000">

                            <img src={phone} className='w-60 object-cover' alt="" />

                        </div>

                        <div className='flex flex-col md:flex-row items-start md:divide-x divide-blue-200 gap-y-4'>

                            <div className=' w-full md:w-[50%] mx-auto md:mt-20'>

                                <div className='md:px-10'>

                                    <div className='flex items-center gap-x-4 md:gap-x-8 '>
                                        <div className='flex justify-center items-center w-[10%]'>
                                            <img src={cup} className='w-full  object-cover' alt='none' />
                                        </div>

                                        <div className='w-[90%]'>
                                            <h4 className='font-semibold text-[12px] md:text-[16px]  text-white text-start'>For any inquiries or to learn more about our courses, please reach out to us</h4>
                                        </div>

                                    </div>

                                    <p className='text-center mt-4 md:mt-14 text-gray-100 text-[10px] md:text-[12px]'>Ready to move forward? Contact us today to get started on your journey. Our team is here to provide the information and support you need.</p>

                                    <div className='mt-6 md:mt-10 '>
                                        <div className='flex justify-center md:justify-start items-center gap-x-4'>
                                            <div className='flex items-center gap-x-1 md:gap-x-2'>
                                                <FaPhone className='text-white text-[14px] md:text-[16px]' />
                                                <p className='text-white text-[10px] md:text-[14px]'>+91 8015907797</p>
                                            </div>

                                            <div className='flex items-center gap-x-1 md:gap-x-2'>
                                                <MdEmail className='text-white text-[14px] md:text-[16px]' />
                                                <p className='text-white text-[10px] md:text-[14px]'>lifeplusayushvadhyasala@gmail.com</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className=' w-full md:w-[50%] mx-auto'>

                                <Enquiry />

                            </div>




                        </div>
                    </div>
                </section>



                <section className='bg-[#f3f3f3] py-10 md:pt-10 md:pb-20 font-[poppins]'>
                    <div className='w-full px-3 md:w-[80%] mx-auto'>


                        <div className='flex flex-col items-center md:gap-y-2  mb-8 md:mb-16'>
                            <h2 className='font-bold text-[16px] md:text-[24px]  text-gray-800'>A Place That Truly Cares!</h2>
                            <p className='text-gray-600 tracking-tight text-center  text-[12px] md:text-[14px] '>I’ve tried many treatments, but this place made a real difference. The team is amazing, and I’m feeling better every day!</p>
                        </div>


                        <div className='flex flex-col md:flex-row items-center gap-x-10 gap-y-6 h-full'>

                            {/* Location 1 */}
                            <div className='w-full md:w-[50%]  h-[31vh] md:h-[35vh]'>
                                <div className='flex flex-col justify-between bg-gray-50 rounded-md drop-shadow-md px-6 py-8 h-full'>
                                    <div className="flex flex-col justify-center items-center gap-y-3 md:gap-y-5">
                                        <FaLocationDot className='text-[28px] md:text-[34px] text-[#a64c4f]' />

                                        <div>
                                            <h3 className='text-center uppercase font-bold text-[#6d918c] text-[14px] md:text-[18px] '>Life Plus herbal health care centre </h3>
                                            <p className='text-center text-[11px] md:text-[14px] font-semibold font-[roboto] text-gray-600'>
                                                27, Karuneegar St, Ramapuram, Paramesh Nagar, Adambakkam, Chennai, Tamil Nadu 600088
                                            </p>
                                        </div>
                                    </div>
                                    <div className='mt-3 md:mt-6 flex justify-center'>
                                        <Link to='https://maps.app.goo.gl/C6hRF3BuVD38THQn9' target='_blank'>
                                        <button className='text-[12px] md:text-[14px] font-medium  border border-[#6d918c] hover:bg-[#6d918c] hover:text-white hover:scale-105 duration-300 cursor-pointer text-black px-3 md:px-4  py-1.5 md:py-2 rounded-md text-sm  transition-all'>
                                            Get Directions
                                        </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Location 2 */}
                            <div className='w-full md:w-[50%]  h-[31vh] md:h-[35vh]'>
                                <div className='flex flex-col justify-between bg-gray-50 rounded-md drop-shadow-md px-6 py-8 h-full'>
                                    <div className="flex flex-col justify-center items-center gap-y-4 md:gap-y-5">
                                        <FaLocationDot className='text-[28px] md:text-[34px] text-[#a64c4f]' />
                                        <div>
                                            <h3 className='text-center uppercase font-bold text-[#6d918c] text-[14px] md:text-[18px] '>Life Plus herbal health care centre </h3>
                                            <p className='text-center text-[11px] md:text-[14px] font-semibold font-[roboto] text-gray-600'>
                                                No.(Plot No.) 212, Imayam Colony, 2nd Street Anna Nagar West Extension, Chennai - 600 101
                                            </p>
                                        </div>
                                    </div>
                                    <div className='mt-3 md:mt-6 flex justify-center'>
                                        <Link to='https://maps.app.goo.gl/u6qeA6gjTrh3YpRc6' target='_blank' >
                                            <button className=' text-[12px] md:text-[14px] font-medium border border-[#6d918c] hover:bg-[#6d918c] hover:text-white hover:scale-105 duration-300 cursor-pointer text-black px-3 md:px-4  py-1.5 md:py-2 rounded-md text-sm  transition-all'>
                                                Get Directions
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>





            </div>

        </>
    )
}

export default Contact