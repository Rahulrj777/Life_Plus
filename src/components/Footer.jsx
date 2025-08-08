import { Link } from "react-router-dom";
import logo from "../images/logo.png";

import { FiInstagram } from "react-icons/fi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { LuFacebook } from "react-icons/lu";
import { MdOutlinePhoneAndroid, MdOutlineMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  const topPage = () => window.scrollTo(0, 0);

  const socialIconClass =
    "w-6 h-6 md:w-9 md:h-9 bg-white rounded-full flex justify-center items-center shadow-md cursor-pointer transition-all duration-300 hover:bg-black hover:shadow-lg";

  const socialIconStyle =
    "text-[12px] sm:text-[13px] md:text-[16px] text-[#8e6600] hover:text-white";

  const linkClass =
    "text-gray-100 my-2 block text-[12px] sm:text-[13px] md:text-[13px] cursor-pointer hover:text-black transition-colors duration-300";

  return (
    <div className="w-full bg-[#86a39f] font-[poppins]">
      {/* Upper Footer */}
      <div className="pt-10 md:pt-14">
        <div className="px-4 w-full md:w-[85%] mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-gray-800">
          
          {/* Logo + About */}
          <div>
            <img src={logo} className="w-16 sm:w-40 object-cover" alt="logo" />
            <p className="text-gray-100 text-[11px] sm:text-[12px] md:text-[13px] mt-3 leading-5">
              Life Plus Herbal Healthcare is dedicated to holistic healing through
              Siddha, Ayurveda, and Naturopathy, bringing wellness to modern lifestyles.
            </p>
          </div>

          {/* Links Combined */}
          <div>
            <h3 className="text-[13px] sm:text-[15px] md:text-[16px] uppercase text-white font-bold font-[Merriweather] mb-3">
              Quick Links
            </h3>
            <div className="grid grid-cols-1">
              <Link onClick={topPage} className={linkClass} to="/">Home</Link>
              <Link onClick={topPage} className={linkClass} to="/about">About</Link>
              <Link onClick={topPage} className={linkClass} to="/contact">Contact</Link>
              <Link onClick={topPage} className={linkClass} to="/">Help Center</Link>
              <Link onClick={topPage} className={linkClass} to="/">Privacy Policy</Link>
              <Link onClick={topPage} className={linkClass} to="/">Terms & Conditions</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[13px] sm:text-[15px] md:text-[16px] uppercase text-white font-bold font-[Merriweather] mb-3">
              Contact
            </h3>

            {/* Address 1 */}
            <div className="flex items-start gap-x-2 mb-3">
              <FaLocationDot className="text-white text-[16px] md:text-[20px] mt-0.5" />
              <p className="text-gray-100 text-[11px] sm:text-[12px] md:text-[13px] leading-5">
                No:212, Imayam Colony, 2nd Street,
                <br /> Anna Nagar West Extension,
                <br /> Chennai - 600101
              </p>
            </div>

            {/* Address 2 */}
            <div className="flex items-start gap-x-2 mb-3">
              <FaLocationDot className="text-white text-[16px] md:text-[20px] mt-0.5" />
              <p className="text-gray-100 text-[11px] sm:text-[12px] md:text-[13px] leading-5">
                27th Karuneegar Street, Adambakkam,
                <br /> Chennai - 600088
              </p>
            </div>

            {/* Email */}
            <a
              href="mailto:lifeplusayushvadhyasala@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-100 flex items-center gap-x-2 text-[11px] sm:text-[12px] md:text-[13px] hover:text-black mb-2"
            >
              <MdOutlineMail className="text-[16px] md:text-[20px]" />
              lifeplusayushvadhyasala@gmail.com
            </a>

            {/* Phone Numbers */}
            <a href="tel:918015907797" className="text-gray-100 flex items-center gap-x-2 text-[11px] sm:text-[12px] md:text-[13px] hover:text-black mb-2">
              <MdOutlinePhoneAndroid className="text-[16px] md:text-[20px]" /> +91 8015907797
            </a>
            <a href="tel:918015525797" className="text-gray-100 flex items-center gap-x-2 text-[11px] sm:text-[12px] md:text-[13px] hover:text-black">
              <MdOutlinePhoneAndroid className="text-[16px] md:text-[20px]" /> +91 8015525797
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#86a39f] md:pt-2 border-t border-gray-200 mt-6">
        <div className="flex flex-col md:flex-row-reverse justify-between items-center w-full md:w-[85%] mx-auto px-2 py-3 md:py-5">
          
          {/* Social Icons */}
          <div className="flex flex-row gap-x-4 md:gap-x-8 mt-2">
            <a href="#" target="_blank" className={socialIconClass}><FaSquareXTwitter className={socialIconStyle} /></a>
            <a href="https://www.instagram.com/lifeplusayushvaidhyasala" target="_blank" className={socialIconClass}><FiInstagram className={socialIconStyle} /></a>
            <a href="#" target="_blank" className={socialIconClass}><PiLinkedinLogoBold className={socialIconStyle} /></a>
            <a href="#" target="_blank" className={socialIconClass}><LuFacebook className={socialIconStyle} /></a>
          </div>

          {/* Copyright */}
          <div className="mt-3 md:my-5 text-[9px] sm:text-[11px] md:text-[13px] text-gray-100 text-center">
            Life Plus Pvt Ltd © 2025. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
