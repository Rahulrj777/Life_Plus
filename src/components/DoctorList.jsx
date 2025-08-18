import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import AOS from 'aos';
import 'aos/dist/aos.css';


import { FaStethoscope, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { TiArrowLeftThick, TiArrowRightThick } from 'react-icons/ti';

// ✅ Import separate doctor images
import doctor1 from "../images/doctors/doctor.jpg";
import doctor2 from "../images/doctors/3.jpg";
import doctor3 from "../images/doctors/doctor.jpg";
import doctor4 from "../images/doctors/doctor.jpg"; 
import doctor5 from "../images/doctors/2.jpg";
import doctor6 from "../images/doctors/1.jpg";


// ✅ Add images to the doctor list
const doctorList = [
    { name: "Dr. A. Sheeladevi BSMS, MD(S)", quote: "Registered Medical Practitioner", image: "" },
    { name: "Dr. A. Vivekanandan BSMS, MD(S)", quote: "Registered Medical Practitioner", image: doctor2 },
    // { name: "Dr. T. Sophia BNYS", quote: "Registered Medical Practitioner", image: doctor3 },
    { name: "Dr. M.S. Sivaranjani BNYS, MD(YOGA)", quote: "Registered Medical Practitioner", image: "" },
    { name: "Dr. B. Atchaya BAMS", quote: "Registered Medical Practitioner", image: doctor5 },
    { name: "Dr. M. Suguna BAMS", quote: "Registered Ayurvedic Physician", image: doctor6 },
];

const DoctorList = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null); // Store swiper instance

    useEffect(() => {
        if (
            swiperRef.current &&
            swiperRef.current.params &&
            swiperRef.current.params.navigation
        ) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div className="w-full  relative">

            <Swiper
                slidesPerView={3}
                spaceBetween={90}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                pagination={false} // ✅ This disables the dots
                modules={[Autoplay, Navigation]}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="mySwiper"
            >

                {doctorList.map((doctorInfo, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col items-center font-[poppins]">
                            <img
                                src={doctorInfo.image || "/path/to/placeholder.jpg"} // fallback image
                                alt={doctorInfo.name}
                                className="w-full h-[250px] object-cover rounded-xl drop-shadow-md shadow-md"
                            />

                            <div
                                className="relative bg-white min-h-[80px] -mt-10 shadow-md drop-shadow-md border-b-2 border-[#6d918c] w-[85%] md:w-[80%] mx-auto  flex flex-col items-center justify-center"
                                data-aos="fade-down"
                                data-aos-duration="1000"
                            >
                                <h3 className="text-[13px] md:text-[14px] font-semibold">{doctorInfo.name}</h3>
                                <p className="font-[roboto] font-medium text-[11px] md:text-[12px] text-gray-600 mt- ">
                                    {doctorInfo.quote}
                                </p>

                                <div
                                    className="absolute -top-6 left-2"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                >
                                    <div className="size-10 bg-[#6d918c] rounded-full p-2 flex justify-center items-center">
                                        <FaStethoscope className="text-white" />
                                    </div>
                                </div>
                            </div>



                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>


            <div className="flex  justify-start gap-4 mt-8">
                <button
                    ref={prevRef}
                    className="w-10 h-10 rounded-full cursor-pointer bg-white shadow-md flex justify-center items-center text-[#a64c4f] hover:bg-gray-100 transition"
                >
                    <TiArrowLeftThick />
                </button>
                <button
                    ref={nextRef}
                    className="w-10 h-10 rounded-full cursor-pointer bg-white shadow-md flex justify-center items-center text-[#a64c4f] hover:bg-gray-100 transition"
                >
                    <TiArrowRightThick />
                </button>
            </div>


        </div>
    );
};

export default DoctorList;
