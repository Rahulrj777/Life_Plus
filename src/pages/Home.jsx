import { useEffect, useRef,useState  } from 'react'
import Testimonials from '../components/Testmonials';
import gsap from 'gsap'
import { FaWhatsapp, FaPhoneAlt, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

import patternbackground from '../images/banner/patternbackground1.jpg'

import about1 from '../images/about1.jpg'
import about2 from '../images/about2.jpg'

import who1 from '../images/icon/who1.png'
import who2 from '../images/icon/who2.png'
import who3 from '../images/icon/who3.png'
import who4 from '../images/icon/who4.png'

import service1 from '../images/icon/service1.png'
import service2 from '../images/icon/service2.png'
import service3 from '../images/icon/service3.png'

import why1 from '../images/icon/why1.png'
import why2 from '../images/icon/why2.png'
import why3 from '../images/icon/why3.png'
import why4 from '../images/icon/why4.png'
import why5 from '../images/icon/why5.png'
import why6 from '../images/icon/why6.png'
import why7 from '../images/icon/why7.png'
import why8 from '../images/icon/why8.png'

//icons
import { GiLindenLeaf } from "react-icons/gi";
import { PiHeadsetFill } from "react-icons/pi";
import { FaStar } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const Home = () => {

    const arrowRef = useRef(null);
    const arrowRef1 = useRef(null);
    const [stats, setStats] = useState({ customers: 0, services: 0, doctors: 0, experience: 0 });

    useEffect(() => {

        gsap.to(arrowRef.current, {
            y: 30,         
            duration: 2,    
            repeat: -1,   
            yoyo: true,
            ease: "sine.inOut",
        });

        gsap.to(arrowRef1.current, {
            y: 50,
            x: -20,         
            duration: 2,   
            repeat: -1,    
            yoyo: true,    
            ease: "sine.inOut", 
        });

    }, [])

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

useEffect(() => {
    const targets = { customers: 45000, services: 40, doctors: 31, experience: 25 };
    const duration = 2000;
    const frameRate = 30;
    const steps = duration / frameRate;
    let frame = 0;

    const interval = setInterval(() => {
      frame++;
      setStats({
        customers: Math.floor((targets.customers / steps) * frame),
        services: Math.floor((targets.services / steps) * frame),
        doctors: Math.floor((targets.doctors / steps) * frame),
        experience: Math.floor((targets.experience / steps) * frame),
      });
      if (frame >= steps) clearInterval(interval);
    }, frameRate);

    return () => clearInterval(interval);
  }, []);

    return (
        <>
            <div className='overflow-hidden z-20'>
                <div className='fixed top-0 left-0 right-0 bottom-0 -z-10 '>
                    <img src={patternbackground} className='w-full h-screen object-cover' />
                </div>

                <div className="fixed right-4 md:right-8 bottom-20 md:bottom-16 z-50 flex flex-col gap-4">
                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/yourwhatsapplink"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
                        aria-label="WhatsApp"
                    >
                        <FaWhatsapp className="w-6 h-6" />
                    </a>

                    {/* Book Appointment */}
                    <Link
                        to="/contact"
                        className="bg-pink-400 hover:bg-pink-500 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
                        aria-label="Book Appointment"
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        <FaCalendarAlt className="w-6 h-6" />
                    </Link>

                    {/* Phone */}
                    <a
                        href="tel:+1234567890"
                        className="bg-[#0a7c1d] hover:bg-green-800 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
                        aria-label="Phone"
                    >
                        <FaPhoneAlt className="w-6 h-6" />
                    </a>
                </div>

                {/* -------------- banner slide ---------------- */}

                <section className='w-full h-full py-10 md:py-20 relative overflow-hidden' id='home'>
                   
                    <div className='w-full flex flex-col md:flex-row justify-center items-center overflow-hidden'>

                        <div className='md:pl-16 md:pr-5 flex flex-col justify-center' data-aos="fade-up" data-aos-duration="3000">
                            <p className='text-[12px] md:text-[16px] tracking-tight md:tracking-normal font-semibold text-[#d480a1] flex items-center gap-1.5'> Balancing Body, Mind & Nature  </p>
                            <div className='font-bold  md:tracking-[2px]  '>
                                <h2 className='text-[2rem] md:text-[4.6rem] uppercase  text-[#0a7c1d] drop-shadow-md'> Helping You Feel </h2>
                                <h2 className='text-[1.8rem] md:text-[4.2rem]  uppercase text-[#0a7c1d]'> Better—Naturally </h2>
                            </div>
                            <p className='mt-2 -md:mt-5  text-[12px] md:text-[14px] w-full px-4 md:w-[70%] text-black leading-5 md:leading-7 md:font-medium md:pr-8'>
                                We use natural herbs and safe treatments to support your health and well-being. Whether you're
                                looking to reduce stress, boost your energy, or improve your overall health, we’re here to help with
                                gentle and effective herbal care.
                            </p>
                        </div>
                    </div>
                </section>

                {/* --------------- About us ---------------- */}

                <section className='pb-6 pt-10 md:py-20 bg-white'>
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
                                            <div className='bg-white p-3 md:p-7  mx-auto border-2 border-[#0a7c1d] rounded-bl-3xl  space-y-1 md:space-y-3'>
                                                <div className='flex justify-center items-center'>
                                                    <GiLindenLeaf className=' text-[14px] md:text-[20px] text-[#0a7c1d]' />
                                                </div>
                                                <h3 className='text-center font-bold text-[10px] md:text-[16px]'>Renew Yourself with Ayurveda</h3>
                                                <p className='text-[10px] md:text-[12px] text-center'>
                                                    Discover the ancient healing power of Ayurveda to rejuvenate your body, mind, and spirit.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className='w-full md:w-[50%] mx-auto'>
                                <div data-aos='fade-left' data-aos-duratoin='1000'>
                                    <p className='text-[#d480a1] text-[12px] md:text-[13px] font-semibold uppercase md:mb-2'>Who We Are </p>
                                    <h3 className='text-[16px] md:text-[30px] font-semibold leading-11 '>Natural Healing. Real Results</h3>
                                    <p className='text-[12px] md:text-[14px] text-gray-500 mt-2  md:mt-5'>
                                     At our core, we honor the age-old wisdom of traditional healing. Drawing from the rich heritage of Siddha, Ayurveda, and other time-tested practices, we offer safe, plant-based therapies that are designed to optimize your health.
                                    Our herbal treatments support stress reduction, boost energy, and enhance overall well-being—all grounded in evidence-informed care and guided by nature’s healing power.
                                    With a deep respect for ancient remedies and a commitment to holistic wellness, we help you achieve balance in body, mind, and spirit.
                                    This is not just healthcare—it’s tradition, thoughtfully renewed for modern lives.
                                    </p>
                                    <div className='border border-gray-200  my-6 w-[95%]'></div>
                                    <ul className='grid grid-cols-2 md:grid-cols-3 gap-x-2 md:gap-x-4 gap-y-4  md:gap-y-8  text-[10px] md:text-[12px] font-semibold '>
                                        <li className='flex items-center gap-x-2'>  <span><img src={who1} className='w-5 md:w-7 object-cover' alt='none' /></span>   <span>Herbal Expertise</span> </li>
                                        <li className='flex items-center gap-x-2'>  <span><img src={who2} className='w-6 md:w-8 object-cover' alt='none' /></span>   <span>Certified Doctors</span> </li>
                                        <li className='flex items-center gap-x-2'>  <span><img src={who3} className='w-6 md:w-8 object-cover' alt='none' /></span>   <span>24/7 Support</span> </li>
                                        <li className='flex items-center gap-x-2'>  <span><img src={who4} className='w-6 md:w-8 object-cover' alt='none' /></span>   <span>Natural Treatments</span> </li>
                                    </ul>
                                    <div className="mt-6">
                                        <Link
                                            to="/about"
                                            className="inline-block bg-[#d480a1] hover:bg-[#0a7c1d] text-white font-semibold px-6 py-3 rounded-md text-[12px] md:text-[14px] transition-all duration-300 hover:scale-105"
                                        >
                                            Know More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* ---------------------- Our Services -------------- */}

                <section className="pt-14 pb-20 md:py-24 bg-white relative overflow-hidden">
                    <div className="w-full px-4 md:w-[80%] mx-auto relative z-10">

                        {/* TOP CONTENT */}
                        <div className="text-center mb-16">
                        <p className="text-[12px] md:text-[14px] font-semibold mb-2 text-[#d480a1]">
                            Our Services
                        </p>
                        <h2 className="font-bold text-[20px] md:text-[2.5rem] text-[#0a7c1d] leading-snug">
                            Your Wellness Journey Starts Naturally
                        </h2>
                        <div className="border border-green-200 w-100 mx-auto mt-4"></div>
                        </div>

                        {/* SERVICE CARDS */}
                        <div
                        className="relative mt-10"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                            {/* Card 1 */}
                            <div className="bg-white drop-shadow-lg px-6 py-8 rounded-lg border-t-4 border-[#0a7c1d] hover:scale-105 transition-all duration-300">
                            <div className="flex flex-col items-center gap-4">
                                <img src={service1} className="w-14 md:w-20 object-cover" alt="Siddha" />
                                <h3 className="text-[14px] font-bold text-[#0a7c1d] text-center">
                                Siddha Medicine & Therapies
                                </h3>
                                <p className="text-[11px] md:text-[12px] text-gray-600 text-center">
                                Siddha is a powerful ancient healing science from Tamil Nadu,
                                focusing on balancing the three humors — Vata, Pitta, and Kapha.
                                </p>
                            </div>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-[#0a7c1d] drop-shadow-lg px-6 py-8 rounded-lg hover:scale-105 transition-all duration-300">
                            <div className="flex flex-col items-center gap-4">
                                <img src={service2} className="w-14 md:w-20 object-cover" alt="Ayurveda" />
                                <h3 className="text-[14px] font-semibold  text-white text-center">
                                Ayurveda Panchakarma & Wellness Therapies
                                </h3>
                                <p className="text-[11px] md:text-[12px] text-green-100 text-center">
                                Our Ayurveda department offers classical Panchakarma and
                                rejuvenation therapies for detoxification, restoration, and
                                prevention of disease.
                                </p>
                            </div>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white drop-shadow-lg px-6 py-8 rounded-lg border-t-4 border-[#0a7c1d] hover:scale-105 transition-all duration-300">
                            <div className="flex flex-col items-center gap-4">
                                <img src={service3} className="w-14 md:w-20 object-cover" alt="Naturopathy" />
                                <h3 className="text-[14px] font-bold  text-[#0a7c1d] text-center">
                                Naturopathy Therapies
                                </h3>
                                <p className="text-[11px] md:text-[12px] text-gray-600 text-center">
                                Naturopathy restores health using elements of nature like water,
                                mud, air, and plant-based remedies.
                                </p>
                            </div>
                            </div>

                        </div>
                        </div>
                    </div>
                </section>

                {/* ---------- why choose us --------------*/}

                <section className="bg-[#f9f3eb]">
                    <div className="relative h-[85rem] md:h-[45rem]">

                    {/* Centered Content */}
                    <div className="absolute inset-0 flex justify-center items-center text-center px-4">
                        <div className="w-full max-w-7xl">
                        {/* Heading */}
                        <div className="w-full mx-auto mb-10 md:mb-14" data-aos="fade-up" data-aos-duration="1000">
                            <p className="text-[16px] md:text-[18px] font-semibold uppercase text-[#d480a1] mb-3">
                            What Makes Us Different
                            </p>
                            <h2 className="text-black text-[22px] md:text-[3rem] font-bold  leading-tight">
                            Embracing Nature’s Healing Power for Better Health
                            </h2>
                        </div>

                        {/* Feature Flip Cards */}
                        <div className="w-full md:w-[95%] mx-auto ">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
                                {/* Card 1 */}
                                <div className="group [perspective:1000px]">
                                <div className="relative h-40 w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                    {/* Front */}
                                    <div className="absolute inset-0 bg-[#aabc9b] flex flex-col items-center justify-center p-4 text-white [backface-visibility:hidden] rounded-md">
                                        <img src={why1} className="w-12 mb-3" alt="Personalized Care" />
                                        <h3 className="text-[14px] md:text-[18px]  font-semibold">
                                        Personalized Care
                                        </h3>
                                    </div>
                                    {/* Back */}
                                    <div className="absolute inset-0 bg-white text-gray-700 flex items-center justify-center p-4 text-center [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-md">
                                        <p className="text-[12px] md:text-[14px]">
                                        Tailored therapies designed to match your unique health and lifestyle needs.
                                        </p>
                                    </div>
                                    </div>
                                </div>

                                {/* Card 2 */}
                                <div className="group [perspective:1000px]">
                                    <div className="relative h-40 w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                    {/* Front */}
                                    <div className="absolute inset-0 bg-[#aabc9b] flex flex-col items-center justify-center p-4 text-white [backface-visibility:hidden] rounded-md">
                                        <img src={why2} className="w-12 mb-3" alt="Personalized Care" />
                                        <h3 className="text-[14px] md:text-[18px]  font-semibold">
                                        Healing Support
                                        </h3>
                                    </div>
                                    {/* Back */}
                                    <div className="absolute inset-0 bg-white text-gray-700 flex items-center justify-center p-4 text-center [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-md">
                                        <p className="text-[12px] md:text-[14px]">
                                        Holistic solutions to naturally support recovery and improve overall wellness.
                                        </p>
                                    </div>
                                    </div>
                                </div>

                                {/* Card 3 */}
                                <div className="group [perspective:1000px]">
                                    <div className="relative h-40 w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                    {/* Front */}
                                    <div className="absolute inset-0 bg-[#aabc9b] flex flex-col items-center justify-center p-4 text-white [backface-visibility:hidden] rounded-md">
                                        <img src={why3} className="w-12 mb-3" alt="Personalized Care" />
                                        <h3 className="text-[14px] md:text-[18px]  font-semibold">
                                        Secure Treatment
                                        </h3>
                                    </div>
                                    {/* Back */}
                                    <div className="absolute inset-0 bg-white text-gray-700 flex items-center justify-center p-4 text-center [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-md">
                                        <p className="text-[12px] md:text-[14px]">
                                        Safe, evidence-informed, and chemical-free treatments for lasting results.
                                        </p>
                                    </div>
                                    </div>
                                </div>

                                {/* Card 4 */}
                                <div className="group [perspective:1000px]">
                                    <div className="relative h-40 w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                    {/* Front */}
                                    <div className="absolute inset-0 bg-[#aabc9b] flex flex-col items-center justify-center p-4 text-white [backface-visibility:hidden] rounded-md">
                                        <img src={why4} className="w-12 mb-3" alt="Personalized Care" />
                                        <h3 className="text-[14px] md:text-[18px]  font-semibold">
                                        Emergency Assistance
                                        </h3>
                                    </div>
                                    {/* Back */}
                                    <div className="absolute inset-0 bg-white text-gray-700 flex items-center justify-center p-4 text-center [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-md">
                                        <p className="text-[12px] md:text-[14px]">
                                        Quick support and guidance in critical situations to ensure your well-being.
                                        </p>
                                    </div>
                                    </div>
                                </div>

                                {/* Card 5 */}
                                <div className="group [perspective:1000px]">
                                    <div className="relative h-40 w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                    {/* Front */}
                                    <div className="absolute inset-0 bg-[#aabc9b] flex flex-col items-center justify-center p-4 text-white [backface-visibility:hidden] rounded-md">
                                        <img src={why5} className="w-12 mb-3" alt="Personalized Care" />
                                        <h3 className="text-[14px] md:text-[18px]  font-semibold">
                                        Herbal Expertise
                                        </h3>
                                    </div>
                                    {/* Back */}
                                    <div className="absolute inset-0 bg-white text-gray-700 flex items-center justify-center p-4 text-center [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-md">
                                        <p className="text-[12px] md:text-[14px]">
                                        Our treatments are powered by centuries-old herbal and natural remedies.
                                        </p>
                                    </div>
                                    </div>
                                </div>

                                {/* Card 6 */}
                                <div className="group [perspective:1000px]">
                                    <div className="relative h-40 w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                    {/* Front */}
                                    <div className="absolute inset-0 bg-[#aabc9b] flex flex-col items-center justify-center p-4 text-white [backface-visibility:hidden] rounded-md">
                                        <img src={why6} className="w-12 mb-3" alt="Personalized Care" />
                                        <h3 className="text-[14px] md:text-[18px]  font-semibold">
                                        Certified Doctors
                                        </h3>
                                    </div>
                                    {/* Back */}
                                    <div className="absolute inset-0 bg-white text-gray-700 flex items-center justify-center p-4 text-center [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-md">
                                        <p className="text-[12px] md:text-[14px]">
                                        Experienced and certified practitioners offering trusted, expert care.
                                        </p>
                                    </div>
                                    </div>
                                </div>

                                {/* Card 7 */}
                                <div className="group [perspective:1000px]">
                                    <div className="relative h-40 w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                    {/* Front */}
                                    <div className="absolute inset-0 bg-[#aabc9b] flex flex-col items-center justify-center p-4 text-white [backface-visibility:hidden] rounded-md">
                                        <img src={why7} className="w-12 mb-3" alt="Personalized Care" />
                                        <h3 className="text-[14px] md:text-[18px]  font-semibold">
                                        24/7 Support
                                        </h3>
                                    </div>
                                    {/* Back */}
                                    <div className="absolute inset-0 bg-white text-gray-700 flex items-center justify-center p-4 text-center [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-md">
                                        <p className="text-[12px] md:text-[14px]">
                                        Round-the-clock assistance for any health concerns, anytime you need us.
                                        </p>
                                    </div>
                                    </div>
                                </div>

                                {/* Card 8 */}
                                <div className="group [perspective:1000px]">
                                    <div className="relative h-40 w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                    {/* Front */}
                                    <div className="absolute inset-0 bg-[#aabc9b] flex flex-col items-center justify-center p-4 text-white [backface-visibility:hidden] rounded-md">
                                        <img src={why8} className="w-12 mb-3" alt="Personalized Care" />
                                        <h3 className="text-[14px] md:text-[18px]  font-semibold">
                                        Natural Treatment
                                        </h3>
                                    </div>
                                    {/* Back */}
                                    <div className="absolute inset-0 bg-white text-gray-700 flex items-center justify-center p-4 text-center [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-md">
                                        <p className="text-[12px] md:text-[14px]">
                                        Chemical-free, plant-based therapies for sustainable, holistic healing.
                                        </p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>

                {/* ---------- Dynamic Reviews Section -------------- */}

                <section className="bg-[#86a39f]">
                    <div className="w-[95%] mx-auto">
                    <div className="py-10 md:py-14 ">
                        <div className="w-full md:w-[85%] mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
                            <div>
                            <h2 className="text-[20px] md:text-[48px] font-bold">{stats.customers.toLocaleString()}+</h2>
                            <p className="text-[10px] md:text-[14px] text-gray-200 uppercase ">
                                Happy Customers
                            </p>
                            </div>
                            <div>
                            <h2 className="text-[20px] md:text-[48px] font-bold">{stats.services}+</h2>
                            <p className="text-[10px] md:text-[14px] text-gray-200 uppercase ">
                                Services
                            </p>
                            </div>
                            <div>
                            <h2 className="text-[20px] md:text-[48px] font-bold">{stats.doctors}+</h2>
                            <p className="text-[10px] md:text-[14px] text-gray-200 uppercase ">
                                Doctors
                            </p>
                            </div>
                            <div>
                            <h2 className="text-[20px] md:text-[48px] font-bold">{stats.experience}+</h2>
                            <p className="text-[10px] md:text-[14px] text-gray-200 uppercase ">
                                Years Experience
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>

               {/* Testimonial */}

                <section className="py-10 md:py-20 bg-white">
                    <div className="w-full px-4 md:w-[80%] mx-auto">

                        {/* Heading */}
                        <div 
                        className="flex flex-col justify-center items-center mx-auto mb-14 text-center"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        data-aos-delay="50"
                        >
                        <p className="text-[14px] md:text-[16px] font-semibold uppercase text-[#d480a1] mb-3">
                            Testimonial
                        </p>
                        <h2 className="text-[20px] md:text-[3rem]  text-[#0a7c1d]">
                            Customer Feedback & Reviews
                        </h2>
                        <div className="flex items-center justify-center gap-x-3 mt-4 text-[16px] md:text-[20px]">
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-gray-200" />
                        </div>
                        </div>

                        {/* Testimonials */}
                        <div>
                        <Testimonials />
                        </div>
                    </div>
                </section>

                {/* -------------- client ratings ---------------- */}

                <section className="py-16 md:py-24 bg-[#f9f3eb] relative overflow-hidden">
                    <div className="w-full px-6 md:w-[75%] mx-auto text-center relative z-10" data-aos="fade-up" data-aos-duration="1500">
                        
                        {/* Decorative Background Element */}
                        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] bg-[#0a7c1d]/10 rounded-full blur-3xl opacity-30 z-0"></div>
                        
                        {/* Heading */}
                        <h2 className="text-[#0a7c1d] text-[22px] md:text-[48px]  font-bold leading-snug mb-6">
                            Your Health is a Reflection of Nature’s Balance
                        </h2>

                        {/* Paragraph */}
                        <p className="text-[13px] md:text-[16px] text-gray-600 leading-6 md:leading-8 mb-8 md:mb-12 max-w-3xl mx-auto">
                            Discover the harmony between your body, mind, and nature. 
                            Our Siddha and Ayurvedic treatments are designed to restore 
                            balance, boost immunity, and nurture your well-being — 
                            the natural way.
                        </p>

                        {/* Button */}
                        <Link to="/healthcare_services"
                        className="relative z-10 inline-flex gap-2 items-center bg-[#d480a1] hover:bg-[#0a7c1d] text-white px-10 py-4 cursor-pointer rounded-md text-[12px] md:text-[14px] transition-all duration-300 hover:scale-105"
                        >
                        Discover More <FaArrowRight className="text-[12px] md:text-[18px]" />
                        </Link>
                    </div>
                </section>

            
                {/* contact box */}

                <section className='py-6 md:py-10 bg-white'>
                    <div className='w-full flex justify-center items-center relative '>

                        <div className='border border-gray-200 w-full absolute z-10'></div>

                        <div className='flex flex-col md:flex-row items-center  md:gap-x-10 bg-white z-40 border border-gray-200 px-5 md:px-16 py-2 md:py-4 rounded-xl  md:rounded-4xl' data-aos='fade-up' data-aos-duratoin='1000'>
                            <h3 className='font-light text-[8px] md:text-[14px] flex items-center gap-x-2 md:gap-x-4'>
                              <span> <PiHeadsetFill className='text-[#426948] text-[20px] md:text-[40px]' /> </span> 
                              <span> Begin your personalized wellness journey with Life Plus. </span>
                            </h3>
                            <div>
                                <Link to='/contact' onClick={() => window.scrollTo(0, 0)}>
                                    <button className='px-3 md:px-6 cursor-pointer mt-1 md:mt-0 py-1.5 md:py-2.5 bg-[#d480a1] hover:scale-105 duration-300 font-bold hover:bg-[#0a7c1d] rounded-md md:rounded-xl text-[10px] md:text-[14px] text-white'>Contact us</button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </section>

            </div>

        </>
    )
}

export default Home
