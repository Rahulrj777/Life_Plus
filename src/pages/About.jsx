import { useEffect, useRef } from 'react';
import { Lightbulb, Heart, Leaf } from "lucide-react";
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import DoctorList from '../components/DoctorList';
import bgbanner from '../images/about/about_banner-1.jpg';
import aboutIllustration from '../images/about/about.png';
import herobanner from '../images/banner/About_banner.jpg'

import Gimg1 from '../images/Gallery/Gimg1.jpg';
import Gimg2 from '../images/Gallery/Gimg2.jpg';
import Gimg3 from '../images/Gallery/Gimg3.jpg';

const data = [
  {
    title: "Our Vision",
    icon: <Lightbulb className="w-10 h-10 text-green-500" />,
    description:
      "To be a trusted center of excellence in Siddha medicine, blending time-tested traditional wisdom with modern healthcare practices to improve the quality of life for people worldwide.",
  },
  {
    title: "Our Mission",
    icon: <Heart className="w-10 h-10 text-pink-500" />,
    description: (
      <ul className="list-disc text-left ml-5 space-y-2">
        <li>To provide holistic, patient-centered healthcare through authentic Siddha practices.</li>
        <li>To promote lifestyle transformation and preventive care alongside curative treatments.</li>
        <li>To ensure accessibility of Siddha medicine for all sections of society.</li>
        <li>To nurture skilled practitioners and uphold the rich heritage of the Siddha system with integrity and compassion.</li>
      </ul>
    ),
  },
  {
    title: "Our Approach",
    icon: <Leaf className="w-10 h-10 text-emerald-600" />,
    description:
      "We combine ancient healing traditions with modern insights to help you heal naturally and live better.",
  },
];

const galleryData = [
  {
    id: 1,
    name: "Treating with Care",
    img: Gimg1,
  },
  {
    id: 2,
    name: "Life Plus - Ayurveda Medical",
    img:Gimg2,
  },
  {
    id: 3,
    name: "Plantain Leaf Bath",
    img: Gimg3,
  },
];

const About = () => {
  const buttonRef = useRef(null);
  const textRef = useRef(null);

  // Subtle animation for button + text
  useEffect(() => {
    gsap.fromTo(
      buttonRef.current,
      { scale: 1 },
      { scale: 1.05, duration: 0.8, ease: 'power2.inOut', repeat: -1, yoyo: true }
    );

    gsap.fromTo(
      textRef.current,
      { x: -20, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );
  }, []);

  return (
    <div className="overflow-hidden">
      {/* 1️⃣ Hero Section */}
      <section className="relative w-full md:h-[67vh] flex items-center justify-center overflow-hidden">
        <img
          src={herobanner}
          className="absolute w-full h-full object-cover"
          alt="About Banner"
          loading="lazy"
        />
      </section>

      {/* 2️⃣ Our Journey / Story */}
      <section className="py-10 md:py-20 bg-white">
        <div className="w-full px-5 md:w-[85%] mx-auto">
          <div className="flex flex-col-reverse md:flex-row items-center gap-y-10 md:gap-x-14">
            <div className="w-full md:w-[50%] flex justify-center">
              <img
                src={aboutIllustration}
                className="w-[90%] md:w-[75%] drop-shadow-md"
                alt="About"
              />
            </div>
            <div className="w-full md:w-[50%]">
              <p className="text-[12px] md:text-[14px] text-green-600 font-semibold mb-2">
                Our Story
              </p>
              <h2 className="text-[20px] md:text-[32px] font-bold text-[#2c7f4c] mb-4 uppercase">
                Our Journey Towards Holistic Healing
              </h2>
              <p className="text-[12px] md:text-[14px] text-gray-600 leading-6 mb-3 text-justify">
                Life Plus Ayush vaidhyasala was founded in 2022 by Dr. A. Sheela Devi with the vision of enhancing the quality of life of people through the traditional Siddha system of medicine. The hospital is supported by a team of skilled doctors and dedicated staff, providing holistic care ranging from lifestyle management to life-saving treatments. Over the past three years, more than 45,000 patients have benefitted from its services.
              </p>
              <p className="text-[12px] md:text-[14px] text-gray-600 leading-6 text-justify">
                Dr. A. Sheela Devi, M.D (S), brings over 15 years of expertise in Siddha medicine. She completed both her Bachelor’s and Postgraduate Siddha degrees at the Government Siddha Medical College, Tirunelveli. She possesses profound knowledge in Naadi diagnostics, Panchakarma, and Varma techniques, offering a comprehensive approach to patient care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ Mission & Values */}
      <section className="py-10 md:py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="w-full px-5 md:w-[85%] mx-auto text-center">
          <h2 className="text-[20px] md:text-[32px] font-bold text-[#2c7f4c] mb-10">
            Mission, Vision & Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-[16px] md:text-[20px] font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <div className="text-[12px] md:text-[14px] text-gray-600">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4️⃣ People Behind the Purpose */}
      <section className="py-10 md:py-20 bg-white">
        <div className="w-full px-4 md:w-[85%] mx-auto text-center">
          <h2 className="text-[20px] md:text-[32px] font-bold text-[#2c7f4c] mb-10">
            People Behind the Purpose
          </h2>
          <DoctorList />
        </div>
      </section>

      {/* 5️⃣ Gallery Section */}
      <div className="bg-gray-50 py-10">
        <div className="w-[90%] md:w-[80%] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
            Clinic Gallery
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden transition duration-300"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-60 object-cover"
                />
                <div className="p-2 text-center">
                  <p className="text-sm md:text-base font-medium text-gray-700">
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6️⃣ Call-to-Action Section */}
        <section className="py-10 md:py-28 bg-black/55 relative overflow-hidden">
            {/* Soft herbal background image with dark overlay */}
            <div className="absolute inset-0">
                <img
                src={bgbanner}
                className="w-full h-full object-cover opacity-30"
                alt="Herbal Background"
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="relative w-full px-4 md:w-[80%] mx-auto">
                <div className="flex justify-center items-center">
                    <div className="flex flex-col items-center gap-y-6 md:gap-y-8 text-center">
                        <p className="text-[12px] md:text-[24px] md:w-[90%] leading-5 md:leading-11 font-semibold text-white">
                        Rooted in Siddha and Ayurveda, we offer holistic treatments that restore
                        balance, promoting lasting health and natural wellness.
                        </p>

                        <div className="flex flex-col md:flex-row gap-6">
                        <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                            <button
                            ref={buttonRef}
                            className="cursor-pointer text-[14px] md:text-[16px] px-6 md:px-10 py-2 md:py-3 rounded-md md:rounded-xl bg-[#d480a1] text-white font-medium hover:scale-105 transition duration-300"
                            >
                            Book Appointment
                            </button>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
};

export default About;