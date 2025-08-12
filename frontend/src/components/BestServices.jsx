import { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // Slick Slider CSS
import 'slick-carousel/slick/slick-theme.css'; // Slick Slider Theme CSS
import { TiArrowLeftThick, TiArrowRightThick } from 'react-icons/ti'; // Import arrow icons from react-icons
import gsap from 'gsap'; // Import GSAP for animation

import icon1 from '../images/therapies/back_pain_neck_pain.png'
import icon2 from '../images/therapies/spine_disorders.png'
import icon3 from '../images/therapies/Frozen_Shoulder.png'
import icon4 from '../images/therapies/heel.png'
import icon5 from '../images/therapies/Rheumatoid_Care.png'
import icon6 from '../images/therapies/Psoriasis.png'
import icon7 from '../images/therapies/Eczema_Therapy.png'
import icon8 from '../images/therapies/Autoimmune_Care.png'
import icon9 from '../images/therapies/hair_loss.png'
import icon10 from '../images/therapies/thinning_hair.png'
import icon11 from '../images/therapies/alopecia.png'
import icon12 from '../images/therapies/wheelchair.png'
import icon13 from '../images/therapies/Stroke_Rehabilitation.png'
import icon14 from '../images/therapies/Diabetic_Foot.png'
import icon15 from '../images/therapies/Digestive_Care.png'
import icon16 from '../images/therapies/asthma.png'
import icon17 from '../images/therapies/cold.png'
import icon18 from '../images/therapies/Migraine_Treatment.png'
import icon19 from '../images/therapies/Allergy_Management.png'
import icon20 from '../images/therapies/Anxiety_Helief.png'
import icon21 from '../images/therapies/sleeping.png'
import icon22 from '../images/therapies/Gut_Health.png'
import icon23 from '../images/therapies/Digestive_Care.png'
import icon24 from '../images/therapies/kidney_stone.png'
import icon25 from '../images/therapies/Urinary_Health.png'

const BestServices = () => {
    const [centerIndex, setCenterIndex] = useState(2); 
    const sliderRef = useRef(null); // Create a reference for the Slider component
    const waveRef = useRef(null); // Reference for the wave SVG element
    const descriptionRef = useRef([]); // Array of refs for descriptions

    const slidesData = [
        {
            img: icon1,
            title: "Neck & Back Pain",
        },
        {
            img: icon2,
            title: "Spine Disorders",
        },
        {
            img: icon3,
            title: "Frozen Shoulder",
        },
        {
            img: icon4,
            title: "Heel Pain",
        },
        {
            img: icon5,
            title: "Rheumatoid Care",
        },
        {
            img: icon6,
            title: "Psoriasis Treatment",
        },
        {
            img: icon7,
            title: "Eczema Therapy",
        },
        {
            img: icon8,
            title: "Autoimmune Care",
        },
        {
            img: icon9,
            title: "Hair Fall",
        },
        {
            img: icon10,
            title: "Thinning Hair",
        },
        {
            img: icon11,
            title: "Alopecia Care",
        },
        {
            img: icon12,
            title: "Paralysis Care",
        },
        {
            img: icon13,
            title: "Stroke Rehabilitation",
        },
        {
            img: icon14,
            title: "Diabetic Foot",
        },
        {
            img: icon15,
            title: "Diabetes Diet",
        },
        {
            img: icon16,
            title: "Asthma Care",
        },
        {
            img: icon17,
            title: "Sinusitis Relief",
        },
        {
            img: icon18,
            title: "Migraine Treatment",
        },
        {
            img: icon19,
            title: "Allergy Management",
        },
        {
            img: icon20,
            title: "Anxiety Relief",
        },
        {
            img: icon21,
            title: "Sleep Wellness",
        },
        {
            img: icon22,
            title: "Gut Health",
        },
        {
            img: icon23,
            title: "Digestive Care",
        },
        {
            img: icon24,
            title: "Kidney Stone Care",
        },
        {
            img: icon25,
            title: "Urinary Health",
        }
    ];

    const settings = {
        // dots: true, 
        infinite: true, // Infinite loop of slides
        speed: 500, // Animation speed in milliseconds
        slidesToShow: 8, // Show 3 slides at a time
        autoplay: true,
        slidesToScroll: 1, // Move one slide at a time
        autoplaySpeed: 3000, // Slide every 2 seconds
        centerMode: true, // Center the active slide
        focusOnSelect: true, // Allow clicking on slides to navigate
        beforeChange: (current, next) => {
            setCenterIndex(next); // Update centerIndex when the slide is changing
        },
        responsive: [
            {
                breakpoint: 1024, // For laptops and desktops
                settings: {
                    slidesToShow: 7, // Show 3 slides at a time on larger screens
                    centerMode: true, // Keep center mode for consistency
                    focusOnSelect: true, // Keep focus on select
                },
            },
            {
                breakpoint: 768, // For mobile devices
                settings: {
                    slidesToShow: 2, // Show 1 slide at a time for mobile
                    centerMode: true, // Keep center mode for mobile
                    focusOnSelect: true, // Keep focus on select
                },
            },
        ],
    };

    // Function to move to the previous slide
    const moveLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev(); // Use slickPrev to go to the previous slide
        }
    };

    // Function to move to the next slide
    const moveRight = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext(); // Use slickNext to go to the next slide
        }
    };

    // Use GSAP to animate the number when the slide is in the center
    useEffect(() => {
        gsap.to('.step-number', {
            scale: 1, // Reset scale to 1
            rotation: 0, // Reset rotation to 0
            opacity: 0.7, // Set opacity to 0.7 for inactive numbers
            duration: 0.3,
            ease: 'power2.out',
        });

        if (sliderRef.current) {
            gsap.to(`.step-number-${centerIndex}`, {
                scale: 1.2, // Scale up the centered number
                rotation: 360, // Rotate the centered number 360 degrees
                opacity: 1, // Set opacity to 1 for the active number
                duration: 2,
                ease: 'power2.out',
            });
        }
    }, [centerIndex]); // Re-run the animation on centerIndex change

    // GSAP animation for the wave (continuous movement)
    useEffect(() => {
        if (waveRef.current) {
            gsap.to(waveRef.current, {
                duration: 10, // Duration for one complete cycle of the wave
                x: 300, // Move the wave horizontally
                repeat: -1, // Repeat indefinitely
                yoyo: true, // Make the animation reverse after reaching the end
                ease: 'power1.inOut', // Smooth easing for the movement
            });
        }

        gsap.fromTo(
            '.wave-path',
            { strokeDashoffset: 1000 }, // Start from a "drawn" path offset
            { strokeDashoffset: 0, duration: 2, ease: 'power2.out' }
        );

    }, []);

    useEffect(() => {
        // Check if descriptionRef has a valid reference for the current slide
        if (descriptionRef.current[centerIndex]) {
            gsap.fromTo(
                descriptionRef.current[centerIndex],
                { opacity: 0, y: 100 }, // Starting from invisible and 50px down
                { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' } // Fade in and move up
            );
        }
    }, [centerIndex]);

    return (
        <div className="relative w-full md:w-full mx-auto overflow-hidden px-1 pb-4 ">
            <Slider ref={sliderRef} {...settings}>
                {slidesData.map((slide, index) => (
                    <div key={index} className="w-full flex justify-center items-center transition-all duration-500 ease-in-out relative">
                        <div className="text-center relative pb-8 md:pb-12 w-full">
                            {/* Title and Image for each slide */}
                            <div className='flex justify-center items-center w-full '>
                                <div className='px-5 md:px-4 py-3 md:py-2 rounded-lg drop-shadow-sm bg-white border border-gray-100 '>
                                    <img src={slide.img} className="text-3xl font-bold text-gray-950 mb-2 w-9  md:w-10 object-cover " />
                                </div>
                            </div>

                            <div className='mt-4 '>
                                <h3 className='text-center text-[9px] md:text-[11px]  font-medium font-[Merriweather]'>{slide.title}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

            {/* Left and Right Arrows */}
            <div className="flex items-center gap-x-4 md:gap-x-8 justify-start w-full px-4 md:w-[90%] ">
                <div className="z-10">
                    <button onClick={moveLeft} className="cursor-pointer bg-white hover:bg-[#20a534] hover:border hover:border-gray-100 text-[#20a534] hover:text-gray-50 p-2 hover:scale-105 duration-100 rounded-full shadow-lg">
                        <TiArrowLeftThick className="text-[12px] md:text-[22px]" />
                    </button>
                </div>

                <div className="z-10">
                    <button onClick={moveRight} className="cursor-pointer bg-white hover:bg-[#20a534] hover:border hover:border-gray-100 text-[#20a534] hover:text-gray-50 p-2 hover:scale-105 duration-100 rounded-full shadow-lg">
                        <TiArrowRightThick className="text-[12px] md:text-[22px]" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BestServices