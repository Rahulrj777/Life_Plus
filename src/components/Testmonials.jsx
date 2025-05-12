import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination, Autoplay } from "swiper/modules";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import doctor from "../images/doctor1.jpg";

import test1 from "../images/test1.png";
import test2 from "../images/test2.png";
import test3 from "../images/test3.png";
import test4 from "../images/test4.png";

const testimonials = [
  {
    id: 1,
    name: "Chandra mohan",
    role: "Book Keeper",
    image: test1,
    rating: 5,
    review:
      "Providing excellent, personalized care for every individual disease in both men and women, ensuring holistic wellness and effective treatment with a focus on Siddha Ayurveda’s natural healing methods.",
  },
  {
    id: 2,
    name: "Revathy",
    role: "Nutritionist",
    image: test2,
    rating: 5,
    review: "I had an excellent experience at Life Plus Siddha Ayurvedic Naturopathy Clinic Hospital. Doctors and physiotherapists gave accurate diagnosis, gentle care, and excellent treatment for speedy recovery.",
  },
  {
    id: 3,
    name: "Jaya",
    role: "Therapist",
    image: test3,
    rating: 4,
    review: "Life Plus Siddha & Ayurvedic & Naturopathy Clinic & Hospital is excellent for natural healthcare. Reasonable prices, great service, quick care, and expert doctors & physiotherapists.",
  },
  {
    id: 3,
    name: "Dr Arthi Balu",
    role: "Therapist",
    image: test4,
    rating: 5,
    review: "I recommend Dr. Sheela for naturopathy. As a dentist, I had neck pain radiating to my hand. After a week of hot oil massage, acupuncture & physio, I feel relief. Mud therapy gives smooth naps. Planning KATIVASTHI next!",
  },
];

const Testimonials = () => {
  return (
    <div className="w-full px-4 py-10">
      <Swiper
        modules={[Autoplay, Pagination,]}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        // navigation
        spaceBetween={30}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="w-full custom-swiper "
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-[#f9f3eb] drop-shadow-sm px-6 py-14 relative overflow-hidden rounded-lg h-[50vh]">
              <div className="bg-white absolute w-fit -top-1 right-0 pt-5 pr-5 pl-7 pb-7 rounded-bl-full">
                <FaQuoteRight className="text-[24px] text-[#a64c4f]" />
              </div>

              <div className="flex flex-col gap-y-6 items-center justify-center">
                <div className="w-20 h-20 rounded-full drop-shadow-md shadow-lg  overflow-hidden">
                  <img
                    src={testimonial.image}
                    className="w-full h-full object-cover "
                    alt={testimonial.name}
                  />
                </div>

                <div className="flex flex-col items-center gap-y-2">
                  <h3 className="text-[18px] font-semibold font-[Merriweather] text-gray-900">
                    {testimonial.name}
                  </h3>
                  {/* <p className="text-[12px] text-[#9dd246] text-center">
                    {testimonial.role}
                  </p> */}

                  <div className="flex items-center justify-center gap-x-2 my-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`text-[16px] ${
                          i < testimonial.rating
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-[10px] md:text-[12px] font-[roboto] text-gray-500 text-center">
                    {testimonial.review}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
