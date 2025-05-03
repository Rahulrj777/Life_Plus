import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // Slick Slider CSS
import 'slick-carousel/slick/slick-theme.css'; // Slick Slider Theme CSS
import { TiArrowLeftThick, TiArrowRightThick } from 'react-icons/ti'; // Import arrow icons from react-icons
import gsap from 'gsap'; // Import GSAP for animation



import icon1 from '../images/icon/abhyangam.png'




import { FaLaptopMedical } from "react-icons/fa";



const BestServices = () => {
    const [centerIndex, setCenterIndex] = useState(2); // Initially setting the center slide to 2 (0-indexed)
    const sliderRef = useRef(null); // Create a reference for the Slider component
    const waveRef = useRef(null); // Reference for the wave SVG element
    const descriptionRef = useRef([]); // Array of refs for descriptions

    const slidesData = [
        {
            img: icon1,
            title: "Panchakarma",
        },
        {
            img: icon1,
            title: "Nasyam ",
        },
        {
            img: icon1,
            title: "Vamanam ",
        },
        {
            img: icon1,
            title: "Virechanam",
        },
        {
            img: icon1,
            title: "Raksta mokshanam",
        },
        {
            img: icon1,
            title: "Abhyangam ",
        },
        {
            img: icon1,
            title: "Steam bath ",
        },
        {
            img: icon1,
            title: "Podikizhi ",
        },
        {
            img: icon1,
            title: "Ilakizhi",
        },
        {
            img: icon1,
            title: "Navarakizhi",
        },
        {
            img: icon1,
            title: "Dhanyamlakizhi",
        },
        {
            img: icon1,
            title: "Dhanyamladhara",
        },
        {
            img: icon1,
            title: "Vasti",
        },
        {
            img: icon1,
            title: "janu vasti",
        },
        {
            img: icon1,
            title: "Upanaham",
        },
        {
            img: icon1,
            title: "Pada abhyangam",
        },
        {
            img: icon1,
            title: "Pizhichil",
        },
        {
            img: icon1,
            title: "Udvartanam ",
        },
        {
            img: icon1,
            title: "Takra dhara ",
        },
        {
            img: icon1,
            title: "Shirodhara ",
        },
        {
            img: icon1,
            title: "Shirovasti ",
        },
        {
            img: icon1,
            title: "Thalapothichil",
        },
        {
            img: icon1,
            title: "Kashayadhara",
        },
        {
            img: icon1,
            title: "Thokkanam",
        },
        {
            img: icon1,
            title: "Attai vidal",
        },
        {
            img: icon1,
            title: "Suttigai",
        },
        {
            img: icon1,
            title: "Patru",
        },
        {
            img: icon1,
            title: "Ottradam",
        },
        {
            img: icon1,
            title: "Nasiyam",
        },
        {
            img: icon1,
            title: "Vethu",
        },
        {
            img: icon1,
            title: "Seelai",
        },
        {
            img: icon1,
            title: "Ennai kattu",
        },
        {
            img: icon1,
            title: "Pugai",
        },
        {
            img: icon1,
            title: "Pottanum",
        },
        {
            img: icon1,
            title: "Pasai",
        },
        {
            img: icon1,
            title: "Kalimbu",
        },
        {
            img: icon1,
            title: "Peechu",
        },
        {
            img: icon1,
            title: "Dharai",
        },




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
    }, [centerIndex]); // Trigger animation whenever the centerIndex changes

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
                                {/* <div className="bg-white p-6 rounded-tr-3xl  rounded-bl-3xl border-l-2 border-green-500 shadow-md drop-shadow-md text-[28px] ">{slide.img}</div> */}
                            </div>

                            <div className='mt-4 '>
                                <h3 className='text-center text-[9px] md:text-[11px]  font-medium font-[Merriweather]'>{slide.title}</h3>
                            </div>


                            {/* <p
                                ref={(el) => descriptionRef.current[index] = el} // Assign the ref to each description
                                className={` text-[10px] md:text-[12px] text-black transition-opacity duration-500 ease-in-out ${centerIndex === index ? 'opacity-100' : 'opacity-0'}`}
                            >
                                {slide.description}
                            </p> */}


                        </div>

                    </div>
                ))}
            </Slider>

            {/* Left and Right Arrows */}
            <div className="flex items-center gap-x-4 md:gap-x-8 justify-start w-full px-4 md:w-[90%] ">
                <div className="z-10">
                    <button onClick={moveLeft} className="cursor-pointer bg-white hover:bg-[#a48125] hover:border hover:border-gray-100 text-[#a48125] hover:text-gray-50 p-2 hover:scale-105 duration-100 rounded-full shadow-lg">
                        <TiArrowLeftThick className="text-[12px] md:text-[22px]" />
                    </button>
                </div>

                <div className="z-10">
                    <button onClick={moveRight} className="cursor-pointer bg-white hover:bg-[#a48125] hover:border hover:border-gray-100 text-[#a48125] hover:text-gray-50 p-2 hover:scale-105 duration-100 rounded-full shadow-lg">
                        <TiArrowRightThick className="text-[12px] md:text-[22px]" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BestServices