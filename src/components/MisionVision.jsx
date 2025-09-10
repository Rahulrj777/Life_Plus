import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { FaRocket, FaLightbulb, FaLaptopCode } from "react-icons/fa"; // Import your icons
import { GoGoal } from "react-icons/go";
import { IoEarthOutline } from "react-icons/io5";
import { RiFundsLine } from "react-icons/ri";

const TiltCard = ({ icon, title, description }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(card, {
        rotationY: x / 10,
        rotationX: -y / 10,
        scale: 1.05, // Slight scale increase on hover
        transformPerspective: 1000,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotationY: 0,
        rotationX: 0,
        scale: 1, // Reset scale
        ease: "power2.out",
      });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="w-full md:w-[90%] mx-auto rounded-lg overflow-hidden cursor-pointer mb-8 bg-slate-100 shadow-md  px-3 py-2 md:py-5  font-[poppins]"
      style={{ perspective: "1000px" }}
    >
      <div className="flex justify-start items-center gap-x-2 md:gap-x-3">
        <div className="mb-2 md:mb-2 mt-2 text-[#a64c4f] text-[30px] md:text-[40px]">
          {icon}
        </div>
        <h3 className="text-[16px] md:text-[18px] font-semibold text-[#6d918c]">
          {title}
        </h3>
      </div>
      <div className="p-2 md:p-4">
        <p className="text-gray-600 opacity-75 text-[12px] md:text-[14px] font-[roboto] text-justify">
          {description}
        </p>
      </div>
    </div>
  );
};

const MisionVision = () => {
  const data = [
    {
      icon: <GoGoal />,
      title: "Our Purpose:",
      description:
        "To heal, empower, and transform lives by reviving ancient Siddha and Ayurvedic wisdom—offering natural, personalized healthcare that restores balance, boosts immunity, and nurtures the mind-body-spirit connection.",
    },
    {
      icon: <IoEarthOutline />,
      title: "Our Dream:",
      description:
        "To be the most trusted and holistic healing destination in Chennai, where tradition meets innovation, and every individual discovers the power of nature’s timeless medicine for sustainable wellness",
    },
    {
      icon: <RiFundsLine />,
      title: "Our Principles:",
      description:
        "We honor Siddha and Ayurveda with pure herbs and trusted care. With compassion, integrity, and innovation, we heal naturally, sustainably, and extend wellness beyond our clinic to the community.",
    },
  ];

  return (
    <div className="bg-gradient-to-br py-10 md:py-20 from-white via-gray-100 to-white ">
      <div className="w-full px-4 md:w-[85%] mx-auto grid grid-cols-1 md:grid-cols-3 sm:grid-cols-1 gap-1">
        {data.map((item, idx) => (
          <TiltCard
            key={idx}
            icon={item.icon}
            title={item.title}
            description={item.description}
            className="bg-black"
          />
        ))}
      </div>
    </div>
  );
};

export default MisionVision;
