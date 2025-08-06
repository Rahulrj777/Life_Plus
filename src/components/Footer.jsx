import { Link } from "react-router-dom";
import logo from "../images/logo.png";

import { FiInstagram } from "react-icons/fi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { LuFacebook } from "react-icons/lu";
import { MdOutlinePhoneAndroid, MdOutlineMail } from "react-icons/md";

const Footer = () => {
  const topPage = () => window.scrollTo(0, 0);

  const socialIconClass =
    "w-6 h-6 md:w-9 md:h-9 bg-white rounded-full flex justify-center items-center shadow-md drop-shadow-md cursor-pointer transition-all duration-300 hover:bg-black hover:shadow-lg hover:drop-shadow-xl";

  const socialIconStyle = "text-[12px] sm:text-[13px] md:text-[16px] text-[#8e6600] hover:text-white";

  const linkClass =
    "text-gray-100 my-3 block text-[12px] sm:text-[13px] md:text-[13px] cursor-pointer transition-colors duration-300 hover:text-black";

  return (
    <div className="w-full relative bg-[#86a39f] font-[poppins]">
      {/* Upper Footer */}
      <div className="pt-8 md:pt-14 z-40">
        <div className="px-4 w-full md:w-[85%] mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-gray-800">
          {/* Logo + About */}
          <div className="p-2 md:p-4">
            <img src={logo} className="w-14 sm:w-14 md:w-38 object-cover" alt="logo" />
          </div>

          {/* Get in Touch */}
          <div className="p-2 md:p-4">
            <h3 className="text-[12px] sm:text-[15px] md:text-[16px] uppercase text-white font-bold font-[Merriweather] pb-1 w-fit">
              Get in Touch
            </h3>
            <Link onClick={topPage} className={linkClass} to="/">
              Home
            </Link>
            <Link onClick={topPage} className={linkClass} to="/about">
              About
            </Link>
            <Link onClick={topPage} className={linkClass} to="/contact">
              Contact
            </Link>
          </div>

          {/* Support */}
          <div className="p-2 md:p-4">
            <h3 className="text-[12px] sm:text-[15px] md:text-[16px] uppercase text-white font-bold font-[Merriweather] pb-1 w-fit">
              Support
            </h3>
            <Link onClick={topPage} to="/" className={linkClass}>
              Help Center
            </Link>
            <Link onClick={topPage} to="/" className={linkClass}>
              Privacy Policy
            </Link>
            <Link onClick={topPage} to="/" className={linkClass}>
              Terms & Conditions
            </Link>
          </div>

          {/* Contact */}
          <div className="p-2 md:p-4">
            <h3 className="text-[12px] sm:text-[15px] md:text-[16px] uppercase text-white font-bold font-[Merriweather] pb-1 w-fit">
              Contact
            </h3>
            <p className="text-gray-100 my-3 block text-[12px] sm:text-[13px] md:text-[13px]">Chennai</p>
            <a
              href="mailto:lifeplusayushvadhyasala@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-100 my-3 flex items-center gap-x-2 text-[12px] sm:text-[13px] md:text-[13px] hover:text-black"
            >
              <MdOutlineMail className="text-[16px] md:text-[20px]" /> lifeplusayushvadhyasala@gmail.com
            </a>
            <a
              href="tel:918015907797"
              className="text-gray-100 my-3 flex items-center gap-x-2 text-[12px] sm:text-[13px] md:text-[13px] hover:text-black"
            >
              <MdOutlinePhoneAndroid className="text-[16px] md:text-[20px]" /> +91 8015907797
            </a>
            <a
              href="tel:918015525797"
              className="text-gray-100 my-3 flex items-center gap-x-2 text-[12px] sm:text-[13px] md:text-[13px] hover:text-black"
            >
              <MdOutlinePhoneAndroid className="text-[16px] md:text-[20px]" /> +91 8015525797
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#86a39f] md:pt-2 z-40 border-t border-gray-200">
        <div className="flex flex-col md:flex-row-reverse justify-between items-center w-full md:w-[85%] mx-auto px-2 py-3 md:py-5">
          {/* Social Icons */}
          <div className="flex flex-row gap-x-4 md:gap-x-8 mt-2">
            <a href="#" target="_blank" className={socialIconClass}>
              <FaSquareXTwitter className={socialIconStyle} />
            </a>
            <a
              href="https://www.instagram.com/lifeplusayushvaidhyasala"
              target="_blank"
              className={socialIconClass}
            >
              <FiInstagram className={socialIconStyle} />
            </a>
            <a href="#" target="_blank" className={socialIconClass}>
              <PiLinkedinLogoBold className={socialIconStyle} />
            </a>
            <a href="#" target="_blank" className={socialIconClass}>
              <LuFacebook className={socialIconStyle} />
            </a>
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
