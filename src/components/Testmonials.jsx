import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaQuoteRight, FaStar } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

import test1 from "../images/test1.png";
import test2 from "../images/test2.png";
import test3 from "../images/test3.png";
import test4 from "../images/test4.png";
import test5 from "../images/test5.jpg";
import test6 from "../images/test6.webp";
import test7 from "../images/test7.jpg";
import test8 from "../images/test8.jpg";
import test9 from "../images/test9.jpg";
import test10 from "../images/test10.jpg";
import test11 from "../images/test11.jpeg";
import test12 from "../images/test12.jpeg";
import test13 from "../images/test13.jpeg";
import test14 from "../images/test14.jpg";
import test15 from "../images/test15.jpg";

const testimonials = [
{ id: 1, name: "Chandra Mohan", image: test1, rating: 5, review: "Providing excellent, personalized care for every individual disease, ensuring holistic wellness with Siddha Ayurveda’s natural healing methods." },
{ id: 2, name: "Revathy", image: test2, rating: 5, review: "I had an excellent experience at Life Plus Siddha. Accurate diagnosis, gentle care, and effective treatment for quick recovery." },
{ id: 3, name: "Jaya", image: test3, rating: 5, review: "Life Plus is excellent for natural healthcare. Affordable, professional, and effective treatment with experienced doctors and therapists." },
{ id: 4, name: "Dr Arthi Balu", image: test4, rating: 5, review: "I recommend Dr. Sheela for naturopathy. Hot oil massage, acupuncture, and mud therapy gave me significant relief and better sleep." },
{ id: 5, name: "Revathi", image: test5, rating: 5, review: "Life Plus Ayush Vaidyasala is very easy to reach. The location is clear and simple to find. There are good signs outside, and parking is available. The staff are friendly and help you quickly. You can get help without any trouble. This makes it a great place for everyone to visit! I always feel welcome here. I give it an excellent rating!" },
{ id: 6, name: "George", image: test6, rating: 5, review: "My experience at Life Plus Ayush Vaidyasala was exceptional. The skilled doctors and physiotherapists provided personalized care, ensuring effective treatment tailored to my needs. Their holistic approach and dedication to patient well-being were evident throughout my visit. I left feeling rejuvenated and empowered, with significant improvements in my health. Highly recommended!" },
{ id: 7, name: "Atchaya", image: test7, rating: 5, review: "I had an excellent experience at Life Plus Ayush Vaidyasala. The care I received was of a very high standard. The doctors and physiotherapists were professional, knowledgeable, and attentive to my needs. They took the time to explain everything clearly and made me feel comfortable throughout my treatment. I highly recommend this place for anyone seeking quality healthcare!" },
{ id: 8, name: "Saran", image: test8, rating: 5, review: "Life Plus Ayush Vaidyasala is a gem for those seeking authentic Ayurvedic treatment. The doctors here are knowledgeable and offer personalized care. The clinic is reasonably priced and the atmosphere is clean & hygienic. I highly recommend this place for anyone looking to experience the benefits of Ayurveda." },
{ id: 9, name: "Ravi Kumar", image: test9, rating: 5, review: "Hello Everyone, I have been undergoing treatment for the knee pain for the past few months, my knee pain reduced significantly and I am continuing Dr.Sheelas kindly and considerate instructions , there is full hope that it will recover completely soon. My sincere Thanks to Life plus Ayush Vaidhyasala and Doctors." },
{ id: 10, name: "Kumar", image: test10, rating: 5, review: "Dear All,GoodDay!!! Currently I am undergoing treatment with Dr.Sheela Devi who is managing my diabities and skin-Relatedissues.The treatment has been very effective,and I am pleased to share that the medications prescribed have no side effects. Dr.Sheela and her team are highly approciable and responsive at all times.I generously appreciate the careand attention provided.Based on my experience,I can confidently saybthat,this is the one of the best clinics,and Dr Sheela isvamiung the finest doctors I have..." },
{ id: 11, name: "VASANTH", image: test11, rating: 5, review: "I am so happy with the treatment Doctors n therapist are well experienced Ambience n cleanliness is good ." },
{ id: 12, name: "Anand", image: test12, rating: 5, review: "Well experienced doctor and staff, affordable price only" },
{ id: 13, name: "Babu x", image: test13, rating: 5, review: "Its feeling like home. Specially Dr sheel is way of talking and advising very good." },
{ id: 14, name: "Kalaiarasan", image: test14, rating: 5, review: "Good treatment" },
{ id: 15, name: "Lakshmi", image: test15, rating: 5, review: "" },
];

const Testimonials = () => {
  const swiperRef = useRef(null);
  const [expandedIds, setExpandedIds] = useState([]);

  const handleMouseEnter = () => {
    const s = swiperRef.current;
    if (s && s.autoplay?.stop) s.autoplay.stop();
  };

  const handleMouseLeave = () => {
    const s = swiperRef.current;
    if (s && s.autoplay?.start) s.autoplay.start();
  };

  const toggleExpand = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full px-4 py-10">
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          onSwiper={(s) => (swiperRef.current = s)}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full custom-swiper"
        >
          {testimonials.map((testimonial) => {
            const isExpanded = expandedIds.includes(testimonial.id);
            const reviewText = testimonial.review || "No review provided.";
            const truncated = reviewText.length > 150
              ? reviewText.slice(0, 150) + "..."
              : reviewText;

            return (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-[#f9f3eb] drop-shadow-sm px-6 py-10 relative overflow-hidden rounded-lg min-h-[420px] flex flex-col items-center transition-transform duration-300 hover:-translate-y-2">
                  {/* Quote Icon */}
                  <div className="bg-white absolute w-fit -top-1 right-0 pt-5 pr-5 pl-7 pb-7 rounded-bl-full shadow-sm">
                    <FaQuoteRight className="text-[24px] text-[#a64c4f]" />
                  </div>

                  {/* Avatar */}
                  <div className="w-20 h-20 rounded-full drop-shadow-md shadow-lg overflow-hidden mb-6">
                    <img
                      src={testimonial.image}
                      className="w-full h-full object-cover"
                      alt={testimonial.name || "User"}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col items-center gap-y-2 px-3 flex-1 overflow-hidden">
                    <h3 className="text-[18px] font-semibold font-[Merriweather] text-gray-900">
                      {testimonial.name || "Anonymous"}
                    </h3>

                    {/* Star Rating */}
                    <div className="flex items-center justify-center gap-x-2 my-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`text-[16px] ${
                            i < (testimonial.rating || 0)
                              ? "text-yellow-500"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Review */}
                    <p className="text-[12px] md:text-[14px] font-[Roboto] text-gray-600 text-center leading-6">
                      {isExpanded ? reviewText : truncated}
                    </p>

                    {reviewText.length > 150 && (
                      <button
                        className="mt-2 text-[#a64c4f] font-semibold text-sm hover:underline cursor-pointer"
                        onClick={() => toggleExpand(testimonial.id)}
                      >
                        {isExpanded ? "Read Less" : "Read More"}
                      </button>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
