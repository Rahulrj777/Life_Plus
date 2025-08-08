import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaQuoteRight, FaStar } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

import test1 from "../images/test1.png";
import test2 from "../images/test2.png";
import test3 from "../images/test3.png";
import test4 from "../images/test4.png";

const testimonials = [
  {
    id: 1,
    name: "Chandra Mohan",
    image: test1,
    rating: 5,
    review:
      "Providing excellent, personalized care for every individual disease, ensuring holistic wellness with Siddha Ayurveda’s natural healing methods.",
  },
  {
    id: 2,
    name: "Revathy",
    image: test2,
    rating: 5,
    review:
      "I had an excellent experience at Life Plus Siddha. Accurate diagnosis, gentle care, and effective treatment for quick recovery.",
  },
  {
    id: 3,
    name: "Jaya",
    image: test3,
    rating: 4,
    review:
      "Life Plus is excellent for natural healthcare. Affordable, professional, and effective treatment with experienced doctors and therapists.",
  },
  {
    id: 4,
    name: "Dr Arthi Balu",
    image: test4,
    rating: 5,
    review:
      "I recommend Dr. Sheela for naturopathy. Hot oil massage, acupuncture, and mud therapy gave me significant relief and better sleep.",
  },
];

const Testimonials = () => {
  return (
    <div className="w-full px-4 py-10">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        spaceBetween={30}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full custom-swiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-[#f9f3eb] drop-shadow-sm px-6 py-10 relative overflow-hidden rounded-lg min-h-[350px] flex flex-col items-center transition-transform duration-300 hover:-translate-y-2">
              
              {/* Quote Icon */}
              <div className="bg-white absolute w-fit -top-1 right-0 pt-5 pr-5 pl-7 pb-7 rounded-bl-full shadow-sm">
                <FaQuoteRight className="text-[24px] text-[#a64c4f]" />
              </div>

              {/* Avatar */}
              <div className="w-20 h-20 rounded-full drop-shadow-md shadow-lg overflow-hidden mb-6">
                <img
                  src={testimonial.image}
                  className="w-full h-full object-cover"
                  alt={testimonial.name}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col items-center gap-y-2 px-3">
                <h3 className="text-[18px] font-semibold font-[Merriweather] text-gray-900">
                  {testimonial.name}
                </h3>

                {/* Star Rating Only */}
                <div className="flex items-center justify-center gap-x-2 my-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-[16px] ${
                        i < testimonial.rating ? "text-yellow-500" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-[12px] md:text-[14px] font-[Roboto] text-gray-600 text-center leading-6">
                  {testimonial.review}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;