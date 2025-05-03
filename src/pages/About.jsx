import React, { useEffect, useRef } from 'react';
import { Lightbulb, Eye, Heart } from 'lucide-react'; // lucide-react icons
import gsap from 'gsap';

import banner from '../images/about/about_banner.jpg';
import banner1 from '../images/about/about_banner-1.jpg';
import about from '../images/about/about.png';

// icons
import { LiaHeartbeatSolid } from "react-icons/lia";
import MisionVision from '../components/MisionVision';



const data = [
    {
        title: 'Our Mission',
        icon: <Lightbulb className="w-10 h-10 text-indigo-500" />,
        description:
            'To revolutionize wellness through ancient wisdom and modern innovation, empowering individuals with natural healing.',
    },
    {
        title: 'Our Vision',
        icon: <Eye className="w-10 h-10 text-green-500" />,
        description:
            'To be a global leader in authentic holistic care, rooted in Siddha, Ayurveda, and Naturopathy.',
    },
    {
        title: 'Our Values',
        icon: <Heart className="w-10 h-10 text-pink-500" />,
        description:
            'Integrity, empathy, and excellence in delivering nature-based, person-centered healing solutions.',
    },
];




const About = () => {


    const cardsRef = useRef([]);

    const buttonRef = useRef(null);
    const textRef = useRef(null);




    useEffect(() => {
        // Scroll animation for each card
        cardsRef.current.forEach((card, idx) => {
            if (!card) return;

            // Scroll animation for opacity and y position on scroll
            gsap.fromTo(
                card,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                    },
                }
            );

            // Tilt effect on mouse move
            const handleMouseMove = (e) => {
                const bounds = card.getBoundingClientRect();
                const x = e.clientX - bounds.left;
                const y = e.clientY - bounds.top;

                const centerX = bounds.width / 2;
                const centerY = bounds.height / 2;

                const deltaX = (x - centerX) / 15;
                const deltaY = (centerY - y) / 15;

                gsap.to(card, {
                    rotateY: deltaX,
                    rotateX: deltaY,
                    transformPerspective: 1000,
                    transformOrigin: "center",
                    ease: "power2.out",
                    duration: 0.3,
                });
            };

            const resetTilt = () => {
                gsap.to(card, {
                    rotateX: 0,
                    rotateY: 0,
                    duration: 0.5,
                    ease: "power2.out",
                });
            };

            card.addEventListener("mousemove", handleMouseMove);
            card.addEventListener("mouseleave", resetTilt);

            // Cleanup event listeners on unmount
            return () => {
                card.removeEventListener("mousemove", handleMouseMove);
                card.removeEventListener("mouseleave", resetTilt);
            };
        });
    }, []);




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

        // Text Slide-In Effect
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
        <div className='overflow-hidden'>
            {/* Background Banner */}
            <div className='fixed top-0 left-0 w-full h-screen -z-30'>
                <img src={banner1} className='w-full object-cover h-screen md:h-full' alt='banner1' />
            </div>

            {/* Top Banner */}
            <section>
                <img src={banner} className='w-full object-cover' alt='banner' />
            </section>

            {/* About Section */}
            <section className='py-10 md:py-20 font-[poppins] bg-white'>
                <div className='w-full px-4 md:w-[85%] mx-auto'>
                    <div className='flex flex-col-reverse md:flex-row gap-y-14 justify-center items-center'>
                        <div className='w-full md:w-[50%]'>
                            <div className='flex justify-center items-center'>
                                <img src={about} className='w-[95%] md:w-[80%] object-cover drop-shadow-md' alt='about' />
                            </div>
                        </div>
                        <div className='w-full md:w-[50%]'>
                            <div ref={textRef}>
                                <p className='flex items-center gap-x-2 text-[12px] md:text-[14px] text-red-600 font-medium'>
                                    About Us <span className='mt-0.5 rounded-3xl border border-red-600 w-[10%]'></span>
                                </p>
                                <h3 className='text-[18px] md:text-[26px] font-semibold mb-3 md:mb-6'>
                                    Your Trusted Partner in Holistic Healthcare
                                </h3>
                                <p className='text-[12px] md:text-[14px] leading-6 md:leading-7 text-gray-600'>
                                    At LifePlus Ayush Vaidyasala, we bring together the time-honored wisdom of Siddha, Ayurveda, and Naturopathy to offer a truly integrative approach to healing.
                                    Guided by experienced physicians and skilled therapists, each treatment is tailored to address the root cause of illness while nurturing your body, mind, and spirit.
                                </p>
                                <ul className='mt-4 md:mt-8 text-[11px] md:text-[12px] space-y-2 md:space-y-4 list-disc list-inside font-medium'>
                                    <li>Traditional Healing – Authentic care rooted in Siddha, Ayurveda, and Naturopathy.</li>
                                    <li>Skilled & Caring Experts – Guided by knowledgeable physicians and dedicated therapists.</li>
                                    <li>Root-Cause Wellness – Holistic solutions that go beyond symptoms to restore lasting health.</li>
                                </ul>
                                <p className='text-[12px] md:text-[12px] leading-6 text-gray-600 mt-6'>
                                    We are more than a healthcare center – we are your healing sanctuary. Step into a peaceful environment where personalized care meets the power of natural medicine, and embark on a journey back to your healthiest self.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <div className='w-full  '>
                <MisionVision />
            </div>



            {/* Why Choose Us */}
            {/* <section className='bg-[#f1f2f3] font-[poppins]'>
                <div className="py-10 md:py-20">
                    <div className='w-full px-4 md:w-[80%] mx-auto'>
                        <div className='flex flex-col justify-center items-center w-full gap-y-1 mb-6 md:mb-14'>
                            <p className='text-red-600 text-[12px] md:text-[14px] flex items-center justify-center gap-x-1 md:gap-x-3 text-center'>
                                <span className='mt-0.5 rounded-3xl border border-red-600 w-[5%]'></span> Why Choose <span className='mt-0.5 rounded-3xl border border-red-600 w-[5%]'></span>
                            </p>
                            <h4 className='text-[16px] md:text-[24px] text-center font-semibold'>
                                Choose us for personalized, effective care rooted in traditional healing and expert guidance
                            </h4>
                        </div>

                        <div className='flex justify-center items-center w-full'>
                            <div className='grid grid-cols-3 md:grid-cols-5 gap-y-9 md:gap-x-12 w-full'>
                                {[
                                    "Traditional Healing",
                                    "Expert Practitioners",
                                    "Safe & Natural Treatments",
                                    "Personalized Care",
                                    "Comprehensive Wellness"
                                ].map((item, i) => (
                                    <div key={i} className='flex flex-col items-center gap-y-4'>
                                        <div className="bg-white p-5 rounded-sm relative shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_30px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]">
                                            <LiaHeartbeatSolid className='text-[20px] md:text-[40px] text-red-500' />
                                        </div>
                                        <h3 className='font-[roboto] text-[10px] md:text-[13px] text-gray-700 text-center'>{item}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Banner CTA Section */}
            <section className='py-10 md:py-28 bg-black/55'>
                <div className='w-full px-4 md:w-[80%] mx-auto font-[poppins]'>
                    <div className='flex justify-center items-center'>
                        <div className='flex flex-col items-center gap-y-6 md:gap-y-8'>
                            <p className='text-[14px] md:text-[24px] md:w-[90%] leading-6 md:leading-11 font-semibold text-center text-white font-[Merriweather]'>
                                Rooted in Siddha and Ayurveda, we offer holistic treatments that restore balance, promoting lasting health and wellness with natural healing.
                            </p>
                            <button
                                ref={buttonRef}
                                className="cursor-pointer px-4 md:px-8 py-1.5 md:py-3 font-[roboto] rounded-xl bg-[#587821] text-white font-medium hover:scale-105 transition duration-300"
                            >
                                Book Appointment
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
