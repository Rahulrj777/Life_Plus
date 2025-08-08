import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import banner from '../images/banner/contact_banner.webp';
import phone from '../images/contact/phone.png';
import cup from '../images/contact/cup.png';

import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot, FaWhatsapp } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Enquiry from '../components/Enquiry';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="overflow-hidden">

      {/* ---------------- Hero Section ---------------- */}
      <section className="relative w-full h-[40vh] md:h-[60vh]">
        <img src={banner} className="w-full h-full object-cover" alt="Contact Banner" />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center px-4">
          <h3 className="font-black text-[18px] md:text-[42px] text-white text-center mb-2">
            A Place That Truly Cares!
          </h3>
          <p className="text-[10px] md:text-[14px] text-gray-200 text-center max-w-2xl">
            We’re here to guide you on your path to natural healing and holistic wellness.
            Contact us for consultations, treatments, or any queries about our services.
          </p>
        </div>
      </section>

      {/* ---------------- Form & Info Section ---------------- */}
      <section className="bg-[#f8f8ff] py-14 font-[poppins]">
        <div className="relative w-full px-4 md:w-[80%] mx-auto bg-[#33a54f] py-8 md:px-6 rounded-lg z-0">

          <div className="absolute bottom-8 left-0 -z-10" data-aos="fade-right">
            <img src={phone} className="w-60 object-cover" alt="Phone" />
          </div>

          <div className="flex flex-col md:flex-row items-start md:divide-x divide-green-200 gap-y-6">
            
            {/* Left - Info */}
            <div className="w-full md:w-[50%] px-4 md:px-10 flex flex-col justify-center">
              <div className="flex items-center gap-x-4 md:gap-x-8 mb-4">
                <div className="w-[50px]">
                  <img src={cup} className="w-full object-cover" alt="Cup" />
                </div>
                <h4 className="font-semibold text-[12px] md:text-[16px] text-white">
                  For inquiries or appointment bookings, reach out to us today!
                </h4>
              </div>

              <p className="text-gray-100 text-[10px] md:text-[12px] mb-6">
                Our team is ready to assist you with natural healing solutions and holistic wellness guidance.
              </p>

              <div className="flex flex-col gap-y-3">
                <div className="flex items-center gap-x-2">
                  <FaPhone className="text-white text-[16px]" />
                  <p className="text-white text-[12px] md:text-[14px]">+91 8015907797</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <MdEmail className="text-white text-[16px]" />
                  <p className="text-white text-[12px] md:text-[14px]">lifeplusayushvadhyasala@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="w-full md:w-[50%] px-2 md:px-6">
              <Enquiry />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Locations ---------------- */}
      <section className="bg-[#f3f3f3] py-12 font-[poppins]">
        <div className="w-full px-3 md:w-[80%] mx-auto">

          <div className="flex flex-col md:flex-row items-center gap-x-10 gap-y-6">

            {/* Location 1 */}
            <div className="w-full md:w-[50%] h-[31vh] md:h-[35vh]">
              <div className="flex flex-col justify-between bg-gray-50 rounded-md shadow px-6 py-8 h-full">
                <div className="flex flex-col justify-center items-center gap-y-4">
                  <FaLocationDot className="text-[30px] text-[#ea4951]" />
                  <div>
                    <h3 className="text-center uppercase font-bold text-[#79927c] text-[14px] md:text-[18px]">
                      Life Plus Herbal Health Care Centre
                    </h3>
                    <p className="text-center text-[11px] md:text-[14px] font-semibold text-gray-600">
                      27, Karuneegar St, Ramapuram, Chennai, Tamil Nadu 600088
                    </p>
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  <Link to="https://maps.app.goo.gl/C6hRF3BuVD38THQn9" target="_blank">
                    <button className="text-[12px] md:text-[14px] font-medium border border-[#6d918c] hover:bg-[#6d918c] hover:text-white px-4 py-2 rounded-md transition">
                      Get Directions
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Location 2 */}
            <div className="w-full md:w-[50%] h-[31vh] md:h-[35vh]">
              <div className="flex flex-col justify-between bg-gray-50 rounded-md shadow px-6 py-8 h-full">
                <div className="flex flex-col justify-center items-center gap-y-4">
                  <FaLocationDot className="text-[30px] text-[#ea4951]" />
                  <div>
                    <h3 className="text-center uppercase font-bold text-[#79927c] text-[14px] md:text-[18px]">
                      Life Plus Herbal Health Care Centre
                    </h3>
                    <p className="text-center text-[11px] md:text-[14px] font-semibold text-gray-600">
                      No. 212, Imayam Colony, Anna Nagar West Extn, Chennai 600101
                    </p>
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  <Link to="https://maps.app.goo.gl/u6qeA6gjTrh3YpRc6" target="_blank">
                    <button className="text-[12px] md:text-[14px] font-medium border border-[#6d918c] hover:bg-[#6d918c] hover:text-white px-4 py-2 rounded-md transition">
                      Get Directions
                    </button>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------- Floating Quick Access Buttons ---------------- */}
      <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50">
        <a href="https://wa.me/918015907797" target="_blank" rel="noopener noreferrer">
          <div className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow cursor-pointer">
            <FaWhatsapp className="text-[20px]" />
          </div>
        </a>
        <a href="tel:+918015907797">
          <div className="bg-yellow-400 hover:bg-yellow-500 text-black p-3 rounded-full shadow cursor-pointer">
            <FaPhone className="text-[20px]" />
          </div>
        </a>
      </div>

    </div>
  );
};

export default Contact;
